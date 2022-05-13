<?php

// Require composer autoloader
require __DIR__ . '/vendor/autoload.php';

// Create Router instance
$router = new \Bramus\Router\Router();

// Define routes
$router->get('/', function() {
    echo "Home page";
});

$router->post('/api/mail/send', function() {

    echo "Send";
});

$router->set404(function() {
    header('HTTP/1.1 404 Not Found');
    echo "Cette page est introuvable !";
});


// Run it!
$router->run();