# Project Setup Guide

## Cloning the Project
To get started, clone the repository from GitHub:
```sh
git clone https://github.com/Amrut00/Contact-Form-eTechno-Lab.git
cd <project_directory>
```

## Setting Up the Environment Variables
Create a `.env` file inside the `backend` directory and add the following environment variables:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=<your_database_password>
DB_NAME=submissions_db

EMAIL_USER=<your_email>
EMAIL_PASS=<your_email_password>

TWILIO_SID=<your_twilio_sid>
TWILIO_AUTH_TOKEN=<your_twilio_auth_token>
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
ADMIN_WHATSAPP_NUMBER=whatsapp:+<your_admin_whatsapp_number>
```
Replace `<your_database_password>`, `<your_email>`, `<your_email_password>`, `<your_twilio_sid>`, `<your_twilio_auth_token>`, and `<your_admin_whatsapp_number>` with the appropriate values.
You need to setup your Twilo account with your whatsapp number.

## Installing Dependencies
Navigate to the `backend` directory and install the required dependencies:
```sh
cd backend
npm install
```

## Database Setup
1. Open MySQL and create a new database:
   ```sql
   CREATE DATABASE submissions_db;
   USE submissions_db;
   CREATE TABLE submissions (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL,
       mobile VARCHAR(15) NOT NULL,
       dob DATE NOT NULL,
       message TEXT NOT NULL,
       submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
2. Ensure the `.env` file contains the correct database credentials.
3. Run database migrations (if applicable) or ensure the database schema is set up correctly.

## Running the Project
1. Start the backend server:
   ```sh
   nodemon index.js
   ```
2. Open the /frontend/index.html file in a browser


Your project should now be up and running! 🚀

