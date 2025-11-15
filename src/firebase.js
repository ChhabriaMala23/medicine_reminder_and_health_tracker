// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission and get FCM token
export const requestFirebaseNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: "BPC2Q5JlQEZoQzPW9Q5wUoln6TxVqDy4H14HNT6j-ibqDzgirzwSKXx3ONez1QiEzF7M_XWppgExOCA9NJV_8E8" });
    console.log("FCM Token:", token);
    return token;
  } catch (err) {
    console.error("FCM permission error:", err);
  }
};

// Foreground messages (tab open)
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export default messaging;
