# Project Product Tracker

# Description

Le projet consiste à créer une application qui permet de tracker les prix de produit.

Voici un schéma récapitulatif de l’architecture de l’application :

![Untitled](https://user-images.githubusercontent.com/55629825/158229157-238733f7-689a-45aa-aa2a-7847829a3432.png)

# Sprint 1

- Choix des technos → **TOUS**
- [DB] Choisir l'hébergement → **TOUS**
- [DB] créer le modèle de données → **TOUS**
- [DB] Add des fixtures → **Mohammed khechini**
- [FRONT] Créer une maquette des différentes pages du site → **Esteban**
- [FRONT] Initialisation du projet WEB Front → **Samy**
- [AUTH] initialisation du projet auth → **Mohammed BC, Mohammed Salih**
- [BACK] Initialisation du projet WEB API → **Nicolas**
- [INIT] Scrapper AMAZON développement d’un cas de test avec une url en dure → **Théo**

# Sprint 2

- [FRONT | AUTH | BACK] Page de Login et Register fonctionnelles **(Samy + Nicolas)**
- [SCRAPPER] Scrapper AliExpress **(Esteban)**
- [SCRAPPPER] Scrapper Boulanger **(Theo)**
- [AUTH] Passer le token dans le header (route /verify) (**Mohammed Salih)**
- [SCRAPPER MANAGER] Développer l’api scrapper manager qui tous les X temps va fetch la table produit et va récupérer les dernières prix et les insérer en base (de façon asynchrone de préférence) **(Mohammed BC)**
- [FRONT] Créer le Dashboard qui liste les produits traqués **(SAMY)**
- [DEPLOYEMENT] Deployer tous les pods dans un cluster Kubernetes + creer la config (**Mohammed Salih)**
- [SQL] Creer les users SQL pour les différents services **(Mohammed khechini)**
- [ENV] Regarder pour créer un “Vault” un env qui est commun a toutes les application pour éviter la redondance du DB_HOST par exemple. **(LIBRE)**
- [NOTIFIER] Creer le projet Notifier et commencer a le coder **(LIBRE)**
