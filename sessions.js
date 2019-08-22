const admin = require('firebase-admin');

var serviceAccount = require('./keys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ngbolivia-2019.firebaseio.com'
});

var db = admin.firestore();

var collection = db.collection('sessions');

// Conference
collection.doc('101').set({
  title: 'Registration'
});

collection.doc('102').set({
  title: 'Opening Keynote',
  language: 'Spanish',
  speakers: ['luis_aviles', 'andres_jordan']
});

collection.doc('103').set({
  title: 'Web Accessibility 101: An Introduction to A11Y',
  language: 'Spanish',
  speakers: ['jose_leonardo'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('104').set({
  title: "Let's make the browser, our browser",
  language: 'Spanish',
  speakers: ['matias_blayer'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('105').set({
  title: 'Angular for kids: Applying the first law of thermodynamics',
  language: 'Spanish',
  speakers: ['maria_torrez'],
  tags: ['Web', 'General'],
  complexity: 'Lightning'
});

collection.doc('106').set({
  title: 'Running Angular projects on Google Cloud',
  language: 'Spanish',
  speakers: ['monica_limachi'],
  tags: ['Web', 'Cloud'],
  complexity: 'Lightning'
});

collection.doc('107').set({
  title: 'Zékiri',
  complexity: 'Sponsor'
});

collection.doc('108').set({
  title: 'Break'
});

collection.doc('109').set({
  title: 'Reducing complexity with Ngrx',
  language: 'Spanish',
  speakers: ['carlos_olivera'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('110').set({
  title: "What's coming to Angular version 9",
  language: 'English',
  speakers: ['mgechev'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('111').set({
  title: 'Jalasoft',
  complexity: 'Sponsor'
});

collection.doc('112').set({
  title: 'Group picture'
});

collection.doc('113').set({
  title: 'Lunch Time'
});

collection.doc('114').set({
  title: 'Accelerate the navigation speed of your Angular Application',
  language: 'Spanish',
  speakers: ['nicobytes'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('115').set({
  title: 'Mono-Repos y Bazel FTBuild',
  language: 'Spanish',
  speakers: ['jorge_cano'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('116').set({
  title: 'NgRx, From zero to Hero',
  language: 'Spanish',
  speakers: ['sofia_toro', 'fernando_quinteros'],
  tags: ['Web'],
  complexity: 'Lightning'
});

collection.doc('117').set({
  title: 'Break'
});

collection.doc('118').set({
  title: 'Custom form validation with Angular',
  language: 'English',
  speakers: ['alain_chautard'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('119').set({
  title: 'Full-Stack Applications with Nx',
  language: 'Spanish',
  speakers: ['israel_guzman'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('120').set({
  title: 'Why is cool to be a volunteer in a Tech community?',
  language: 'Spanish',
  speakers: ['lizzy_mendivil'],
  tags: ['General'],
  complexity: 'Lightning'
});

collection.doc('130').set({
  title: 'Toptal',
  complexity: 'Sponsor'
});

collection.doc('121').set({
  title: 'Break'
});

collection.doc('122').set({
  title: "Let's use Angular, Firebase and some RxJS operators to fix democracy",
  language: 'Spanish',
  speakers: ['nicolas_contreras'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('123').set({
  title: 'Angular Libraries: from zero to Open Source',
  language: 'English',
  speakers: ['william_grasel'],
  tags: ['Web'],
  complexity: 'Regular'
});

collection.doc('124').set({
  title: 'Conference Panel'
});

collection.doc('125').set({
  title: 'Closure'
});

// Workshops
collection.doc('126').set({
  title: 'Mono-Repos y Bazel FTB *for the build',
  language: 'Spanish',
  speakers: ['jorge_cano'],
  tags: ['Web'],
  complexity: 'Intermediate',
  description:
    '"En este workshop vamos a ver la arquitectura enterprise que usan empresas como PayPal, Dropbox, Google, Huawei, Stripe, Pinterest entre otros gigantes de la internet. Esta arquitectura la vamos a ejecutar sobre Bazel en la cual aprenderemos sobre que es un mono-repo, las ventajas del mismo, los tiempos de build y todos los puntos importantes de esto. Aprenderemos Bazel para poder utilizar estos monorepos y hasta veremos como funciona en angular desde un proyecto desde cero y cómo migrar nuestros proyectos(en vivo, si si, en vivo)."'
});

collection.doc('127').set({
  title: 'Cypress or the end of laborious end-to-end testing',
  language: 'English',
  speakers: ['alain_chautard'],
  tags: ['Web'],
  complexity: 'Introductory - Intermediate',
  description:
    '"Until now, end-to-end testing wasn’t easy. It was the part developers hated. Cypress is a solution that makes setting up, writing, running and debugging end-to-end tests easy. In this talk, we\'re going to demonstrate how Cypress works, take a look at its features, and write a couple of tests as well!"'
});

collection.doc('128').set({
  title: 'Advanced RxJS patterns to reactive interfaces',
  language: 'English',
  speakers: ['william_grasel'],
  tags: ['Web'],
  complexity: 'Intermediate - Advanced',
  description:
    '"Reactive programming is super flexible and powerful, but it is also hard to master! In this Workshop, we\'re are going to learn about common reactive smells and how to avoid them, and even better, were are going to learn the best patterns to reactively compose the most difficult interfaces with pure RxJS!"'
});

collection.doc('129').set({
  title: 'Angular Elements from Zero to Hero',
  language: 'Spanish',
  speakers: ['israel_guzman'],
  tags: ['Web'],
  complexity: 'Introductory - Intermediate',
  description:
    '"Since the beginning, the Angular team has put a lot of efforts to follow web components standards. You can use a web component inside your Angular app easily. However, sharing your Angular components with other web apps was not feasible until now. In this Workshop you will learn all the uses of Angular Elements in a practical way."'
});
