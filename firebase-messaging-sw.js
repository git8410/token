// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCw_74e6WGOeMIrCRc1SXkgKdsJFT5N6aQ",
  authDomain: "my-shop-notifications.firebaseapp.com",
  projectId: "my-shop-notifications",
  storageBucket: "my-shop-notifications.firebasestorage.app",
  messagingSenderId: "932775608294",
  appId: "1:932775608294:web:1dbb59ab7608ee77f72027",
  measurementId: "G-ZB5MPGVN4N"
});

const messaging = firebase.messaging();

// Foreground/Background Notification Handling
messaging.onBackgroundMessage(function(payload) {
  console.log('Background message received:', payload);
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: payload.notification.icon || '/icon.png'
    }
  );
});
