<?php

namespace App\Tests;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use http\Client;
use Symfony\Component\HttpClient\HttpClient;

class AppTests extends \Symfony\Bundle\FrameworkBundle\Test\KernelTestCase
{


    public function testGetPrice()
    {
        $client = HttpClient::create();

        $response = $client->request('POST', 'http://localhost:8000/getPrice', [
            'body' => json_encode([
                'key' => '8ac7a909a23e4801c4c59cc5d828bc07',
                'sellerId' => '1',
                'productId' => '1',
                'productUrl' => 'https://www.amazon.com/dp/B073QJZQKW/ref=cm_sw_r_cp_dp_U_QX_QX_QX_QX?_encoding=UTF8&psc=1&refRID=P2QWYQXQXQXQXQXQXQXQX'
            ]),
            'headers' => [
                'Content-Type' => 'application/json'
            ]
        ]);

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals('{"success":true,"price":1200}', $response->getContent());
    }
}