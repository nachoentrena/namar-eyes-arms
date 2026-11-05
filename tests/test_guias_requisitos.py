"""Publication rules for the supplied samples and customs guides."""
import json
import unittest
from urllib.request import urlopen
from xml.etree import ElementTree
from bs4 import BeautifulSoup


class RequirementsGuidesRules(unittest.TestCase):
    slugs = ("muestras-desde-china", "requisitos-importar-colombia", "marcado-ce-espana")

    def articles(self):
        for slug in self.slugs:
            with urlopen(f"http://localhost:8080/guias/{slug}") as response:
                soup = BeautifulSoup(response.read(), "html.parser")
            schemas = [json.loads(s.text) for s in soup.select('script[type="application/ld+json"]')]
            yield slug, next(a for a in schemas if a.get("@type") == "Article")

    def test_publication_date(self):
        for slug, article in self.articles():
            with self.subTest(slug=slug):
                self.assertEqual(article["datePublished"], "2026-11-05")

    def test_author(self):
        for slug, article in self.articles():
            with self.subTest(slug=slug):
                self.assertEqual(article["author"]["name"], "Ana María González")
                self.assertEqual(article["author"]["jobTitle"], "Directora de Operaciones de Importación, NAMAR Global")

    def test_sitemap(self):
        with urlopen("http://localhost:8080/sitemap.xml") as response:
            root = ElementTree.fromstring(response.read())
        urls = [node.text for node in root.iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
        for slug in self.slugs:
            with self.subTest(slug=slug):
                self.assertIn(f"https://www.namar-global.com/guias/{slug}", urls)


if __name__ == "__main__":
    unittest.main()