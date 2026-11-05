"""Integration checks against the running local site: python3 -m unittest discover -s tests."""
import json
import unittest
from urllib.request import urlopen
from bs4 import BeautifulSoup


class GuidesRules(unittest.TestCase):
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