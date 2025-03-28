import dotenv from "dotenv"

dotenv.config()

export const config = {
    db : {
        URI : process.env.DB_URI

    },
    server : {
        PORT : process.env.PORT
    },
    JWT : {
        SECRET : process.env.SECRET || "qwerty23", 
        EXPIRES : process.env.JWT_EXPIRES || "30d"
    },
    ADMIN:{
        PASSWORD : process.env.PASSWORD,
        EMAIL : process.env.ADMIN_EMAIL
    }

    
}