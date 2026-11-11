export function PhoneDemo() {
  return (
    <div className="phone-wrap" aria-label="GeoFence Guardian app preview">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="phone">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="map-canvas">
            <div className="map-road road-one" />
            <div className="map-road road-two" />
            <div className="map-road road-three" />
            <div className="map-label label-one">Oak Avenue</div>
            <div className="map-label label-two">Central Park</div>
            <div className="safe-zone">
              <div className="pulse" />
              <span className="map-pin" />
            </div>
          </div>
          <div className="app-status">
            <span className="status-dot" />
            <div>
              <strong>Geo-Fence Active</strong>
              <small>Location protected</small>
            </div>
            <span className="status-check">✓</span>
          </div>
          <div className="app-controls">
            <button tabIndex={-1} type="button">GEO-FENCE ON</button>
            <div className="radius-row">
              <span>Geo-Fence Radius</span>
              <strong>100m</strong>
            </div>
            <div className="slider">
              <span />
            </div>
            <div className="slider-labels"><span>10m</span><span>500m</span></div>
          </div>
        </div>
      </div>
      <div className="floating-chip chip-private">
        <span>✓</span>
        <div><strong>Private by design</strong><small>Processed on-device</small></div>
      </div>
      <div className="floating-chip chip-active">
        <span className="signal">•••</span>
        <div><strong>Always monitoring</strong><small>Even in the background</small></div>
      </div>
    </div>
  );
}
