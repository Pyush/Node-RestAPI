var crypto = require('crypto');
var rand = require('csprng');

EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

module.exports = function () {

    this.emailAD = function isEmailValid(email) {
        return email.match(EMAIL_PATTERN);
    };

    this.pwd = function isPasswordValid(password) {
        return password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && password.length > 4 && password.match(/[0-9]/) && password.match(/.[!,@,#,$,%,^,&,*,?,_,~]/);
    }

    this.gusername = function GenerateUsername() {

    }

    this.gtoken = function GenerateToken(email) {
        return crypto.createHash('sha512').update(email + rand).digest("hex");
    }

    this.ghashPass = function GenerateHashedPassword(password) {
        return crypto.createHash('sha512').update(password).digest("hex");
    }
};




