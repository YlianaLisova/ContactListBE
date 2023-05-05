module.exports = {
    PORT:process.env.PORT || 5000,
    MONGO_URL:process.env.MONGO_URL,

    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'ats',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'rts',
    FORGOT_PASS_ACTION_SECRET: process.env.FORGOT_PASS_ACTION_SECRET || 'fg_pass',
}