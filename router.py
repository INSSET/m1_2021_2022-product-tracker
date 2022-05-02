from flask import Flask
import scrapper
from flask import request

app = Flask(__name__)

@app.route("/getPrice")
def route_get_price():
    url = request.args.get('url', default = -1)
    if(url == -1):
        return "You need to provide an url in named param form url !"
    result = scrapper.get_price(url)
    return str(result)