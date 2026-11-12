import Image from "next/image";
import Link from "next/link";
import { playStoreUrl, rateAppUrl, repositoryUrl } from "@/lib/seo";

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
            <Link href="/tools">Free safety tools</Link>
            <Link href="/demo">Interactive demo</Link>
            <Link href="/guides">Security guides</Link>
          </div>
          <div>
            <span>Trust &amp; help</span>
            <Link href="/trust">Trust centre</Link>
            <Link href="/help">Help centre</Link>
            <Link href="/support">Support &amp; feedback</Link>
            <Link href="/privacy">Privacy policy</Link>
          </div>
          <div>
            <span>Follow progress</span>
            <Link href="/updates">Project updates</Link>
            <Link href="/releases">Release notes</Link>
            <a href="/feed.xml">RSS feed</a>
            <a href={repositoryUrl} rel="noopener noreferrer" target="_blank">Public GitHub ↗</a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} GeoFence Guardian</p>
        <p><a href={playStoreUrl} rel="noopener noreferrer" target="_blank">Get the app</a> · <a href={rateAppUrl} rel="noopener noreferrer" target="_blank">Rate it</a> · <Link href="/terms">Terms</Link> · <Link href="/donate">Support</Link></p>
      </div>
    </footer>
  );
}
