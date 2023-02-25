var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "qasimmohammad534@gmail.com",
    pass: "qasimpagal2",
  },
});
// var transport = nodemailer.createTransport(smtpTransport({
//     host: 'outlooK',
//     port: '25',
//     secure: false,
//     ignoreTLS: true,
//     auth: {
//         user: 'qasimmohammad534@gmail.com",',
//     pass: 'qasimpagal2'
//     },
//     tls:{
//         ciphers:'SSLv3',
//         rejectUnauthorized: true
//     },
//     authMethod: 'PLAIN',
//     debug: true
// }));

// let emails=["m.usman0479@gmail.com",
// "muzammilmujahid8@gmail.com",
// "Reddiamond650@gmail.com",
// "saadiagohar111@gmail.com",
// "zkkhan194@gmail.com",
// "alishbanasir673@gmail.com",
// "awaisalikorejo663@gmail.com",
// "abdulmateenkhan223@gmail.com",
// "alimubarakibneanees@gmail.com",
// "mehreensikandar95@gmail.com",
// "muteerehman28@gmail.com",
// "fatimaanonymous123@gmail.com",
// "muzamilsharif17@gmail.com",
// "toobasheikh753@gmail.com",
// "sumairaamin275@gmail.com",
// "aqib70888@gmail.com",
// "rahimmsyed@gmail.com",
// "fiman3735@gmail.com",
// "Xaryabqayyum@yahoo.com",
// "Zaishbutt914@gmail.com",
// "namerafzalkhan@gmail.com",
// "malikjazib3333@gmail.com",
// "iqratariq275@gmail.com",
// "muzammilansari1978221@gmail.com",
// "nidaghazi2020@gmail.com",
// "hafizabdulmoizyousuf@gmail.com",
// "Malikarslan123@gmail.com",
// "rehmansadaq25@gmail.com",
// "zarafshanqayyum@gmail.com",
// "nleosam@gmail.com",
// "sarahmasood85@gmail.com",
// "aliraza1129001@gmail.com",
// "ayesha.rasool202019@gmail.com",
// "raowajahatwaqas@live.com",
// "sufyanshahidahmedkhan3@gmail.com",
// "alishasaghir33@gmail.com",
// "mwaqar2033@gmail.com",
// "jameelahmed7654321@gmail.com",
// "sohaibansari68926645@gmail.com",
// "anfal_ikram@yahoo.com",
// "rabbiazahoor@gmail.com",
// "drakkashmiri@gmail.com",
// "faryalabid8@gmail.com",
// "talahakas@gmail.com",
// "ngnayabgull@gmail.com",
// "Iqleeem@gmail.com",
// "zeeniawarraich95@gmail.com",
// "samraitzaz53@gmail.com",
// "Wajiha.khilafah@gmail.com",
// "shamshad1600965@gmail.com",
// "Khubaib2748@gmail.com",
// "shahzadahmad1426@gmail.com",
// "signn64@gmail.com",
// "bhanbhroabidali245@gmail.com",
// "Muhasib.islam@gmail.com",
// "hinazahid.hz0@gmail.com",
// "mkhaleel434@gmail.com",
// "aqibalirahimoon.123@gmail.com",
// "shayantahirkhawaja@gmail.com",
// "hirafayyaz96@gmail.com",
// "alizeyzahra0@gmail.com",
// "kashifali.memon001@gmail.com",
// "baburhameed75@gmail.com",
// "muhammad03157571385@gmail.com",
// "aleshan353@gmail.com",
// "mustajaab99@gmail.com",
// "fsdeveloperanees@gmail.com",
// "ibadurrehman5061@gmail.com",
// "muhammad.ali.dev.in@gmail.com",
// "m.saneemanjum@gmail.com",
// "saad.5690@gmail.com",
// "ibrahim.wm.8805@gmail.com",
// "arslantanveer@hotmail.com",
// "tariqsania297@gmail.com",
// "sundas.abbas03@gmail.com",
// "mr6465121@gmail.com"
// ]

let emails = [
  "qasimaj29@gmail.com",
  "nodankmeme@gmail.com",
  "yarooq1@gmail.com",
  "simsolves@gmail.com",
  "myvideostorageemail@gmail.com",
];

// let emails = [
//   "fatimaanonymous123@gmail.com",
//   "tariqsania297@gmail.com",
//   "hirafayyaz96@gmail.com ",
//   "Muhasib.islam@gmail.com",
//   "talahakas@gmail.com",
//   "ngnayabgull@gmail.com",
//   "fatimaanonymous123@gmail.com ",
// ];

let mailOptions = {
  from: "IMS-Captain qasimmohammad534@gmail.com",
  to: emails.join(","),
  subject: "Call To IMS Team Leaders",
  html: "<div></h1><h1>Salam,</h1><h1>Dear IMS volunteers,<p>We'd like to offer our most sincere congratulations on your selection to the IMS Team Lead role. We are excited to have you on board and look forward to working together to reach our goals.</p><p>We take this opportunity seriously and expect that you do, too. As part of the team, you are expected to commit to the timeline set by the team and adhere to it. You must also be in constant communication with the other members of the team.</p><p>Again, congratulations on your selection, and we look forward to seeing the great things you will accomplish.</p><p>Please Join the following group asap.</p><p>https://chat.whatsapp.com/JjEY7jPQLKy0IuI0cjxtnZ</p><p>Let's begin this journey.</p><p>Regards, </p><p>Team Captain Qasim Ali</p</div>",
};

// for (const email in emails) {
//   mailOptions.to = emails[email];
//   send(mailOptions);
// }

// async function send(mailOptions) {
//   let myPromise = new Promise(function (resolve, reject) {
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         return error;
//       } else {
//         return console.log("Email sent: " + info.response);
//       }
//     });

//   });
//   await myPromise;
// }

// console.log(emails.join(","));

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return error;
  } else {
    return console.log("Email sent: " + info.response);
  }
});
