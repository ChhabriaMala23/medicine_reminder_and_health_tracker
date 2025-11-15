import { requestFirebaseNotificationPermission, onMessageListener } from "../firebase";

let intervalId = null;

const NotificationService = {
  start: async (medicines) => {
    // -------------------------
    // 1️⃣ Request FCM permission
    // -------------------------
    const token = await requestFirebaseNotificationPermission();
    console.log("FCM Token:", token);

    // -------------------------
    // 2️⃣ Listen for foreground messages
    // -------------------------
    onMessageListener().then(payload => {
      alert(`Reminder: ${payload.notification.title} - ${payload.notification.body}`);
    });

    // -------------------------
    // 3️⃣ Start local interval notifications (existing)
    // -------------------------
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
      const now = new Date();
      const time = now.toTimeString().slice(0, 5); // HH:MM format

      medicines.forEach(med => {
        if (med.times.includes(time)) {
          NotificationService.sendNotification(med.name, med.dose, time);
        }
      });

    }, 60000); // check every minute
  },

  sendNotification(name, dose, time) {
    if (!("Notification" in window)) return;

    if (Notification.permission === "granted") {
      new Notification(`Medicine Reminder`, {
        body: `${name} (${dose}) at ${time}`,
        icon: "/medicine.png", // optional
      });
    }
  }
};

export default NotificationService;
