import dotenv from "dotenv"

dotenv.config()

export const config = {
    db : {
        URI : process.env.DB_URI || "mongodb+srv://rmonterrosa:dObSxsR5BYz6LiV0@miprimercluster.87lyo.mongodb.net/nodejs"      

    },
    server : {
        PORT : process.env.PORT || 4000
    }
}