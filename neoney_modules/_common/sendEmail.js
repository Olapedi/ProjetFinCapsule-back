const brevo = require('@getbrevo/brevo');
let defaultClient = brevo.ApiClient.instance;

module.exports = async function sendEmail(param) {

const brevoapikey = process.env.brevoapikey;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = brevoapikey;

let apiInstance = new brevo.TransactionalEmailsApi();
let sendSmtpEmail = new brevo.SendSmtpEmail();

// Construction du contenu de l'email

const email = {

    displayName: param.displayName,
    activationCode : param.activationCode,
    subject : param.subject,
    receiverEmail : param.receiverEmail,
    receiverName : param.receiverName,
    senderEmail : param.senderEmail,
    senderName : param.senderName,
    replyToEmail : param.replyToEmail,
    replyToName : param.replyToName,

}


console.log(email);

sendSmtpEmail.subject = "{{params.subject}}";

sendSmtpEmail.htmlContent = `<html>

                            <body>

                            <p> Cher(e) {{params.parameter}}</p>
                            <p>Bienvenue dans la Communauté des Néo Entrepreneurs ! Nous sommes ravis de vous accueillir parmi nous. Votre aventure entrepreneuriale prend un nouveau tournant ici, et nous sommes là pour vous soutenir tout au long de ce voyage passionnant.</p>
                            <p>Pour activer votre compte et commencer à explorer toutes les fonctionnalités de notre plateforme, veuillez suivre les étapes simples ci-dessous :</p>
                            <p><strong>1. Code d'activation :</strong> Vous trouverez ci-dessous votre code d'activation unique. Copiez-le ou notez-le, car vous en aurez besoin pour activer votre compte.</p>
                            <p><strong>Code d'activation :</strong> <h1>${email.activationCode}</h1></p>
                            <p><strong>2. Activation du compte :</strong> Rendez-vous sur notre site <a href="https://www.neaoney.co">ici</a> et suivez les instructions pour activer votre compte. Assurez-vous d'utiliser le même e-mail que vous avez utilisé lors de l'inscription.</p>
                            <p>Une fois que votre compte est activé, vous pourrez :</p>
                            <ul>
                                <li>Créer votre profil business.</li>
                                <li>Rejoindre des groupes et des discussions passionnantes.</li>
                                <li>Établir des connexions avec d'autres entrepreneurs.</li>
                                <li>Accéder à des ressources exclusives pour vous aider dans votre parcours entrepreneurial.</li>
                            </ul>
                            <p>Si vous avez des questions ou rencontrez des problèmes lors de l'activation de votre compte, n'hésitez pas à contacter notre équipe d'assistance à <a href="mailto:support@neoney.co">support@neoney.co</a> pour obtenir de l'aide.</p>
                            <p>Nous sommes impatients de voir ce que vous allez accomplir au sein de notre communauté. Votre succès est notre succès, et nous sommes là pour vous accompagner à chaque étape.</p>
                            <p>Une fois de plus, bienvenue dans la Communauté des Néo Entrepreneurs ! Nous sommes heureux de vous avoir avec nous.</p>
                            <p>Cordialement,</p>
                            <p>L'équipe Neoney <br>Votre réseau social d'affaires <br>by @Kovalys Connect</p>
          
                                                            
                            </body>

                            </html>
                            
                            `;


sendSmtpEmail.sender = { "name": email.senderName, "email": email.senderEmail };

sendSmtpEmail.to = [
  { "email": email.receiverEmail, "name": email.receiverName }
];

sendSmtpEmail.replyTo = { "email": email.replyToEmail, "name": email.replyToEmail };
sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
sendSmtpEmail.params = { "parameter": email.displayName, "subject": email.subject };


apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));

}, function (error) {
  console.error(error);
});

}