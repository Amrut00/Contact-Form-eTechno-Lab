# Project Setup Guide

## Cloning the Project
To get started, clone the repository from GitHub:
```sh
git clone <repository_url>
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
   ```
2. Ensure the `.env` file contains the correct database credentials.
3. Run database migrations (if applicable) or ensure the database schema is set up correctly.

## Running the Project
Start the backend server:
```sh
npm start
```

Your project should now be up and running! 🚀

