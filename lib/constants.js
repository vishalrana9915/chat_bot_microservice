const STATUS_CODE = {
    ERROR: 0,
    SUCCESS: 1
};
const ACCOUNT_LEVEL = {
    ADMIN : 1,
    NORMAL_USER : 0
};
const LOGIN_TYPE = {
    FB : 0,
    TW : 1
};
const DB_MODEL_REF = {
    USER : "User",
    VERSION : "Version",
    CHAT : "Chat",
    ROOM : "Room",
    COUNT : "Count",
    CONNECT : "Connect"
};

const PATH = {
    UPLOADBASE:'C:\\Users\\Vinn_Rana\\Desktop\\chat_bot\\uploads\\'
}

const MESSAGES = {
    intrnlSrvrErr: "Please try after some time.",
    unAuthAccess: "Unauthorized access ",
    tokenGenError: "Error while generating access token",
    invalidEmail: "Please fill valid Email Address",
    invalidMobile: "Please fill valid Mobile No",
    blockedMobile: "Action Blocked for Illegal use of Services.",
    invalidOtp: "Invalid OTP",
    nameCantEmpty: "Name can't be empty",
    invalidZipcode: "please fill valid zip Code",
    invalidNum: "Please fill valid phone number or Do not add country code",
    passCantEmpty: "Password can't be empty",
    validationError : "Validation errors",
    incorrectPass: "Invalid email or passoword",
    userNotFound: "User not found.",
    accessTokenCantEmpty: "Access token cannot be empty",
    tokenSecretCantEmpty: "Secret token cannot be empty",
    incorrectTwToken : "Sorry, we could not contact twitter with the provided token",
    deviceIdCantEmpty : "Device id cannot be empty",
    platformCantEmpty : "Platform cannot be empty or invalid",
    deviceTokenCantEmpty : "Device token cannot be empty",
    ACCOUNT_DEACTIVATED: "Your account is suspended, please contact the SHiNE admin: vishalrana9915@gmail.com.",
};

const QUEUES_NAME = {
    SEND_NOTI_ONE:"shineSendNotiOne",
    SEND_NOTI_MANY:"shineSendNotiMany",
};

