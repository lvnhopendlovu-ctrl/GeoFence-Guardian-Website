import Link from "next/link";

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="GeoFence Guardian home">
      <span className="brand-mark" aria-hidden="true">
        <svg fill="none" viewBox="0 0 32 36">
          <path d="M16 2 29 7v9c0 8-5.2 14-13 17C8.2 30 3 24 3 16V7L16 2Z" stroke="currentColor" strokeWidth="2.2" />
          <path d="M20.5 13.5c0 3.2-4.5 8.7-4.5 8.7s-4.5-5.5-4.5-8.7a4.5 4.5 0 1 1 9 0Z" fill="currentColor" />
          <circle cx="16" cy="13.5" fill="#101617" r="1.7" />
        </svg>
      </span>
      <span className="brand-text">
        <strong>GeoFence</strong>
        <span>Guardian</span>
      </span>
    </Link>
  );
}
