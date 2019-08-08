const admin = require('firebase-admin');

var serviceAccount = require('./keys.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ngbolivia-2019.firebaseio.com'
});

var db = admin.firestore();

var collection = db.collection('schedule');

collection.doc('2019-08-24').set({
  date: '2019-08-24',
  dateReadable: 'August 24',
  tracks: [
    {
      title: 'Gran Hotel Cochabamba'
    }
  ],
  timeslots: [
    {
      startTime: '08:30',
      endTime: '09:00',
      sessions: [
        {
          items: [101]
        }
      ]
    },
    {
      startTime: '09:00',
      endTime: '09:15',
      sessions: [
        {
          items: [102]
        }
      ]
    },
    {
      startTime: '09:20',
      endTime: '09:45',
      sessions: [
        {
          items: [103]
        }
      ]
    },
    {
      startTime: '09:50',
      endTime: '10:15',
      sessions: [
        {
          items: [104]
        }
      ]
    },
    {
      startTime: '10:20',
      endTime: '10:30',
      sessions: [
        {
          items: [105]
        }
      ]
    },
    {
      startTime: '10:30',
      endTime: '10:40',
      sessions: [
        {
          items: [106]
        }
      ]
    },
    {
      startTime: '10:40',
      endTime: '10:45',
      sessions: [
        {
          items: [107]
        }
      ]
    },
    {
      startTime: '10:45',
      endTime: '11:15',
      sessions: [
        {
          items: [108]
        }
      ]
    },
    {
      startTime: '11:15',
      endTime: '11:40',
      sessions: [
        {
          items: [109]
        }
      ]
    },
    {
      startTime: '11:45',
      endTime: '12:10',
      sessions: [
        {
          items: [110]
        }
      ]
    },
    {
      startTime: '12:10',
      endTime: '12:15',
      sessions: [
        {
          items: [111]
        }
      ]
    },
    {
      startTime: '12:15',
      endTime: '12:30',
      sessions: [
        {
          items: [112]
        }
      ]
    },
    {
      startTime: '12:30',
      endTime: '14:00',
      sessions: [
        {
          items: [113]
        }
      ]
    },
    {
      startTime: '14:00',
      endTime: '14:25',
      sessions: [
        {
          items: [114]
        }
      ]
    },
    {
      startTime: '14:30',
      endTime: '14:55',
      sessions: [
        {
          items: [115]
        }
      ]
    },
    {
      startTime: '14:55',
      endTime: '15:05',
      sessions: [
        {
          items: [116]
        }
      ]
    },
    {
      startTime: '15:05',
      endTime: '15:35',
      sessions: [
        {
          items: [117]
        }
      ]
    },
    {
      startTime: '15:35',
      endTime: '16:00',
      sessions: [
        {
          items: [118]
        }
      ]
    },
    {
      startTime: '16:00',
      endTime: '16:25',
      sessions: [
        {
          items: [119]
        }
      ]
    },
    {
      startTime: '16:25',
      endTime: '16:35',
      sessions: [
        {
          items: [120]
        }
      ]
    },
    {
      startTime: '16:35',
      endTime: '17:00',
      sessions: [
        {
          items: [121]
        }
      ]
    },
    {
      startTime: '17:00',
      endTime: '17:25',
      sessions: [
        {
          items: [122]
        }
      ]
    },
    {
      startTime: '17:30',
      endTime: '17:55',
      sessions: [
        {
          items: [123]
        }
      ]
    },
    {
      startTime: '18:00',
      endTime: '18:25',
      sessions: [
        {
          items: [124]
        }
      ]
    },
    {
      startTime: '18:25',
      endTime: '18:45',
      sessions: [
        {
          items: [125]
        }
      ]
    }
  ]
});

collection.doc('2019-08-23').set({
  date: '2019-08-23',
  dateReadable: 'August 23',
  tracks: [
    {
      title: 'Fundación Jala - Lab 1'
    },
    {
      title: 'Fundación Jala - Lab 2'
    }
  ],
  timeslots: [
    {
      startTime: '08:30',
      endTime: '12:30',
      sessions: [
        {
          items: [128]
        },
        {
          items: [126]
        }
      ]
    },
    {
      startTime: '14:30',
      endTime: '18:30',
      sessions: [
        {
          items: [127]
        },
        {
          items: [129]
        }
      ]
    }
  ]
});
