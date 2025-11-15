import React from "react";

export default function HydrationTracker({ hydration, setHydration }) {
  function addGlass() {
    setHydration({ ...hydration, count: hydration.count + 1 });
  }

  function reset() {
    setHydration({ ...hydration, count: 0 });
  }

  return (
    <div className="card">
      <h2>Hydration Tracker</h2>
      <p>
        Water: {hydration.count} / {hydration.target} glasses
      </p>

      <button onClick={addGlass}>+ Add Glass</button>
      <button onClick={reset}>Reset</button>

      <div className="progress">
        <div
          className="bar"
          style={{ width: `${(hydration.count / hydration.target) * 100}%` }}
        />
      </div>
    </div>
  );
}
