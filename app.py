from flask import Flask, request
from flask_restx import Resource, Api
from scrapper import get_price

app = Flask(__name__)

api = Api(app, version='1.0', title='Price Traker for AliExpress API',
    description='A simple API witch give you the price of the product url your give',
)

@api.route("/getPrice", methods=['GET'])
class RouteGetPrice(Resource):
    @api.param('url', 'The url of the product on AliExpress',
        default="https://fr.aliexpress.com/item/4000262737817.html")
    def get(self):
        url = request.args.get('url', default = -1)
        status = 200
        if url == -1:
            return "You need to provide an url in named param form url !"

        result = get_price(url)

        if result == -1:
            status = 404
            result = "No product found"

        return result, status


if __name__ == "__main__":
    app.run(debug=True)