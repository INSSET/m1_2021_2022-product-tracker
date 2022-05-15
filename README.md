
# Product Tracker Orchestrator

This micro service handles the initial price update as well as the update of all prices stored in the database.

### Intial price update

To get the product update you have to call this entrypoint with a payload that looks like this :

```http
  POST /getPrice
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `sellerId`| `string` | **Required** Amazon or Aliexpress|
| `productId`| `string` | **Required** ProductId in database|
| `productUrl`| `string` | **Required** productUrl in database|





### Update all prices command

You'll also find in this micro service a command that updates all product's prices. 
```bash
  cd /path_to_project
  php bin/console app:update-prices
```
    
We will need to configure a crontab so it can run every X hours
