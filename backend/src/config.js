import dotenv from "dotenv"

dotenv.config()

export const config = {
    db : {
        URI : process.env.DB_URI || "mongodb://localhost:27017/NODE"
    },
    server : {
        PORT : process.env.PORT || 4000
    }
}