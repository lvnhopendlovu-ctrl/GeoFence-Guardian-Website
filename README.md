# GeoFence Guardian website

[![Deploy website to GitHub Pages](https://github.com/lvnhopendlovu-ctrl/GeoFence-Guardian-Website/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/lvnhopendlovu-ctrl/GeoFence-Guardian-Website/actions/workflows/deploy-pages.yml)
[![Check live website](https://github.com/lvnhopendlovu-ctrl/GeoFence-Guardian-Website/actions/workflows/check-live-site.yml/badge.svg)](https://github.com/lvnhopendlovu-ctrl/GeoFence-Guardian-Website/actions/workflows/check-live-site.yml)

Public website and safety-resource hub for [GeoFence Guardian](https://geofenceguardians.co.za), a privacy-first Android geofence alarm.

## What is here

- Product features, interactive geofence demo, help, privacy, and release notes
- Private browser-based phone theft risk check
- Printable lost-phone emergency plan builder
- Downloadable phone-safety cards
- Original Android safety field guides with primary-source links
- Trust centre, RSS feed, JSON Feed, sitemap, and structured application data

The interactive tools do not submit their answers or plan fields to a server. See the [privacy policy](https://geofenceguardians.co.za/privacy/) and [trust centre](https://geofenceguardians.co.za/trust/) for details.

## Local development

Requirements: Node.js 22 and npm.

```sh
npm install
npm run dev
```

Validate a production export:

```sh
npm run lint
npm run build
```

## Deployment

Pushes to `main` are exported as static HTML and deployed through GitHub Actions to GitHub Pages. The production domain is [geofenceguardians.co.za](https://geofenceguardians.co.za).

## Community

- Read the [roadmap](ROADMAP.md)
- Review [contribution guidance](CONTRIBUTING.md)
- Report a security concern using [SECURITY.md](SECURITY.md)
- Use GitHub Issues for reproducible website bugs and feature proposals
- Use GitHub Discussions for questions, ideas, and general feedback

This repository contains the public website, not the private Android application source or signing material.
