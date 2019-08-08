const admin = require('firebase-admin');
const mapSessionsSpeakersSchedule = require('./schedule-generator/speakers-sessions-schedule-map');

var serviceAccount = require('./keys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ngbolivia-2019.firebaseio.com'
});

var db = admin.firestore();

async function generateAndSaveData() {
  const sessionsPromise = db.collection('sessions').get();
  const schedulePromise = db
    .collection('schedule')
    .orderBy('date', 'desc')
    .get();
  const speakersPromise = db.collection('speakers').get();

  const [
    sessionsSnapshot,
    scheduleSnapshot,
    speakersSnapshot
  ] = await Promise.all([sessionsPromise, schedulePromise, speakersPromise]);

  const sessions = {};
  const schedule = {};
  const speakers = {};

  sessionsSnapshot.forEach(doc => {
    sessions[doc.id] = doc.data();
  });

  scheduleSnapshot.forEach(doc => {
    schedule[doc.id] = doc.data();
  });

  speakersSnapshot.forEach(doc => {
    speakers[doc.id] = doc.data();
  });

  let generatedData = {};

  generatedData = mapSessionsSpeakersSchedule.sessionsSpeakersScheduleMap(
    sessions,
    speakers,
    schedule
  );

  saveGeneratedData(generatedData.sessions, 'generatedSessions');
  saveGeneratedData(generatedData.speakers, 'generatedSpeakers');
  saveGeneratedData(generatedData.schedule, 'generatedSchedule');
}

function saveGeneratedData(data, collectionName) {
  if (!data || !Object.keys(data).length) return;

  for (let index = 0; index < Object.keys(data).length; index++) {
    const key = Object.keys(data)[index];
    db.collection(collectionName)
      .doc(key)
      .set(data[key]);
  }
}

generateAndSaveData();
