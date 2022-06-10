import requests
from bs4 import BeautifulSoup
import re
import sys
import traceback
import logging
cookies = {'aep_usuc_f': 'site=fra&c_tp=EUR&region=FR&b_locale=fr_FR&ae_u_p_s=1&ups_u_t=&ups_d='}

def get_price(url):
    try:
        page = requests.get(url, cookies=cookies)
        soup = BeautifulSoup(page.content, "html.parser")
    except Exception as e:
        return "ERROR : The URL is not a valid URL !"
    if(is_page_contain_price(soup)):
        price = re.search(r"totalValue:.*\s(.*[0-9]*,[0-9]*)\"", str(soup)).group(1)
        title = re.search(r"\"spanishPlaza\".*title\":\"(.*) \| AliExpress\"", str(soup)).group(1)
        payload = {
            "product_name": title,
            "price": float(price.replace(",",".")) if price != None else -1
        }
        return payload
    else:
        return -1
    


def is_page_contain_price(soup):
    return re.search(r"totalValue:.*\s(.*[0-9]*,[0-9]*)\"", str(soup))