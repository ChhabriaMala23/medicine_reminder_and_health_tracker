import React, { useState } from "react";

export default function SOS({ contacts }) {
  const [status, setStatus] = useState("");

  function triggerSOS() {
    if (contacts.length === 0) {
      setStatus("No emergency contacts added!");
      return;
    }

    const number = contacts[0];
    window.location.href = `tel:${number}`;
  }

  return (
    <div className="card">
      <h2>SOS Emergency</h2>
      <button className="danger big" onClick={triggerSOS}>
        CALL EMERGENCY CONTACT
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}
