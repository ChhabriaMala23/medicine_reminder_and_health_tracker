import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import MedicineScheduler from "./components/MedicineScheduler";
import HydrationTracker from "./components/HydrationTracker";
import SOS from "./components/SOS";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import NotificationService from "./services/NotificationService";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

export default function App() {

  // -------------------------------------------
  // 1️⃣ LOAD DATA FROM LOCAL STORAGE ON START
  // -------------------------------------------
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [medicines, setMedicines] = useState(() => {
    return JSON.parse(localStorage.getItem("medicines")) || [];
  });

  const [hydration, setHydration] = useState(() => {
    return JSON.parse(localStorage.getItem("hydration")) || { count: 0, target: 8 };
  });

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });

  // -------------------------------------------
  // 2️⃣ SAVE DATA TO LOCAL STORAGE WHEN CHANGED
  // -------------------------------------------

  // save user
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  // save medicines
  useEffect(() => {
    localStorage.setItem("medicines", JSON.stringify(medicines));
  }, [medicines]);

  // save hydration
  useEffect(() => {
    localStorage.setItem("hydration", JSON.stringify(hydration));
  }, [hydration]);

  // save contacts
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);


  // -------------------------------------------
  // 3️⃣ NOTIFICATION SERVICE
  // -------------------------------------------
  useEffect(() => {
    NotificationService.start(medicines);
  }, [medicines]);


  // -------------------------------------------
  // 4️⃣ UI RENDER
  // -------------------------------------------
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path="/" element={!user ? <Welcome /> : <Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={!user ? <Registration onSave={setUser} /> : <Navigate to="/medicine" />} />

        <Route path="/medicine" element={user ? <MedicineScheduler
          medicines={medicines}
          setMedicines={setMedicines}
          contacts={contacts}
          setContacts={setContacts}
        /> : <Navigate to="/register" />} />

        <Route path="/hydrate" element={user ? <HydrationTracker
          hydration={hydration}
          setHydration={setHydration}
        /> : <Navigate to="/register" />} />

        <Route path="/sos" element={user ? <SOS contacts={contacts} /> : <Navigate to="/register" />} />

      </Routes>
    </Router>
  );
}
