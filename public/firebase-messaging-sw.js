importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyCbBtMTW30nu9mQ2-I0tvO_zG4BDEHg5UA",
    authDomain: "fir-demo-193d7.firebaseapp.com",
    databaseURL: "https://fir-demo-193d7-default-rtdb.firebaseio.com",
    projectId: "fir-demo-193d7",
    storageBucket: "fir-demo-193d7.appspot.com",
    messagingSenderId: "381629734611",
    appId: "1:381629734611:web:08aecd68006f3eb200be26"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };
    window.location.replace("http://localhost:3000/")
    
    self.registration.showNotification(notificationTitle, notificationOptions);
});