Arithmetic API

This endpoint performs arithmetic opeartions like addition, substraction, multiplication and division, based on the operator type provided in the request. It performs the operation then logs and stores the result in the database with execution time.


Endpoint
POST/api/arithmetic/operation

Request Body
number1: Is the first number of the operation and is of type number
number2: Is the second number of the operation and is of type number
type: Is the type of operation to perform (+, -, *, /) and is type string

example 
{
    "number1": 3,
    "number2": 5,
    "type": "*"
}

Response
The API sends a response in json format with the result of the arithmetic operation, plus the status as well as timestamp and the processTime of the operation.

Response Body
{
    "status": "success",
  "operation": "*",
  "inputs": {
    "number1": 3,
    "number2": 5
  },
  "result": 15,
  "timestamp": "2025-01-21T10:00:00.000Z",
  "responseTime": "0.12ms"
}

Database Logging
Each successful operation performed is logged into the database with the following fields:
operation,
inputs,
resutl,
timestamp,
responseTime

