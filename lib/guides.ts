export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  summary: string;
  sections: GuideSection[];
  sources: { label: string; href: string }[];
};

const findHubSource = {
  label: "Google: Find, secure or erase a lost Android device",
  href: "https://support.google.com/android/answer/6160491",
};

const theftProtectionSource = {
  label: "Google: Protect your personal data against theft",
  href: "https://support.google.com/android/answer/15146908",
};

export const guides: Guide[] = [
  {
    slug: "lost-android-first-15-minutes",
    title: "Your Android phone is missing: the first 15 minutes",
    description: "A calm, safety-first response plan for locating, locking, reporting, and protecting the accounts on a missing Android phone.",
    category: "Incident response",
    readingTime: "6 min",
    summary: "Act quickly, but do not put yourself in danger. Confirm whether the phone is nearby, lock it remotely, preserve the information you may need for a report, and decide whether erasing it is necessary.",
    sections: [
      {
        heading: "Minute 0-3: separate misplaced from stolen",
        paragraphs: [
          "Call the phone from another device and use Find Hub to play a sound. Check the last place you used it, but do not travel alone to an unfamiliar location or confront someone who may have taken it.",
          "If the map shows a private residence or a moving device, treat the location as information for the relevant authorities or security team, not an invitation to recover it yourself.",
        ],
        bullets: ["Use Find Hub from a trusted browser or the guest mode on another Android device.", "Note the displayed location and time without publishing them.", "If immediate danger is involved, contact local emergency services."],
      },
      {
        heading: "Minute 3-8: lock and preserve",
        paragraphs: [
          "Use Mark as lost or Remote Lock when available. Add a safe return message that does not reveal your home address. Save the IMEI, model, phone number, approximate location, and time for your carrier, insurer, campus security, or police report.",
        ],
        bullets: ["Do not place passwords or sensitive account information in the lock-screen message.", "Contact your mobile provider if the SIM or eSIM should be suspended.", "Change high-risk account credentials if the device was unlocked when it disappeared."],
      },
      {
        heading: "Minute 8-15: choose recovery or erasure",
        paragraphs: [
          "Remote erasure is a serious final step. Google notes that after a factory reset, the device will no longer be available in Find Hub. Consider whether the phone contains sensitive material, whether a current location is still available, and whether recovery is realistic before erasing it.",
          "After the immediate response, review active sessions for email, banking, password managers, and social accounts. Preserve claim or case numbers and avoid posting the device location publicly.",
        ],
      },
    ],
    sources: [findHubSource, theftProtectionSource],
  },
  {
    slug: "android-theft-protection-checklist",
    title: "Android theft-protection checklist",
    description: "Prepare an Android phone before it goes missing with screen-lock, Find Hub, theft-protection, backup, and recovery settings.",
    category: "Preparation",
    readingTime: "5 min",
    summary: "The best recovery plan is configured before the emergency. Work through this checklist once, then repeat it after major Android updates or when changing phones.",
    sections: [
      {
        heading: "Secure the device itself",
        paragraphs: ["Use a strong PIN, password, or pattern and add biometrics for convenience. Review what notifications reveal while the screen is locked."],
        bullets: ["Turn on Theft Detection Lock when supported.", "Turn on Offline Device Lock and Failed Authentication Lock when available.", "Enable Remote Lock and verify the phone number it uses."],
      },
      {
        heading: "Make remote recovery possible",
        paragraphs: ["Confirm that Find Hub can see the phone while you still have it. Google lists power, connectivity, a signed-in Google Account, Find Hub, and Google Play visibility among the requirements for remote actions."],
        bullets: ["Record the IMEI somewhere separate from the phone.", "Keep two-step verification backup methods outside the device.", "Test Find Hub from another trusted device."],
      },
      {
        heading: "Add a local boundary layer",
        paragraphs: ["A geofence alarm and Find Hub solve different problems. Find Hub helps after a device is missing; GeoFence Guardian can alert nearby when an armed device crosses a boundary. Neither feature prevents theft, so use them as layers rather than guarantees."],
        bullets: ["Create zones for predictable routines.", "Choose a radius that accounts for ordinary GPS movement.", "Test the alarm and secure-stop flow before relying on it."],
      },
    ],
    sources: [theftProtectionSource, findHubSource],
  },
  {
    slug: "phone-security-on-campus",
    title: "A practical phone-security routine for campus",
    description: "A student-friendly routine for protecting a phone in libraries, residences, labs, transport, and shared study spaces.",
    category: "Campus safety",
    readingTime: "5 min",
    summary: "Campus risk is often ordinary distraction: a phone left charging, a crowded commute, or a bag moved during study. A repeatable routine is more useful than constant anxiety.",
    sections: [
      {
        heading: "Build a repeatable arrival routine",
        paragraphs: ["When settling into a library, lab, residence common room, or cafe, keep the phone attached to the routine you already follow: pocket, zipped bag compartment, or a deliberate charging position in reach."],
        bullets: ["Avoid leaving the phone to reserve a seat.", "Do not expose lock-screen verification codes.", "Use a saved geofence profile only where an audible alarm is appropriate."],
      },
      {
        heading: "Plan for charging and shared spaces",
        paragraphs: ["Public charging areas create a predictable moment of separation. Use your own charger, keep the device visible, and activate a suitable boundary before focusing on work. In quiet venues, confirm that an alarm will not create a separate safety problem."],
      },
      {
        heading: "Know the reporting route",
        paragraphs: ["Save campus security contact details and know where lost property is handled. If a device disappears, use the incident-response steps, preserve location evidence privately, and report rather than confronting a suspected thief."],
      },
    ],
    sources: [findHubSource, theftProtectionSource],
  },
  {
    slug: "phone-security-while-travelling",
    title: "Phone security while travelling",
    description: "Prepare an Android phone for airports, hotels, public transport, border crossings, and unfamiliar places without overcomplicating the trip.",
    category: "Travel safety",
    readingTime: "6 min",
    summary: "Travel combines distraction, unfamiliar recovery channels, and dependence on the same phone for tickets and authentication. Prepare alternate access before departure.",
    sections: [
      {
        heading: "Before departure",
        paragraphs: ["Update the phone, verify Find Hub, store backup authentication methods separately, and record the IMEI and carrier contact details. Download essential tickets or addresses to another trusted location."],
        bullets: ["Do not store your only two-step verification method on the travelling phone.", "Use a strong screen lock and review lock-screen notifications.", "Back up irreplaceable photos and documents."],
      },
      {
        heading: "In transit",
        paragraphs: ["Crowded transitions are higher risk than long periods of sitting. Check the phone deliberately after security trays, boarding, rides, and hotel arrivals. Avoid displaying sensitive information in public and keep the device in a consistent compartment."],
      },
      {
        heading: "If the phone goes missing abroad",
        paragraphs: ["Use Find Hub, contact the carrier, and ask the accommodation, transport operator, venue, or local authorities about the appropriate report. Do not follow a location pin into an unsafe setting. Keep travel documents and emergency contacts available without the phone."],
      },
    ],
    sources: [findHubSource, theftProtectionSource],
  },
  {
    slug: "geofence-guardian-vs-find-hub",
    title: "GeoFence Guardian and Find Hub: complementary layers",
    description: "Understand the difference between a local boundary alarm and Google's remote location, lock, sound, and erase service.",
    category: "Product guide",
    readingTime: "5 min",
    summary: "This is not an either-or comparison. GeoFence Guardian is designed to react when an armed device crosses a local boundary. Find Hub is designed to help locate, lock, ring, or erase a device after it is missing.",
    sections: [
      {
        heading: "What GeoFence Guardian does",
        paragraphs: ["GeoFence Guardian monitors a user-selected radius on the Android device and can produce a persistent alarm after a confirmed breach. Saved zones, schedules, event history, and geofence decisions remain local to the device."],
        bullets: ["Useful when the owner is close enough to hear or respond.", "Boundary calculations can continue without an internet connection.", "Requires location access, power, and correct Android configuration."],
      },
      {
        heading: "What Find Hub does",
        paragraphs: ["Google's Find Hub can show a current or last known location, play a sound, mark a device as lost, and erase it. Remote actions depend on the device state and may require power, connectivity, account access, and prior configuration."],
      },
      {
        heading: "Use both as layers",
        paragraphs: ["Use the geofence alarm for nearby boundary awareness and Find Hub for remote recovery actions. Add Android's theft-protection settings, a strong screen lock, backups, and a written incident plan. No software layer can guarantee prevention or recovery."],
      },
    ],
    sources: [findHubSource, theftProtectionSource],
  },
  {
    slug: "offline-phone-protection",
    title: "What phone protection still works offline?",
    description: "Separate on-device protections from remote services when mobile data, Wi-Fi, or a SIM connection disappears.",
    category: "Explainer",
    readingTime: "5 min",
    summary: "Offline does not mean unprotected, but it changes which layers can respond. Local screen locks and on-device calculations can continue; remote commands normally wait for connectivity.",
    sections: [
      {
        heading: "Local protections",
        paragraphs: ["A screen lock, failed-authentication protections, and supported Offline Device Lock features operate on the device. GeoFence Guardian calculates the distance from the saved boundary locally, although map tiles may not load without a connection."],
      },
      {
        heading: "Remote protections",
        paragraphs: ["Find Hub may show an encrypted recent or last known location, but current location and remote actions depend on the device state. Google's Remote Lock request is applied when the phone comes online if it was offline when requested."],
      },
      {
        heading: "Design for the transition",
        paragraphs: ["Turn on supported offline theft-protection features before an incident, keep a strong local screen lock, and avoid relying on a single remote service. GeoFence Guardian's network-loss alert is optional and should be tested for the way you use the phone."],
      },
    ],
    sources: [theftProtectionSource, findHubSource],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
