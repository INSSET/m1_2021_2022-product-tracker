<?php

// Require composer autoloader
require __DIR__ . '/vendor/autoload.php';

include 'lib/MailSender.php';

// Create Router instance
$router = new \Bramus\Router\Router();

// Define routes
$router->get('/', function() {
    echo "Home page";
});




// d62585b7bee6d03016234ca363fe1501
$router->post('/api/mail/send', function() {
    $key = "insset";

    if (md5($key) == $_POST['api_key']) {
        MailSender::send($_POST["email"]);
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