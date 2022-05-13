from flask import Flask, request
import scrapper
from flask_restx import Resource, Api

app = Flask(__name__)

api = Api(app, version='1.0', title='Price Traker for AliExpress API',
    description='A simple API witch give you the price of the product url your give',
)

@api.route("/getPrice", methods=['GET'])
class route_get_price(Resource):
    @api.param('url', 'The url of the product on AliExpress', default="https://fr.aliexpress.com/item/4000262737817.html?spm=a2g0o.productlist.0.0.5c917b48Pc7Rrc&algo_pvid=c341731d-a6ed-41cc-8cac-a187efe74656&algo_exp_id=c341731d-a6ed-41cc-8cac-a187efe74656-11&pdp_ext_f=%7B%22sku_id%22%3A%2212000022064911537%22%7D&pdp_pi=-1%3B29.65%3B-1%3B-1%40salePrice%3BEUR%3Bsearch-mainSearch")
    def get(self):
        url = request.args.get('url', default = -1)
        status = 200
        if(url == -1):
            return "You need to provide an url in named param form url !"
            
        result = scrapper.get_price(url)

        if(result == -1):
            status = 404
            result = "No product found"

        return result, status

