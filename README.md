# Product Tracker - Crawler de prix Amazon

## Technologies utilisées

​	J’ai réalisé un petit module **Node.JS** utilisant la librairie **Puppeteer** pour récupérer les informations qui nous sont utiles sur la page des produits.

En outils de développement, j’utilise également **Jest** pour les tests unitaires (TODO) et **Nodemon** pour recharger le code à chaud.

> *Dans le futur, j’utiliserai peut-être **Swagger** pour faire de ce module une «API» propre.*

## Construire et lancer le conteneur du scrapper

Ces commandes peuvent vous permettre d’utiliser le crawler :

- `docker build . -t tcrm/amazon-crawler:v1` pour construire le conteneur.
- `docker run --name "amazon-scrapper" -p 8080:5100 -d tcrm/amazon-crawler:v1` pour lancer le conteneur et le rendre accessible localement sur le port 8080.
- Vous pourrez ensuite lancer une requête par exemple sur `http://localhost:8080/getPrice?url=https%3A%2F%2Fwww.amazon.fr%2FNintendo-Switch-avec-paire-Rouge%2Fdp%2FB07WKNQ8JT` pour recevoir une réponse de ce style :
  ```json
  {
    "product_name": "Nintendo Switch avec paire de Joy-Con Rouge Néon et Bleu Néon",
    "price": "266,09€"
  }
  ```

## Notes

​	J’ai rédigé et synthétisé les recherches entreprises pour la création de ce module dans le document `./Notes et docs/Étude.md`.
