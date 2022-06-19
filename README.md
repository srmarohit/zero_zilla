
# CRUD Agency-Client 

## Installation

Install my-project with git and npm

```bash
   npm install 
```

```bash
   npm run dev
```

## Steps

- Once Clone the repository

- First install packages

- SET ENVIRONMENT VARIABLE.
       - MONGO_DB_LOCAL
       - PORT

- Run the command
       - npm run dev       

## API Reference
#for localhost
 http://localhost:5000/

#### Get all items

```http
  GET api/v1/client/
```

| Headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `authorization` | `string` | **Required**. Your API token |

#### Put item

```http
  PUT /api/v1/client/${ClientId}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ClientId`      | `string` | **Required**. Id of client to fetch |
| `authorization` | `string` | **Required**. Your API token |

#### add new Agency and Client
```http
  POST /api/v1/client/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Require Object`      | `Object` | **Required**. 


## Authors

- [ROHIT SHARMA](https://www.github.com/srmarohit)

