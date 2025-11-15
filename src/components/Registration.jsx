import React, { useState } from "react";

export default function Registration({ onSave }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSave({ name });
  }

  return (
    <div className="card">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
