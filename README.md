# Product Tracker - Crawler de prix Boulanger

## Technologies utilisées

​	J’ai réalisé un petit module **Node.JS** utilisant la librairie **Puppeteer** pour récupérer les informations qui nous sont utiles sur la page des produits. J’utilise également **Express** pour avoir un serveur web répondant aux requêtes.

En outils de développement, j’utilise **Jest** pour les tests unitaires (TODO) et **Nodemon** pour recharger le code à chaud.

> *Dans le futur, j’utiliserai peut-être **Swagger**. pour avoir une doc d’API propre, bien que l’API soit très simpliste.*

## Utiliser le module

Ces commandes peuvent vous permettre d’utiliser le crawler :

- `npm run dev` pour lancer le crawler en dev (avec rechargement auto du code en cas de modif.).
- `npm run start` pour lancer le crawler en prod (sans rechargement auto).
