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
        <label>User Name</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <label>Create Password</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <label>Confirm Password</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <button type="submit">Sign Up</button>
        <p>Already a User? <span style={{color:"blue", textDecoration:"underline" }}>Login</span></p>
      </form>
    </div>
  );
}
