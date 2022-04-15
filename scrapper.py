import requests
from bs4 import BeautifulSoup
import re

txt = "The rain in Spain"
def get_price(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    if(is_page_contain_price(soup)):
        price = re.search(r"totalValue:.*\s(.*[0-9]*,[0-9]*)\"", str(soup)).group(1)
        return float(price.replace(",",".")) if price != None else -1
    else:
        return -1


def is_page_contain_price(soup):
    return re.search(r"totalValue:.*\s(.*[0-9]*,[0-9]*)\"", str(soup))