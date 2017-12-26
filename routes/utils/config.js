module.exports = {
    APP_NAME: 'STOCK APP',
    SECRET: 'ilovescotchyscotch',
    CLIENT_TOKEN_EXPIRES_IN: 60 * 24 * 60 * 60,     // client token expires time(60day)
    EMAIL_TOKEN_EXPIRES_IN: 24 * 60 * 60,           // email token expires time(24h)

    EMAIL_SENDER: {                                 // used to send mail by nodemailer
        service: 'Gmail',
        auth: {
            user: 'qianlijiang123@gmail.com',
            pass: '321qianqian',
        }
    },

    USER_MESSAGE: {                                 // message sent to client
        MAIL_SENT: 'mail sent',
        NAME_TAKEN: 'Name or email has been taken',
        USER_NOT_FOUND: 'User not found',
        WRONG_PASSWORD: 'wrong password',
        LOGIN_SUCCESS: 'Enjoy your token!',
        NEED_EMAIL_VERIFICATION: 'You need to verify your email first',
    },

    API_URL: 'http://localhost:3000'              // to be used in the mail
};