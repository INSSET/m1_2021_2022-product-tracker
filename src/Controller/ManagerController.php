<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Entity\Productprice;
use Doctrine\ORM\EntityManagerInterface as EntityManager;
use App\Entity\Product;
use App\Service\PriceService;
use App\Entity\Userproduct;

class ManagerController extends \Symfony\Bundle\FrameworkBundle\Controller\AbstractController
{
    #[Route('/getPrice', name: 'get_price')]
    public function index(Request $request,$app_key, EntityManager $entityManager, PriceService $price_service): \Symfony\Component\HttpFoundation\JsonResponse
    {
        $data = json_decode($request->getContent(), true);

          if (!isset($data['key']) || $data['key'] != $app_key) {
              return $this->json([
                  'error' => 'Invalid key'
              ]);
          }

    //    $price = $price_service->getPrice($data['productUrl'], $data['sellerId']);

        $product = $entityManager->find(Product::class, $data['productId']);

        $price = 1200;

        $productPrice = new Productprice();
        $productPrice->setDate(new \DateTime());
        $productPrice->setPrice($price);
        $productPrice->setIdproduct($product);

        $entityManager->persist($productPrice);

        try {
            $entityManager->flush();
        } catch (\Exception $e) {
            return $this->json([
                'error' => $e->getMessage()
            ]);
        }

        return $this->json(
            [
                'success' => true,
                'price' => $price
            ]
        );
    }

    #[Route('/test', name: 'test')]
    public function test( EntityManager $entityManager): \Symfony\Component\HttpFoundation\Response
    {
        $user_product = $entityManager->getRepository(Userproduct::class)->findAll();

        dd($user_product);
    }
}