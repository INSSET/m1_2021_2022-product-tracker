# Product Tracker ➡ Amazon products crawler

[TOC]

----------

## Techno à utiliser

​	Texte ici

 

## API / source de données à utiliser

### API Amazon

​	L’API d’Amazon est compliquée d’accès. En effet, il faut avoir un compte partenaire pour y avoir accès, c’est à dire qu’il faut renseigner à peu près toutes ses informations privées, leur donner un lien du site sur lequel nous utiliserons l’API... De plus, paraît-il que même après ces informations données, ils peuvent être très incommodants quant à leurs vérifications de l’usage de l’API...

J’en conclus donc qu’il pourrait être une perte de temps de développer en utilisant l’API officielle d’Amazon car non seulement on n’est aucunement sûrs de pouvoir débloquer l’accès à ladite API, mais en plus nous pourrions finir par être bannis plus tard car un tel usage de l’API pourrait être interdit par les conditions d’utilisation, ce qui réduit à néant l’usage du développement du logiciel de récupération des données d’Amazon...



Quelques sources :

https://elfsight.com/blog/2020/05/how-to-use-amazon-ecommerce-api-examples-and-pricing/

https://stackoverflow.com/questions/18095879/is-there-amazon-com-api-for-products



### RainforestAPI

​	On peut utiliser **[RainforestAPI](https://app.rainforestapi.com/)** pour récupérer des informations sur les produits (dont leur prix), étant-donné que l’API d’Amazon est compliquée d’utilisation (il faut un compte de partenaire pour y avoir accès). Celle-ci sortira les mêmes informations dans un JSON bien présenté et facile à utiliser.

#### Credentials

- E-mail : `theo.cramez@etud.u-picardie.fr`
- Mot de passe : `ProductTracker12345`
- Clé API : `B843F1826E9D47E28F6AC1C5DADF870C`

#### Tests appel API

- Product
	Appel : `https://api.rainforestapi.com/request?api_key=B843F1826E9D47E28F6AC1C5DADF870C&type=product&output=json&language=fr_FR&url=https%3A%2F%2Fwww.amazon.fr%2FKingston-SSD-A400-240GB-Disque-SATA%2Fdp%2FB01N5IB20Q`

  <details>
  <summary>Réponse</summary>
	    {
    "request_info": {
	    "success": true,
	    "credits_used": 2,
	    "credits_remaining": 98,
	    "credits_used_this_request": 1
	  },
	  "request_metadata": {
	    "created_at": "2022-03-27T18:38:50.732Z",
	    "processed_at": "2022-03-27T18:38:55.925Z",
	    "total_time_taken": 5.19,
	    "amazon_url": "https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q?language=fr_FR"
	  },
	  "request_parameters": {
	    "type": "product",
	    "output": "json",
	    "language": "fr_FR",
	    "url": "https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q"
	  },
	  "product": {
	    "title": "Kingston A400 SSD SSD Interne 2.5\" SATA Rev 3.0, 240GB - SA400S37/240G 240Go 2.5\"",
	    "search_alias": {
	      "title": "Informatique",
	      "value": "computers"
	    },
	    "title_excluding_variant_name": "Kingston A400 SSD SSD Interne 2.5\" SATA Rev 3.0, 240GB - SA400S37/240G",
	    "keywords": "Kingston,A400,SSD,SSD,Interne,2.5\",SATA,Rev,3.0,,240GB,-,SA400S37/240G",
	    "keywords_list": [
	      "Kingston",
	      "A400",
	      "Interne",
	      "2.5\"",
	      "SATA",
	      "240GB",
	      "SA400S37/240G"
	    ],
	    "asin": "B01N5IB20Q",
	    "parent_asin": "B09VCPZ94L",
	    "link": "https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q",
	    "brand": "Kingston",
	    "protection_plans": [
	      {
	        "asin": "B09DD4H6ZM",
	        "title": "2-ans assurance dommage accidentel",
	        "price": {
	          "symbol": "€",
	          "currency": "EUR",
	          "value": 1.99,
	          "raw": "€1,99"
	        }
	      },
	      {
	        "asin": "B09DD24Z65",
	        "title": "3-ans assurance dommage accidentel",
	        "price": {
	          "symbol": "€",
	          "currency": "EUR",
	          "value": 2.89,
	          "raw": "€2,89"
	        }
	      }
	    ],
	    "variants": [
	      {
	        "asin": "B083WNX8H6",
	        "title": "480Go M.2",
	        "is_current_product": false,
	        "link": "https://www.amazon.fr/dp/B083WNX8H6?th=1&psc=1",
	        "dimensions": [
	          {
	            "name": "Nom du motif",
	            "value": "480Go"
	          },
	          {
	            "name": "Style",
	            "value": "M.2"
	          }
	        ],
	        "main_image": "https://m.media-amazon.com/images/I/7113jVBCyWL._AC_SL1500_.jpg",
	        "images": [
	          {
	            "variant": "MAIN",
	            "link": "https://m.media-amazon.com/images/I/7113jVBCyWL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT01",
	            "link": "https://m.media-amazon.com/images/I/71ZGQh+PENL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT02",
	            "link": "https://m.media-amazon.com/images/I/71PczIbRjQL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT03",
	            "link": "https://m.media-amazon.com/images/I/71HgPihwhKL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT04",
	            "link": "https://m.media-amazon.com/images/I/51zvLYUUs0L._AC_.jpg"
	          }
	        ]
	      },
	      {
	        "asin": "B07P22T3VD",
	        "title": "120Go M.2",
	        "is_current_product": false,
	        "link": "https://www.amazon.fr/dp/B07P22T3VD?th=1&psc=1",
	        "dimensions": [
	          {
	            "name": "Nom du motif",
	            "value": "120Go"
	          },
	          {
	            "name": "Style",
	            "value": "M.2"
	          }
	        ],
	        "main_image": "https://m.media-amazon.com/images/I/7113jVBCyWL._AC_SL1500_.jpg",
	        "images": [
	          {
	            "variant": "MAIN",
	            "link": "https://m.media-amazon.com/images/I/7113jVBCyWL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT01",
	            "link": "https://m.media-amazon.com/images/I/71ZGQh+PENL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT02",
	            "link": "https://m.media-amazon.com/images/I/614IgYQ9kcL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT03",
	            "link": "https://m.media-amazon.com/images/I/81PKYcIp9dL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT04",
	            "link": "https://m.media-amazon.com/images/I/51zvLYUUs0L._AC_.jpg"
	          }
	        ]
	      },
	      {
	        "asin": "B07P22RK1G",
	        "title": "240Go M.2",
	        "is_current_product": false,
	        "link": "https://www.amazon.fr/dp/B07P22RK1G?th=1&psc=1",
	        "dimensions": [
	          {
	            "name": "Nom du motif",
	            "value": "240Go"
	          },
	          {
	            "name": "Style",
	            "value": "M.2"
	          }
	        ],
	        "main_image": "https://m.media-amazon.com/images/I/6174p11MPnL._AC_SL1500_.jpg",
	        "images": [
	          {
	            "variant": "MAIN",
	            "link": "https://m.media-amazon.com/images/I/6174p11MPnL._AC_SL1500_.jpg"
	          }
	        ]
	      },
	      {
	        "asin": "B01N5IB20Q",
	        "title": "240Go 2.5\"",
	        "is_current_product": true,
	        "link": "https://www.amazon.fr/dp/B01N5IB20Q?th=1&psc=1",
	        "dimensions": [
	          {
	            "name": "Nom du motif",
	            "value": "240Go"
	          },
	          {
	            "name": "Style",
	            "value": "2.5\""
	          }
	        ],
	        "main_image": "https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg",
	        "images": [
	          {
	            "variant": "MAIN",
	            "link": "https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT01",
	            "link": "https://m.media-amazon.com/images/I/81vCejH6FxL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT02",
	            "link": "https://m.media-amazon.com/images/I/912Ya5k32eL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT03",
	            "link": "https://m.media-amazon.com/images/I/21V37j3qvXL._AC_.jpg"
	          },
	          {
	            "variant": "PT04",
	            "link": "https://m.media-amazon.com/images/I/71OXvN9FwNL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT05",
	            "link": "https://m.media-amazon.com/images/I/81PijwOLSWL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT06",
	            "link": "https://m.media-amazon.com/images/I/61b3CS-YmTL._AC_SL1500_.jpg"
	          }
	        ]
	      },
	      {
	        "asin": "B079XC5PVV",
	        "title": "960Go 2.5\"",
	        "is_current_product": false,
	        "link": "https://www.amazon.fr/dp/B079XC5PVV?th=1&psc=1",
	        "dimensions": [
	          {
	            "name": "Nom du motif",
	            "value": "960Go"
	          },
	          {
	            "name": "Style",
	            "value": "2.5\""
	          }
	        ],
	        "main_image": "https://m.media-amazon.com/images/I/81kVu+dAPTL._AC_SL1500_.jpg",
	        "images": [
	          {
	            "variant": "MAIN",
	            "link": "https://m.media-amazon.com/images/I/81kVu+dAPTL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT01",
	            "link": "https://m.media-amazon.com/images/I/71sMj8si8OL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT02",
	            "link": "https://m.media-amazon.com/images/I/81X90oh0f7L._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT03",
	            "link": "https://m.media-amazon.com/images/I/51SUJHZAedL._AC_SL1024_.jpg"
	          },
	          {
	            "variant": "PT04",
	            "link": "https://m.media-amazon.com/images/I/51w80o6koML._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT05",
	            "link": "https://m.media-amazon.com/images/I/81PijwOLSWL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT06",
	            "link": "https://m.media-amazon.com/images/I/71ClfyCN10L._AC_SL1500_.jpg"
	          }
	        ]
	      },
	      {
	        "asin": "B07YQJSGWY",
	        "title": "1.92To 2.5\"",
	        "is_current_product": false,
	        "link": "https://www.amazon.fr/dp/B07YQJSGWY?th=1&psc=1",
	        "dimensions": [
	          {
	            "name": "Nom du motif",
	            "value": "1.92To"
	          },
	          {
	            "name": "Style",
	            "value": "2.5\""
	          }
	        ],
	        "main_image": "https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg",
	        "images": [
	          {
	            "variant": "MAIN",
	            "link": "https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT01",
	            "link": "https://m.media-amazon.com/images/I/81vCejH6FxL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT02",
	            "link": "https://m.media-amazon.com/images/I/912Ya5k32eL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT03",
	            "link": "https://m.media-amazon.com/images/I/21xX4tzOqKL._AC_.jpg"
	          },
	          {
	            "variant": "PT04",
	            "link": "https://m.media-amazon.com/images/I/71bQxpUeXkL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT05",
	            "link": "https://m.media-amazon.com/images/I/81PijwOLSWL._AC_SL1500_.jpg"
	          }
	        ]
	      },
	      {
	        "asin": "B01N6JQS8C",
	        "title": "120Go 2.5\"",
	        "is_current_product": false,
	        "link": "https://www.amazon.fr/dp/B01N6JQS8C?th=1&psc=1",
	        "dimensions": [
	          {
	            "name": "Nom du motif",
	            "value": "120Go"
	          },
	          {
	            "name": "Style",
	            "value": "2.5\""
	          }
	        ],
	        "main_image": "https://m.media-amazon.com/images/I/81Ey1ozqOAL._AC_SL1500_.jpg",
	        "images": [
	          {
	            "variant": "MAIN",
	            "link": "https://m.media-amazon.com/images/I/81Ey1ozqOAL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT01",
	            "link": "https://m.media-amazon.com/images/I/71iFq9fz1ZL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT02",
	            "link": "https://m.media-amazon.com/images/I/91CLm+jOmWL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT03",
	            "link": "https://m.media-amazon.com/images/I/210UVB9zL0L._AC_.jpg"
	          },
	          {
	            "variant": "PT04",
	            "link": "https://m.media-amazon.com/images/I/712x9WrNF+L._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT05",
	            "link": "https://m.media-amazon.com/images/I/81FKTaS1w+L._AC_SL1500_.jpg"
	          }
	        ]
	      },
	      {
	        "asin": "B01N0TQPQB",
	        "title": "480Go 2.5\"",
	        "is_current_product": false,
	        "link": "https://www.amazon.fr/dp/B01N0TQPQB?th=1&psc=1",
	        "dimensions": [
	          {
	            "name": "Nom du motif",
	            "value": "480Go"
	          },
	          {
	            "name": "Style",
	            "value": "2.5\""
	          }
	        ],
	        "main_image": "https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg",
	        "images": [
	          {
	            "variant": "MAIN",
	            "link": "https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT01",
	            "link": "https://m.media-amazon.com/images/I/81vCejH6FxL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT02",
	            "link": "https://m.media-amazon.com/images/I/912Ya5k32eL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT03",
	            "link": "https://m.media-amazon.com/images/I/21ys6wDn1NL._AC_.jpg"
	          },
	          {
	            "variant": "PT04",
	            "link": "https://m.media-amazon.com/images/I/81OB7lpfnzL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT05",
	            "link": "https://m.media-amazon.com/images/I/81PijwOLSWL._AC_SL1500_.jpg"
	          },
	          {
	            "variant": "PT06",
	            "link": "https://m.media-amazon.com/images/I/61b3CS-YmTL._AC_SL1500_.jpg"
	          }
	        ]
	      }
	    ],
	    "variant_asins_flat": "B083WNX8H6,B07P22T3VD,B07P22RK1G,B01N5IB20Q,B079XC5PVV,B07YQJSGWY,B01N6JQS8C,B01N0TQPQ",
	    "documents": [
	      {
	        "name": "Notice technique (PDF)",
	        "link": "https://m.media-amazon.com/images/I/71EqZVBAOEL.pdf"
	      },
	      {
	        "name": "Guide de l’utilisateur (PDF)",
	        "link": "https://m.media-amazon.com/images/I/71R0PjUGmpL.pdf"
	      }
	    ],
	    "categories": [
	      {
	        "name": "Informatique",
	        "link": "https://www.amazon.fr/informatique-ordinateurs-imprimantes-r%C3%A9seaux-composants/b/ref=dp_bc_aui_C_1?ie=UTF8&node=340858031",
	        "category_id": "340858031"
	      },
	      {
	        "name": "Mémoire",
	        "link": "https://www.amazon.fr/b/ref=dp_bc_aui_C_2?ie=UTF8&node=17414957031",
	        "category_id": "17414957031"
	      },
	      {
	        "name": "Mémoire interne",
	        "link": "https://www.amazon.fr/b/ref=dp_bc_aui_C_3?ie=UTF8&node=14076178031",
	        "category_id": "14076178031"
	      },
	      {
	        "name": "SSD",
	        "link": "https://www.amazon.fr/composant-PC-SSD-internes/b/ref=dp_bc_aui_C_4?ie=UTF8&node=430354031",
	        "category_id": "430354031"
	      }
	    ],
	    "description": "DESCRIPTION DU PRODUIT \nDESCRIPTION DU PRODUIT\nLe SSD A400 est un disque à semi-conducteurs d'entrée de gamme, qui supporte une gestion multi-tâches ultra réactive, offre des performances plus élevées, et des vitesses 10 fois supérieures à celle d'un disque dur rotatif à 7200 tr/mn. \n\nCONTENU DU COFFRET\n1 x 240GB SSD",
	    "a_plus_content": {
	      "has_a_plus_content": true,
	      "has_brand_story": true,
	      "brand_story": {
	        "hero_image": "https://m.media-amazon.com/images/S/aplus-media/vc/d1183fb1-57ec-45a0-8bcb-911b260e0f12._CR0,2,977,302_PT0_SX970__.jpg",
	        "images": [
	          "https://m.media-amazon.com/images/S/aplus-media/vc/d1183fb1-57ec-45a0-8bcb-911b260e0f12._CR0,2,977,302_PT0_SX970__.jpg"
	        ]
	      },
	      "third_party": true
	    },
	    "sub_title": {
	      "text": "Visiter la boutique Kingston",
	      "link": "https://www.amazon.fr/stores/KingstonTechnology/page/A3C64D82-CD6A-4C74-8E89-ABD76FAE809A?ref_=ast_bln"
	    },
	    "amazons_choice": {
	      "keywords": "ssd",
	      "link": "https://www.amazon.fr/s/ref=choice_dp_b?keywords=ssd"
	    },
	    "rating": 4.7,
	    "rating_breakdown": {
	      "five_star": {
	        "percentage": 80,
	        "count": 102048
	      },
	      "four_star": {
	        "percentage": 15,
	        "count": 19134
	      },
	      "three_star": {
	        "percentage": 3,
	        "count": 3826
	      },
	      "two_star": {
	        "percentage": 1,
	        "count": 1275
	      },
	      "one_star": {
	        "percentage": 2,
	        "count": 2551
	      }
	    },
	    "ratings_total": 127560,
	    "reviews_total": 127560,
	    "main_image": {
	      "link": "https://m.media-amazon.com/images/I/91RL+MhTWbL.jpg"
	    },
	    "images": [
	      {
	        "link": "https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg",
	        "variant": "MAIN"
	      },
	      {
	        "link": "https://m.media-amazon.com/images/I/81vCejH6FxL._AC_SL1500_.jpg",
	        "variant": "PT01"
	      },
	      {
	        "link": "https://m.media-amazon.com/images/I/912Ya5k32eL._AC_SL1500_.jpg",
	        "variant": "PT02"
	      },
	      {
	        "link": "https://m.media-amazon.com/images/I/21V37j3qvXL._AC_.jpg",
	        "variant": "PT03"
	      },
	      {
	        "link": "https://m.media-amazon.com/images/I/71OXvN9FwNL._AC_SL1500_.jpg",
	        "variant": "PT04"
	      },
	      {
	        "link": "https://m.media-amazon.com/images/I/81PijwOLSWL._AC_SL1500_.jpg",
	        "variant": "PT05"
	      },
	      {
	        "link": "https://m.media-amazon.com/images/I/61b3CS-YmTL._AC_SL1500_.jpg",
	        "variant": "PT06"
	      }
	    ],
	    "images_count": 7,
	    "videos": [
	      {
	        "duration_seconds": 20,
	        "width": 854,
	        "height": 480,
	        "link": "https://m.media-amazon.com/images/S/vse-vms-transcoding-artifact-eu-west-1-prod/5c5b23aa-bdfa-4892-87ff-1d6d32388eb1/default.jobtemplate.mp4.480.mp4",
	        "thumbnail": "https://m.media-amazon.com/images/I/51XR5c2DrOL.SX522_.jpg",
	        "is_hero_video": false,
	        "variant": "MAIN",
	        "group_id": "IB_G1",
	        "group_type": "videos_for_this_product",
	        "title": "Kingston A400 SSD SA400S37/120G"
	      }
	    ],
	    "videos_count": 1,
	    "is_bundle": false,
	    "feature_bullets": [
	      "Démarrages, chargements et transferts de fichiers plus rapides",
	      "Plus fiable et plus durable qu'un disque dur",
	      "Plusieurs capacités avec assez d'espace pour des applications ou remplacer un disque dur"
	    ],
	    "feature_bullets_count": 3,
	    "feature_bullets_flat": "Plusieurs capacités avec assez d'espace pour des applications ou remplacer un disque dur. Plus fiable et plus durable qu'un disque dur. Démarrages, chargements et transferts de fichiers plus rapides.",
	    "attributes": [
	      {
	        "name": "Marque",
	        "value": "Kingston"
	      },
	      {
	        "name": "Facteur de forme",
	        "value": "6,35 cm (2,5 pouce)"
	      },
	      {
	        "name": "Taille de la mémoire de l'ordinateur",
	        "value": "240 Go"
	      },
	      {
	        "name": "Compatibilité du périphérique",
	        "value": "Ordinateur"
	      },
	      {
	        "name": "Débit de transfert de données",
	        "value": "350 Megabits Per Second"
	      }
	    ],
	    "top_reviews": [
	      {
	        "id": "R2WEIXP1XCZMDO",
	        "title": "Un rapport qualité/prix défiant toute concurrence",
	        "body": "Le disque ne fait pas du 500/500 en lecture ecriture mais 500/300 donc parfait pour un PC assez ancien qui dispose d'un ancien BUS SATA. Le prix est agressif. Seul hic sur lequel je n'ai aucun retour... la fiabilité... à voir dans le temps... Je recommande donc malgré tout !En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">                <span>  Le disque ne fait pas du 500/500 en lecture ecriture mais 500/300 donc parfait pour un PC assez ancien qui dispose d'un ancien BUS SATA.<br>Le prix est agressif.<br>Seul hic sur lequel je n'ai aucun retour... la fiabilité... à voir dans le temps...<br>Je recommande donc malgré tout ! </span>   </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "link": "https://www.amazon.fr/gp/customer-reviews/R2WEIXP1XCZMDO/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01N5IB20Q",
	        "rating": 4,
	        "date": {
	          "raw": "Commenté en France le 17 juin 2018",
	          "utc": "2018-06-17T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Client d'Amazon",
	          "link": "https://www.amazon.fr/gp/profile/amzn1.account.AG6DBPVQDAPZ4SK6REAMSBMSNJFQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
	          "id": "AG6DBPVQDAPZ4SK6REAMSBMSNJFQ"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 103,
	        "review_country": "fr",
	        "is_global_review": false
	      },
	      {
	        "id": "R2OHHNE2PXU7PR",
	        "title": "Produit défectueux ?",
	        "body": "Produit acheté le 04/09/2018, installé quelques jours après (migration W10) pour un usage bureautique simple. Le produit a fonctionné une dizaine de jours avant de tomber en panne : n'est plus détecté par le bios  Certes prix très attractif à l'acquisition, mais pour un fonctionnement de 10-15 jours ??? Bon il ne me reste plus qu'à le faire remplacer : garantie ? Amazon ? on va voir...En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">                <span>  Produit acheté le 04/09/2018, installé quelques jours après (migration W10) pour un usage bureautique simple.<br>Le produit a fonctionné une dizaine de jours avant de tomber en panne : n'est plus détecté par le bios<br><br>Certes prix très attractif à l'acquisition, mais pour un fonctionnement de 10-15 jours ???<br>Bon il ne me reste plus qu'à le faire remplacer : garantie ? Amazon ? on va voir... </span>   </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "link": "https://www.amazon.fr/gp/customer-reviews/R2OHHNE2PXU7PR/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01N5IB20Q",
	        "rating": 1,
	        "date": {
	          "raw": "Commenté en France le 7 octobre 2018",
	          "utc": "2018-10-07T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "cesium.77",
	          "link": "https://www.amazon.fr/gp/profile/amzn1.account.AGQBFHHHZKHMWVLZY3FJBZHDVX3Q/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
	          "id": "AGQBFHHHZKHMWVLZY3FJBZHDVX3Q"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 89,
	        "review_country": "fr",
	        "is_global_review": false
	      },
	      {
	        "id": "RGW2IY6D3G3J8",
	        "title": "Parfait sous Linux",
	        "body": "Acheté en remplacement d'un HDD WesternDigital 7200/tm au taux moyen en lecture de 95Mo/s Je suis passé avec ce Kingston A400 à un taux moyen de 518Mo/s toujours en lecture.  Installé en tant que disque système sous Archlinux KDE/Plasma partitionné classiquement en /, /boot, /home, /var. Le /swap (fichier d'échange) de 8Go bien que peu utilisé sous Linux sur ma configuration à été déporté sur le HDD ainsi que le dossier de /téléchargements et /tmp ces derniers plus sujets à de très nombreuses écritures et effacements, ne nécessitant pas de très gros débits de transferts pour mon usage afin, je l'espère, de préserver la durée de vie du SSD.  Concrètement, après une installation propre et saine d'Archlinux sous KDE/Plasma (pas de clonage) faite en +/- 10 min, le système démarre ultra rapidement en moins de 10 sec (phase bios comprise et bureau opérationnel) Là où sur mon HDD il me fallait +/- 1 min à 1 min 15 Il me faut plus de temps pour entrer mon mot de passe que pour arriver sur le bureau. Les déconnexions/reconnexions sont quasi instantanées Les redémarrages sont de la même veine que l'allumage pc éteint - de 10 sec tout en sachant que KDE n'est pas le plus léger des environnements graphiques GNU/Linux et que je démarre toujours sur une session vide, n'utilisant pas non plus l'hibernation.  TIPS: Pour ceux que ça intéressent, après avoir réinstallé les paquets manquants, j'ai utilisé mes sauvegardes sur un HDD via Timeshift et Deja-dup paramétrés comme il faut pour retrouver ma configuration (dossiers, réglages, composants graphiques, etc.) de non ancien HDD lui aussi sous KDE. Une restauration Timeshift prend alors +/- 30 sec là ou sur le HDD il me fallait 2 à 3 min plus \"facile\" à mettre en oeuvre qu'un Clonezilla que je garde quand même au cas où.En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">                <span>  Acheté en remplacement d'un HDD WesternDigital 7200/tm au taux moyen en lecture de 95Mo/s<br>Je suis passé avec ce Kingston A400 à un taux moyen de 518Mo/s toujours en lecture.<br><br>Installé en tant que disque système sous Archlinux KDE/Plasma partitionné classiquement en /, /boot, /home, /var.<br>Le /swap (fichier d'échange) de 8Go bien que peu utilisé sous Linux sur ma configuration à été déporté sur le HDD ainsi que le dossier de /téléchargements et /tmp ces derniers plus sujets à de très nombreuses écritures et effacements, ne nécessitant pas de très gros débits de transferts pour mon usage afin, je l'espère, de préserver la durée de vie du SSD.<br><br>Concrètement, après une installation propre et saine d'Archlinux sous KDE/Plasma (pas de clonage) faite en +/- 10 min, le système démarre ultra rapidement en moins de 10 sec (phase bios comprise et bureau opérationnel)<br>Là où sur mon HDD il me fallait +/- 1 min à 1 min 15<br>Il me faut plus de temps pour entrer mon mot de passe que pour arriver sur le bureau.<br>Les déconnexions/reconnexions sont quasi instantanées<br>Les redémarrages sont de la même veine que l'allumage pc éteint - de 10 sec tout en sachant que KDE n'est pas le plus léger des environnements graphiques GNU/Linux et que je démarre toujours sur une session vide, n'utilisant pas non plus l'hibernation.<br><br>TIPS:<br>Pour ceux que ça intéressent, après avoir réinstallé les paquets manquants, j'ai utilisé mes sauvegardes sur un HDD via Timeshift et Deja-dup paramétrés comme il faut pour retrouver ma configuration (dossiers, réglages, composants graphiques, etc.) de non ancien HDD lui aussi sous KDE. Une restauration Timeshift prend alors +/- 30 sec là ou sur le HDD il me fallait 2 à 3 min plus \"facile\" à mettre en oeuvre qu'un Clonezilla que je garde quand même au cas où. </span>   </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "link": "https://www.amazon.fr/gp/customer-reviews/RGW2IY6D3G3J8/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01N5IB20Q",
	        "rating": 5,
	        "date": {
	          "raw": "Commenté en France le 25 octobre 2018",
	          "utc": "2018-10-25T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Michel",
	          "link": "https://www.amazon.fr/gp/profile/amzn1.account.AHD3G53E2UU3KQZACULLGLK5K2IA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
	          "id": "AHD3G53E2UU3KQZACULLGLK5K2IA",
	          "image": "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/d76ed968-2288-4127-9f2b-815ae99654d2._CR5,0,489,489_SX48_.jpg"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 61,
	        "review_country": "fr",
	        "is_global_review": false
	      },
	      {
	        "id": "R1LBV9CIW3C4PZ",
	        "title": "Rapidité !",
	        "body": "Acheté pour \"moderniser\" un ancien ordinateur portable... je n'ai pas été déçu. Le disque est parfait et n'a rien à envier aux autres marques pour une utilisation basique ! Votre ordinateur va prendre un coup de boost... attachez la ceinture ! Je rédige cet avis un peu tard, mais au moins le disque fonctionne toujours parfaitement et je vois que les prix ont bien chuté ! Foncez.En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">                <span>  Acheté pour \"moderniser\" un ancien ordinateur portable... je n'ai pas été déçu. Le disque est parfait et n'a rien à envier aux autres marques pour une utilisation basique ! Votre ordinateur va prendre un coup de boost... attachez la ceinture ! Je rédige cet avis un peu tard, mais au moins le disque fonctionne toujours parfaitement et je vois que les prix ont bien chuté ! Foncez. </span>   </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "link": "https://www.amazon.fr/gp/customer-reviews/R1LBV9CIW3C4PZ/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01N5IB20Q",
	        "rating": 5,
	        "date": {
	          "raw": "Commenté en France le 8 août 2018",
	          "utc": "2018-08-08T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Baptiste Trumeau",
	          "link": "https://www.amazon.fr/gp/profile/amzn1.account.AGO2NSWTXJUKYUVM7CL4WT2K7RXQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
	          "id": "AGO2NSWTXJUKYUVM7CL4WT2K7RXQ"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 56,
	        "review_country": "fr",
	        "is_global_review": false
	      },
	      {
	        "id": "RE7Z010U2KQQY",
	        "title": "Bon SSD entrée de gamme",
	        "body": "J'ai acheté ce SSD pour une remise à niveau d'une configuration un peu ancienne (Intel Core i5 2400) équipée à l'origine d'un disque mécanique de 500Go. Le SSD a été installé en tant que disque système. Au quotidien, aucune comparaison avec le disque mécanique. C'est le jour et la nuit. Le PC est très réactif. Le chargement de l'OS (Windows 10) et des applications bureautique comme Office 365 sont hyper rapide. Si je devais trouver un défaut, ce serait que lors de la copie de gros fichiers sur le disque, j'ai noté une baisse du taux de transfert, mais franchement, c'est pas gênant, et cela reste quoi qu'il en soit plus rapide que le disque d'origine.  En conclusion : très satisfait de mon achat. Pour le prix, ce disque offre de très bonnes prestations. Pour une mise à niveau de matériel un peu ancien, pas besoin de plus. A voir dans le temps si la fiabilité est au rendez-vous.En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">                <span>  J'ai acheté ce SSD pour une remise à niveau d'une configuration un peu ancienne (Intel Core i5 2400) équipée à l'origine d'un disque mécanique de 500Go.<br>Le SSD a été installé en tant que disque système. Au quotidien, aucune comparaison avec le disque mécanique. C'est le jour et la nuit. Le PC est très réactif. Le chargement de l'OS (Windows 10) et des applications bureautique comme Office 365 sont hyper rapide.<br>Si je devais trouver un défaut, ce serait que lors de la copie de gros fichiers sur le disque, j'ai noté une baisse du taux de transfert, mais franchement, c'est pas gênant, et cela reste quoi qu'il en soit plus rapide que le disque d'origine.<br><br>En conclusion : très satisfait de mon achat. Pour le prix, ce disque offre de très bonnes prestations. Pour une mise à niveau de matériel un peu ancien, pas besoin de plus.<br>A voir dans le temps si la fiabilité est au rendez-vous. </span>   </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "link": "https://www.amazon.fr/gp/customer-reviews/RE7Z010U2KQQY/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01N5IB20Q",
	        "rating": 4,
	        "date": {
	          "raw": "Commenté en France le 10 septembre 2018",
	          "utc": "2018-09-10T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Pierre M.",
	          "link": "https://www.amazon.fr/gp/profile/amzn1.account.AE6653DONP4WWIAGKFU6HK3UXISQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
	          "id": "AE6653DONP4WWIAGKFU6HK3UXISQ"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 40,
	        "review_country": "fr",
	        "is_global_review": false
	      },
	      {
	        "id": "R3034JRV1ZOI4I",
	        "title": "RAPIDE ET PARFAIT",
	        "body": "Effectué chrono en main depuis acer swift 3 , transfert de musique d'ordi vers ssd kingston 172 mo/s avec des pointe a 284 mo/s, moyenne réel 172 mo transfert de photo d'ordi vers ssd Kingston 118 mo/s de moyenne, parfait pour moiEn lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">                <span>  Effectué chrono en main depuis acer swift 3 , transfert de musique d'ordi vers ssd kingston 172 mo/s avec des pointe a 284 mo/s, moyenne réel 172 mo<br>transfert de photo d'ordi vers ssd Kingston 118 mo/s de moyenne, parfait pour moi </span>   </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "link": "https://www.amazon.fr/gp/customer-reviews/R3034JRV1ZOI4I/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01N5IB20Q",
	        "rating": 5,
	        "date": {
	          "raw": "Commenté en France le 8 septembre 2018",
	          "utc": "2018-09-08T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "GIUJOS",
	          "link": "https://www.amazon.fr/gp/profile/amzn1.account.AF72NN6WXFPL5CGKY2TRLN6U2MXA/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
	          "id": "AF72NN6WXFPL5CGKY2TRLN6U2MXA"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "images": [
	          {
	            "link": "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif"
	          },
	          {
	            "link": "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif"
	          }
	        ],
	        "helpful_votes": 45,
	        "review_country": "fr",
	        "is_global_review": false
	      },
	      {
	        "id": "R3SGXTAG7961PC",
	        "title": "SSD rapide à initialiser (même problème pour tous les SSD Kingston A400 ??)",
	        "body": "Reçu dans une petite enveloppe Amazon en carton sans rembourrage. Pas de trace de maltraitance. Non reconnu à la 1ère connexion sous Windows 10 (s'affiche en AS2105 lors de la demande de déconnexion) En fait (je ne sais pas si c'est la même chose pour tous les ssd Kingston de ce type) le ssd n'est pas initialisé, ce n'est que de la mémoire brute. Il faut ouvrir le gestionnaire de disques Windows : clic droit sur icône Windows en bas à gauche de l'écran, choisir \"Gestion du disque\". Windows (dans mon cas) m'a proposé ensuite de s'occuper de ce disque inconnu en créant le MBR (partition initiale la plus répandue et la plus compatible) et en le formatant en NTFS. Ensuite le ssd fonctionne normalement, il est reconnu par tous les systèmes.En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">                <span>  Reçu dans une petite enveloppe Amazon en carton sans rembourrage. Pas de trace de maltraitance.<br>Non reconnu à la 1ère connexion sous Windows 10 (s'affiche en AS2105 lors de la demande de déconnexion)<br>En fait (je ne sais pas si c'est la même chose pour tous les ssd Kingston de ce type) le ssd n'est pas initialisé, ce n'est que de la mémoire brute.<br>Il faut ouvrir le gestionnaire de disques Windows : clic droit sur icône Windows en bas à gauche de l'écran, choisir \"Gestion du disque\".<br>Windows (dans mon cas) m'a proposé ensuite de s'occuper de ce disque inconnu en créant le MBR (partition initiale la plus répandue et la plus compatible) et en le formatant en NTFS.<br>Ensuite le ssd fonctionne normalement, il est reconnu par tous les systèmes. </span>   </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "link": "https://www.amazon.fr/gp/customer-reviews/R3SGXTAG7961PC/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01N5IB20Q",
	        "rating": 4,
	        "date": {
	          "raw": "Commenté en France le 23 février 2019",
	          "utc": "2019-02-23T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "NonoSF",
	          "link": "https://www.amazon.fr/gp/profile/amzn1.account.AEKDF2N73XPQHRCAQ5VWXQYH4U2Q/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
	          "id": "AEKDF2N73XPQHRCAQ5VWXQYH4U2Q"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 23,
	        "review_country": "fr",
	        "is_global_review": false
	      },
	      {
	        "id": "R1OEFL1N8VRNHB",
	        "title": "La rapidité, pour une poignée de dollars !",
	        "body": "Utilisé lors du remplacement d'un disque dur d'un pc portable \"en fin de vie\", ce SSD a redonné une seconde jeunesse à ce vieux pc qui était voué à la DESTRUCTION tellement il était lent ! Depuis, il est beaucoup plus rapide et c'est vraiment très plaisant de l'utiliser. (++) Le prix ! Pour une poignée de \"dollars\", 120gb suffit lorsqu'il y a la possibilité d'ajouter un second DD interne. (++) La rapidité, le SSD est une tuerie. (-) Tellement léger.. On dirait presque une copie aziat'  Je recommande.En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">                <span>  Utilisé lors du remplacement d'un disque dur d'un pc portable \"en fin de vie\", ce SSD a redonné une seconde jeunesse à ce vieux pc qui était voué à la DESTRUCTION tellement il était lent !<br>Depuis, il est beaucoup plus rapide et c'est vraiment très plaisant de l'utiliser.<br>(++) Le prix ! Pour une poignée de \"dollars\", 120gb suffit lorsqu'il y a la possibilité d'ajouter un second DD interne.<br>(++) La rapidité, le SSD est une tuerie.<br>(-) Tellement léger.. On dirait presque une copie aziat'<br><br>Je recommande. </span>   </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "link": "https://www.amazon.fr/gp/customer-reviews/R1OEFL1N8VRNHB/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=B01N5IB20Q",
	        "rating": 5,
	        "date": {
	          "raw": "Commenté en France le 8 septembre 2018",
	          "utc": "2018-09-08T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Adwelfare",
	          "link": "https://www.amazon.fr/gp/profile/amzn1.account.AGVL7BEMCTBBFJSQBWZGVFOLXCRQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8",
	          "id": "AGVL7BEMCTBBFJSQBWZGVFOLXCRQ",
	          "image": "https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/6f2edcde-7422-429f-bb08-677f37572889._CR0,0,500,500_SX48_.jpg"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 26,
	        "review_country": "fr",
	        "is_global_review": false
	      },
	      {
	        "id": "R11CDCAGD68BDT",
	        "title": "Instalación ssd.",
	        "body": "Por el precio que tienen ahora mismo merecen la pena, pero en concreto este modelo de ssd tiene memorias TLC, las más básicas, y eso se nota. Yo compré dos, y uno de ellos arrancaba en 51 grados, mucho más caliente que el resto de mis discos duros. Además, tenía el firmware antiguo, cuando intenté actualizarlo no me dejó, y con un comportamiento tan errático decidí devolverlo, Amazon como siempre de 10 en este sentido. De todos modos con el precio que tienen actualmente, no pierdes nada probando.  Describo ahora que pasos sigo cada que vez instalo un ssd. Depende de si tienes sólo 1 ssd ó si tienes ssd+ hd, el proceso puede variar (ej. los temporales los pues quitar del ssd si tienes un hd, de otro modo no). :  - Activas en la bios modo AHCI (sata, no raid). Poner cd de windows con el orden de arranque desde la lectora y empezar instalación. Se creará un espacio de 100 mg y el resto será donde hagamos la instalación. No hacer particiones al ssd, sufre demasiado. - Una vez instalado, comprobamos alineación y Trim correctos. Para alineación podéis usar Disk Alignment Test, es gratis y no pesa nada. Para Trim, ejecutar sobre windows cmd, escribir fsutil behavior query disabledeletenotify , dará valor 0. Es correcto y seguimos. - Desactivar pagefile.sys, \"Panel de control, sistema, sistema, , Configuración avanzada del sistema, opciones avanzadas, configuración, opciones avanzadas, cambiar\". Ahí o bien la quitas y la dejas a 0, o la quitas y la pones en el HD, depende de si tienes mucha RAM. - Desactivar desfragmentar, sobre windows, escribiendo Desfragmentador, se abre y quitamos programación. Además lo quitamos en servicios, escribimos en windows servicios, se abre y paramos y deshabilitamos “Desfragmentador de disco\". - Desactivar indización, abrimos mi pc, botón derecho sobre c, propiedades, y desmarcamos la segunda opción \"permitir que los archivos de esta unidad tengan....\" os dirá que necesitas ser administrador, dáis si, os dirá que no todos se pueden, le dáis a omitir. Este paso es el que más tiempo lleva, por eso lo suelo hacer al inicio. Además hacemos lo mismo que antes en \"servicios\", la opción se llama “Windows Search”, la paramos y deshabilitamos. - Desactivamos hibernación, sobre windows escribimos cmd, y pegamos \"powercfg -h off \", ya está hecho. - Desactivamos Prefetch Y Superfetch, sobre windows escribimos regedit, luego seguimos la ruta HKEY_LOCAL_MACHINE\\ SYSTEM\\ CurrentControlSet\\ Control\\ Session Manager\\ Memory Management\\ PrefetchParameters y en las claves EnableSuperfetch y EnablePrefetcher poner un valor 0. Además desactivamos Superfetch en servicios, como en los pasos anteriores. Se llama Superfetch. - Desactivamos puntos de restauración, \"Panel de control, sistema, sistema, Configuración avanzada del sistema, protección del sistema, abajo disco c, configurar\", y los eliminamos y dejamos a cero. - Desactivar programación windows defender, sobre windows escribimos defender, y desactivamos la programación (no el programa). - Cambiar ubicación carpeta temporales, (con ssd + hd), de otro modo no puedes hacerlo. \"Panel de control, sistema, sistema, Configuración avanzada del sistema, opciones avanzadas, variables del entorno, en la casilla de arriba (Usuario) se modifica TEMP y TMP y se le asigna el directorio que prefiráis en el HDD, por ejemplo, D:\\TEMPORALES, y hacéis lo mismo con TEMP y TMP de la casilla de abajo (Sistema). - Todos los programas de descarga a d, no en el ssd,, (con ssd+ hd). Ej: torrent, firefox, etc etc. - Comprobamos velocidades del ssd, deben ser parecidas a las que se describan, cuidado que si abusáis de programas tipo crystalmark, una instalación de windows pueden ser unos 60 gb (con todos los programas habituales), pasar este otro tipo de programas varias veces son 2 teras. Insisto no abuséis si ya estáis seguros de que la velocidad es la correcta. A 250 mg/sg de media entre los archivos pequeños y los grandes, echad cuentas cuanto escribes en 1 minuto. - Si el ssd tiene software propio, tipo magician en el caso de samsung, usadlo, y cread el reaprovisioamiento, esto os quita espacio en el ssd, pero alargrá mucho su vida. - No os fiéis si crystalinfo dice que tenéis AHCI y NCQ activados, verificad AHCI en la BIOS, si lo está, entonces tenéis los 2, lo digo porque yo me he llevado sorpresas.  He intentado ser lo más claro posible, que cada cual use este guión bajo su responsabilidad, a mi me va bien con él, y sólo he pretendido ayudar.  Un saludo.En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">              <span class=\"cr-original-review-content\">  Por el precio que tienen ahora mismo merecen la pena, pero en concreto este modelo de ssd tiene memorias TLC, las más básicas, y eso se nota. Yo compré dos, y uno de ellos arrancaba en 51 grados, mucho más caliente que el resto de mis discos duros. Además, tenía el firmware antiguo, cuando intenté actualizarlo no me dejó, y con un comportamiento tan errático decidí devolverlo, Amazon como siempre de 10 en este sentido. De todos modos con el precio que tienen actualmente, no pierdes nada probando.<br><br>Describo ahora que pasos sigo cada que vez instalo un ssd. Depende de si tienes sólo 1 ssd ó si tienes ssd+ hd, el proceso puede variar (ej. los temporales los pues quitar del ssd si tienes un hd, de otro modo no). :<br><br>- Activas en la bios modo AHCI (sata, no raid). Poner cd de windows con el orden de arranque desde la lectora y empezar instalación. Se creará un espacio de 100 mg y el resto será donde hagamos la instalación. No hacer particiones al ssd, sufre demasiado.<br>- Una vez instalado, comprobamos alineación y Trim correctos. Para alineación podéis usar Disk Alignment Test, es gratis y no pesa nada. Para Trim, ejecutar sobre windows cmd, escribir fsutil behavior query disabledeletenotify , dará valor 0. Es correcto y seguimos.<br>- Desactivar pagefile.sys, \"Panel de control, sistema, sistema, , Configuración avanzada del sistema, opciones avanzadas, configuración, opciones avanzadas, cambiar\". Ahí o bien la quitas y la dejas a 0, o la quitas y la pones en el HD, depende de si tienes mucha RAM.<br>- Desactivar desfragmentar, sobre windows, escribiendo Desfragmentador, se abre y quitamos programación. Además lo quitamos en servicios, escribimos en windows servicios, se abre y paramos y deshabilitamos “Desfragmentador de disco\".<br>- Desactivar indización, abrimos mi pc, botón derecho sobre c, propiedades, y desmarcamos la segunda opción \"permitir que los archivos de esta unidad tengan....\" os dirá que necesitas ser administrador, dáis si, os dirá que no todos se pueden, le dáis a omitir. Este paso es el que más tiempo lleva, por eso lo suelo hacer al inicio. Además hacemos lo mismo que antes en \"servicios\", la opción se llama “Windows Search”, la paramos y deshabilitamos.<br>- Desactivamos hibernación, sobre windows escribimos cmd, y pegamos \"powercfg -h off \", ya está hecho.<br>- Desactivamos Prefetch Y Superfetch, sobre windows escribimos regedit, luego seguimos la ruta HKEY_LOCAL_MACHINE\\ SYSTEM\\ CurrentControlSet\\ Control\\ Session Manager\\ Memory Management\\ PrefetchParameters y en las claves EnableSuperfetch y EnablePrefetcher poner un valor 0. Además desactivamos Superfetch en servicios, como en los pasos anteriores. Se llama Superfetch.<br>- Desactivamos puntos de restauración, \"Panel de control, sistema, sistema, Configuración avanzada del sistema, protección del sistema, abajo disco c, configurar\", y los eliminamos y dejamos a cero.<br>- Desactivar programación windows defender, sobre windows escribimos defender, y desactivamos la programación (no el programa).<br>- Cambiar ubicación carpeta temporales, (con ssd + hd), de otro modo no puedes hacerlo. \"Panel de control, sistema, sistema, Configuración avanzada del sistema, opciones avanzadas, variables del entorno, en la casilla de arriba (Usuario) se modifica TEMP y TMP y se le asigna el directorio que prefiráis en el HDD, por ejemplo, D:\\TEMPORALES, y hacéis lo mismo con TEMP y TMP de la casilla de abajo (Sistema).<br>- Todos los programas de descarga a d, no en el ssd,, (con ssd+ hd). Ej: torrent, firefox, etc etc.<br>- Comprobamos velocidades del ssd, deben ser parecidas a las que se describan, cuidado que si abusáis de programas tipo crystalmark, una instalación de windows pueden ser unos 60 gb (con todos los programas habituales), pasar este otro tipo de programas varias veces son 2 teras. Insisto no abuséis si ya estáis seguros de que la velocidad es la correcta. A 250 mg/sg de media entre los archivos pequeños y los grandes, echad cuentas cuanto escribes en 1 minuto.<br>- Si el ssd tiene software propio, tipo magician en el caso de samsung, usadlo, y cread el reaprovisioamiento, esto os quita espacio en el ssd, pero alargrá mucho su vida.<br>- No os fiéis si crystalinfo dice que tenéis AHCI y NCQ activados, verificad AHCI en la BIOS, si lo está, entonces tenéis los 2, lo digo porque yo me he llevado sorpresas.<br><br>He intentado ser lo más claro posible, que cada cual use este guión bajo su responsabilidad, a mi me va bien con él, y sólo he pretendido ayudar.<br><br>Un saludo. </span><span class=\"cr-translated-review-content aok-hidden\"></span>     </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "rating": 4,
	        "date": {
	          "raw": "Commenté en Espagne le 3 mai 2019",
	          "utc": "2019-05-03T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Avatar"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 1,
	        "review_country": "fr",
	        "is_global_review": true
	      },
	      {
	        "id": "R2HD82UVI800I1",
	        "title": "NO ES ORIGINAL. EL DISCO VENDIDO POR E-Frenex ES FAKE",
	        "body": "Hice un pedido de 3 discos SSD. Los 3 han fallado alrededor de los 2 meses de compra. Toda la informacion perdida! Hemos puesto un Kingston \"bueno\" y el comprado aqui. El Kingston \"bueno\" aparece en todas partes con un FIRMWARE que pone KINGSTON con el modelo. En el comprado aqui, aparece solo SATAFIRM S11 y nada más, ni fabricante ni modelo ni nada.... El informatico nos ha dicho que son \"serie B\", es decir o bien son kingston que se han reparado o no son kingston porque lleva un firmware genérico. Nunca habiamos tenido este problema con Amazon.En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">              <span class=\"cr-original-review-content\">  Hice un pedido de 3 discos SSD. Los 3 han fallado alrededor de los 2 meses de compra. Toda la informacion perdida!<br>Hemos puesto un Kingston \"bueno\" y el comprado aqui. El Kingston \"bueno\" aparece en todas partes con un FIRMWARE que pone KINGSTON con el modelo.<br>En el comprado aqui, aparece solo SATAFIRM S11 y nada más, ni fabricante ni modelo ni nada....<br>El informatico nos ha dicho que son \"serie B\", es decir o bien son kingston que se han reparado o no son kingston porque lleva un firmware genérico.<br>Nunca habiamos tenido este problema con Amazon. </span><span class=\"cr-translated-review-content aok-hidden\"></span>     </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "rating": 1,
	        "date": {
	          "raw": "Commenté en Espagne le 15 novembre 2018",
	          "utc": "2018-11-15T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Sara"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 816,
	        "review_country": "fr",
	        "is_global_review": true
	      },
	      {
	        "id": "RXFBQXL3RXZMY",
	        "title": "LOTES DE DISCOS DAÑADOS DEJAN DE FUNCIONAR AL AÑO",
	        "body": "QUE TAL COMPRE 30 DISCOS PARA ACTULIZAR LOS EQUPOS DE MI OFICINA SIEMPRE HABIA UTLIZADO HYPERX ERAN UN POCO MAS CARO Y EL NIVEL DE TRAFENCIA ES MUCHO MAYO EL DE ESTOS SA400S37, TODO FUNCIONABA BIEN HASTA QUE COMENZARON A FALLAS HASTA EL COMENTO HAN DEJADO DE FUNCIONAR 10 DE LO CUAL EL PROBLEMA NO ES EL $$$ SI NO LA INFORMACION QUE SE PERDIO DE UN DIA PARA OTRO. ME CONSIDERO UNA PERSONA CON EXPERIENCIA EN EL RAMO DE LOS HYPERX E COMPRANDO UNOS 90 UNIDADES Y SOLO UNA EN 5 AÑOS SE A DAÑADO. NO POR AHORRAR PONGAN EN RIESGO SU INFORMACION POR ESO SIEMPRE ESTAN OFERTA!!!!! ACTUALIZARE DESPUES ENVIANDO FOTO DE LAS UNIDADES DAÑADASEn lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">              <span class=\"cr-original-review-content\">  QUE TAL COMPRE 30 DISCOS PARA ACTULIZAR LOS EQUPOS DE MI OFICINA SIEMPRE HABIA UTLIZADO HYPERX ERAN UN POCO MAS CARO Y EL NIVEL DE TRAFENCIA ES MUCHO MAYO EL DE ESTOS SA400S37, TODO FUNCIONABA BIEN HASTA QUE COMENZARON A FALLAS HASTA EL COMENTO HAN DEJADO DE FUNCIONAR 10 DE LO CUAL EL PROBLEMA NO ES EL $$$ SI NO LA INFORMACION QUE SE PERDIO DE UN DIA PARA OTRO. ME CONSIDERO UNA PERSONA CON EXPERIENCIA EN EL RAMO DE LOS HYPERX E COMPRANDO UNOS 90 UNIDADES Y SOLO UNA EN 5 AÑOS SE A DAÑADO. NO POR AHORRAR PONGAN EN RIESGO SU INFORMACION POR ESO SIEMPRE ESTAN OFERTA!!!!! ACTUALIZARE DESPUES ENVIANDO FOTO DE LAS UNIDADES DAÑADAS </span><span class=\"cr-translated-review-content aok-hidden\"></span>     </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "rating": 1,
	        "date": {
	          "raw": "Commenté au Mexique le 8 novembre 2018",
	          "utc": "2018-11-08T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Uranga"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 698,
	        "review_country": "fr",
	        "is_global_review": true
	      },
	      {
	        "id": "R17653OAGVR1GH",
	        "title": "Do not listen to the bad reviews.",
	        "body": "After reading a review by a DGS fellow that said he had 30 years in the tech business, I thought this was a real P.O.S.. Well, a little while ago my Ex called me up because she was having some issues with her computer and wanted me to look at it. Being the sap I am, I said ok. Turns out the HDD was bad. The bells went off and I remembered the review left buy the tech guy in Florida and I thought \"Eureka!\". I would get this SSD for her system and within a few days her computer would explode like a dumpster full of TNT. I get the SSD not on time but a full day early in fact. It installs super easy and she comes and picks it up. I have to hide my excitement as I just wait to hear about the evil that is to come. So after about a week I get anxious and call the Ex to see what was up. Her \"Boy Toy\" answers and gives me the dreaded news. Not only is it still running, but it is super fast and efficient. He then proceeds to thank me and compliment me on \"How mature\" it was of me to do this for her even after how messy the divorce was. And how good of a person I really was for being the bigger person and all of that. Long story short, if your looking for a piece of hardware to sabotage your Ex's computer with, this is not it. But, if you are looking for a stable SSD on the cheap to add some performance to your system, well, sadly this is in fact it.En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">              <span class=\"cr-original-review-content\">  After reading a review by a DGS fellow that said he had 30 years in the tech business, I thought this was a real P.O.S.. Well, a little while ago my Ex called me up because she was having some issues with her computer and wanted me to look at it. Being the sap I am, I said ok. Turns out the HDD was bad. The bells went off and I remembered the review left buy the tech guy in Florida and I thought \"Eureka!\". I would get this SSD for her system and within a few days her computer would explode like a dumpster full of TNT.<br>I get the SSD not on time but a full day early in fact. It installs super easy and she comes and picks it up. I have to hide my excitement as I just wait to hear about the evil that is to come. So after about a week I get anxious and call the Ex to see what was up. Her \"Boy Toy\" answers and gives me the dreaded news. Not only is it still running, but it is super fast and efficient. He then proceeds to thank me and compliment me on \"How mature\" it was of me to do this for her even after how messy the divorce was. And how good of a person I really was for being the bigger person and all of that.<br>Long story short, if your looking for a piece of hardware to sabotage your Ex's computer with, this is not it. But, if you are looking for a stable SSD on the cheap to add some performance to your system, well, sadly this is in fact it. </span><span class=\"cr-translated-review-content aok-hidden\"></span>     </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "rating": 5,
	        "date": {
	          "raw": "Commenté aux États-Unis le 15 mars 2019",
	          "utc": "2019-03-15T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Mr. MunkyMeat",
	          "image": "https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/2f0ae74d-a1ed-4e59-b72d-1455c305f9af._CR0,0,500,500_SX48_.jpg"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 3,
	        "review_country": "fr",
	        "is_global_review": true
	      },
	      {
	        "id": "R22MZO81EBM29T",
	        "title": "Good for storage (yep)",
	        "body": "It works flawlessly.  What else - err - its oblong - thin - doesn't smell of anything.  I tried having a conversation with it to no end - so instead I bunged it in my PC and probably wont see it again for a few years. I think its happy in there with all its chums (ram, power supply, cpu etc). If I have problem with the little minx Ill let you know.  Regards.En lire plus",
	        "body_html": "<div data-a-expander-name=\"review_text_read_more\" data-a-expander-collapsed-height=\"300\" class=\"a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container\" style=\"max-height:300px\"><div data-hook=\"review-collapsed\" aria-expanded=\"false\" class=\"a-expander-content reviewText review-text-content a-expander-partial-collapse-content\">              <span class=\"cr-original-review-content\">  It works flawlessly.<br><br>What else - err - its oblong - thin - doesn't smell of anything.<br><br>I tried having a conversation with it to no end - so instead I bunged it in my PC and probably wont see it again for a few years. I think its happy in there with all its chums (ram, power supply, cpu etc). If I have problem with the little minx Ill let you know.<br><br>Regards. </span><span class=\"cr-translated-review-content aok-hidden\"></span>     </div><div class=\"a-expander-header a-expander-partial-collapse-header\"><div class=\"a-expander-content-fade\"></div><a href=\"javascript:void(0)\" data-csa-c-func-deps=\"aui-da-a-expander-toggle\" data-csa-c-type=\"widget\" data-csa-interaction-events=\"click\" data-hook=\"expand-collapse-read-more-less\" aria-label=\"Afficher&nbsp;/ Masquer le texte complet du commentaire\" aria-expanded=\"false\" role=\"button\" data-action=\"a-expander-toggle\" class=\"a-declarative\" data-a-expander-toggle=\"{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;En lire plus&quot;, &quot;collapse_prompt&quot;:&quot;En lire moins&quot;}\"><i class=\"a-icon a-icon-extender-expand\"></i><span class=\"a-expander-prompt\">En lire plus</span></a></div></div>",
	        "rating": 5,
	        "date": {
	          "raw": "Commenté au Royaume-Uni le 1 septembre 2018",
	          "utc": "2018-09-01T00:00:00.000Z"
	        },
	        "profile": {
	          "name": "Tommo"
	        },
	        "vine_program": false,
	        "verified_purchase": false,
	        "helpful_votes": 430,
	        "review_country": "gb",
	        "is_global_review": true
	      }
	    ],
	    "buybox_winner": {
	      "offer_id": "Xd0grpbcyX5FhRPsW9jdfOTpLt8QabDEny/fExCwv3kwfCbTTQsnEV6c80qByFUaFNp25Q/Q9Sydd3NHAWSkp47JGLvUMYYCtgM9GnPn7feIIS3OGZoozp4OtMeUzRWaJ1E48jHXm/E=",
	      "mixed_offers_count": 94,
	      "mixed_offers_from": {
	        "raw": "Comparer Neuf & L'occasion"
	      },
	      "is_prime": true,
	      "is_amazon_fresh": false,
	      "condition": {
	        "is_new": true
	      },
	      "availability": {
	        "type": "in_stock",
	        "raw": "En stock.",
	        "dispatch_days": 1
	      },
	      "fulfillment": {
	        "type": "1p",
	        "standard_delivery": {
	          "date": "jeudi 31 mars",
	          "name": "GRATUITE"
	        },
	        "fastest_delivery": {
	          "date": "mardi 29 mars",
	          "name": "Ou livraison acclre mardi 29 mars. Commandez dans les 3 h 21 min. Dtails"
	        },
	        "is_sold_by_amazon": true,
	        "is_fulfilled_by_amazon": true,
	        "is_fulfilled_by_third_party": false,
	        "is_sold_by_third_party": false
	      },
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 32.99,
	        "raw": "€32,99"
	      },
	      "rrp": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 35.72,
	        "raw": "€35,72"
	      },
	      "shipping": {
	        "raw": "GRATUITE"
	      }
	    },
	    "more_buying_choices": [
	      {
	        "price": {
	          "symbol": "€",
	          "currency": "EUR",
	          "value": 32.99,
	          "raw": "€32,99"
	        },
	        "seller_name": "MassiveTech-Store",
	        "free_shipping": true,
	        "position": 1
	      },
	      {
	        "price": {
	          "symbol": "€",
	          "currency": "EUR",
	          "value": 34.02,
	          "raw": "€34,02"
	        },
	        "seller_name": "T&T NORTH",
	        "free_shipping": true,
	        "position": 2
	      },
	      {
	        "price": {
	          "symbol": "€",
	          "currency": "EUR",
	          "value": 34.9,
	          "raw": "€34,90"
	        },
	        "seller_name": "PcPerformanceStore",
	        "free_shipping": true,
	        "position": 3
	      }
	    ],
	    "specifications": [
	      {
	        "name": "Marque",
	        "value": "‎Kingston"
	      },
	      {
	        "name": "Numéro du modèle de l'article",
	        "value": "‎SA400S37/240G"
	      },
	      {
	        "name": "séries",
	        "value": "‎Kingston SSDNow A400"
	      },
	      {
	        "name": "Couleur",
	        "value": "‎Noir"
	      },
	      {
	        "name": "Garantie constructeur",
	        "value": "‎2 ans constructeur"
	      },
	      {
	        "name": "Plate-forme du matériel informatique",
	        "value": "‎Refer_Manual"
	      },
	      {
	        "name": "Marque du processeur",
	        "value": "‎Kingston"
	      },
	      {
	        "name": "Type de processeur",
	        "value": "‎Celeron 3865U"
	      },
	      {
	        "name": "Taille de la mémoire vive",
	        "value": "‎240 Go"
	      },
	      {
	        "name": "Vitesse d'écriture",
	        "value": "‎350"
	      },
	      {
	        "name": "Taille du disque dur",
	        "value": "‎240 Go"
	      },
	      {
	        "name": "Technologie du disque dur",
	        "value": "‎Disque dur SSD"
	      },
	      {
	        "name": "Interface du disque dur",
	        "value": "‎Serial ATA"
	      },
	      {
	        "name": "Type de carte mémoire",
	        "value": "‎TLC"
	      },
	      {
	        "name": "Type de technologie sans fil",
	        "value": "‎802.11a"
	      },
	      {
	        "name": "Bluetooth",
	        "value": "‎Non"
	      },
	      {
	        "name": "Interface du matériel informatique",
	        "value": "‎SATA 3.0 Gb/s"
	      },
	      {
	        "name": "Type de connecteur",
	        "value": "‎SATA"
	      },
	      {
	        "name": "Compatibilité du périphérique",
	        "value": "‎Ordinateur"
	      },
	      {
	        "name": "Dimensions de l'article L x L x H",
	        "value": "‎10 x 0.7 x 7 centimètres"
	      },
	      {
	        "name": "Poids du produit",
	        "value": "‎0.09 Livres"
	      },
	      {
	        "name": "Disponibilité des pièces détachées",
	        "value": "‎Information indisponible sur les pièces détachées"
	      },
	      {
	        "name": "ASIN",
	        "value": "B01N5IB20Q"
	      },
	      {
	        "name": "Moyenne des commentaires client",
	        "value": "4,7 sur 5 étoiles              127 560 évaluations                   4,7 sur 5 étoiles"
	      },
	      {
	        "name": "Classement des meilleures ventes d'Amazon",
	        "value": "34 en Informatique"
	      },
	      {
	        "name": "Date de mise en ligne sur Amazon.fr",
	        "value": "1 juillet 2018"
	      },
	      {
	        "name": "Marque",
	        "value": "Kingston"
	      },
	      {
	        "name": "Facteur de forme",
	        "value": "6,35 cm"
	      },
	      {
	        "name": "Taille de la mémoire de l'ordinateur",
	        "value": "240 Go"
	      },
	      {
	        "name": "Compatibilité du périphérique",
	        "value": "Ordinateur"
	      },
	      {
	        "name": "Débit de transfert de données",
	        "value": "350 Megabits Per Second"
	      }
	    ],
	    "specifications_flat": "Débit de transfert de données: 350 Megabits Per Second. Compatibilité du périphérique: Ordinateur. Taille de la mémoire de l'ordinateur: 240 Go. Facteur de forme: 6,35 cm. Marque: Kingston. Date de mise en ligne sur Amazon.fr: 1 juillet 2018. Classement des meilleures ventes d'Amazon: 34 en Informatique. Moyenne des commentaires client: 4,7 sur 5 étoiles              127 560 évaluations                   4,7 sur 5 étoiles. ASIN: B01N5IB20Q. Disponibilité des pièces détachées: ‎Information indisponible sur les pièces détachées. Poids du produit: ‎0.09 Livres. Dimensions de l'article L x L x H: ‎10 x 0.7 x 7 centimètres. Compatibilité du périphérique: ‎Ordinateur. Type de connecteur: ‎SATA. Interface du matériel informatique: ‎SATA 3.0 Gb/s. Bluetooth: ‎Non. Type de technologie sans fil: ‎802.11a. Type de carte mémoire: ‎TLC. Interface du disque dur: ‎Serial ATA. Technologie du disque dur: ‎Disque dur SSD. Taille du disque dur: ‎240 Go. Vitesse d'écriture: ‎350. Taille de la mémoire vive: ‎240 Go. Type de processeur: ‎Celeron 3865U. Marque du processeur: ‎Kingston. Plate-forme du matériel informatique: ‎Refer_Manual. Garantie constructeur: ‎2 ans constructeur. Couleur: ‎Noir. séries: ‎Kingston SSDNow A400. Numéro du modèle de l'article: ‎SA400S37/240G. Marque: ‎Kingston.",
	    "bestsellers_rank": [
	      {
	        "category": "Informatique",
	        "rank": 34,
	        "link": "https://www.amazon.fr/gp/bestsellers/computers/ref=pd_zg_ts_computers"
	      },
	      {
	        "category": "SSD internes",
	        "rank": 4,
	        "link": "https://www.amazon.fr/gp/bestsellers/computers/430354031/ref=pd_zg_hrsr_computers"
	      }
	    ],
	    "color": "Noir",
	    "first_available": {
	      "raw": "1 juillet 2018",
	      "utc": "2018-07-01T00:00:00.000Z"
	    },
	    "model_number": "SA400S37/240G",
	    "bestsellers_rank_flat": "Category: Informatique | Rank: 34, Category: SSD internes | Rank: 4"
	  },
	  "brand_store": {
	    "id": "A3C64D82-CD6A-4C74-8E89-ABD76FAE809A",
	    "link": "https://www.amazon.fr/stores/KingstonTechnology/page/A3C64D82-CD6A-4C74-8E89-ABD76FAE809A"
	  },
	  "frequently_bought_together": {
	    "total_price": {
	      "symbol": "€",
	      "currency": "EUR",
	      "value": 101.6,
	      "raw": "101,60 €"
	    },
	    "products": [
	      {
	        "asin": "B01N5IB20Q",
	        "title": "PNY CS900 SSD Interne SATA III, 2.5 pouces, 240Go, Vitesse de lecture jusqu'à 535MB/s",
	        "link": "https://www.amazon.fr/dp/B01N5IB20Q",
	        "image": "https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif",
	        "price": {
	          "symbol": "€",
	          "currency": "EUR",
	          "value": 32.99,
	          "raw": "32,99 €"
	        }
	      },
	      {
	        "asin": "B07G3KGYZQ",
	        "title": "Crucial BX500 480Go CT480BX500SSD1 SSD Interne-jusqu’à 540 Mo/s (3D NAND, SATA, 2,5 pouces)",
	        "link": "https://www.amazon.fr/dp/B07G3KGYZQ",
	        "image": "https://images-eu.ssl-images-amazon.com/images/I/5167zXL7nkL._AC_UL116_SR116,116_.jpg",
	        "price": {
	          "symbol": "€",
	          "currency": "EUR",
	          "value": 48.62,
	          "raw": "48,62 €"
	        }
	      },
	      {
	        "asin": "B01KFLH1WS",
	        "title": "PNY CS900 SSD Interne SATA III, 2.5 pouces, 120Go, Vitesse de lecture jusqu'à 515MB/s",
	        "link": "https://www.amazon.fr/dp/B01KFLH1WS",
	        "image": "https://images-eu.ssl-images-amazon.com/images/I/61IPUpzfh9L._AC_UL116_SR116,116_.jpg",
	        "price": {
	          "symbol": "€",
	          "currency": "EUR",
	          "value": 19.99,
	          "raw": "19,99 €"
	        }
	      }
	    ]
	  },
	  "compare_with_similar": [
	    {
	      "asin": "B01N5IB20Q",
	      "image": "https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SS450_.jpg",
	      "title": "Kingston A400 SSD SSD Interne 2.5\" SATA Rev 3.0, 240GB - SA400S37/240G",
	      "rating": 4.5,
	      "ratings_total": 127560,
	      "link": "https://www.amazon.fr/dp/B01N5IB20Q"
	    },
	    {
	      "asin": "B01KIUESVI",
	      "image": "https://m.media-amazon.com/images/I/61L927tRHZL._AC_SS450_.jpg",
	      "title": "PNY CS900 SSD Interne SATA III, 2.5 pouces, 240Go, Vitesse de lecture jusqu'à 535MB/s",
	      "rating": 4.5,
	      "ratings_total": 12427,
	      "link": "https://www.amazon.fr/dp/B01KIUESVI"
	    },
	    {
	      "asin": "B07KR2CX1F",
	      "image": "https://m.media-amazon.com/images/I/71kWymZ+c+L._AC_SS450_.jpg",
	      "title": "Silicon Power SSD 256Go 3D NAND A55 SLC Cache Performance Boost 2.5 pouces SATA III 7mm (0.28\") Interne SSD",
	      "rating": 4.5,
	      "ratings_total": 11134,
	      "link": "https://www.amazon.fr/dp/B07KR2CX1F"
	    },
	    {
	      "asin": "B07TKGGJ1T",
	      "image": "https://m.media-amazon.com/images/I/91-FIuGIF0L._AC_SS450_.jpg",
	      "title": "Lexar SSD Interne NS100 2,5\" (128 Go, SATA III, 6Gb/s) LNS100-128AMZN",
	      "rating": 4.5,
	      "ratings_total": 3091,
	      "link": "https://www.amazon.fr/dp/B07TKGGJ1T"
	    },
	    {
	      "asin": "B0781VSXBP",
	      "image": "https://m.media-amazon.com/images/I/71Y39KWAC-S._AC_SS450_.jpg",
	      "title": "Crucial 250Go CT250MX500SSD1 SSD interne MX500-jusqu’à 560 Mo/s (3D NAND, SATA, 2,5 pouces)",
	      "rating": 5,
	      "ratings_total": 866,
	      "link": "https://www.amazon.fr/dp/B0781VSXBP"
	    }
	  ],
	  "sponsored_products": [
	    {
	      "title": "Crucial P2 CT250P2SSD8 SSD Interne 250Go, Vitesses atteignant 2400 Mo/s (3D NAND, NVMe, PCIe, M.2)",
	      "asin": "B086BKGSC1",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&adId=A02601453I3RXC36V0BGD&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB086BKGSC1%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/41LIEearzpL._AC_SR160,160_.jpg",
	      "rating": 4.5,
	      "ratings_total": 15,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 43.19,
	        "raw": "€43,19"
	      }
	    },
	    {
	      "title": "ORICO Boitier SSD M2 SATA sans Outil Adaptateur USB 3.1 GEN1 USB-C pour SSD M.2 SATA B-Key et M.2 B+M-Key 2230/2242/2260/2280, Enceinte Transparente，Smart Sleep (Bleu)- TCM2F",
	      "asin": "B091KKYZNN",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&adId=A0784952228OKMCA9ZKG0&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB091KKYZNN%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/41aZkMO4zkS._AC_SR160,160_.jpg",
	      "rating": 4,
	      "ratings_total": 226,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 21.99,
	        "raw": "€21,99"
	      }
	    },
	    {
	      "title": "ManxData 500 Go Bleu Disque dur externe portable USB 3.0 compatible avec PC Windows, Mac, Smart TV, XBOX ONE et PS4",
	      "asin": "B08KWR9WKQ",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&adId=A098585312Y4JK6P254E6&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB08KWR9WKQ%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/31JdYK2uHHL._AC_SR160,160_.jpg",
	      "rating": 4,
	      "ratings_total": 572,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 33.34,
	        "raw": "€33,34"
	      }
	    },
	    {
	      "title": "Mini PC Intel Core i5-8279U | 16 Go de RAM SSD PCIe de 512 Go | Intel Iris Plus Graphics 655 | Windows 10 | Intel WIFI6 AX200 BT 5.1 | HDMI/DP/USB-C | 2X RJ45 | 4X USB 3.0 | Petit Facteur de Forme",
	      "asin": "B0919ZGR1R",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&adId=A08599823JQ14J3X4C9SA&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB0919ZGR1R%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/31TzsgUd6IS._AC_SR160,160_.jpg",
	      "rating": 4.5,
	      "ratings_total": 197,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 484.49,
	        "raw": "€484,49"
	      }
	    },
	    {
	      "title": "deleyCON Boîtier pour Disque Dur SSD USB 3.0 pour Disques Durs 2,5“ Pouces SATA 3 SSD / HDD / 7mm SATA III Boîtier Externe UASP USB C [Noir Aluminium]",
	      "asin": "B09RB5FWGR",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&adId=A08303573303S6RL5FM1L&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB09RB5FWGR%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/41vXgfgXD9L._AC_SR160,160_.jpg",
	      "rating": 3,
	      "ratings_total": 4,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 17.19,
	        "raw": "€17,19"
	      }
	    },
	    {
	      "title": "deleyCON 1,5m USB 3.0 Super Speed Câble de Données - USB A (Mâle) vers USB B (Mâle) Taux de Transfert jusqu'à 5 Gbit/s - Noir",
	      "asin": "B00WHZ96L0",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&adId=A035598524G2GD632W27W&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB00WHZ96L0%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/41xY6Rta3FL._AC_SR160,160_.jpg",
	      "rating": 4.5,
	      "ratings_total": 1,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 8.45,
	        "raw": "€8,45"
	      }
	    },
	    {
	      "title": "deleyCON Boîtier pour Disque Dur SSD USB 3.0 pour Disques Durs 2,5“ Pouces SATA 3 SSD / HDD / 7mm SATA III Boîtier Externe UASP [Argent Aluminium]",
	      "asin": "B09RB5JY88",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&adId=A08307933N4TOYVQZ2C2I&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB09RB5JY88%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/41iAMNDQ96L._AC_SR160,160_.jpg",
	      "rating": 3,
	      "ratings_total": 5,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 12.69,
	        "raw": "€12,69"
	      }
	    },
	    {
	      "title": "deleyCON Boîtier pour Disque Dur SSD USB 3.0 pour Disques Durs 2,5“ Pouces SATA 3 SSD / HDD / 7mm / 9,5mm SATA III Boîtier Externe UASP USB C [Transparent]",
	      "asin": "B09RB6ZMY2",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_7?ie=UTF8&adId=A083124934V7CTTE6K49L&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB09RB6ZMY2%2Fref%3Dsspa_dk_detail_7%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/41IDc0ddO2L._AC_SR160,160_.jpg",
	      "rating": 4.5,
	      "ratings_total": 19,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 15.69,
	        "raw": "€15,69"
	      }
	    },
	    {
	      "title": "deleyCON Boîtier pour Disque Dur SSD USB 3.0 pour Disques Durs 2,5“ Pouces SATA 3 SSD / HDD / 7mm / 9,5mm SATA III Boîtier Externe UASP [Argent Aluminium]",
	      "asin": "B09RB7M6RB",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_8?ie=UTF8&adId=A0831037114CF3CB3SNCC&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB09RB7M6RB%2Fref%3Dsspa_dk_detail_8%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/41gTSKyG8cL._AC_SR160,160_.jpg",
	      "rating": 4.5,
	      "ratings_total": 13,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 13.69,
	        "raw": "€13,69"
	      }
	    },
	    {
	      "title": "deleyCON Boîtier pour Disque Dur SSD USB 3.0 pour Disques Durs 2,5“ Pouces SATA 3 SSD / HDD / 7mm / 9,5mm SATA III Boîtier Externe UASP [Gris Transparent]",
	      "asin": "B09RB6QYHB",
	      "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_9?ie=UTF8&adId=A08313492QL3D667QGH0H&qualifier=1648406331&id=5903798253961680&widgetName=sp_detail2&url=%2Fdp%2FB09RB6QYHB%2Fref%3Dsspa_dk_detail_9%3Fpsc%3D1p13NParams&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
	      "image": "https://m.media-amazon.com/images/I/41qjY2Vu2pL._AC_SR160,160_.jpg",
	      "rating": 4,
	      "ratings_total": 17,
	      "is_prime": true,
	      "price": {
	        "symbol": "€",
	        "currency": "EUR",
	        "value": 12.39,
	        "raw": "€12,39"
	      }
	    }
	  ]
	}
	</details>
	
- Charts
	
	> Ne fonctionne pas pour ce qu’on voudrait en faire.
	
- Offers
    Appel : `https://api.rainforestapi.com/request?api_key=B843F1826E9D47E28F6AC1C5DADF870C&type=offers&output=json&language=fr_FR&url=https%3A%2F%2Fwww.amazon.fr%2FKingston-SSD-A400-240GB-Disque-SATA%2Fdp%2FB01N5IB20Q`

    <details>
    <summary>Réponse</summary>
    {
      "request_info": {
        "success": true,
        "credits_used": 4,
        "credits_remaining": 96,
        "credits_used_this_request": 1
      },
      "request_metadata": {
        "created_at": "2022-03-27T23:02:57.543Z",
        "processed_at": "2022-03-27T23:03:02.399Z",
        "total_time_taken": 4.86,
        "amazon_url": "https://www.amazon.fr/gp/aod/ajax?asin=B01N5IB20Q&filters=%257B%2522all%2522%253Atrue%257D&language=fr_FR"
      },
      "request_parameters": {
        "type": "offers",
        "output": "json",
        "language": "fr_FR",
        "url": "https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q"
      },
      "product": {
        "title": "Kingston A400 SSD SSD Interne 2.5\" SATA Rev 3.0, 240GB - SA400S37/240G",
        "rating": 4.5,
        "reviews_total": 127,
        "image": "https://images-na.ssl-images-amazon.com/images/I/41UKoJx2tZL.jpg",
        "asin": "B01N5IB20Q",
        "link": "https://www.amazon.fr/dp/B01N5IB20Q"
      },
      "offers": [
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 32.99,
            "raw": "32,99 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": true,
            "countdown": "12 h 26 min",
            "comments": "jeudi 31 mars",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "Amazon"
          },
          "offer_id": "t5hsy%2FDXJsv9KmqTqdiv397%2FHzf9Da9wtsDCIVl9onLXVJ4Zd0YGMusVEt5nhKjllbIikv43u19StxTm5fwPqwdWDyezIgmX5X0WIzDqWQ8kwL39P53%2FR%2BuGq22rdP%2FiZM5Oue4IK%2F0%3D",
          "is_prime": true,
          "position": 1,
          "buybox_winner": true
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 30.68,
            "raw": "30,68 €"
          },
          "condition": {
            "is_new": false,
            "title": "D'occasion            - Très bon",
            "comments": "Manuel manquant. L'article sera reconditionné."
          },
          "delivery": {
            "fulfilled_by_amazon": true,
            "shipped_from_outside_country": false,
            "countdown": "8 h 57 min",
            "comments": "vendredi 1 avril",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "Amazon Warehouse",
            "link": "https://www.amazon.fr/Amazon-Offres-Reconditionnees/b?ie=UTF8&node=3581943031"
          },
          "offer_id": "8%2BOM3CN9cbTs2nBvnDPHqlfjHuqoDKgyyU5UKbIV4caP8NvjS5lP39Fsg86W4HUeMhUxO%2FoKJYLbJUi0TRRqcTsYGO%2Bqp4RXLaG7PobnWN8Rn1Cmh5nhNih7fknnOx00t0rBC6bV8oJjbnt%2FDsXO07qjMr00ScXLkHb6QMKts%2BNpaHruw2IWtA%3D%3D",
          "is_prime": true,
          "position": 2
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 32.99,
            "raw": "32,99 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": true,
            "shipped_from_outside_country": false,
            "countdown": "12 h 26 min",
            "comments": "jeudi 31 mars",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "MassiveTech-Store",
            "link": "https://www.amazon.fr/gp/aag/main?ie=UTF8&seller=A1C4U2X4AZPE5A&isAmazonFulfilled=1&asin=B01N5IB20Q&ref_=olp_merch_name_2",
            "rating": 5,
            "ratings_percentage_positive": 99,
            "ratings_total": 570,
            "id": "A1C4U2X4AZPE5A"
          },
          "offer_id": "7fagYl2hTypSQbqy9KG3vxh6M00F0fF2GoCISFCHZslh5jq72qjtO5bSjHItP2FAEkyqcT6ZJ%2F8alt2%2BwjnuN4evwCmBHza%2FTnpTElgJ%2BWxgHED4%2FjLU0lWpfpjXUQVHRphbEU0o0SVOOO23oRMkiWiZwfWufeLfgYfDtGLQuI%2Fuh7ZI80L61lCv6ln5OrrL",
          "is_prime": true,
          "offer_asin": "B01N5IB20Q",
          "position": 3
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 33.56,
            "raw": "33,56 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": true,
            "shipped_from_outside_country": false,
            "comments": "mercredi 13 avril",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "La caverne des particuliers angers",
            "link": "https://www.amazon.fr/gp/aag/main?ie=UTF8&seller=A1RF8QQYKB7JKS&isAmazonFulfilled=1&asin=B01N5IB20Q&ref_=olp_merch_name_3",
            "rating": 4.5,
            "ratings_percentage_positive": 96,
            "ratings_total": 1169,
            "id": "A1RF8QQYKB7JKS"
          },
          "offer_id": "7fagYl2hTypSQbqy9KG3vxh6M00F0fF25ivnbeBmiNd%2BG3kZe1ObqxG61obUJqJh1oGunwYU66K4G3AyVQTFNHHPSKUnUY33fJUCenGExJJ7zt1eEktpp86Nx6YK6SKfXMlB992kUx9mrpstPGoLLiG3d1NbCjEmErF8gmTOzPCQIg9LdQbjqRbcGKYMEcVT",
          "is_prime": true,
          "offer_asin": "B01N5IB20Q",
          "position": 4
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 34.02,
            "raw": "34,02 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": true,
            "shipped_from_outside_country": false,
            "countdown": "12 h 26 min",
            "comments": "jeudi 31 mars",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "T&T NORTH",
            "link": "https://www.amazon.fr/gp/aag/main?ie=UTF8&seller=A1MEQA51YPYMGY&isAmazonFulfilled=1&asin=B01N5IB20Q&ref_=olp_merch_name_4",
            "rating": 5,
            "ratings_percentage_positive": 100,
            "ratings_total": 616,
            "id": "A1MEQA51YPYMGY"
          },
          "offer_id": "KCdOaEnZNi%2BeNsMmXotxn78%2FYrLes%2FTe8RerKW10hDZJwfWPsVofppYLAzM%2FfwVY0vIfG7J4oj66ozmf4fVh5O4lcM72RyaxcrQ26PtiGsGzpC3AJW8HM7V9%2Fo2spODwFTCJs64kMPHbfTEeOMxkwbJWi4VQjSJJXqaiAzUnbbwrup2mxnHMgA%3D%3D",
          "is_prime": true,
          "offer_asin": "B01N5IB20Q",
          "position": 5
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 34.65,
            "raw": "34,65 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": false,
            "shipped_from_outside_country": false,
            "comments": "5 - 9 avril",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "BHR MARKET",
            "link": "https://www.amazon.fr/gp/aag/main?ie=UTF8&seller=AZWF7TEOYZ4R9&isAmazonFulfilled=0&asin=B01N5IB20Q&ref_=olp_merch_name_5",
            "rating": 3.5,
            "ratings_percentage_positive": 68,
            "ratings_total": 35,
            "id": "AZWF7TEOYZ4R9"
          },
          "offer_id": "6lvshXPhtKhrQi3uptBqJyWqWrh8yCvVfwnB3lHSHzqdKl%2FBK8tAkFF3VoQD%2FApiF1neI0IK46f7dt8%2BnTpqef5gJQ6Kixjpsw%2Fqto35Fd4kYLJS%2FFpx8Eu8mUVE%2BMrQcz451F5UaDD9v%2BZh%2BQq6S2N%2F%2BjiifILUFx2p0A%2BOvR3t6Ci4pkW38zxXXRTXk9sb",
          "is_prime": false,
          "offer_asin": "B01N5IB20Q",
          "position": 6
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 34.9,
            "raw": "34,90 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": true,
            "shipped_from_outside_country": false,
            "countdown": "12 h 26 min",
            "comments": "jeudi 31 mars",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "PcPerformanceStore",
            "link": "https://www.amazon.fr/gp/aag/main?ie=UTF8&seller=A27O8EU5HMZIKQ&isAmazonFulfilled=1&asin=B01N5IB20Q&ref_=olp_merch_name_6",
            "rating": 5,
            "ratings_percentage_positive": 98,
            "ratings_total": 167,
            "id": "A27O8EU5HMZIKQ"
          },
          "offer_id": "fuchbeK2fcl%2BmYMVD1ZUwISksh1Cm5weBV%2F%2Bo9Xq1u2H87EZv0%2BH1n%2FXo%2BKBX5KH6gHkStlqShORpSbp8R59nLRvVlYO2Dny45dMGOVjgnmqAmP2iR2Y65smcqDQqfa2MBaiHlKT49twKDUshaPthl8xAm%2BiRxeZgrAfYyQmpARVyENKucsqtA%3D%3D",
          "is_prime": true,
          "offer_asin": "B01N5IB20Q",
          "position": 7
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 35,
            "raw": "35,00 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": true,
            "shipped_from_outside_country": false,
            "countdown": "12 h 26 min",
            "comments": "jeudi 31 mars",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "TiendaCPU",
            "link": "https://www.amazon.fr/gp/aag/main?ie=UTF8&seller=AT9FEQBICN183&isAmazonFulfilled=1&asin=B01N5IB20Q&ref_=olp_merch_name_7",
            "rating": 4.5,
            "ratings_percentage_positive": 96,
            "ratings_total": 331,
            "id": "AT9FEQBICN183"
          },
          "offer_id": "t5hsy%2FDXJsv9KmqTqdiv397%2FHzf9Da9woMtMwKhhdZ%2F0Tmv1ZqyGrlzHP4GxHIs%2FOJgP8o118pKHZQyKMN2VNpDHKiyz3Hx9HShjAcHLZqhwMr1W3do8DLxMs0VhEqpqIOXiodWNgnjph7L%2B%2BMJF4ZX6nyc2zeN8k%2FKFnoac5Vxtw8368yvmFKwXAkYkykQh",
          "is_prime": true,
          "offer_asin": "B01N5IB20Q",
          "position": 8
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 36,
            "raw": "36,00 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": false,
            "shipped_from_outside_country": false,
            "comments": "31 mars - 2 avril",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "Cevennes IT",
            "link": "https://www.amazon.fr/gp/aag/main?ie=UTF8&seller=A1WOGYKNKNY45X&isAmazonFulfilled=0&asin=B01N5IB20Q&ref_=olp_merch_name_8",
            "rating": 4.5,
            "ratings_percentage_positive": 87,
            "ratings_total": 1129,
            "id": "A1WOGYKNKNY45X"
          },
          "offer_id": "7fagYl2hTypSQbqy9KG3vxh6M00F0fF2y1k5k91efNtiMV5eFoaqZyhYEcStl%2BBHGIQd6LEu0XsSrQANOqblEB1ndA%2F0kEOSlDUxBRwF1T0fsDMz%2FELgBvlcGQpPo7JIoD4oEZO8cxgx73GJttd72cBZPwREjXXPbFIBZ0OfU4vTsh0GAQ4PnHVwn6bp0SiG",
          "is_prime": false,
          "offer_asin": "B01N5IB20Q",
          "position": 9
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 36.3,
            "raw": "36,30 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": false,
            "shipped_from_outside_country": false,
            "countdown": "11 h 57 min",
            "comments": "jeudi 31 mars",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "1foDiscount",
            "link": "https://www.amazon.fr/gp/aag/main?ie=UTF8&seller=A2HQUGZRG7ZTA2&isAmazonFulfilled=0&asin=B01N5IB20Q&ref_=olp_merch_name_9",
            "rating": 4.5,
            "ratings_percentage_positive": 90,
            "ratings_total": 17780,
            "id": "A2HQUGZRG7ZTA2"
          },
          "offer_id": "XGPmrezSf5mbUMRIhWHkjGvf8292l2ILzfY6b0POlnXrXGm1X4fyV1RBw9xPb2RqY5yNVkm%2BnAleUVDRee3DDRqaPIaPp58t1Do%2FiOx1B0RGlJXFEli8xcNZH6F0eQIasxaMQuMvGpZcTXpyphjLvn5c%2BTdvkHLS3h3Qi7re%2Fkond8BQFxzoxfGrV192EShN",
          "is_prime": false,
          "offer_asin": "B01N5IB20Q",
          "position": 10
        },
        {
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 36.42,
            "raw": "36,42 €"
          },
          "condition": {
            "is_new": true,
            "title": "Neuf"
          },
          "delivery": {
            "fulfilled_by_amazon": false,
            "shipped_from_outside_country": false,
            "comments": "31 mars - 2 avril",
            "price": {
              "symbol": "€",
              "currency": "EUR",
              "value": 0,
              "raw": "GRATUITE",
              "is_free": true
            }
          },
          "seller": {
            "name": "LABOUTIQUEDUNET 🥇",
            "link": "https://www.amazon.fr/gp/aag/main?ie=UTF8&seller=A3ULSVNRJZ7IF5&isAmazonFulfilled=0&asin=B01N5IB20Q&ref_=olp_merch_name_10",
            "rating": 4.5,
            "ratings_percentage_positive": 83,
            "ratings_total": 17634,
            "id": "A3ULSVNRJZ7IF5"
          },
          "offer_id": "zr0jQ%2FrpUF5gWt9NQqeBF4p3bYj8ksJ3LrA2LvAUB6N8B1XO3zsU9r0QkiE8lDIiftfm2eEeiaPUsVf4vdVw70QahIr3TKIQJiUi8X%2Bq2sZfu0DbgcUSt2mWTYMKJMJEtRuvNPVMqy9MG4QaIkRb0CzVcJzxyOFXp9VKqP0ZGydqdTuKwMuh6GiFErw2ZcWa",
          "is_prime": false,
          "offer_asin": "B01N5IB20Q",
          "position": 11
        }
      ],
      "pagination": {
        "offers_count": 95,
        "total_results": 95,
        "total_pages": 10,
        "current_page": 1
      },
      "available_filters": {
        "offers_free_shipping": true,
        "offers_prime": true,
        "offers_condition_new": true,
        "offers_condition_used_like_new": true,
        "offers_condition_used_very_good": true,
        "offers_condition_used_good": true,
        "offers_condition_used_acceptable": true
      }
    }
    </details>

