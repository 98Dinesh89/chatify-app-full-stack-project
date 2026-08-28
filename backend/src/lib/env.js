import "dotenv/config";

export const ENV = {
    PORT: process.env.PORT,

    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_URL: process.env.MONGO_URL,

    JWT_SECRET: process.env.JWT_SECRET,

    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
    CLIENT_URL: process.env.CLIENT_URL
}