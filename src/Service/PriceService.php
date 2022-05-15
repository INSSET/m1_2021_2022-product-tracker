<?php

namespace App\Service;

class PriceService
{
    //TODO API entry..
    CONST API_URL = 'tobedetermined.com';
    CONST API_KEY = 'tobedetermined';

    public function getAmazonPrice(string $url): float
    {
        //    $endpoint = sprintf('%s/getPrice/%s', self::API_URL, $data['productUrl']);

        /*     $price = $this->client->request('GET', $endpoint, [
                 'headers' => [
                     'X-API-KEY' => self::API_KEY
                 ]
             ]);*/
    }

    public function getAliExpressPrice(string $url): float
    {
        //    $endpoint = sprintf('%s/getPrice/%s', self::API_URL, $data['productUrl']);

        /*     $price = $this->client->request('GET', $endpoint, [
                 'headers' => [
                     'X-API-KEY' => self::API_KEY
                 ]
             ]);*/
    }

    public function getPrice(string $url, string $sellerId): float
    {
        switch ($sellerId){
            case '1':
                $price = $this->getAmazonPrice($url);
                break;
            case '2':
                $price = $this->getAliExpressPrice($url);
                break;
        }
    }
}