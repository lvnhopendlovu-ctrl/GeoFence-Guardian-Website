"use client";

import { useMemo, useState } from "react";

export function GeofenceDemo() {
  const [radius, setRadius] = useState(100);
  const [active, setActive] = useState(false);
  const [breached, setBreached] = useState(false);
  const zoneSize = useMemo(() => Math.round(105 + radius * 0.28), [radius]);
  const state = !active ? "ready" : breached ? "alarm" : "secure";
  const status = !active
    ? "Ready to activate"
    : breached
      ? "Boundary crossed — alarm active"
      : "Monitoring — device is inside the safe zone";

  function toggleActive() {
    if (active) setBreached(false);
    setActive((value) => !value);
  }

  return (
    <div className={`interactive-demo state-${state}`}>
      <div className="demo-map" aria-hidden="true">
        <div className="demo-road road-a" />
        <div className="demo-road road-b" />
        <div className="demo-zone" style={{ height: zoneSize, width: zoneSize }} />
        <div className={`demo-device ${breached ? "outside" : ""}`}><span /></div>
        <div className="demo-centre" />
      </div>
      <div className="demo-panel">
        <div className="demo-status" aria-live="polite">
          <span />
          <div><small>Simulation status</small><strong>{status}</strong></div>
        </div>
        <label className="demo-radius" htmlFor="demo-radius">
          <span>Safe-zone radius</span><strong>{radius} m</strong>
        </label>
        <input
          disabled={active}
          id="demo-radius"
          max="500"
          min="10"
          onChange={(event) => setRadius(Number(event.target.value))}
          step="10"
          type="range"
          value={radius}
        />
        <div className="demo-range-labels"><span>10 m</span><span>500 m</span></div>
        <div className="demo-actions">
          <button className="button button-dark" onClick={toggleActive} type="button">
            {active ? "Deactivate" : "Activate perimeter"}
          </button>
          <button
            className="button button-outline"
            disabled={!active}
            onClick={() => setBreached((value) => !value)}
            type="button"
          >
            {breached ? "Return inside" : "Simulate a breach"}
          </button>
        </div>
        <p className="demo-note">Illustrative demo only. It does not request or use your browser location.</p>
      </div>
    </div>
  );
}
