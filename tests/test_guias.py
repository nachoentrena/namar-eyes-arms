"""Integration checks against the running local site: python3 -m unittest discover -s tests."""
import json
import unittest
from urllib.request import urlopen
from bs4 import BeautifulSoup


class GuidesRules(unittest.TestCase):
    def test_cost_guide_publication_date(self):
        with urlopen("http://localhost:8080/guias/coste-importar-china-espana") as response:
            soup = BeautifulSoup(response.read(), "html.parser")
        schemas = [json.loads(s.text) for s in soup.select('script[type="application/ld+json"]')]
        article = next(a for a in schemas if a.get("@type") == "Article")
        self.assertEqual(article["datePublished"], "2026-11-05")

    def test_cost_guide_author(self):
        with urlopen("http://localhost:8080/guias/coste-importar-china-espana") as response:
            soup = BeautifulSoup(response.read(), "html.parser")
        schemas = [json.loads(s.text) for s in soup.select('script[type="application/ld+json"]')]
        article = next(a for a in schemas if a.get("@type") == "Article")
        self.assertEqual(article["author"]["name"], "Ignacio Entrena")
        self.assertEqual(article["author"]["jobTitle"], "Cofundador, NAMAR Global")

    def test_cost_guide_in_sitemap(self):
        from xml.etree import ElementTree
        with urlopen("http://localhost:8080/sitemap.xml") as response:
            root = ElementTree.fromstring(response.read())
        urls = [node.text for node in root.iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
        self.assertIn("https://www.namar-global.com/guias/coste-importar-china-espana", urls)

    def test_supplied_publication_date(self):
        with urlopen("http://localhost:8080/guias/verificar-proveedor-chino") as response:
            soup = BeautifulSoup(response.read(), "html.parser")
        articles = [json.loads(s.text) for s in soup.select('script[type="application/ld+json"]')]
        article = next(a for a in articles if a.get("@type") == "Article")
        self.assertEqual(article["datePublished"], "2026-11-10")

    def test_all_eight_categories_in_sitemap(self):
        from xml.etree import ElementTree
        with urlopen("http://localhost:8080/sitemap.xml") as response:
            root = ElementTree.fromstring(response.read())
        urls = [node.text for node in root.iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
        categories = [url for url in urls if "/guias/categoria/" in url]
        self.assertEqual(len(categories), 8)
        self.assertIn("https://www.namar-global.com/guias/categoria/proveedores", categories)


if __name__ == "__main__":
    unittest.main()