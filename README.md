# prime-airline-external-api

## How to start

```
npm i
npm run dev
```

## Endpoints

```JSON
{
  "swagger": "2.0",
  "info": {
    "title": "My API",
    "description": "Description",
    "version": "1.0.0"
  },
  "host": "localhost:3000",
  "basePath": "/",
  "schemes": [
    "http"
  ],
  "paths": {
    "/book": {
      "post": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/booking-history": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "userId",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      }
    },
    "/cancel-book": {
      "post": {
        "description": "",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "type": "object",
              "properties": {
                "bookingId": {
                  "example": "any"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    },
    "/flights": {
      "get": {
        "description": "",
        "parameters": [
          {
            "name": "currency",
            "in": "query",
            "type": "string"
          },
          {
            "name": "date",
            "in": "query",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK"
          },
          "400": {
            "description": "Bad Request"
          }
        }
      }
    },
    "/flights/currencies": {
      "get": {
        "description": "",
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      }
    }
  }
}
```