import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE = 'Raptor Solutions';
const SUFFIX = ' — Strategic technology for missions that cannot fail';

// Per-route metadata. Dynamic routes fall back to a derived title.
const META = {
  '/': { t: `${BASE}${SUFFIX}`, d: 'Veteran-led technology services for federal agencies and the Defense Industrial Base — secure cyber, cloud, compliance, data, and cleared-workforce capabilities.' },
  '/about': { t: `About · ${BASE}`, d: 'A veteran-led federal contractor delivering secure, mission-focused IT since 2015.' },
  '/who-we-serve': { t: `Who We Serve · ${BASE}`, d: 'Federal agencies, the Defense Industrial Base, primes and subcontractors, and regulated enterprise.' },
  '/services': { t: `Capabilities · ${BASE}`, d: 'Cybersecurity, secure cloud, compliance & readiness, and advisory for the federal mission.' },
  '/services/cybersecurity': { t: `Cybersecurity & Mission Assurance · ${BASE}`, d: 'US-based SOC, XDR, incident response, and zero-trust architecture for the Defense Industrial Base.' },
  '/services/government-cloud': { t: `Secure Cloud & Infrastructure · ${BASE}`, d: 'Microsoft 365 GCC High and Azure Government — architected, migrated, and governed for CUI and FCI.' },
  '/services/cmmc-compliance': { t: `Compliance & Readiness · ${BASE}`, d: 'CMMC Level 2, NIST 800-171, and DFARS readiness — from gap assessment to C3PAO certification.' },
  '/services/advisory': { t: `Advisory & Strategy · ${BASE}`, d: 'Fractional vCISO and vCIO leadership aligning security investment to mission outcomes.' },
  '/certifications': { t: `Certifications · ${BASE}`, d: 'Verified credentials demonstrating our commitment to security and quality in federal contracting.' },
  '/careers': { t: `Careers · ${BASE}`, d: 'Join a veteran-led team dedicated to securing federal IT.' },
  '/contact': { t: `Contact · ${BASE}`, d: 'Reach out about cybersecurity, compliance, or IT modernization for your mission.' },
  '/schedule': { t: `Book a Mission Briefing · ${BASE}`, d: 'Schedule a 30-minute call to scope your cyber, cloud, compliance, or operational challenge.' },
  '/blog': { t: `Insights · ${BASE}`, d: 'Expert perspectives on cybersecurity, compliance, and federal cloud modernization.' },
  '/insights': { t: `Insights · ${BASE}`, d: 'Expert perspectives on cybersecurity, compliance, and federal cloud modernization.' },
  '/privacy-policy': { t: `Privacy Policy · ${BASE}`, d: 'How Raptor Solutions collects, uses, and safeguards your information.' },
  '/terms-of-service': { t: `Terms of Service · ${BASE}`, d: 'The terms that govern use of the Raptor Solutions website and services.' },
};

function setMeta(name, content, attr = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Applies per-route <title>, description, canonical, and OG tags. */
export function RouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = META[pathname] || {
      t: `Page not found · ${BASE}`,
      d: META['/'].d,
    };
    document.title = m.t;
    setMeta('description', m.d);
    setMeta('og:title', m.t, 'property');
    setMeta('og:description', m.d, 'property');
    setMeta('og:url', `https://raptor-ent.com${pathname}`, 'property');
    setCanonical(`https://raptor-ent.com${pathname === '/' ? '' : pathname}`);
  }, [pathname]);
  return null;
}
