# Product Tracker - Crawler de prix Boulanger

## Technologies utilisées

​	J’ai réalisé un petit module **Node.JS** utilisant la librairie **Puppeteer** pour récupérer les informations qui nous sont utiles sur la page des produits. J’utilise également **Express** pour avoir un serveur web répondant aux requêtes.

En outils de développement, j’utilise **Jest** pour les tests unitaires (TODO) et **Nodemon** pour recharger le code à chaud.

> *Dans le futur, j’utiliserai peut-être **Swagger**. pour avoir une doc d’API propre, bien que l’API soit très simpliste.*

## Construire et lancer le conteneur du scrapper

Ces commandes peuvent vous permettre d’utiliser le crawler :

- `docker build . -t tcrm/boulanger-crawler:v1` pour construire le conteneur.
- `docker run --name "boulanger-scrapper" -p 8080:5000 -d tcrm/boulanger-crawler:v1` pour lancer le conteneur et le rendre accessible localement sur le port 8080.
- Vous pourrez ensuite lancer une requête par exemple sur `http://localhost:8080/getPrice?url=https%3A%2F%2Fwww.boulanger.com%2Fref%2F1119688` pour recevoir une réponse de ce style :
  ```json
  {
  	"product_name": "Platine vinyle Audio technica AT-LP60XBK",
  	"price": "149,00€"
  }
  ```

  
