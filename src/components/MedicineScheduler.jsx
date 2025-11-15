import React, { useState } from "react";

export default function MedicineScheduler({
  medicines,
  setMedicines,
  contacts,
  setContacts,
}) {
  const [name, setName] = useState("");
  const [dose, setDose] = useState("");
  const [time, setTime] = useState("");

  function addMedicine(e) {
    e.preventDefault();
    const newMed = { id: Date.now(), name, dose, times: [time] };
    setMedicines([...medicines, newMed]);
    setName("");
    setDose("");
    setTime("");
  }

  function removeMedicine(id) {
    setMedicines(medicines.filter(m => m.id !== id));
  }

  return (
    <div className="card">
      <h2>Medicine Scheduler</h2>

      <form onSubmit={addMedicine}>
        <input
          placeholder="Medicine"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Dose"
          value={dose}
          onChange={e => setDose(e.target.value)}
        />
        <input type="time" value={time} onChange={e => setTime(e.target.value)} />
        <button>Add Medicine</button>
      </form>

      {medicines.map(m => (
        <div key={m.id} className="med-item">
          <strong>{m.name}</strong> — {m.dose}
          <div>
            Time: {m.times.map(t => <span key={t}>{t}</span>)}
          </div>
          <button className="danger" onClick={() => removeMedicine(m.id)}>
            Remove
          </button>
        </div>
      ))}

      <hr />
      <h3>Emergency Contacts</h3>

      <input
        placeholder="Phone number"
        onKeyDown={e => {
          if (e.key === "Enter") setContacts([...contacts, e.target.value]);
        }}
      />

      {contacts.map((c, i) => (
        <div key={i}>
          {c}
          <button onClick={() => setContacts(contacts.filter((_, idx) => idx !== i))}>
            remove
          </button>
        </div>
      ))}
    </div>
  );
}
