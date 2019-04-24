# Cruizer Reservation

Cruizer reservation is a vehicle service reservation system build for Cruizer
Service Stations. 

## How To Setup

+ Clone the repository
+ Build and run backend
  1. Navigate to backend 
      ```bash
      cd _repository_/backend
      ```
  2. Install dependencies
      ```bash
      npm install
      ```
  3. Setup the configrations\
    Database and other configurations are imported from ```_repository_/backend/.env``` file.
    Create the above mentioned file with following content while replacing respective values.
      ```
      DB_HOST = <your_database_host>
      DB_CLUSTER = <your_database_cluster>
      DB_USER = <your_database_username>
      DB_PASS = <your_database_password>
      DB_NAME = <your_database_name>
      SECRET = <secrect_key_for_jwt_issuing> // eg. 'cruizer@123'
      ``` 
  4. Serve application
      ```bash
      npm run start
      ```