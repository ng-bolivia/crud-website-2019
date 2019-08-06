const admin = require('firebase-admin');

var serviceAccount = require("./keys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ngbolivia-2019.firebaseio.com"
});


var db = admin.firestore();

var docRef = db.collection('speakers').doc('monica_limachi');

var setSpeaker = docRef.set({
  shortBio: "I'm the organizer at the GDG CLoud La Paz, Pyladies La Paz and WomenTech Maker Ambassador in the tech area, but also I'm the organizer at Startup Weekend La Paz, I'm interested in a better education and add more women to the tech areas and startups.",
  photoUrl: 'https://i.imgur.com/4x6HTqq.png',
  order: 7,
  name: 'Monica Limachi Lopez',
  featured: false,
  title: 'QA Engineer Analytics',
  country: 'La Paz, Bolivia',
  companyLogoUrl: 'https://getvectorlogo.com/wp-content/uploads/2019/02/mojix-vector-logo.png',
  company: 'Mojix',
  bio: "I'm the organizer at the GDG CLoud La Paz, Pyladies La Paz and WomenTech Maker Ambassador in the tech area, but also I'm the organizer at Startup Weekend La Paz, I'm interested in a better education and add more women to the tech areas and startups. My principal objective is to share all as is possible that I know and personally I love my cat and my dogs and also to travel to different places knowing interesting people and learning more from far places.",
  badges: [
    {
      description: 'WomenTech Maker',
      link: 'https://www.womentechmakers.com/',
      name: 'wtm',
    }
  ],
  socials: [
    {
      icon: 'twitter',
      link: 'https://twitter.com/wondermony',
      title: 'twitter',
    },
    {
      icon: 'github',
      link: 'https://github.com/monikabril',
      title: 'github',
    },
    // {
    //   icon: 'website',
    //   link: 'http://lizzymendivil.com',
    //   title: 'website',
    // }
  ]
});