- Search
    > Nous permettrait de rechercher un produit avec des termes de recherche.

    Appel : `https://api.rainforestapi.com/request?api_key=B843F1826E9D47E28F6AC1C5DADF870C&type=search&output=json&language=fr_FR&search_term=ssd+kingston&amazon_domain=amazon.fr`

    <details>
    <summary>Réponse</summary>
    {
      "request_info": {
        "success": true,
        "credits_used": 5,
        "credits_remaining": 95,
        "credits_used_this_request": 1
      },
      "request_metadata": {
        "created_at": "2022-03-27T23:07:53.990Z",
        "processed_at": "2022-03-27T23:08:03.146Z",
        "total_time_taken": 9.16,
        "amazon_url": "https://www.amazon.fr/s/?k=ssd+kingston&ref=nb_sb_noss_2&language=fr_FR"
      },
      "request_parameters": {
        "type": "search",
        "output": "json",
        "language": "fr_FR",
        "search_term": "ssd kingston",
        "amazon_domain": "amazon.fr"
      },
      "search_results": [
        {
          "position": 1,
          "title": "Générique Kingston Carte mémoire microsd sdhc 8 go (Classe 4) d'origine Sony Xperia c3",
          "asin": "B01E73G9K0",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A03851802QJ0SROD7PWR1&url=%2FG%25C3%25A9n%25C3%25A9rique-Kingston-m%25C3%25A9moire-microsd-dorigine%2Fdp%2FB01E73G9K0%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-1-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_atf",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/51iteyf9q5L._AC_UL320_.jpg",
          "rating": 2,
          "ratings_total": 1,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 10,
              "raw": "€10,00",
              "name": "10,00 €10,00€",
              "asin": "B01E73G9K0",
              "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A03851802QJ0SROD7PWR1&url=%2FG%25C3%25A9n%25C3%25A9rique-Kingston-m%25C3%25A9moire-microsd-dorigine%2Fdp%2FB01E73G9K0%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-1-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_atf"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 10,
            "raw": "€10,00",
            "name": "10,00 €10,00€",
            "asin": "B01E73G9K0",
            "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&adId=A03851802QJ0SROD7PWR1&url=%2FG%25C3%25A9n%25C3%25A9rique-Kingston-m%25C3%25A9moire-microsd-dorigine%2Fdp%2FB01E73G9K0%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-1-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_atf"
          }
        },
        {
          "position": 2,
          "title": "Kingston A400 SSD SSD Interne 2.5\" SATA Rev 3.0, 240GB - SA400S37/240G",
          "asin": "B01N5IB20Q",
          "link": "https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q/ref=sr_1_2?keywords=ssd+kingston&qid=1648422476&sr=8-2",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_UL320_.jpg",
          "amazons_choice": {
            "link": "https://www.amazon.fr/Kingston-SSD-A400-240GB-Disque-SATA/dp/B01N5IB20Q/ref=ice_ac_b_dpb?keywords=ssd+kingston&qid=1648422476&sr=8-2",
            "keywords": "relatif à « ssd kingston »"
          },
          "is_prime": true,
          "rating": 4.7,
          "ratings_total": 127560,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 32.99,
              "raw": "€32,99",
              "name": "32,99 €32,99€ PVC: 35,72 €35,72€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 35.72,
              "raw": "€35,72",
              "name": "32,99 €32,99€ PVC: 35,72 €35,72€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 32.99,
            "raw": "€32,99",
            "name": "32,99 €32,99€ PVC: 35,72 €35,72€",
            "is_primary": true
          }
        },
        {
          "position": 3,
          "title": "Kingston NV1 NVMe PCIe SSD 500GB M.2 2280 - SNVS/500G Noir",
          "asin": "B091BCQK7B",
          "link": "https://www.amazon.fr/Kingston-NVMe-PCIe-500GB-2280/dp/B091BCQK7B/ref=sr_1_3?keywords=ssd+kingston&qid=1648422476&sr=8-3",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71rTa0S8xDS._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.6,
          "ratings_total": 1767,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 55.99,
              "raw": "€55,99",
              "name": "55,99 €55,99€ PVC: 68,99 €68,99€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 68.99,
              "raw": "€68,99",
              "name": "55,99 €55,99€ PVC: 68,99 €68,99€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 55.99,
            "raw": "€55,99",
            "name": "55,99 €55,99€ PVC: 68,99 €68,99€",
            "is_primary": true
          }
        },
        {
          "position": 4,
          "title": "Kingston FURY Renegade PCIe 4.0 NVMe M.2 SSD Pour les gamers, les passionnés des PC et les utilisateurs avanr - SFYRS/1000G",
          "asin": "B09K3H2YHX",
          "link": "https://www.amazon.fr/Kingston-Renegade-gamers-passionn%C3%A9s-utilisateurs/dp/B09K3H2YHX/ref=sr_1_4?keywords=ssd+kingston&qid=1648422476&sr=8-4",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/711s8bVPkgL._AC_UL320_.jpg",
          "rating": 5,
          "ratings_total": 65,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 191.84,
              "raw": "€191,84",
              "name": "191,84 €191,84€",
              "asin": "B09K3H2YHX",
              "link": "https://www.amazon.fr/Kingston-Renegade-gamers-passionn%C3%A9s-utilisateurs/dp/B09K3H2YHX/ref=sr_1_4?keywords=ssd+kingston&qid=1648422476&sr=8-4"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 191.84,
            "raw": "€191,84",
            "name": "191,84 €191,84€",
            "asin": "B09K3H2YHX",
            "link": "https://www.amazon.fr/Kingston-Renegade-gamers-passionn%C3%A9s-utilisateurs/dp/B09K3H2YHX/ref=sr_1_4?keywords=ssd+kingston&qid=1648422476&sr=8-4"
          }
        },
        {
          "position": 5,
          "title": "Kingston KC3000 PCIe 4.0 NVMe M.2 SSD - Stockage haute performant pour PC de bureau et PC portables -SKC3000S/1024G",
          "asin": "B09K7F5VJQ",
          "link": "https://www.amazon.fr/Kingston-KC3000-PCIe-4-0-NVMe/dp/B09K7F5VJQ/ref=sr_1_5?keywords=ssd+kingston&qid=1648422476&sr=8-5",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/61b1pY91OlL._AC_UL320_.jpg",
          "rating": 4.7,
          "ratings_total": 74,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 172.86,
              "raw": "€172,86",
              "name": "172,86 €172,86€",
              "asin": "B09K7F5VJQ",
              "link": "https://www.amazon.fr/Kingston-KC3000-PCIe-4-0-NVMe/dp/B09K7F5VJQ/ref=sr_1_5?keywords=ssd+kingston&qid=1648422476&sr=8-5"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 172.86,
            "raw": "€172,86",
            "name": "172,86 €172,86€",
            "asin": "B09K7F5VJQ",
            "link": "https://www.amazon.fr/Kingston-KC3000-PCIe-4-0-NVMe/dp/B09K7F5VJQ/ref=sr_1_5?keywords=ssd+kingston&qid=1648422476&sr=8-5"
          }
        },
        {
          "position": 6,
          "title": "Kingston KC600 512G SSD SATA3 2.5\" - SKC600/512G",
          "asin": "B07ZDBT15M",
          "link": "https://www.amazon.fr/Kingston-SKC600-512G-Interne-Chiffrement/dp/B07ZDBT15M/ref=sr_1_6?keywords=ssd+kingston&qid=1648422476&sr=8-6",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71NkOqJJa+L._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.7,
          "ratings_total": 1620,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 84.99,
              "raw": "€84,99",
              "name": "84,99 €84,99€ PVC: 89,06 €89,06€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 89.06,
              "raw": "€89,06",
              "name": "84,99 €84,99€ PVC: 89,06 €89,06€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 84.99,
            "raw": "€84,99",
            "name": "84,99 €84,99€ PVC: 89,06 €89,06€",
            "is_primary": true
          }
        },
        {
          "position": 7,
          "title": "Kingston XS2000 Portable SSD 500G -SXS2000/2000G",
          "asin": "B09F6279PY",
          "link": "https://www.amazon.fr/Kingston-XS2000-Portable-SXS2000-2000G/dp/B09F6279PY/ref=sr_1_7?keywords=ssd+kingston&qid=1648422476&sr=8-7",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81JBcQh0DdL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.5,
          "ratings_total": 167,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 259.62,
              "raw": "€259,62",
              "name": "259,62 €259,62€",
              "asin": "B09F6279PY",
              "link": "https://www.amazon.fr/Kingston-XS2000-Portable-SXS2000-2000G/dp/B09F6279PY/ref=sr_1_7?keywords=ssd+kingston&qid=1648422476&sr=8-7"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 259.62,
            "raw": "€259,62",
            "name": "259,62 €259,62€",
            "asin": "B09F6279PY",
            "link": "https://www.amazon.fr/Kingston-XS2000-Portable-SXS2000-2000G/dp/B09F6279PY/ref=sr_1_7?keywords=ssd+kingston&qid=1648422476&sr=8-7"
          }
        },
        {
          "position": 8,
          "title": "Kingston Data Centre DC500R (SEDC500R/960G) Enterprise SSD interne 2.5” 960GB",
          "asin": "B07PTSFB7D",
          "link": "https://www.amazon.fr/Kingston-SEDC500R-Center-DC500R-Enterprise/dp/B07PTSFB7D/ref=sr_1_8?keywords=ssd+kingston&qid=1648422476&sr=8-8",
          "availability": {
            "raw": "Il ne reste plus que 1 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81U2M1SAtFL._AC_UL320_.jpg",
          "rating": 4.7,
          "ratings_total": 68,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 251.44,
              "raw": "€251,44",
              "name": "251,44 €251,44€ PVC: 269,99 €269,99€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 269.99,
              "raw": "€269,99",
              "name": "251,44 €251,44€ PVC: 269,99 €269,99€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 251.44,
            "raw": "€251,44",
            "name": "251,44 €251,44€ PVC: 269,99 €269,99€",
            "is_primary": true
          }
        },
        {
          "position": 9,
          "title": "Kingston Data Center DC450R SEDC450R/480G SSD - Stockage SATA 6Gbits/s pour charge de travail à lecture intensive",
          "asin": "B07ZG53P2V",
          "link": "https://www.amazon.fr/Data-Center-DC450R-SEDC450R-480G/dp/B07ZG53P2V/ref=sr_1_9?keywords=ssd+kingston&qid=1648422476&sr=8-9",
          "availability": {
            "raw": "Il ne reste plus que 10 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81Hx8XkIi-L._AC_UL320_.jpg",
          "rating": 4.4,
          "ratings_total": 20,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 130.73,
              "raw": "€130,73",
              "name": "130,73 €130,73€",
              "asin": "B07ZG53P2V",
              "link": "https://www.amazon.fr/Data-Center-DC450R-SEDC450R-480G/dp/B07ZG53P2V/ref=sr_1_9?keywords=ssd+kingston&qid=1648422476&sr=8-9"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 130.73,
            "raw": "€130,73",
            "name": "130,73 €130,73€",
            "asin": "B07ZG53P2V",
            "link": "https://www.amazon.fr/Data-Center-DC450R-SEDC450R-480G/dp/B07ZG53P2V/ref=sr_1_9?keywords=ssd+kingston&qid=1648422476&sr=8-9"
          }
        },
        {
          "position": 10,
          "title": "Kingston - SSDNow UV400 - 120 Go - Disque SSD 2.5\" SATA 3 - Disque Seul",
          "asin": "B01FJ4UN76",
          "link": "https://www.amazon.fr/Kingston-SSDNow-UV400-120-Disque-SATA/dp/B01FJ4UN76/ref=sr_1_10?keywords=ssd+kingston&qid=1648422476&sr=8-10",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/51Zk0hKOC6S._AC_UL320_.jpg",
          "rating": 4.5,
          "ratings_total": 4905
        },
        {
          "position": 11,
          "title": "Kingston Technology A2000 M.2 500 Go PCI Express 3.0 3D NAND NVMe",
          "asin": "B07VXCFNVS",
          "link": "https://www.amazon.fr/Kingston-SA2000M8-500G-A2000-500GB/dp/B07VXCFNVS/ref=sr_1_11?keywords=ssd+kingston&qid=1648422476&sr=8-11",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71ULo3w7+hL._AC_UL320_.jpg",
          "rating": 4.8,
          "ratings_total": 9144
        },
        {
          "position": 12,
          "title": "Kingston KC2500 NVMe PCIe SSD -SKC2500M8/500G M.2 2280",
          "asin": "B087QXDTMN",
          "link": "https://www.amazon.fr/Kingston-KC2500-NVMe-SKC2500M8-500G/dp/B087QXDTMN/ref=sr_1_12?keywords=ssd+kingston&qid=1648422476&sr=8-12",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/718e2XtNigL._AC_UL320_.jpg",
          "rating": 4.6,
          "ratings_total": 348
        },
        {
          "position": 13,
          "title": "Kingston - SSDNow V300 - 240 Go - Disque Flash Interne",
          "asin": "B00A1ZTZNM",
          "link": "https://www.amazon.fr/Kingston-SSDNow-V300-240-Disque-Interne/dp/B00A1ZTZNM/ref=sr_1_13?keywords=ssd+kingston&qid=1648422476&sr=8-13",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81asfwcj+1L._AC_UL320_.jpg",
          "rating": 4.6,
          "ratings_total": 3825
        },
        {
          "position": 14,
          "title": "PNY CS900 SSD Interne SATA III, 2.5 pouces, 120Go, Vitesse de lecture jusqu'à 515MB/s",
          "asin": "B01KFLH1WS",
          "link": "https://www.amazon.fr/PNY-CS900-Disque-Flash-Interne/dp/B01KFLH1WS/ref=sr_1_14?keywords=ssd+kingston&qid=1648422476&sr=8-14",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/61IPUpzfh9L._AC_UL320_.jpg",
          "rating": 4.7,
          "ratings_total": 12428,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 19.99,
              "raw": "€19,99",
              "name": "19,99 €19,99€ PVC: 29,99 €29,99€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 29.99,
              "raw": "€29,99",
              "name": "19,99 €19,99€ PVC: 29,99 €29,99€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 19.99,
            "raw": "€19,99",
            "name": "19,99 €19,99€ PVC: 29,99 €29,99€",
            "is_primary": true
          }
        },
        {
          "position": 15,
          "title": "Crucial BX500 480Go CT480BX500SSD1 SSD Interne-jusqu’à 540 Mo/s (3D NAND, SATA, 2,5 pouces)",
          "asin": "B07G3KGYZQ",
          "link": "https://www.amazon.fr/Crucial-CT480BX500SSD1-Interne-BX500-Pouces/dp/B07G3KGYZQ/ref=sr_1_15?keywords=ssd+kingston&qid=1648422476&sr=8-15",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/5167zXL7nkL._AC_UL320_.jpg",
          "bestseller": {
            "link": "https://www.amazon.fr/gp/bestsellers/computers/430354031/ref=sr_bs_14_430354031_1",
            "category": "dans SSD internes"
          },
          "is_prime": true,
          "rating": 4.7,
          "ratings_total": 23372,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 48.62,
              "raw": "€48,62",
              "name": "48,62 €48,62€",
              "asin": "B07G3KGYZQ",
              "link": "https://www.amazon.fr/Crucial-CT480BX500SSD1-Interne-BX500-Pouces/dp/B07G3KGYZQ/ref=sr_1_15?keywords=ssd+kingston&qid=1648422476&sr=8-15"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 48.62,
            "raw": "€48,62",
            "name": "48,62 €48,62€",
            "asin": "B07G3KGYZQ",
            "link": "https://www.amazon.fr/Crucial-CT480BX500SSD1-Interne-BX500-Pouces/dp/B07G3KGYZQ/ref=sr_1_15?keywords=ssd+kingston&qid=1648422476&sr=8-15"
          }
        },
        {
          "position": 16,
          "title": "Samsung 980 MZ-V8V1T0BW | Disque SSD Interne NVMe M.2, PCIe 3.0, 1 To, Contrôle thermique intelligent",
          "asin": "B08TJ2649W",
          "link": "https://www.amazon.fr/Samsung-MZ-V8V1T0BW-Contr%C3%B4le-thermique-intelligent/dp/B08TJ2649W/ref=sr_1_16?keywords=ssd+kingston&qid=1648422476&sr=8-16",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71y8ZxXgVOL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.8,
          "ratings_total": 49262,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 99.98,
              "raw": "€99,98",
              "name": "99,98 €99,98€ Ancien: 118,99 €118,99€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 118.99,
              "raw": "€118,99",
              "name": "99,98 €99,98€ Ancien: 118,99 €118,99€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 99.98,
            "raw": "€99,98",
            "name": "99,98 €99,98€ Ancien: 118,99 €118,99€",
            "is_primary": true
          }
        },
        {
          "position": 17,
          "title": "Crucial BX500 240Go CT240BX500SSD1 SSD Interne-jusqu’à 540 Mo/s (3D NAND, SATA, 2,5 pouces)",
          "asin": "B07G3YNLJB",
          "link": "https://www.amazon.fr/Crucial-CT240BX500SSD1-Interne-BX500-Pouces/dp/B07G3YNLJB/ref=sr_1_17?keywords=ssd+kingston&qid=1648422476&sr=8-17",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/5167zXL7nkL._AC_UL320_.jpg",
          "rating": 4.7,
          "ratings_total": 27932
        },
        {
          "position": 18,
          "title": "Disque SSD 2.5\" SATA Kingston A400, 120Go (SA400S37/120G)",
          "asin": "B06XR5JMWJ",
          "link": "https://www.amazon.fr/Kingston-Digital-UV400-SATA-Suv400s37-120G/dp/B06XR5JMWJ/ref=sr_1_18?keywords=ssd+kingston&qid=1648422476&sr=8-18",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71JLh+nx3bL._AC_UL320_.jpg",
          "rating": 4.7,
          "ratings_total": 9
        },
        {
          "position": 19,
          "title": "Samsung 870 QVO MZ-77Q1T0BW | Disque SSD Interne 1 To, SATA III, 2,5'' - Technologie QLC seconde génération",
          "asin": "B089QXQ1TV",
          "link": "https://www.amazon.fr/Samsung-870-SATA-interne-MZ-77Q1T0BW/dp/B089QXQ1TV/ref=sr_1_19?keywords=ssd+kingston&qid=1648422476&sr=8-19",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/91PA5sP5wNL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.8,
          "ratings_total": 26412,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 99.99,
              "raw": "€99,99",
              "name": "99,99 €99,99€ PVC: 109,89 €109,89€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 109.89,
              "raw": "€109,89",
              "name": "99,99 €99,99€ PVC: 109,89 €109,89€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 99.99,
            "raw": "€99,99",
            "name": "99,99 €99,99€ PVC: 109,89 €109,89€",
            "is_primary": true
          }
        },
        {
          "position": 20,
          "title": "Kingston SMS200S3 Disque Flash Interne SSD 240 Go USB 2.0 Noir",
          "asin": "B00JT0DSQK",
          "link": "https://www.amazon.fr/Kingston-SMS200S3-Disque-Flash-Interne/dp/B00JT0DSQK/ref=sr_1_20?keywords=ssd+kingston&qid=1648422476&sr=8-20",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/51uPOEpKXLL._AC_UL320_.jpg",
          "rating": 4.6,
          "ratings_total": 696,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 236.99,
              "raw": "€236,99",
              "name": "236,99 €236,99€",
              "asin": "B00JT0DSQK",
              "link": "https://www.amazon.fr/Kingston-SMS200S3-Disque-Flash-Interne/dp/B00JT0DSQK/ref=sr_1_20?keywords=ssd+kingston&qid=1648422476&sr=8-20"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 236.99,
            "raw": "€236,99",
            "name": "236,99 €236,99€",
            "asin": "B00JT0DSQK",
            "link": "https://www.amazon.fr/Kingston-SMS200S3-Disque-Flash-Interne/dp/B00JT0DSQK/ref=sr_1_20?keywords=ssd+kingston&qid=1648422476&sr=8-20"
          }
        },
        {
          "position": 21,
          "title": "SanDisk SSD Plus 240 Go SATA III Disque SSD interne 2,5’’ jusqu’à 530 Mo/s",
          "asin": "B01F9G43WU",
          "link": "https://www.amazon.fr/SANDISK-Revision-Charges-Configuration-Serveillance/dp/B01F9G43WU/ref=sr_1_21?keywords=ssd+kingston&qid=1648422476&sr=8-21",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71J4Q8zM72L._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.7,
          "ratings_total": 63950,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 35.98,
              "raw": "€35,98",
              "name": "35,98 €35,98€ PVC: 40,99 €40,99€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 40.99,
              "raw": "€40,99",
              "name": "35,98 €35,98€ PVC: 40,99 €40,99€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 35.98,
            "raw": "€35,98",
            "name": "35,98 €35,98€ PVC: 40,99 €40,99€",
            "is_primary": true
          }
        },
        {
          "position": 22,
          "title": "Kingston SA400S37/480G Disques Dur Serial ATA",
          "asin": "B075BKXSCQ",
          "link": "https://www.amazon.fr/480GB-SATA3-KINGSTON-SSDNOW-A400/dp/B075BKXSCQ/ref=sr_1_22?keywords=ssd+kingston&qid=1648422476&sr=8-22",
          "availability": {
            "raw": "Il ne reste plus que 5 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81Yleainj1L._AC_UL320_.jpg",
          "rating": 4.8,
          "ratings_total": 2659,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 55.94,
              "raw": "€55,94",
              "name": "55,94 €55,94€",
              "asin": "B075BKXSCQ",
              "link": "https://www.amazon.fr/480GB-SATA3-KINGSTON-SSDNOW-A400/dp/B075BKXSCQ/ref=sr_1_22?keywords=ssd+kingston&qid=1648422476&sr=8-22"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 55.94,
            "raw": "€55,94",
            "name": "55,94 €55,94€",
            "asin": "B075BKXSCQ",
            "link": "https://www.amazon.fr/480GB-SATA3-KINGSTON-SSDNOW-A400/dp/B075BKXSCQ/ref=sr_1_22?keywords=ssd+kingston&qid=1648422476&sr=8-22"
          }
        },
        {
          "position": 23,
          "title": "Kingston SNA-B Kit d'installation SSD",
          "asin": "B00DCUKL0Y",
          "link": "https://www.amazon.fr/Kingston-SNA-B-Kit-dinstallation-SSD/dp/B00DCUKL0Y/ref=sr_1_23?keywords=ssd+kingston&qid=1648422476&sr=8-23",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81b2cEKjRrL._AC_UL320_.jpg",
          "rating": 4.3,
          "ratings_total": 77,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 25.75,
              "raw": "€25,75",
              "name": "25,75 €25,75€",
              "asin": "B00DCUKL0Y",
              "link": "https://www.amazon.fr/Kingston-SNA-B-Kit-dinstallation-SSD/dp/B00DCUKL0Y/ref=sr_1_23?keywords=ssd+kingston&qid=1648422476&sr=8-23"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 25.75,
            "raw": "€25,75",
            "name": "25,75 €25,75€",
            "asin": "B00DCUKL0Y",
            "link": "https://www.amazon.fr/Kingston-SNA-B-Kit-dinstallation-SSD/dp/B00DCUKL0Y/ref=sr_1_23?keywords=ssd+kingston&qid=1648422476&sr=8-23"
          }
        },
        {
          "position": 24,
          "title": "Kingston DC1500M U.2 NVMe SSD -SEDC1500M/3840G",
          "asin": "B097TM36C4",
          "link": "https://www.amazon.fr/Kingston-DC1500M-NVMe-SEDC1500M-3840G/dp/B097TM36C4/ref=sr_1_24?keywords=ssd+kingston&qid=1648422476&sr=8-24",
          "availability": {
            "raw": "Il ne reste plus que 5 exemplaire(s) en stock (d'autres exemplaires sont en cours d'acheminement)."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81KlIBBQfuS._AC_UL320_.jpg",
          "is_prime": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 1101.99,
              "raw": "€1 101,99",
              "asin": "B097TM36C4",
              "link": "https://www.amazon.fr/Kingston-DC1500M-NVMe-SEDC1500M-3840G/dp/B097TM36C4/ref=sr_1_24?keywords=ssd+kingston&qid=1648422476&sr=8-24"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 1101.99,
            "raw": "€1 101,99",
            "asin": "B097TM36C4",
            "link": "https://www.amazon.fr/Kingston-DC1500M-NVMe-SEDC1500M-3840G/dp/B097TM36C4/ref=sr_1_24?keywords=ssd+kingston&qid=1648422476&sr=8-24"
          }
        },
        {
          "position": 25,
          "title": "Samsung SSD 870 EVO MZ-77E250B/EU | Disque SSD interne 2,5’’ haute vitesse, 250 Go - Pour les gamers et professionnels.",
          "asin": "B08PC3PGZM",
          "link": "https://www.amazon.fr/Samsung-MZ-77E250B-EU-interne-vitesse/dp/B08PC3PGZM/ref=sr_1_25?keywords=ssd+kingston&qid=1648422476&sr=8-25",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81v2hzwp0DL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.8,
          "ratings_total": 69967,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 57.9,
              "raw": "€57,90",
              "name": "57,90 €57,90€",
              "asin": "B08PC3PGZM",
              "link": "https://www.amazon.fr/Samsung-MZ-77E250B-EU-interne-vitesse/dp/B08PC3PGZM/ref=sr_1_25?keywords=ssd+kingston&qid=1648422476&sr=8-25"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 57.9,
            "raw": "€57,90",
            "name": "57,90 €57,90€",
            "asin": "B08PC3PGZM",
            "link": "https://www.amazon.fr/Samsung-MZ-77E250B-EU-interne-vitesse/dp/B08PC3PGZM/ref=sr_1_25?keywords=ssd+kingston&qid=1648422476&sr=8-25"
          }
        },
        {
          "position": 26,
          "title": "OWC 16GB (2x8GB) PC3-12800 DDR3L So-DIMM 1600MHz So-DIMM 204 Pin CL11 Memory Upgrade Kit for iMac, Mac Mini, and MacBook Pro, (OWC1600DDR3S16P)",
          "asin": "B00Q0ZB3PU",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A05721501NA55KL3XGMW2&url=%2FOWC-OWC1600DDR3S16P-1600MHz-Module-m%25C3%25A9moire%2Fdp%2FB00Q0ZB3PU%2Fref%3Dsr_1_26_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-26-spons%26psc%3D1%26smid%3DAKNH8BBFD7HVK&qualifier=1648422477&id=6904834841187049&widgetName=sp_mtf",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81erL2SoU9S._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.8,
          "ratings_total": 603,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 87.56,
              "raw": "€87,56",
              "name": "87,56 €87,56€",
              "asin": "B00Q0ZB3PU",
              "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A05721501NA55KL3XGMW2&url=%2FOWC-OWC1600DDR3S16P-1600MHz-Module-m%25C3%25A9moire%2Fdp%2FB00Q0ZB3PU%2Fref%3Dsr_1_26_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-26-spons%26psc%3D1%26smid%3DAKNH8BBFD7HVK&qualifier=1648422477&id=6904834841187049&widgetName=sp_mtf"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 87.56,
            "raw": "€87,56",
            "name": "87,56 €87,56€",
            "asin": "B00Q0ZB3PU",
            "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A05721501NA55KL3XGMW2&url=%2FOWC-OWC1600DDR3S16P-1600MHz-Module-m%25C3%25A9moire%2Fdp%2FB00Q0ZB3PU%2Fref%3Dsr_1_26_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-26-spons%26psc%3D1%26smid%3DAKNH8BBFD7HVK&qualifier=1648422477&id=6904834841187049&widgetName=sp_mtf"
          }
        },
        {
          "position": 27,
          "title": "Samsung Kit dual channel 8 Go avec modules mémoire (2 x 4 Go), 240 broches DDR3–1600, non ECC, DIMM unbuffered (1600 MHz, PC3–12800U, CL11, 1,5 V)",
          "asin": "B00KM74UQ6",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A0410510160NY4DVVUI8E&url=%2FSamsung-channel-broches-unbuffered-3-12800U%2Fdp%2FB00KM74UQ6%2Fref%3Dsr_1_27_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-27-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_mtf",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/41kOWGrtXdL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.8,
          "ratings_total": 7,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 47.6,
              "raw": "€47,60",
              "name": "47,60 €47,60€",
              "asin": "B00KM74UQ6",
              "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A0410510160NY4DVVUI8E&url=%2FSamsung-channel-broches-unbuffered-3-12800U%2Fdp%2FB00KM74UQ6%2Fref%3Dsr_1_27_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-27-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_mtf"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 47.6,
            "raw": "€47,60",
            "name": "47,60 €47,60€",
            "asin": "B00KM74UQ6",
            "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A0410510160NY4DVVUI8E&url=%2FSamsung-channel-broches-unbuffered-3-12800U%2Fdp%2FB00KM74UQ6%2Fref%3Dsr_1_27_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-27-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_mtf"
          }
        },
        {
          "position": 28,
          "title": "OWC 16.0GB 2666MHz DDR4 PC4-21300 So-DIMM 260 Broches de mémoire additionnelle, (2666DDR4S16G) pour 2019-2020 iMac 27 Pouces (iMac19,1 iMac20,1 iMac20,2)",
          "asin": "B07NJV1JRT",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A06715733PMYC1DGCX5N7&url=%2FOWC-OWC2666DDR4S16G-Module-m%25C3%25A9moire-DDR4%2Fdp%2FB07NJV1JRT%2Fref%3Dsr_1_28_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-28-spons%26psc%3D1%26smid%3DAKNH8BBFD7HVK&qualifier=1648422477&id=6904834841187049&widgetName=sp_mtf",
          "availability": {
            "raw": "Il ne reste plus que 9 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81FoNQYsTTS._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.7,
          "ratings_total": 1959,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 77.59,
              "raw": "€77,59",
              "name": "77,59 €77,59€",
              "asin": "B07NJV1JRT",
              "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A06715733PMYC1DGCX5N7&url=%2FOWC-OWC2666DDR4S16G-Module-m%25C3%25A9moire-DDR4%2Fdp%2FB07NJV1JRT%2Fref%3Dsr_1_28_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-28-spons%26psc%3D1%26smid%3DAKNH8BBFD7HVK&qualifier=1648422477&id=6904834841187049&widgetName=sp_mtf"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 77.59,
            "raw": "€77,59",
            "name": "77,59 €77,59€",
            "asin": "B07NJV1JRT",
            "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_mtf_aps_sr_pg1_1?ie=UTF8&adId=A06715733PMYC1DGCX5N7&url=%2FOWC-OWC2666DDR4S16G-Module-m%25C3%25A9moire-DDR4%2Fdp%2FB07NJV1JRT%2Fref%3Dsr_1_28_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-28-spons%26psc%3D1%26smid%3DAKNH8BBFD7HVK&qualifier=1648422477&id=6904834841187049&widgetName=sp_mtf"
          }
        },
        {
          "position": 29,
          "title": "KINGSTON 120GB SSDNow UV500 M.2",
          "asin": "B07C3YMVBL",
          "link": "https://www.amazon.fr/Kingston-SSD-UV500-SUV500M8-120G/dp/B07C3YMVBL/ref=sr_1_29?keywords=ssd+kingston&qid=1648422476&sr=8-29",
          "availability": {
            "raw": "Il ne reste plus que 1 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81M6ScjZJNL._AC_UL320_.jpg",
          "rating": 4.6,
          "ratings_total": 2506,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 31.96,
              "raw": "€31,96",
              "name": "31,96 €31,96€",
              "asin": "B07C3YMVBL",
              "link": "https://www.amazon.fr/Kingston-SSD-UV500-SUV500M8-120G/dp/B07C3YMVBL/ref=sr_1_29?keywords=ssd+kingston&qid=1648422476&sr=8-29"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 31.96,
            "raw": "€31,96",
            "name": "31,96 €31,96€",
            "asin": "B07C3YMVBL",
            "link": "https://www.amazon.fr/Kingston-SSD-UV500-SUV500M8-120G/dp/B07C3YMVBL/ref=sr_1_29?keywords=ssd+kingston&qid=1648422476&sr=8-29"
          }
        },
        {
          "position": 30,
          "title": "Crucial 2To CT2000MX500SSD1 SSD interne MX500-jusqu’à 560 Mo/s (3D NAND, SATA, 2,5 pouces)",
          "asin": "B003J5JB12",
          "link": "https://www.amazon.fr/Crucial-CT2000MX500SSD1-Interne-MX500-Pouces/dp/B003J5JB12/ref=sr_1_30?keywords=ssd+kingston&qid=1648422476&sr=8-30",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71Y39KWAC-S._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.8,
          "ratings_total": 47863,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 186.99,
              "raw": "€186,99",
              "name": "186,99 €186,99€ PVC: 202,79 €202,79€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 202.79,
              "raw": "€202,79",
              "name": "186,99 €186,99€ PVC: 202,79 €202,79€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 186.99,
            "raw": "€186,99",
            "name": "186,99 €186,99€ PVC: 202,79 €202,79€",
            "is_primary": true
          }
        },
        {
          "position": 31,
          "title": "Kingston Data Center DC1000B (SEDC1000BM8/960G) Enterprise NVMe SSD 960 GB M.2 2280",
          "asin": "B08TNW4BZV",
          "link": "https://www.amazon.fr/Kingston-DC1000B-SEDC1000BM8-960G-Enterprise/dp/B08TNW4BZV/ref=sr_1_31?keywords=ssd+kingston&qid=1648422476&sr=8-31",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71haCJVgfAL._AC_UL320_.jpg",
          "rating": 3.5,
          "ratings_total": 8,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 269.98,
              "raw": "€269,98",
              "name": "269,98 €269,98€ PVC: 296,99 €296,99€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 296.99,
              "raw": "€296,99",
              "name": "269,98 €269,98€ PVC: 296,99 €296,99€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 269.98,
            "raw": "€269,98",
            "name": "269,98 €269,98€ PVC: 296,99 €296,99€",
            "is_primary": true
          }
        },
        {
          "position": 32,
          "title": "Crucial P2 CT500P2SSD8 SSD Interne 500Go, Vitesses atteignant 2400 Mo/s (3D NAND, NVMe, PCIe, M.2)",
          "asin": "B086BGWNY8",
          "link": "https://www.amazon.fr/Crucial-CT500P2SSD8-Interne-Vitesses-atteignant/dp/B086BGWNY8/ref=sr_1_32?keywords=ssd+kingston&qid=1648422476&sr=8-32",
          "availability": {
            "raw": "Il ne reste plus que 14 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/61eqMCabEyL._AC_UL320_.jpg",
          "rating": 4.7,
          "ratings_total": 15113,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 58.33,
              "raw": "€58,33",
              "name": "58,33 €58,33€ PVC: 61,19 €61,19€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 61.19,
              "raw": "€61,19",
              "name": "58,33 €58,33€ PVC: 61,19 €61,19€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 58.33,
            "raw": "€58,33",
            "name": "58,33 €58,33€ PVC: 61,19 €61,19€",
            "is_primary": true
          }
        },
        {
          "position": 33,
          "title": "Kingston A400 SSD SA400S37/240G - SSD Interne 2.5\" SATA 240GB & Amazon Basics Boîtier pour Disque Dur SATA 2,5\" (6,35 cm) - USB 3.0",
          "asin": "B08KZDCPLY",
          "link": "https://www.amazon.fr/Kingston-A400-SSD-SA400S37-240G/dp/B08KZDCPLY/ref=sr_1_33?keywords=ssd+kingston&qid=1648422476&sr=8-33",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/51MdcxHcy7L._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 5,
          "ratings_total": 1,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 46.24,
              "raw": "€46,24",
              "name": "46,24 €46,24€",
              "asin": "B08KZDCPLY",
              "link": "https://www.amazon.fr/Kingston-A400-SSD-SA400S37-240G/dp/B08KZDCPLY/ref=sr_1_33?keywords=ssd+kingston&qid=1648422476&sr=8-33"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 46.24,
            "raw": "€46,24",
            "name": "46,24 €46,24€",
            "asin": "B08KZDCPLY",
            "link": "https://www.amazon.fr/Kingston-A400-SSD-SA400S37-240G/dp/B08KZDCPLY/ref=sr_1_33?keywords=ssd+kingston&qid=1648422476&sr=8-33"
          }
        },
        {
          "position": 34,
          "title": "Crucial 500Go CT500MX500SSD1(Z) SSD interne MX500-jusqu’à 560 Mo/s (3D NAND, SATA, 2,5 pouces)",
          "asin": "B0784SLQM6",
          "link": "https://www.amazon.fr/Crucial-CT500MX500SSD1-Interne-MX500-Pouces/dp/B0784SLQM6/ref=sr_1_34?keywords=ssd+kingston&qid=1648422476&sr=8-34",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71Y+q3N-z9L._AC_UL320_.jpg",
          "rating": 4.8,
          "ratings_total": 22595,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 72.74,
              "raw": "€72,74",
              "name": "72,74 €72,74€",
              "asin": "B0784SLQM6",
              "link": "https://www.amazon.fr/Crucial-CT500MX500SSD1-Interne-MX500-Pouces/dp/B0784SLQM6/ref=sr_1_34?keywords=ssd+kingston&qid=1648422476&sr=8-34"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 72.74,
            "raw": "€72,74",
            "name": "72,74 €72,74€",
            "asin": "B0784SLQM6",
            "link": "https://www.amazon.fr/Crucial-CT500MX500SSD1-Interne-MX500-Pouces/dp/B0784SLQM6/ref=sr_1_34?keywords=ssd+kingston&qid=1648422476&sr=8-34"
          }
        },
        {
          "position": 35,
          "title": "Kingston DC1500M U.2 NVMe SSD -SEDC1500M/7680G",
          "asin": "B097TM5VW1",
          "link": "https://www.amazon.fr/Kingston-DC1500M-NVMe-SEDC1500M-7680G/dp/B097TM5VW1/ref=sr_1_35?keywords=ssd+kingston&qid=1648422476&sr=8-35",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/811ErC1x7NS._AC_UL320_.jpg",
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 1583.99,
              "raw": "€1 583,99",
              "asin": "B097TM5VW1",
              "link": "https://www.amazon.fr/Kingston-DC1500M-NVMe-SEDC1500M-7680G/dp/B097TM5VW1/ref=sr_1_35?keywords=ssd+kingston&qid=1648422476&sr=8-35"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 1583.99,
            "raw": "€1 583,99",
            "asin": "B097TM5VW1",
            "link": "https://www.amazon.fr/Kingston-DC1500M-NVMe-SEDC1500M-7680G/dp/B097TM5VW1/ref=sr_1_35?keywords=ssd+kingston&qid=1648422476&sr=8-35"
          }
        },
        {
          "position": 36,
          "title": "Kingston KC400 SSDNow 256GB SATA 3 2.5 (7mm de Hauteur)",
          "asin": "B019SDOASM",
          "link": "https://www.amazon.fr/Kingston-KC400-SSDNow-256GB-Hauteur/dp/B019SDOASM/ref=sr_1_36?keywords=ssd+kingston&qid=1648422476&sr=8-36",
          "availability": {
            "raw": "Il ne reste plus que 4 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/41600Adex5L._AC_UL320_.jpg",
          "rating": 4.6,
          "ratings_total": 64,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 125.02,
              "raw": "€125,02",
              "name": "125,02 €125,02€",
              "asin": "B019SDOASM",
              "link": "https://www.amazon.fr/Kingston-KC400-SSDNow-256GB-Hauteur/dp/B019SDOASM/ref=sr_1_36?keywords=ssd+kingston&qid=1648422476&sr=8-36"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 125.02,
            "raw": "€125,02",
            "name": "125,02 €125,02€",
            "asin": "B019SDOASM",
            "link": "https://www.amazon.fr/Kingston-KC400-SSDNow-256GB-Hauteur/dp/B019SDOASM/ref=sr_1_36?keywords=ssd+kingston&qid=1648422476&sr=8-36"
          }
        },
        {
          "position": 37,
          "title": "Crucial 250Go CT250MX500SSD1(Z) SSD interne MX500-jusqu’à 560 Mo/s (3D NAND, SATA, 2,5 pouces)",
          "asin": "B0764WCXCV",
          "link": "https://www.amazon.fr/Crucial-CT250MX500SSD1-Interne-MX500-Pouces/dp/B0764WCXCV/ref=sr_1_37?keywords=ssd+kingston&qid=1648422476&sr=8-37",
          "availability": {
            "raw": "Il ne reste plus que 10 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71S38ouHxGL._AC_UL320_.jpg",
          "rating": 4.7,
          "ratings_total": 8734,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 54.99,
              "raw": "€54,99",
              "name": "54,99 €54,99€",
              "asin": "B0764WCXCV",
              "link": "https://www.amazon.fr/Crucial-CT250MX500SSD1-Interne-MX500-Pouces/dp/B0764WCXCV/ref=sr_1_37?keywords=ssd+kingston&qid=1648422476&sr=8-37"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 54.99,
            "raw": "€54,99",
            "name": "54,99 €54,99€",
            "asin": "B0764WCXCV",
            "link": "https://www.amazon.fr/Crucial-CT250MX500SSD1-Interne-MX500-Pouces/dp/B0764WCXCV/ref=sr_1_37?keywords=ssd+kingston&qid=1648422476&sr=8-37"
          }
        },
        {
          "position": 38,
          "title": "Kingston Technology KC2000 M.2 500 Go PCI Express 3.0 3D TLC NVMe",
          "asin": "B07S4WG8DS",
          "link": "https://www.amazon.fr/Kingston-KC2000-SKC2000M8-500G-2280/dp/B07S4WG8DS/ref=sr_1_38?keywords=ssd+kingston&qid=1648422476&sr=8-38",
          "availability": {
            "raw": "Il ne reste plus que 9 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71gb8KaNm7L._AC_UL320_.jpg",
          "rating": 4.4,
          "ratings_total": 253,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 139,
              "raw": "€139,00",
              "name": "139,00 €139,00€",
              "asin": "B07S4WG8DS",
              "link": "https://www.amazon.fr/Kingston-KC2000-SKC2000M8-500G-2280/dp/B07S4WG8DS/ref=sr_1_38?keywords=ssd+kingston&qid=1648422476&sr=8-38"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 139,
            "raw": "€139,00",
            "name": "139,00 €139,00€",
            "asin": "B07S4WG8DS",
            "link": "https://www.amazon.fr/Kingston-KC2000-SKC2000M8-500G-2280/dp/B07S4WG8DS/ref=sr_1_38?keywords=ssd+kingston&qid=1648422476&sr=8-38"
          }
        },
        {
          "position": 39,
          "title": "Kingston Technology A400 SSD 480 Go Serial ATA III",
          "asin": "B072C2WZ1C",
          "link": "https://www.amazon.fr/Kingston-Technology-A400-SSD-480-Go-Serial/dp/B072C2WZ1C/ref=sr_1_39?keywords=ssd+kingston&qid=1648422476&sr=8-39",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/61yvr1BhiEL._AC_UL320_.jpg",
          "rating": 4.7,
          "ratings_total": 517
        },
        {
          "position": 40,
          "title": "Kingston - SSDNow V300 - 120 Go - Disque Flash Interne",
          "asin": "B00A1ZTZOG",
          "link": "https://www.amazon.fr/Kingston-SSDNow-V300-120-Disque-Interne/dp/B00A1ZTZOG/ref=sr_1_40?keywords=ssd+kingston&qid=1648422476&sr=8-40",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81rE381KBeL._AC_UL320_.jpg",
          "rating": 4.6,
          "ratings_total": 8039
        },
        {
          "position": 41,
          "title": "Kingston KC1000 - NVMe PCIe SSD- 240G Gen3 x4 (avec carte HHHL AIC)",
          "asin": "B072ZPMR43",
          "link": "https://www.amazon.fr/Kingston-KC1000-NVMe-PCIe-carte/dp/B072ZPMR43/ref=sr_1_41?keywords=ssd+kingston&qid=1648422476&sr=8-41",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71WvS4AoehL._AC_UL320_.jpg",
          "rating": 4.2,
          "ratings_total": 58
        },
        {
          "position": 42,
          "title": "Crucial CT500P5PSSD8 SSD Interne P5 Plus 500Go (PCIe 4.0, 3D NAND, NVMe, M.2) jusqu'à 6600Mo/s",
          "asin": "B098W1NDV2",
          "link": "https://www.amazon.fr/Crucial-CT500P5PSSD8-Interne-jusqu%C3%A0-6600Mo/dp/B098W1NDV2/ref=sr_1_42?keywords=ssd+kingston&qid=1648422476&sr=8-42",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/51EnHcyBGHL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.8,
          "ratings_total": 1279,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 91.99,
              "raw": "€91,99",
              "name": "91,99 €91,99€ PVC: 109,19 €109,19€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 109.19,
              "raw": "€109,19",
              "name": "91,99 €91,99€ PVC: 109,19 €109,19€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 91.99,
            "raw": "€91,99",
            "name": "91,99 €91,99€ PVC: 109,19 €109,19€",
            "is_primary": true
          }
        },
        {
          "position": 43,
          "title": "Kingston - SSDNow V300 - Disque Flash Interne - 60 Go",
          "asin": "B00A35X6GM",
          "link": "https://www.amazon.fr/Kingston-SSDNow-Disque-Flash-Interne/dp/B00A35X6GM/ref=sr_1_43?keywords=ssd+kingston&qid=1648422476&sr=8-43",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/61+eEIUN-mL._AC_UL320_.jpg",
          "rating": 4.5,
          "ratings_total": 820
        },
        {
          "position": 44,
          "title": "Kingston SNA-BR2/35 2.5inch to 3.5inch Mounting Bracket with Screw for for Solid State Drive",
          "asin": "B00PH9X8P8",
          "link": "https://www.amazon.fr/Kingston-Sna-br2-support-fixation-semi-conducteur/dp/B00PH9X8P8/ref=sr_1_44?keywords=ssd+kingston&qid=1648422476&sr=8-44",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/31EHrf5GX6L._AC_UL320_.jpg",
          "rating": 5,
          "ratings_total": 1,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 32.99,
              "raw": "€32,99",
              "name": "32,99 €32,99€",
              "asin": "B00PH9X8P8",
              "link": "https://www.amazon.fr/Kingston-Sna-br2-support-fixation-semi-conducteur/dp/B00PH9X8P8/ref=sr_1_44?keywords=ssd+kingston&qid=1648422476&sr=8-44"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 32.99,
            "raw": "€32,99",
            "name": "32,99 €32,99€",
            "asin": "B00PH9X8P8",
            "link": "https://www.amazon.fr/Kingston-Sna-br2-support-fixation-semi-conducteur/dp/B00PH9X8P8/ref=sr_1_44?keywords=ssd+kingston&qid=1648422476&sr=8-44"
          }
        },
        {
          "position": 45,
          "title": "Mini PC Intel Core i5-8279U Processeur quadricœur 16 Go DDR4 / SSD 256 Go Mini Ordinateur de Bureau avec Windows 10, HDMI, DP et USB C, Dual Band WiFi, BT 5.1, USB 3.0 x 4",
          "asin": "B0919YV567",
          "link": "https://www.amazon.fr/Processeur-quadric%C5%93ur-Ordinateur-Bureau-Windows/dp/B0919YV567/ref=sr_1_45?keywords=ssd+kingston&qid=1648422476&sr=8-45",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/61V+d+NYZEL._AC_UL320_.jpg",
          "deal": {
            "link": "https://www.amazon.fr/gp/goldbox/",
            "badge_text": "Offre à durée limitée"
          },
          "is_prime": true,
          "rating": 4.4,
          "ratings_total": 63,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 449.65,
              "raw": "€449,65",
              "name": "Offre à durée limitée",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 529,
              "raw": "€529,00",
              "name": "Offre à durée limitée",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 449.65,
            "raw": "€449,65",
            "name": "Offre à durée limitée",
            "is_primary": true
          }
        },
        {
          "position": 46,
          "title": "Kingston SSD Data Center DC1000M- SEDC1000M/1920G,U.2 NVMe U.2, 2.5” x 15mm",
          "asin": "B085GMWWQJ",
          "link": "https://www.amazon.fr/Kingston-Center-DC1000M-SEDC1000M-1920G/dp/B085GMWWQJ/ref=sr_1_46?keywords=ssd+kingston&qid=1648422476&sr=8-46",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81MMkS5l9UL._AC_UL320_.jpg",
          "rating": 5,
          "ratings_total": 1
        },
        {
          "position": 47,
          "title": "Kingston DC1500M U.2 NVMe SSD -SEDC1500M/1920G",
          "asin": "B097TMJXYH",
          "link": "https://www.amazon.fr/Kingston-DC1500M-NVMe-SEDC1500M-1920G/dp/B097TMJXYH/ref=sr_1_47?keywords=ssd+kingston&qid=1648422476&sr=8-47",
          "availability": {
            "raw": "Il ne reste plus que 1 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81pvf1Efk+S._AC_UL320_.jpg",
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 515.64,
              "raw": "€515,64",
              "asin": "B097TMJXYH",
              "link": "https://www.amazon.fr/Kingston-DC1500M-NVMe-SEDC1500M-1920G/dp/B097TMJXYH/ref=sr_1_47?keywords=ssd+kingston&qid=1648422476&sr=8-47"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 515.64,
            "raw": "€515,64",
            "asin": "B097TMJXYH",
            "link": "https://www.amazon.fr/Kingston-DC1500M-NVMe-SEDC1500M-1920G/dp/B097TMJXYH/ref=sr_1_47?keywords=ssd+kingston&qid=1648422476&sr=8-47"
          }
        },
        {
          "position": 48,
          "title": "MOKiN M.2 NVME SSD-Adaptateur de Boîtier USB 3.1 Gen 2 (10 Gbit/s) vers Clé NVME PCIe M-Key (B+M-Key) Thunderbolt 3 Solid State Drive(Uniquement pour NVMe PCIe 2242/2260/2280), Prise en Charge UASP",
          "asin": "B08QZ58BFL",
          "link": "https://www.amazon.fr/MOKiN-SSD-Adaptateur-Bo%C3%AEtier-Thunderbolt-Uniquement/dp/B08QZ58BFL/ref=sr_1_48?keywords=ssd+kingston&qid=1648422476&sr=8-48",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/717cp1bOuuL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.4,
          "ratings_total": 539,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 27.99,
              "raw": "€27,99",
              "name": "27,99 €27,99€ PVC: 36,99 €36,99€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 36.99,
              "raw": "€36,99",
              "name": "27,99 €27,99€ PVC: 36,99 €36,99€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 27.99,
            "raw": "€27,99",
            "name": "27,99 €27,99€ PVC: 36,99 €36,99€",
            "is_primary": true
          }
        },
        {
          "position": 49,
          "title": "Verrouillable Jauge de Contour avec Niveau Torpédo, TWJ 2pcs 12cm & 25cm Copieur de Profil Contours Menuiserie Bricolage Carrelage Outil Jauge Duplication Contour - Accessoires Coupe Parquet Flottant",
          "asin": "B08SL1XGPD",
          "link": "https://www.amazon.fr/Verrouillable-TWJ-Menuiserie-Bricolage-Duplication/dp/B08SL1XGPD/ref=sr_1_49?keywords=ssd+kingston&qid=1648422476&sr=8-49",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/81pOfqkoP1L._AC_UL320_.jpg",
          "coupon": {
            "badge_text": "Économisez 8 %",
            "text": "avec coupon"
          },
          "rating": 4.4,
          "ratings_total": 260,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 14.99,
              "raw": "€14,99",
              "name": "14,99 €14,99€",
              "asin": "B08SL1XGPD",
              "link": "https://www.amazon.fr/Verrouillable-TWJ-Menuiserie-Bricolage-Duplication/dp/B08SL1XGPD/ref=sr_1_49?keywords=ssd+kingston&qid=1648422476&sr=8-49"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 14.99,
            "raw": "€14,99",
            "name": "14,99 €14,99€",
            "asin": "B08SL1XGPD",
            "link": "https://www.amazon.fr/Verrouillable-TWJ-Menuiserie-Bricolage-Duplication/dp/B08SL1XGPD/ref=sr_1_49?keywords=ssd+kingston&qid=1648422476&sr=8-49"
          }
        },
        {
          "position": 50,
          "title": "Kingston DataTraveler 100 G3 -DT100G3/32GB-2P ( 2 Pièces ) USB 3.0 Clé USB , 32 Go, Noir",
          "asin": "B081PQDGV5",
          "link": "https://www.amazon.fr/Kingston-DataTraveler-DT100G3-32GB-2P-Pi%C3%A8ces/dp/B081PQDGV5/ref=sr_1_50?keywords=ssd+kingston&qid=1648422476&sr=8-50",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71Gp56sDukL._AC_UL320_.jpg",
          "rating": 4.6,
          "ratings_total": 2001
        },
        {
          "position": 51,
          "title": "SupaHub Carte PCI-E vers USB 3.0, 5 ports USB 3.0, carte PCI Express USB 3.1 Gen1, bande passante jusqu'à 5 Gbps, extension de 2 ports USB 3.0 en façade",
          "asin": "B0937126PY",
          "link": "https://www.amazon.fr/SupaHub-ports-Express-passante-extension/dp/B0937126PY/ref=sr_1_51?keywords=ssd+kingston&qid=1648422476&sr=8-51",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71fWRTO5uuS._AC_UL320_.jpg",
          "rating": 4.4,
          "ratings_total": 81,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 23.99,
              "raw": "€23,99",
              "name": "23,99 €23,99€",
              "asin": "B0937126PY",
              "link": "https://www.amazon.fr/SupaHub-ports-Express-passante-extension/dp/B0937126PY/ref=sr_1_51?keywords=ssd+kingston&qid=1648422476&sr=8-51"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 23.99,
            "raw": "€23,99",
            "name": "23,99 €23,99€",
            "asin": "B0937126PY",
            "link": "https://www.amazon.fr/SupaHub-ports-Express-passante-extension/dp/B0937126PY/ref=sr_1_51?keywords=ssd+kingston&qid=1648422476&sr=8-51"
          }
        },
        {
          "position": 52,
          "title": "Ziyituod 6 Pack Derniers Kits PCI-E Riser Express 16X à 1X (6 Broches / MOLEX / SATA) avec Extension Graphique LED Ethereum ETH Mining Powered Gpu Riser Card ， Câble USB 3.0 60 cm （6PCS）",
          "asin": "B094FNB4RF",
          "link": "https://www.amazon.fr/Ziyituod-Derniers-Riser-Extension-Graphique/dp/B094FNB4RF/ref=sr_1_52?keywords=ssd+kingston&qid=1648422476&sr=8-52",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71RWsQJrSEL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.2,
          "ratings_total": 129,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 39.9,
              "raw": "€39,90",
              "name": "39,90 €39,90€",
              "asin": "B094FNB4RF",
              "link": "https://www.amazon.fr/Ziyituod-Derniers-Riser-Extension-Graphique/dp/B094FNB4RF/ref=sr_1_52?keywords=ssd+kingston&qid=1648422476&sr=8-52"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 39.9,
            "raw": "€39,90",
            "name": "39,90 €39,90€",
            "asin": "B094FNB4RF",
            "link": "https://www.amazon.fr/Ziyituod-Derniers-Riser-Extension-Graphique/dp/B094FNB4RF/ref=sr_1_52?keywords=ssd+kingston&qid=1648422476&sr=8-52"
          }
        },
        {
          "position": 53,
          "title": "Samsung 8GB DDR3 So-DIMM Module de mémoire 8 Go 1600 MHz - Modules de mémoire (8 Go, 1 x 8 Go, DDR3, 1600 MHz, 204-pin So-DIMM)",
          "asin": "B00KEAEX54",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0360655EOGL89LNSNLB&url=%2FSamsung-SO-DIMM-1600MHz-module-m%25C3%25A9moire%2Fdp%2FB00KEAEX54%2Fref%3Dsr_1_53_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-53-spons%26psc%3D1%26smid%3DA2NSWM0XFATW3G&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf",
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/41Lnth2592L._AC_UL320_.jpg",
          "rating": 4.7,
          "ratings_total": 810,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 39.54,
              "raw": "€39,54",
              "name": "39,54 €39,54€ Ancien: 45,80 €45,80€",
              "is_primary": true
            },
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 45.8,
              "raw": "€45,80",
              "name": "39,54 €39,54€ Ancien: 45,80 €45,80€",
              "is_rrp": true
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 39.54,
            "raw": "€39,54",
            "name": "39,54 €39,54€ Ancien: 45,80 €45,80€",
            "is_primary": true
          }
        },
        {
          "position": 54,
          "title": "QUMOX 8Go(2x 4Go) DDR3 1600 PC3-12800 PC-12800 (240 PIN) DIMM bureau mémoire CL9 XMP prêt",
          "asin": "B013LD3LX0",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0642087133CWY1R981UY&url=%2FQUMOX-PC3-12800-PC-12800-Bureau-M%25C3%25A9moire%2Fdp%2FB013LD3LX0%2Fref%3Dsr_1_54_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-54-spons%26psc%3D1%26smid%3DA1M7FRYHPPPM8E&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf",
          "availability": {
            "raw": "Il ne reste plus que 6 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/71OK3xHvaxL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.3,
          "ratings_total": 247,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 39.69,
              "raw": "€39,69",
              "name": "39,69 €39,69€",
              "asin": "B013LD3LX0",
              "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0642087133CWY1R981UY&url=%2FQUMOX-PC3-12800-PC-12800-Bureau-M%25C3%25A9moire%2Fdp%2FB013LD3LX0%2Fref%3Dsr_1_54_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-54-spons%26psc%3D1%26smid%3DA1M7FRYHPPPM8E&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 39.69,
            "raw": "€39,69",
            "name": "39,69 €39,69€",
            "asin": "B013LD3LX0",
            "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0642087133CWY1R981UY&url=%2FQUMOX-PC3-12800-PC-12800-Bureau-M%25C3%25A9moire%2Fdp%2FB013LD3LX0%2Fref%3Dsr_1_54_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-54-spons%26psc%3D1%26smid%3DA1M7FRYHPPPM8E&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
          }
        },
        {
          "position": 55,
          "title": "MacWay - Mémoire RAM 16 Go (2 x 8 Go) DDR3 SODIMM 1066 MHz PC3-8500",
          "asin": "B01GIHFOGI",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0391405115XIJP08LUPH&url=%2FMacWay-M%25C3%25A9moire-DDR3-SODIMM-PC3-8500%2Fdp%2FB01GIHFOGI%2Fref%3Dsr_1_55_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-55-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf",
          "availability": {
            "raw": "Il ne reste plus que 6 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/61E29HeMIAL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.4,
          "ratings_total": 7,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 70.21,
              "raw": "€70,21",
              "name": "70,21 €70,21€",
              "asin": "B01GIHFOGI",
              "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0391405115XIJP08LUPH&url=%2FMacWay-M%25C3%25A9moire-DDR3-SODIMM-PC3-8500%2Fdp%2FB01GIHFOGI%2Fref%3Dsr_1_55_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-55-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 70.21,
            "raw": "€70,21",
            "name": "70,21 €70,21€",
            "asin": "B01GIHFOGI",
            "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0391405115XIJP08LUPH&url=%2FMacWay-M%25C3%25A9moire-DDR3-SODIMM-PC3-8500%2Fdp%2FB01GIHFOGI%2Fref%3Dsr_1_55_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-55-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
          }
        },
        {
          "position": 56,
          "title": "MacWay - Mémoire RAM 64 Go (2 x 32 Go) DDR4 SODIMM 2666 MHz PC4-21300",
          "asin": "B07KLW2M9S",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0391861V1W6RL4FDTG3&url=%2FMacWay-M%25C3%25A9moire-DDR4-SODIMM-PC4-21300%2Fdp%2FB07KLW2M9S%2Fref%3Dsr_1_56_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-56-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf",
          "availability": {
            "raw": "Il ne reste plus que 15 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/610Llp9hiKL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 5,
          "ratings_total": 1,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 294.55,
              "raw": "€294,55",
              "name": "294,55 €294,55€",
              "asin": "B07KLW2M9S",
              "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0391861V1W6RL4FDTG3&url=%2FMacWay-M%25C3%25A9moire-DDR4-SODIMM-PC4-21300%2Fdp%2FB07KLW2M9S%2Fref%3Dsr_1_56_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-56-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 294.55,
            "raw": "€294,55",
            "name": "294,55 €294,55€",
            "asin": "B07KLW2M9S",
            "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0391861V1W6RL4FDTG3&url=%2FMacWay-M%25C3%25A9moire-DDR4-SODIMM-PC4-21300%2Fdp%2FB07KLW2M9S%2Fref%3Dsr_1_56_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-56-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
          }
        },
        {
          "position": 57,
          "title": "Macway Mémoire 16 Go (2 x 8 Go) SODIMM 1600 MHz DDR3 PC3-12800",
          "asin": "B00CH1SQC4",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0003811353VOTPK7D9BU&url=%2FMacway-M%25C3%25A9moire-SODIMM-1600-PC3-12800%2Fdp%2FB00CH1SQC4%2Fref%3Dsr_1_57_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-57-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf",
          "availability": {
            "raw": "Il ne reste plus que 15 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/61BMeJA5xwL._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 5,
          "ratings_total": 10,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 73.39,
              "raw": "€73,39",
              "name": "73,39 €73,39€",
              "asin": "B00CH1SQC4",
              "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0003811353VOTPK7D9BU&url=%2FMacway-M%25C3%25A9moire-SODIMM-1600-PC3-12800%2Fdp%2FB00CH1SQC4%2Fref%3Dsr_1_57_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-57-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 73.39,
            "raw": "€73,39",
            "name": "73,39 €73,39€",
            "asin": "B00CH1SQC4",
            "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0003811353VOTPK7D9BU&url=%2FMacway-M%25C3%25A9moire-SODIMM-1600-PC3-12800%2Fdp%2FB00CH1SQC4%2Fref%3Dsr_1_57_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-57-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
          }
        },
        {
          "position": 58,
          "title": "Macway Mémoire 16 Go (2 x 8 Go) SODIMM 1333 MHz DDR3 PC3-10600",
          "asin": "B00CH1SGVA",
          "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0004055QNDJ4T02E5CG&url=%2FMacway-M%25C3%25A9moire-SODIMM-1333-PC3-10600%2Fdp%2FB00CH1SGVA%2Fref%3Dsr_1_58_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-58-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf",
          "availability": {
            "raw": "Il ne reste plus que 15 exemplaire(s) en stock."
          },
          "categories": [
            {
              "name": "Toutes nos catégories",
              "id": "aps"
            }
          ],
          "image": "https://m.media-amazon.com/images/I/61K+li9l7ML._AC_UL320_.jpg",
          "is_prime": true,
          "rating": 4.8,
          "ratings_total": 8,
          "sponsored": true,
          "prices": [
            {
              "symbol": "€",
              "currency": "EUR",
              "value": 70.21,
              "raw": "€70,21",
              "name": "70,21 €70,21€",
              "asin": "B00CH1SGVA",
              "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0004055QNDJ4T02E5CG&url=%2FMacway-M%25C3%25A9moire-SODIMM-1333-PC3-10600%2Fdp%2FB00CH1SGVA%2Fref%3Dsr_1_58_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-58-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
            }
          ],
          "price": {
            "symbol": "€",
            "currency": "EUR",
            "value": 70.21,
            "raw": "€70,21",
            "name": "70,21 €70,21€",
            "asin": "B00CH1SGVA",
            "link": "https://www.amazon.fr/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_aps_sr_pg1_1?ie=UTF8&adId=A0004055QNDJ4T02E5CG&url=%2FMacway-M%25C3%25A9moire-SODIMM-1333-PC3-10600%2Fdp%2FB00CH1SGVA%2Fref%3Dsr_1_58_sspa%3Fkeywords%3Dssd%2Bkingston%26qid%3D1648422476%26sr%3D8-58-spons%26psc%3D1&qualifier=1648422477&id=6904834841187049&widgetName=sp_btf"
          }
        }
      ],
      "related_searches": [
        {
          "query": "ssd",
          "link": "https://www.amazon.fr/s/?k=ssd&ref=sugsr_0_4&pd_rd_w=EDCBR&pf_rd_p=b5e5b28a-a23e-4be5-9bc9-17172577b539&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=6eaf3306-7e0d-4377-87d4-7aa9df94d971&pd_rd_wg=xPUuT&qid=1648422476"
        },
        {
          "query": "ssd crucial",
          "link": "https://www.amazon.fr/s/?k=ssd+crucial&ref=sugsr_3_1&pd_rd_w=EDCBR&pf_rd_p=b5e5b28a-a23e-4be5-9bc9-17172577b539&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=6eaf3306-7e0d-4377-87d4-7aa9df94d971&pd_rd_wg=xPUuT&qid=1648422476"
        },
        {
          "query": "ssd kingston 240go",
          "link": "https://www.amazon.fr/s/?k=ssd+kingston+240go&ref=sugsr_1_4&pd_rd_w=EDCBR&pf_rd_p=b5e5b28a-a23e-4be5-9bc9-17172577b539&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=6eaf3306-7e0d-4377-87d4-7aa9df94d971&pd_rd_wg=xPUuT&qid=1648422476"
        },
        {
          "query": "ssd 1to",
          "link": "https://www.amazon.fr/s/?k=ssd+1to&ref=sugsr_4_1&pd_rd_w=EDCBR&pf_rd_p=b5e5b28a-a23e-4be5-9bc9-17172577b539&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=6eaf3306-7e0d-4377-87d4-7aa9df94d971&pd_rd_wg=xPUuT&qid=1648422476"
        },
        {
          "query": "ssd samsung",
          "link": "https://www.amazon.fr/s/?k=ssd+samsung&ref=sugsr_2_2&pd_rd_w=EDCBR&pf_rd_p=b5e5b28a-a23e-4be5-9bc9-17172577b539&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=6eaf3306-7e0d-4377-87d4-7aa9df94d971&pd_rd_wg=xPUuT&qid=1648422476"
        },
        {
          "query": "ssd kingston 1to",
          "link": "https://www.amazon.fr/s/?k=ssd+kingston+1to&ref=sugsr_5_1&pd_rd_w=EDCBR&pf_rd_p=b5e5b28a-a23e-4be5-9bc9-17172577b539&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=6eaf3306-7e0d-4377-87d4-7aa9df94d971&pd_rd_wg=xPUuT&qid=1648422476"
        }
      ],
      "related_brands": [
        {
          "logo": "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2dfd03e5-00f5-407d-960b-9edd2992f401._CR0,0,3145,1058_AC_SX139_SY100_QL70_.png",
          "image": "https://m.media-amazon.com/images/I/51kzLpf161L._AC_SR139,139_QL70_.jpg",
          "title": "Mémoire RAM de qualité et SSD de Flexx MemoryEn savoir plus sur FLEXX",
          "link": "https://aax-eu.amazon.fr/x/c/QoLg64Qql35IEDCyI44v92cAAAF_zaLdLwMAAAH2Aa9fu70/https://www.amazon.fr/stores/page/86B6493B-FF54-446F-8980-4F27A0476F74/?_encoding=UTF8&store_ref=SB_A0097776YMB4XE933LP&pd_rd_plhdr=t&aaxitk=36c8d2b6e05628fbd90f358751d4b51d&hsa_cr_id=8182838690902&lp_asins=B08CHGJ3MC&lp_query=ssd%20kingston&lp_slot=desktop-hsa-3psl&ref_=sbx_be_s_3psl_mbd_cta&pd_rd_w=02eDc&pf_rd_p=b85706ee-d48a-4806-bec3-90da77669ddd&pd_rd_wg=o1e7m&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=a517f2d2-10da-4942-a137-e4a865ae4358",
          "store_link": "https://www.amazon.fr/stores/page/86B6493B-FF54-446F-8980-4F27A0476F74",
          "store_id": "86B6493B-FF54-446F-8980-4F27A0476F74",
          "store_name": "En savoir plus sur FLEXX"
        },
        {
          "logo": "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7f277cad-ec54-47c4-8c00-89cf1bd0042e._AC_SX139_SY100_QL70_.png",
          "image": "https://m.media-amazon.com/images/I/71MxxF3SUzL._AC_SR139,139_QL70_.jpg",
          "title": "L'expert des solutions de stockageEn savoir plus sur EMTEC",
          "link": "https://aax-eu.amazon.fr/x/c/QlHAZgFzapzpYXKiOyUfywAAAAF_zaLdLwMAAAH2AZJm_t4/https://www.amazon.fr/stores/page/22C03A45-32E5-43BA-B052-96503C6583D2/?_encoding=UTF8&store_ref=SB_A03803612ANJM0FFCCLM1&pd_rd_plhdr=t&aaxitk=57c00d7ebc124b0e66b3f80dcee8359c&hsa_cr_id=9022159450602&lp_asins=B08NTFPCKY%2CB096BLXQP2%2CB07XVSDWYQ&lp_query=ssd%20kingston&lp_slot=desktop-hsa-3psl&ref_=sbx_be_s_3psl_mbd_cta&pd_rd_w=02eDc&pf_rd_p=b85706ee-d48a-4806-bec3-90da77669ddd&pd_rd_wg=o1e7m&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=a517f2d2-10da-4942-a137-e4a865ae4358",
          "store_link": "https://www.amazon.fr/stores/page/22C03A45-32E5-43BA-B052-96503C6583D2",
          "store_id": "22C03A45-32E5-43BA-B052-96503C6583D2",
          "store_name": "En savoir plus sur EMTEC"
        },
        {
          "logo": "https://m.media-amazon.com/images/S/gladiator-image-upload-prod/5/A13V1IB3VIYZZH/62e7380858fb548b6c6054e056a30eef._CR0,0,0,0_AC_SX139_SY100_QL70_.jpg",
          "image": "https://m.media-amazon.com/images/I/51EnHcyBGHL._AC_SR139,139_QL70_.jpg",
          "title": "Interface NVMe. Extra-rapide. Extraordinaire.En savoir plus sur Crucial SSDs Interne",
          "link": "https://aax-eu.amazon.fr/x/c/QgMSJOmj0Q0JxviCy0yiBZoAAAF_zaLdLwMAAAH2AYFW_XY/https://www.amazon.fr/stores/page/AE879611-546A-493E-B7A6-39C90DDF8BBE/?_encoding=UTF8&store_ref=SB_A09522661FHNP1UVIXVO6&pd_rd_plhdr=t&aaxitk=181981ad4f35e41f5837feb74fcbbae0&hsa_cr_id=3084953530702&lp_asins=B098W1NDV2%2CB098WL46RS%2CB098WKQRDL&lp_query=ssd%20kingston&lp_slot=desktop-hsa-3psl&ref_=sbx_be_s_3psl_mbd_cta&pd_rd_w=02eDc&pf_rd_p=b85706ee-d48a-4806-bec3-90da77669ddd&pd_rd_wg=o1e7m&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=a517f2d2-10da-4942-a137-e4a865ae4358",
          "store_link": "https://www.amazon.fr/stores/page/AE879611-546A-493E-B7A6-39C90DDF8BBE",
          "store_id": "AE879611-546A-493E-B7A6-39C90DDF8BBE",
          "store_name": "En savoir plus sur Crucial SSDs Interne"
        }
      ],
      "pagination": {
        "total_results": 113,
        "current_page": 1,
        "next_page_link": "https://www.amazon.fr/s?k=ssd+kingston&page=2&language=fr_FR&qid=1648422476&ref=sr_pg_2",
        "total_pages": 3
      },
      "refinements": {
        "departments": [
          {
            "name": "Tout",
            "value": "n/14076178031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A14076178031&dc&language=fr_FR&qid=1648422476&rnid=1703605031&ref=sr_nr_n_1",
            "refinement_display_name": "Departments"
          },
          {
            "name": "SSD internes",
            "value": "n/430354031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A14076178031%2Cn%3A430354031&dc&language=fr_FR&qid=1648422476&rnid=1703605031&ref=sr_nr_n_2",
            "refinement_display_name": "Departments"
          }
        ],
        "reviews": [
          {
            "name": "4 étoiles et plus",
            "value": "p_72/437873031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=p_72%3A437873031&dc&language=fr_FR&qid=1648422476&rnid=437872031&ref=sr_nr_p_72_1",
            "refinement_display_name": "Reviews"
          },
          {
            "name": "3 étoiles et plus",
            "value": "p_72/437874031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=p_72%3A437874031&dc&language=fr_FR&qid=1648422476&rnid=437872031&ref=sr_nr_p_72_2",
            "refinement_display_name": "Reviews"
          },
          {
            "name": "2 étoiles et plus",
            "value": "p_72/437875031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=p_72%3A437875031&dc&language=fr_FR&qid=1648422476&rnid=437872031&ref=sr_nr_p_72_3",
            "refinement_display_name": "Reviews"
          },
          {
            "name": "1 étoile et plus",
            "value": "p_72/437876031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=p_72%3A437876031&dc&language=fr_FR&qid=1648422476&rnid=437872031&ref=sr_nr_p_72_4",
            "refinement_display_name": "Reviews"
          }
        ],
        "price": [
          {
            "name": "Jusqu'à 20 EUR",
            "value": "n:340858031||p_36/428406031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A340858031%2Cp_36%3A428406031&dc&language=fr_FR&qid=1648422476&rnid=428393031&ref=sr_nr_p_36_1",
            "refinement_display_name": "Price"
          },
          {
            "name": "20 à 50 EUR",
            "value": "n:340858031||p_36/428407031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A340858031%2Cp_36%3A428407031&dc&language=fr_FR&qid=1648422476&rnid=428393031&ref=sr_nr_p_36_2",
            "refinement_display_name": "Price"
          },
          {
            "name": "50 à 100 EUR",
            "value": "n:340858031||p_36/428408031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A340858031%2Cp_36%3A428408031&dc&language=fr_FR&qid=1648422476&rnid=428393031&ref=sr_nr_p_36_3",
            "refinement_display_name": "Price"
          },
          {
            "name": "100 à 200 EUR",
            "value": "n:340858031||p_36/428409031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A340858031%2Cp_36%3A428409031&dc&language=fr_FR&qid=1648422476&rnid=428393031&ref=sr_nr_p_36_4",
            "refinement_display_name": "Price"
          },
          {
            "name": "200 à 500 EUR",
            "value": "n:340858031||p_36/428410031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A340858031%2Cp_36%3A428410031&dc&language=fr_FR&qid=1648422476&rnid=428393031&ref=sr_nr_p_36_5",
            "refinement_display_name": "Price"
          },
          {
            "name": "Toutes les économies",
            "value": "p_n_deal_type/26902977031",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=p_n_deal_type%3A26902977031&dc&language=fr_FR&qid=1648422476&rnid=26902974031&ref=sr_nr_p_n_deal_type_1",
            "refinement_display_name": "Price"
          }
        ],
        "brand": [
          {
            "name": "Kingston",
            "value": "n:340858031||p_89/Kingston",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A340858031%2Cp_89%3AKingston&dc&language=fr_FR&qid=1648422476&rnid=1680780031&ref=sr_nr_p_89_1",
            "refinement_display_name": "Brand"
          },
          {
            "name": "Crucial",
            "value": "n:340858031||p_89/Crucial",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A340858031%2Cp_89%3ACrucial&dc&language=fr_FR&qid=1648422476&rnid=1680780031&ref=sr_nr_p_89_2",
            "refinement_display_name": "Brand"
          },
          {
            "name": "Kingston Technology",
            "value": "n:340858031||p_89/Kingston Technology",
            "link": "https://www.amazon.fr/s?k=ssd+kingston&rh=n%3A340858031%2Cp_89%3AKingston+Technology&dc&language=fr_FR&qid=1648422476&rnid=1680780031&ref=sr_nr_p_89_3",
            "refinement_display_name": "Brand"
          }
        ]
      },
      "ad_blocks": [
        {
          "campaign_id": "6410878720002",
          "brand_logo": "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/7f277cad-ec54-47c4-8c00-89cf1bd0042e._AC_SX130_SY60_QL70_.png",
          "advertiser_id": "8143555390602",
          "ad_id": "8143555390602",
          "link": "https://aax-eu.amazon.fr/x/c/QlnSwLTzfeMMyf-dKMoV_0AAAAF_zaLc4AMAAAH2ATuRbd4/https://www.amazon.fr/stores/page/22C03A45-32E5-43BA-B052-96503C6583D2/?_encoding=UTF8&store_ref=SB_A03803612ANJM0FFCCLM1&pd_rd_plhdr=t&aaxitk=684c5e379ae739979edadf4dd3506da1&hsa_cr_id=1799769730602&lp_asins=B08NTFPCKY%2CB096BLXQP2%2CB07XVSDWYQ&lp_query=ssd%20kingston&lp_slot=auto-sparkle-hsa-tetris&ref_=sbx_be_s_sparkle_mcd_bkgd&pd_rd_w=EtfGR&pf_rd_p=f67c68b0-d1c8-4186-9fdf-53964bd23808&pd_rd_wg=aIIk3&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=cb04cb49-21ae-434e-bb05-d6c370b5d464",
          "title": "L'expert des solutions de stockage",
          "store_link": "https://www.amazon.fr/stores/page/22C03A45-32E5-43BA-B052-96503C6583D2/?_encoding=UTF8&store_ref=SB_A03803612ANJM0FFCCLM1&pd_rd_plhdr=t&aaxitk=684c5e379ae739979edadf4dd3506da1&hsa_cr_id=1799769730602&lp_asins=B08NTFPCKY%2CB096BLXQP2%2CB07XVSDWYQ&lp_query=ssd%20kingston&lp_slot=auto-sparkle-hsa-tetris&ref_=sbx_be_s_sparkle_mcd_cta&pd_rd_w=EtfGR&pf_rd_p=f67c68b0-d1c8-4186-9fdf-53964bd23808&pd_rd_wg=aIIk3&pf_rd_r=T7BB112H4T0S38QWCW0K&pd_rd_r=cb04cb49-21ae-434e-bb05-d6c370b5d464",
          "store_id": "22C03A45-32E5-43BA-B052-96503C6583D2",
          "store_name": "En savoir plus sur EMTEC",
          "products": [
            {
              "asin": "B08NTFPCKY",
              "link": "https://www.amazon.fr/dp/B08NTFPCKY",
              "image": "https://m.media-amazon.com/images/I/71MxxF3SUzL._AC_SR180,120_QL70_.jpg",
              "title": "Emtec ECSSD2TX150 SSD Interne 2.5'' - Disque Dur SSD Interne - SATA X150 Power Plus 3D NAND 2TB",
              "is_prime": true,
              "rating": 4.5,
              "ratings_total": 46
            },
            {
              "asin": "B096BLXQP2",
              "link": "https://www.amazon.fr/dp/B096BLXQP2",
              "image": "https://m.media-amazon.com/images/I/518pwXM5X7S._AC_SR180,120_QL70_.jpg",
              "title": "Emtec Disque SSD Externe X210 Elite 1To - Disque Dur SSD Rétrocompatible USB 3.2 Gen1 et 2.0 - Technologie 3D NAND Flash - Câble USB-C 3.2 Gen2 vers USB-A et Coque de Protection Silicone Inclus Noir",
              "is_prime": true,
              "rating": 4.5,
              "ratings_total": 43
            },
            {
              "asin": "B07XVSDWYQ",
              "link": "https://www.amazon.fr/dp/B07XVSDWYQ",
              "image": "https://m.media-amazon.com/images/I/81kCFrhnPTL._AC_SR180,120_QL70_.jpg",
              "title": "Emtec ECSSD512GX200 - Disque SSDPortable - 3.1 Gen1 - Collection X200 Power Plus - 3D NAND - 512 Gb",
              "rating": 4.5,
              "ratings_total": 45
            }
          ]
        }
      ]
    }
    </details>



Le problème que j’aurais avec cette API est limitée sur le nombre d’appels total si on veut rester dans la version gratuite, des frais sont donc à prévoir si on compte faire plus de 100 appels... Ce qui va largement être atteint (j’en suis déjà à 5 requêtes faites à la main pour effectuer mes tests).

Cela coûtera 9$ par mois (hors taxes j’imagine) pour avoir accès à 500 requêtes par mois.

![image-20220328011230190](C:\Users\tocra\AppData\Roaming\Typora\typora-user-images\image-20220328011230190.png)



### Scrapping

​	Autrement, nous pourrions simplement effectuer du **scrapping HTML** sur le site... Mais cela nous imposerait tout un jeu du *chat et de la souris* avec la détection de robots d’Amazon, leur présentation de site qui peut varier avec le temps, des balises qui changeraient de nom... C’est un jeu qui s’avèrera très compliqué sans doute, mais au moins il ne nous imposera pas de payer pour récupérer les informations.