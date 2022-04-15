import unittest
import scrapper

class TestScrapperMethods(unittest.TestCase):
    def test_get_price_with_existing_item(self):
        url =  'https://fr.aliexpress.com/item/4000262737817.html?spm=a2g0o.productlist.0.0.5c917b48Pc7Rrc&algo_pvid=c341731d-a6ed-41cc-8cac-a187efe74656&algo_exp_id=c341731d-a6ed-41cc-8cac-a187efe74656-11&pdp_ext_f=%7B%22sku_id%22%3A%2212000022064911537%22%7D&pdp_pi=-1%3B29.65%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch'
        self.assertTrue(scrapper.get_price(url) > 0)


    def test_get_price_with_non_existing_item(self):
        url =  'https://fr.aliexpress.com/item/40002627378247857.html?spm=a2g0o.productlist.0.0.5c917b48Pc7Rrc&algo_pvid=c341731d-a6ed-41cc-8cac-a187efe74656&algo_exp_id=c341731d-a6ed-41cc-8cac-a187efe74656-11&pdp_ext_f=%7B%22sku_id%22%3A%2212000022064911537%22%7D&pdp_pi=-1%3B29.65%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch'
        self.assertTrue(scrapper.get_price(url) == -1)

    def test_get_price_spam_request(self):
        url =  'https://fr.aliexpress.com/item/4000262737817.html?spm=a2g0o.productlist.0.0.5c917b48Pc7Rrc&algo_pvid=c341731d-a6ed-41cc-8cac-a187efe74656&algo_exp_id=c341731d-a6ed-41cc-8cac-a187efe74656-11&pdp_ext_f=%7B%22sku_id%22%3A%2212000022064911537%22%7D&pdp_pi=-1%3B29.65%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch'
        for i in range(50):
            self.assertTrue(scrapper.get_price(url) > 0)


if __name__ == '__main__':
    unittest.main()