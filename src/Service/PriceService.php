<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class PriceService
{
    CONST URL_BOULANGER = 'http://boulanger-crawler-service:5000';
    CONST URL_ALIEXPRESS = 'http://aliexpress-crawler-service:5000';
    const URL_AMAZON = 'http://amazon-crawler-service:5100';



    private HttpClientInterface $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function getBoulangerPrice(string $url)
    {
            $endpoint = sprintf('%s/getPrice/?url=%s', self::URL_BOULANGER, $url);

             return $price = $this->client->request('GET', $endpoint);
    }

    public function getAliExpressPrice(string $url)
    {
        $endpoint = sprintf('%s/getPrice/?url=%s', self::URL_ALIEXPRESS, $url);

        return $price = $this->client->request('GET', $endpoint);
    }

    public function getAmazonPrice(string $url)
    {
        $endpoint = sprintf('%s/getPrice/?url=%s', self::URL_AMAZON, $url);

        return $price = $this->client->request('GET', $endpoint);
    }


    public function getPrice(string $url, string $sellerId): float
    {
        switch ($sellerId){
            case '1':
                $price = $this->getBoulangerPrice($url);
                break;
            case '2':
                $price = $this->getAliExpressPrice($url);
                break;
            case '3':
                $price = $this->getAmazonPrice($url);
                break;

        }
    }

}