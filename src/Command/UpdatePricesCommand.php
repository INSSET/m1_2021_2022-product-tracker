<?php

namespace App\Command;

use \Symfony\Component\Console\Input\InputInterface;
use \Symfony\Component\Console\Output\OutputInterface;
use Doctrine\ORM\EntityManagerInterface as EntityManager;
use Symfony\Component\Console\Attribute\AsCommand;
use App\Entity\Product;
use App\Entity\Productprice;
use App\Service\PriceService;
use Psr\Log\LoggerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use App\Entity\Userproduct;

#[AsCommand(
    name: 'app:update-prices',
    description: 'Update prices stored in Database.',
    hidden: false,
    aliases: ['app:update-prices']
)]
class UpdatePricesCommand extends \Symfony\Component\Console\Command\Command
{
    // the name of the command (the part after "bin/console")
    protected static $defaultName = 'app:update-prices';
    private $entityManager;
    private $logger;
    private $client;



    public function __construct(EntityManager $entityManager, PriceService $priceService, LoggerInterface $logger, HttpClientInterface $client)
    {
        $this->entityManager = $entityManager;
        $this->priceService = $priceService;
        $this->logger = $logger;
        $this->client = $client;
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $products = $this->entityManager->getRepository(Product::class)->findAll();


        foreach ($products as $product) {
            $output->writeln('Updating prices for product: ' . $product->getNom());
          //  $updated_price = $this->priceService->getPrice($product->getUrl(), $product->getIdseller()->getId());
            $updated_price = 0;
            $productPrice = new Productprice();
            $productPrice->setDate(new \DateTime());
            $productPrice->setPrice($updated_price);
            $productPrice->setIdproduct($product);

            if ($product->getTargetprice() !== null && $product->getTargetprice() >= $updated_price) {
                $output->writeln('Price is lower than target price');
                $user_product = $this->entityManager->getRepository(Userproduct::class)->findOneBy(['idProduct' => $product->getIdproduct()]);

                $this->client->request(
                    'POST',
                    'http://localhost:3000/mail/send/'.   $user_product->getUserUuid(),
                );

            }

            $this->entityManager->persist($productPrice);


        }

        try {
            $this->entityManager->flush();
            $output->writeln('Prices updated for all : ' . sizeof($products));
            return 0;
        } catch (\Exception $e) {
            $output->writeln('Something went wrong: ' . $e->getMessage());
            return 1;
        }
    }
}