'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ChevronDown, Cookie, ShieldCheck } from 'lucide-react';

const lastUpdated = 'November 8, 2026';

const cookieSections: { id: string; title: string; content: ReactNode }[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>Cookies are small data files that a website or a service it uses may store in a browser. Similar technologies can store or access information through browser or device storage.</p>
        <p>This Cookie Policy explains cookie behavior in the connected authentication code and behavior observed during local checks. It is not a guarantee about every production browser, hosting configuration or third-party service. StrongHaul should verify the deployed site and update this policy if its behavior changes.</p>
      </>
    ),
  },
  {
    id: 'cookies-currently-used',
    title: 'Cookies Currently Used',
    content: (
      <>
        <p>When a user signs in, StrongHaul’s authentication backend sets two cookies on the API host: <code>refresh_token</code> and <code>csrf_token</code>. The refresh cookie is HttpOnly so frontend JavaScript cannot read the long-lived refresh credential; the browser sends it with eligible authentication requests. The CSRF cookie is intentionally readable by the frontend so it can copy the value into the <code>X-CSRF-Token</code> request header required for refresh and logout.</p>
        <p>Both cookies use <code>SameSite=Strict</code>, the <code>/auth</code> path and the same configured <code>Max-Age</code>, which defaults to 14 days for both the refresh and CSRF cookies. The backend does not set a <code>Domain</code> attribute, so each cookie is host-only to the API host that sets it. The refresh cookie has <code>HttpOnly</code>; the CSRF cookie does not. No separate absolute expiry or CSRF-specific lifetime is configured in the inspected code.</p>
        <p>The inspected local backend configuration has <code>SECURE_COOKIES=false</code>. Production configuration validation requires <code>SECURE_COOKIES=true</code>, but StrongHaul’s deployed production setting was not available for verification. The access JWT is short-lived (10 minutes by default), returned by the backend and held in frontend memory; it is not stored in a cookie or local storage.</p>
        <p>On session refresh, the backend validates the CSRF header and refresh cookie, revokes the existing refresh session, creates a replacement, and rotates both cookies. The frontend calls the CSRF endpoint to obtain the readable CSRF value; it never reads the HttpOnly refresh token.</p>
        <p>A Pexels-hosted image response was also observed setting the third-party Cloudflare <code>__cf_bm</code> cookie. The response marked it HttpOnly, Secure and Partitioned. Cloudflare describes it as necessary for its bot-protection products. It is not StrongHaul analytics and is controlled by the third-party service. No expiry or retention period is stated because StrongHaul has not independently confirmed one for the observed provider configuration.</p>
        <p>Cookie behavior depends on the browser and deployment. The checks covered local development and a remote image response; production hostnames, secure settings and provider configuration still need verification.</p>
      </>
    ),
  },
  {
    id: 'first-party-cookies',
    title: 'First-Party Cookies',
    content: (
      <>
        <p>The StrongHaul authentication API sets the <code>refresh_token</code> and <code>csrf_token</code> cookies described above after sign-in. They are host-only to the API host and scoped to <code>/auth</code>; no Domain attribute is configured. In a same-site deployment they support account sessions and CSRF protection. The local frontend page itself does not set these cookies; the backend API response does.</p>
        <p>The old frontend demo account value in local storage is removed when the auth provider initializes. Local storage is not a cookie. Production domains, HTTPS and cookie flags must still be verified against the deployed configuration.</p>
      </>
    ),
  },
  {
    id: 'analytics-cookies',
    title: 'Analytics Cookies',
    content: (
      <>
        <p>StrongHaul does not currently have an implemented analytics-cookie system. No analytics tags, analytics-cookie code or analytics packages were found in the frontend inspection. The observed <code>__cf_bm</code> cookie is associated with third-party bot management, and the authentication cookies support session security; neither is StrongHaul analytics.</p>
        <p>StrongHaul plans a custom analytics system inside the platform for administrator use, but it is not implemented. Administrator-only access does not by itself mean that analytics information is not personal data or remove applicable legal obligations. Before implementation, StrongHaul should assess the data collected, access, purposes, lawful basis, minimisation and whether any cookie or consent control is required.</p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    content: (
      <>
        <p>Some StrongHaul pages load images from Pexels and Unsplash. A third-party provider may apply its own cookies or similar technologies and process technical request information under its own configuration and policies. In the local check, a Pexels image response set the Cloudflare <code>__cf_bm</code> cookie; this observation does not establish that the same cookie will appear in every browser or on the production deployment.</p>
        <p>StrongHaul does not control third-party cookie settings or policies. Review the relevant provider’s current information and your browser’s privacy settings. StrongHaul should recheck external resources and provider behavior before launch and when site integrations change.</p>
      </>
    ),
  },
  {
    id: 'managing-cookies',
    title: 'Managing Cookies',
    content: (
      <>
        <p>You can usually review, delete or block cookies through your browser’s privacy or site-settings controls. Blocking or deleting the HttpOnly refresh cookie prevents session refresh and may sign you out; blocking the readable CSRF cookie prevents the frontend from completing refresh or logout requests. Blocking third-party cookies may affect content or services delivered by external providers.</p>
        <p>StrongHaul does not currently provide a consent-management interface or cookie-preference panel. No non-essential analytics or advertising cookies were identified in the frontend. Whether additional consent controls are legally required for the deployed services should be confirmed for applicable jurisdictions before launch.</p>
      </>
    ),
  },
  {
    id: 'future-changes',
    title: 'Future Changes',
    content: (
      <>
        <p>Cookie practices may change as authentication, backend services or hosting configuration evolve, or if the planned custom analytics system is implemented. StrongHaul will review the actual technologies and purposes, determine whether they involve personal data or non-essential cookies, and update this policy to describe implemented changes.</p>
        <p>If future technologies require consent or other user controls under applicable law, StrongHaul should implement appropriate controls before enabling them. Planned functionality is not described as an existing feature in this policy.</p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    content: (
      <>
        <p>No verified cookie-policy contact address is configured in the application. The <Link href="/help" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">Help Center</Link> is available for general information, but its support form is a frontend demonstration and does not send or store messages.</p>
        <p>Do not use the demonstration form for formal privacy requests or sensitive information. StrongHaul should publish a verified contact channel and confirm the applicable legal requirements before public launch.</p>
      </>
    ),
  },
];

export function CookiePolicyPage() {
  const [activeSection, setActiveSection] = useState(cookieSections[0].id);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    function updateActiveSection() {
      let currentSection = cookieSections[0].id;

      for (const section of cookieSections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= 160) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    }

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  function handleTocClick(sectionId: string) {
    setActiveSection(sectionId);
    setMobileTocOpen(false);
  }

  return (
    <div className="bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex items-center gap-3 text-accent">
            <Cookie className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-wider">StrongHaul Legal</p>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Cookie Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          <p className="mt-5 max-w-3xl border-l-2 border-warning bg-warning/10 px-4 py-3 text-sm leading-6 text-foreground">
            This policy reflects a local frontend check. Cookie behavior on the production domain and any future integrations must be verified before launch.
          </p>
          <p className="mt-4 flex max-w-3xl items-start gap-3 border border-border bg-background p-4 text-sm leading-6 text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            Authentication cookies are used for session refresh and CSRF protection. No analytics tags or advertising trackers were found in the current frontend, and no consent popup is shown for appearance alone.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-12">
        <aside className="h-fit lg:sticky lg:top-24">
          <button
            type="button"
            aria-expanded={mobileTocOpen}
            aria-controls="cookies-toc"
            onClick={() => setMobileTocOpen((open) => !open)}
            className="flex min-h-11 w-full items-center justify-between border border-border bg-card px-4 text-left text-sm font-semibold text-primary lg:hidden"
          >
            On this page
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`} />
          </button>
          <nav
            id="cookies-toc"
            aria-label="Cookie Policy sections"
            className={`${mobileTocOpen ? 'block' : 'hidden'} mt-2 max-h-[65vh] overflow-y-auto border border-border bg-card p-2 lg:mt-0 lg:block lg:max-h-[calc(100vh-8rem)] lg:border-0 lg:bg-transparent lg:p-0`}
          >
            <p className="mb-3 hidden px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:block">On this page</p>
            <ol className="space-y-0.5">
              {cookieSections.map((section, index) => {
                const active = activeSection === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={() => handleTocClick(section.id)}
                      aria-current={active ? 'location' : undefined}
                      className={`flex min-h-9 items-start gap-2 border-l-2 px-3 py-2 text-xs leading-5 transition-colors ${active ? 'border-accent bg-accent/5 font-semibold text-primary' : 'border-transparent text-muted-foreground hover:border-border hover:text-primary'}`}
                    >
                      <span className="shrink-0 tabular-nums text-muted-foreground">{index + 1}.</span>
                      <span>{section.title}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 divide-y divide-border border-y border-border bg-card px-5 sm:px-8">
          {cookieSections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 py-8 first:pt-8 last:pb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Section {index + 1}</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-primary sm:text-2xl">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                {section.content}
              </div>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}