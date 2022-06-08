<?php

// Require composer autoloader
require __DIR__ . '/vendor/autoload.php';

include 'lib/MailSender.php';

// Create Router instance
$router = new \Bramus\Router\Router();

// Define routes
$router->get('/', function() {
    echo "Home page";

    if(extension_loaded("monogodb")){ 
        try {
            //$client = new MongoClient("mongodb://root:root@45.9.188.170:27017");
            
            //$collection = $client->test;
    
            $users_collection = $collection->users;
    
            echo "Connected";
    
        }
        catch (Throwable $e) {
            // catch throwables when the connection is not a success
            echo "Captured Throwable for connection : " . $e->getMessage() . PHP_EOL;
        }
    }else{
        echo "it's something else";
    }
});

// d62585b7bee6d03016234ca363fe1501
$router->post('/api/mail/send', function() {
    $key = "insset";

    
    if (md5($key) == $_POST['api_key']) {
        //print_r(md5($key));
        //print_r($_POST['api_key']);
        MailSender::send($_POST["email"], $_POST["subject"], $_POST["body"], $_POST["altbody"]);
    }
    else {
        echo "Invalide API Key";
    }
    
});

$router->set404(function() {
    header('HTTP/1.1 404 Not Found');
    echo "Cette page est introuvable !";
});


// Run it!
$router->run();