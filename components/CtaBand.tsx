import Link from "next/link";
import { ArrowIcon, HeartIcon } from "./Icons";

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="shell cta-band-inner">
        <div>
          <span className="eyebrow light">Community powered</span>
          <h2>Help keep protection within reach.</h2>
          <p>
            Your support funds careful maintenance, testing, and the next useful
            improvements to GeoFence Guardian.
          </p>
        </div>
        <Link className="button button-light" href="/donate">
          <HeartIcon size={19} />
          Support the project
          <ArrowIcon size={18} />
        </Link>
      </div>
    </section>
  );
}
