import {config} from "dotenv";

// config({path:'.env'}); //as we do not have only one env file instead
config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});

export const{
     PORT,
     DB_URI,
     NODE_ENV,
     JWT_SECRET,
     JWT_EXPIRES_IN,
     ARCJET_ENV,
     ARCJET_KEY,
     QSTASH_TOKEN,
     QSTASH_URL,
     SERVER_URL,
     EMAIL_PASSWORD
    }=process.env;
