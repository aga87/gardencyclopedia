const config = require('config');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
const clientId = config.get('MAILING_SERVICE_CLIENT_ID');
const clientSecret = config.get('MAILING_SERVICE_CLIENT_SECRET');
const refreshToken = config.get('MAILING_SERVICE_REFRESH_TOKEN');
const senderEmail = config.get('SENDER_EMAIL_ADDRESS');

const oauth2Client = new OAuth2(
  clientId,
  clientSecret,
  refreshToken,
  OAUTH_PLAYGROUND
);

// Send email
const sendEmail = (to, url) => {
  oauth2Client.setCredentials({
    refresh_token: refreshToken
  });

  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: senderEmail,
      clientId: clientId,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
      accessToken
    }
  });

  const mailOptions = {
    from: senderEmail,
    to: to,
    subject: 'Gardencyclopedia: Please verify your email.',
    html: `<div>
    <h2 style="text-align: center;">Welcome to Gardencyclopedia</h2>
    <p>You are almost set to start using Gardencyclopedia.<br />
    Click on the button below to verify your email address: <br />
    <a href=${url} style="background: green; text-decoration: none; color: white; padding: 10px; display: inline-block;"
    </p>
    <p>If the button does not work, you can also click on the link below:</p> 
    <p>${url}</p>
    </div>`
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};

module.exports = sendEmail;
