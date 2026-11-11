import Image from "next/image";
import Link from "next/link";
import { playStoreUrl, rateAppUrl } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Image alt="GeoFence Guardian" className="footer-logo" height={96} src="/logo.png" width={96} />
          <div>
            <strong>Protection that stays with you.</strong>
            <p>A privacy-first safety perimeter for Android.</p>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <span>Explore</span>
            <Link href="/features">Features</Link>
            <Link href="/demo">Interactive demo</Link>
            <Link href="/about">About</Link>
            <Link href="/releases">Release notes</Link>
          </div>
          <div>
            <span>Get help</span>
            <Link href="/help">Help centre</Link>
            <Link href="/support">Support &amp; feedback</Link>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of use</Link>
          </div>
          <div>
            <span>Take action</span>
            <a href={playStoreUrl} rel="noopener noreferrer" target="_blank">Get the Android app ↗</a>
            <a href={rateAppUrl} rel="noopener noreferrer" target="_blank">Rate on Google Play ↗</a>
            <Link href="/donate">Support development</Link>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} GeoFence Guardian</p>
        <p>Version 8.1 · Personal security should feel personal.</p>
      </div>
    </footer>
  );
}