module.exports = Object.freeze({
    APP_NAME: 'Chat_bot',
    TOKEN_EXPIRATION_TIME : '5h', // in mins - 60 days
    STATUS_CODE: STATUS_CODE,
    ACCOUNT_LEVEL : ACCOUNT_LEVEL,
    LOGIN_TYPE : LOGIN_TYPE,
    DB_MODEL_REF: DB_MODEL_REF,
    MESSAGES : MESSAGES,
    PATH:PATH,
    email : {
        //Credentials
        SENDER : 'alerts@chat_bot.com',
        TOKEN_SEPARATOR  : '#&$',
        SENDGRID_KEY : "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",

        //constants
        OTP : '[OTP]',
        LINK : '[LINK]',
        TOKEN : '[TOKEN]',
        REASON : '[REASON]',
        POSTMESSAGE : '[POSTMESSAGE]',
        PAGEMESSAGE : '[PAGEMESSAGE]',
        USERMESSAGE : '[USERMESSAGE]',
        MEDIA : '[MEDIA]',

        subject : {
            OTP_EMAIL : 'chat_bot : One Time Password',
            VERIFY_EMAIL : 'Confirm Email Address',
            FORGOT_PWD : 'Reset Password',
            FUND_REFIL_MAIL: 'chat_bot: Refil your Funds',
            PROMOTION_STOPPED_MAIL: "chat_bot: Promotion Stopped",
            POST_DEACTIVATED_MAIL: 'chat_bot: Post Deactivated',
            PAGE_DEACTIVATED_MAIL: 'chat_bot: Page Deactivated',
            USER_DEACTIVATED_MAIL: 'chat_bot: Account Deactivated',
        },
        //Predefined Mail Templates
        templates : {

            // //Verification Mail
            // OTP_EMAIL : "<html>\
            //     Your One Time Password for Login into chat_bot is : [OTP]\
            //     <br/><br/>\
            //     Thank you,\
            //     <br/>chat_bot Team.\
            //     <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
            //     Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
            //     contain information that is privileged or exempt from disclosure under applicable law.\
            //     If you have received this message in error please immediately notify the sender by return e-mail and delete\
            //     this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
            //     destroy any printed copy you might have made.\
            //     </html>"
            // ,
            // FUND_REFIL_MAIL : "<html>\
            //     Ypur Account Funds are Lower then $30. Please Refil your account.\
            //     <br/><br/>\
            //     Thank you,\
            //     <br/>ShineApp Team.\
            //     <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
            //     Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
            //     contain information that is privileged or exempt from disclosure under applicable law.\
            //     If you have received this message in error please immediately notify the sender by return e-mail and delete\
            //     this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
            //     destroy any printed copy you might have made.\
            //     </html>"
            // ,

            // POST_DEACTIVATED_MAIL : "<html>\
            //     Your Post has been Deactivated by Admin because [REASON].\
            //     <br/><b>Your Post Message:</b> [POSTMESSAGE]\
            //     <br/><b>Your Media Files:</b><br/> [MEDIA]\
            //     <br/><br/>\
            //     Thank you,\
            //     <br/>ShineApp Team.\
            //     <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
            //     Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
            //     contain information that is privileged or exempt from disclosure under applicable law.\
            //     If you have received this message in error please immediately notify the sender by return e-mail and delete\
            //     this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
            //     destroy any printed copy you might have made.\
            //     </html>"
            // ,

            // PROMOTION_STOPPED_MAIL : "<html>\
            //     Your Promotion has been Stopped by Admin because [REASON].\
            //     <br/><br/>\
            //     Thank you,\
            //     <br/>ShineApp Team.\
            //     <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
            //     Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
            //     contain information that is privileged or exempt from disclosure under applicable law.\
            //     If you have received this message in error please immediately notify the sender by return e-mail and delete\
            //     this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
            //     destroy any printed copy you might have made.\
            //     </html>"
            // ,


            // VERIFY_EMAIL : "<html>\
            //     Click to confirm Shine ID Connect: [LINK]\
            //     <br/>Ignore this email if it was not requested.<br/><br/><br/>\
            //     Thank you,\
            //     <br/>ShineApp Team.\
            //     <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
            //     Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
            //     contain information that is privileged or exempt from disclosure under applicable law.\
            //     If you have received this message in error please immediately notify the sender by return e-mail and delete\
            //     this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
            //     destroy any printed copy you might have made.\
            //     </html>"
            // ,

            // FORGET_PWD_EMAIL : " <html>\
            //     Click to reset passwod : [LINK]\
            //     <br/>Ignore this email if it was not requested.<br/><br/><br/>\
            //     Thank you,\
            //     <br/>ShineApp Team.\
            //     <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
            //     Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
            //     contain information that is privileged or exempt from disclosure under applicable law.\
            //     If you have received this message in error please immediately notify the sender by return e-mail and delete\
            //     this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
            //     destroy any printed copy you might have made.\
            //     "
            // ,
            // PAGE_DEACTIVATED_MAIL : "<html>\
            //     Your Page is deactivated because [REASON], please contact the SHiNE admin: shineadmin@shine.com.\
            //     <br/><b>Page Username:</b> [PAGEMESSAGE]\
            //     <br/><br/>\
            //     Thank you,\
            //     <br/>ShineApp Team.\
            //     <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
            //     Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
            //     contain information that is privileged or exempt from disclosure under applicable law.\
            //     If you have received this message in error please immediately notify the sender by return e-mail and delete\
            //     this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
            //     destroy any printed copy you might have made.\
            //     </html>"
            // ,
            // USER_DEACTIVATED_MAIL : "<html>\
            //     Your account is suspended because [REASON], please contact the SHiNE admin: shineadmin@shine.com.\
            //     <br/><b>Username:</b> [USERMESSAGE]\
            //     <br/><br/>\
            //     Thank you,\
            //     <br/>ShineApp Team.\
            //     <br/>This e-mail message is intended only for the named recipient(s) above and is covered by the\
            //     Electronic Communications Privacy Act 18 U.S.C. Section 2510-2521. This e-mail is confidential and may\
            //     contain information that is privileged or exempt from disclosure under applicable law.\
            //     If you have received this message in error please immediately notify the sender by return e-mail and delete\
            //     this e-mail message from your computer, mobile devices and any cloud storage backup systems as well as\
            //     destroy any printed copy you might have made.\
            //     </html>"
            // ,

        }
    },

    // sms : {
    //     OTP : '[OTP]',
    //     KEY : '[KEY]',
    //     PHONE : '[PHONE]',
    //     templates : {
    //         VERIFY_PHONE : '[OTP] is Your One Time Password for Mobile [PHONE] to your ShineApp Account.\
    //             \n Regards, \n ShineApp Team',
    //     }
    // },
    // account_deactivate_sms : {
    //     USERNAME : '[USERNAME]',
    //     REASON : '[REASON]',
    //     templates : {
    //         MSG : 'Your account (username- [USERNAME]) is suspended because [REASON], please contact the SHiNE admin: shineadmin@shine.com.',
    //     }
    // },
    masterOtpKey : 1234
});