const base = "https://geofenceguardians.co.za";
const paths = ["/", "/features/", "/tools/", "/risk-check/", "/emergency-plan/", "/guides/", "/trust/", "/updates/", "/feed.xml", "/sitemap.xml"];

const failures = [];

for (const path of paths) {
  try {
    const response = await fetch(`${base}${path}`, { redirect: "follow", signal: AbortSignal.timeout(15000) });
    if (!response.ok) failures.push(`${path}: HTTP ${response.status}`);
    else console.log(`PASS ${response.status} ${path}`);
  } catch (error) {
    failures.push(`${path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length) {
  console.error("Live-site check failed:\n" + failures.join("\n"));
  process.exit(1);
}
