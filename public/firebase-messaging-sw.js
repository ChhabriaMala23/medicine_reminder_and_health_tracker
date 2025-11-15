importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
apiKey: "AIzaSyBfEgUg4UfCF6H3K-ATO1PChyDqymAD4fw",
  authDomain: "medicinereminder-healthtracker.firebaseapp.com",
  projectId: "medicinereminder-healthtracker",
  storageBucket: "medicinereminder-healthtracker.firebasestorage.app",
  messagingSenderId: "488478662680",
  appId: "1:488478662680:web:8b6b0c3cccb045af12a36d",
  measurementId: "G-HYMEHV1V6Y"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
