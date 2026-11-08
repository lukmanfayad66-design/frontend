'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ChevronDown, Eye, ShieldAlert } from 'lucide-react';

const lastUpdated = 'November 8, 2026';

const privacySections: { id: string; title: string; content: ReactNode }[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>StrongHaul is an equipment rental marketplace that connects equipment owners with people looking to rent construction equipment, heavy machinery and trucks. The platform initially focuses on Ghana and is intended to support expansion into other markets.</p>
        <p>This notice describes information handled by the connected authentication frontend and backend, and identifies marketplace functions that remain unimplemented or unverified. Hosting, operational practices and legal details still require confirmation before this is a complete production privacy notice.</p>
        <p>StrongHaul should identify the legal entity that determines the purposes and means of processing personal data and confirm its controller and processor responsibilities under Ghana’s Data Protection Act, 2012 (Act 843) and other applicable law. This application does not establish the entity’s legal identity or Data Protection Commission registration status.</p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: (
      <>
        <p>Registration and authentication forms send account information to StrongHaul’s configured authentication API. Registration collects full name, email address, phone number, account type, password and the renter’s optional marketing-consent selection. The backend stores profile fields and a password hash. Equipment listing, renter enquiry/booking, newsletter, support and safety-report forms remain frontend-only and do not send or store their submissions.</p>
        <p>Passwords are hashed with Argon2 by the backend and are not intentionally saved in frontend local storage. Authentication uses a short-lived access token held in memory and refresh-session cookies. The backend stores a hash of each refresh token with its account, creation, expiry and revocation information.</p>
        <p>The homepage may ask your browser for location permission. If allowed, the frontend reads device coordinates to estimate a nearby Ghanaian city in the browser; the StrongHaul application does not send or persist those coordinates. Your browser or device location provider may process a location request to provide the coordinates under its own settings and privacy terms; StrongHaul has not identified or verified that provider. A selected or detected city and equipment category may be placed in the Browse page URL when you search.</p>
        <p>When the site or remote image files load, hosting infrastructure and image hosts may process technical request information such as IP address, request time, URL and browser headers. The exact collection and retention depend on the deployed infrastructure and providers and must be confirmed before launch.</p>
      </>
    ),
  },
  {
    id: 'account-and-registration-information',
    title: 'Account and Registration Information',
    content: (
      <>
        <p>Registration collects full name, email address, phone number, account type (equipment owner or renter), and password. Renters may optionally consent to marketplace updates and promotional content; the checkbox is unchecked by default. The backend stores the account profile and consent selection. It stores a password hash generated with Argon2, not the submitted password.</p>
        <p>Sign-in currently uses email and password. On successful sign-in, the backend issues an access token for in-memory frontend use and sets refresh-session cookies. The backend database stores the account and hashed refresh-session records. Account email verification is not implemented, and there is no password-reset endpoint or email delivery provider.</p>
        <p>The frontend removes the old demo auth record from local storage when it initializes. Do not rely on the former demo password or account data as an account in the connected service.</p>
      </>
    ),
  },
  {
    id: 'equipment-owner-information',
    title: 'Equipment Owner Information',
    content: (
      <>
        <p>Owner registration stores the account profile described above, including the selected owner role and phone number. The role is used to direct the account to the owner workspace. The dashboard still contains sample equipment and business information for demonstration.</p>
        <p>A working equipment listing submission form is not present. Therefore, this frontend does not currently collect equipment-owner business details, owner-submitted equipment specifications, pricing, availability or photographs through a listing workflow. If a listing service is introduced, StrongHaul should disclose the fields, purposes, visibility and retention before collecting them.</p>
      </>
    ),
  },
  {
    id: 'renter-information',
    title: 'Renter Information',
    content: (
      <>
        <p>Visitors can browse the sample equipment catalogue without registering. Renter registration uses the same profile fields, plus the optional marketing-consent choice described above. The backend stores this consent selection but no marketing message delivery is implemented.</p>
        <p>The current application has no working renter enquiry or booking submission flow. It therefore does not collect rental requests, booking details or renter messages through those features. Listing cards and dashboards contain static demonstration data, not a record of actual users or rentals.</p>
      </>
    ),
  },
  {
    id: 'equipment-listings-and-uploaded-content',
    title: 'Equipment Listings and Uploaded Content',
    content: (
      <>
        <p>Equipment displayed in the current marketplace is sample data maintained in the application source. The listing entry page explains a future workflow, but it does not accept or upload equipment details, photographs or documents.</p>
        <p>If owner-submitted listings or uploads are enabled later, StrongHaul should explain what is collected, who can view it, how long it is retained, and how owners can correct or remove it. Do not upload sensitive or confidential material into a feature that is only a demo.</p>
      </>
    ),
  },
  {
    id: 'rental-enquiries-and-booking-information',
    title: 'Rental Enquiries and Booking Information',
    content: (
      <>
        <p>The equipment detail screen displays sample equipment and owner names. Its Contact, Book Now and Request Delivery controls do not submit an enquiry or booking to StrongHaul. No booking or rental transaction service was found in the application.</p>
        <p>When direct enquiry or booking functionality is implemented, StrongHaul should disclose what information is shared with the relevant owner or renter, when sharing occurs, and what each party controls in the direct rental arrangement.</p>
      </>
    ),
  },
  {
    id: 'device-and-technical-information',
    title: 'Device and Technical Information',
    content: (
      <>
        <p>The application does not contain code-defined analytics or a device-fingerprinting feature. The homepage can request browser geolocation permission and process coordinates locally to estimate a city. If you choose a city, that city and any selected category can be included in the Browse URL; precise coordinates are not sent to the authentication backend by the app. The backend’s rate limiter uses the request’s client IP address to apply request limits; its storage depends on deployment configuration.</p>
        <p>The repository includes a Netlify Next.js build adapter, but the actual production host, CDN, access logs, error monitoring, log fields and retention periods were not verified. Providers used to deliver the site may process technical request information to operate or protect the service. StrongHaul must confirm the deployed setup and update this notice accordingly.</p>
        <p>Some images are loaded directly from Pexels and Unsplash image domains. A request to those image hosts may expose technical connection information, including your IP address and request headers, to the relevant host. StrongHaul has not verified those providers’ current retention, processing locations or terms for this deployment.</p>
      </>
    ),
  },
  {
    id: 'how-we-use-personal-information',
    title: 'How We Use Personal Information',
    content: (
      <>
        <p>Account information is used by the authentication backend to create accounts, verify credentials, maintain refresh sessions and return the user profile and role for dashboard routing. Browser geolocation, if permitted, is used locally to estimate a city for the homepage search. Search filters, FAQ searches and form validation operate in browser state.</p>
        <p>Newsletter, Help Center support and safety-report forms currently validate input only; they do not send or store submissions. Notifications and equipment dashboards contain sample content. There is no implemented marketing delivery, notification, analytics, advertising, equipment enquiry or booking integration identified in the application.</p>
        <p>Before production launch, StrongHaul should document each actual purpose and lawful basis, collect only necessary information, keep it accurate, and ensure the purpose is communicated clearly in accordance with Act 843 and other applicable law.</p>
      </>
    ),
  },
  {
    id: 'how-we-share-personal-information',
    title: 'How We Share Personal Information',
    content: (
      <>
        <p>Account registration and authentication data is sent to and stored by the connected StrongHaul authentication backend. Account information is not currently shared with equipment owners or renters through an enquiry or booking workflow because those features are not connected. The app code does not show a personal-information sale or a configured third-party analytics, notification or advertising provider.</p>
        <p>Technical information may be processed by the production hosting or CDN provider once deployed, and by remote image hosts when a browser requests their images. Actual providers, instructions, contracts, locations and log retention have not been verified.</p>
        <p>If owner/renter contact features, hosting processors or other integrations are introduced, information should be shared only as needed for a stated purpose, protected by appropriate safeguards and described here. Information may also need to be disclosed where required by law or a valid legal process, subject to applicable requirements.</p>
      </>
    ),
  },
  {
    id: 'third-party-services-and-integrations',
    title: 'Third-Party Services and Integrations',
    content: (
      <>
        <p>The frontend connects to StrongHaul’s FastAPI authentication backend. That backend uses SQLAlchemy models for accounts and refresh sessions, Argon2 password hashing and JWT access tokens. The backend settings default to SQLite for local development and require PostgreSQL, secure cookies and shared rate-limit storage for production; the actual deployment configuration has not been verified. A Supabase package is present in frontend dependencies, but no Supabase client or data connection is used in the inspected code.</p>
        <p>No analytics, advertising, notification or email delivery integration was found. The repository is configured with a Netlify Next.js build plugin; whether the live service is hosted by Netlify and which associated services process production requests must be verified by the operator.</p>
        <p>The current interface loads some image assets directly from Pexels and Unsplash. Third-party providers may process connection data when those assets load. StrongHaul should review provider terms, privacy notices, transfer arrangements and whether locally hosting assets is preferable before launch.</p>
      </>
    ),
  },
  {
    id: 'cookies-and-tracking-technologies',
    title: 'Cookies and Tracking Technologies',
    content: (
      <>
        <p>The authentication backend sets <code>refresh_token</code> and <code>csrf_token</code> cookies when a user signs in. The refresh cookie is HttpOnly; the CSRF cookie is readable by the browser so it can be returned in a request header. Both use SameSite=Strict and the <code>/auth</code> path. Their configured lifetime defaults to 14 days. Secure is enabled by production configuration; it is disabled by the local development settings. The frontend keeps the short-lived access token in memory.</p>
        <p>During a local check, a response from the Pexels image host set a third-party Cloudflare <code>__cf_bm</code> cookie with Secure, HttpOnly and Partitioned attributes. Cloudflare describes this cookie as necessary for its bot-protection products. It is set by the image-delivery service, not by StrongHaul, and the StrongHaul frontend does not read or control it. Whether a browser accepts or sends it depends on browser privacy settings. StrongHaul should recheck the deployed image host and applicable Ghanaian requirements before launch.</p>
        <p>No analytics cookies, advertising trackers or consent manager were identified in the current frontend. The legacy demo account record is cleared from local storage when the auth provider initializes; local storage itself is not a cookie. Read the <Link href="/cookies" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">Cookie Policy</Link> for current cookie details.</p>
      </>
    ),
  },
  {
    id: 'data-storage-and-security',
    title: 'Data Storage and Security',
    content: (
      <>
        <p>The authentication backend stores account profile information, Argon2 password hashes and refresh-session records. Raw refresh tokens are held in HttpOnly cookies and only their hashes are stored in the database. Access tokens are kept in frontend memory. These controls describe the code, not an assurance that the production deployment is secure.</p>
        <p>The backend uses SQLite by default for local development. Its production settings require a shared database and shared rate-limit storage, but production settings, hosting safeguards, backups, logs, access controls, incident response and processor agreements have not been verified. No security measure can be described as a guarantee.</p>
      </>
    ),
  },
  {
    id: 'data-retention-and-deletion',
    title: 'Data Retention and Deletion',
    content: (
      <>
        <p>Account and refresh-session records are stored in the configured backend database. Refresh sessions have an expiry (14 days by default) and a revocation timestamp. No account-deletion endpoint or cleanup job for expired session rows was found, so account deletion handling and database retention periods need to be established. Local storage from the previous demo auth flow is cleared when the frontend auth provider initializes.</p>
        <p>Form inputs that are only validated in component state are not stored by the app and generally disappear when the page is left or reloaded. Geolocation coordinates are used transiently in browser code and are not persisted by the app. Actual infrastructure log retention is not known.</p>
        <p>For production, StrongHaul should set and document retention periods by data type, delete or de-identify information when no longer needed, and retain information longer only where required or permitted by law.</p>
      </>
    ),
  },
  {
    id: 'international-data-transfers',
    title: 'International Data Transfers',
    content: (
      <>
        <p>Account data is sent to the authentication backend configured for the frontend. The code does not identify the production backend host or the physical location of its database. Direct requests for remote images and the eventual hosting/CDN environment may be handled outside Ghana; the relevant providers and processing locations have not been confirmed.</p>
        <p>Before production launch, StrongHaul should identify all processing locations and recipients, assess cross-border transfer requirements under Act 843 and other applicable law, and implement any required safeguards, notices and agreements. StrongHaul’s initial focus on Ghana does not establish that all data remains in Ghana.</p>
      </>
    ),
  },
  {
    id: 'user-privacy-rights',
    title: 'User Privacy Rights',
    content: (
      <>
        <p>Subject to applicable law, including Ghana’s Data Protection Act, 2012 (Act 843), you may have rights to request access to personal information, ask for inaccurate information to be corrected, request deletion where legally applicable, raise concerns about processing and withdraw consent where consent is the relevant lawful basis.</p>
        <p>The authentication backend stores account information, but no account profile update/deletion endpoint or verified privacy-request channel is implemented. StrongHaul must publish a verified method for submitting access, correction, deletion and objection requests before launch and explain how requests will be verified and answered.</p>
        <p>You may also raise a complaint with Ghana’s Data Protection Commission through its current official channels. StrongHaul’s registration status with the Commission has not been verified and is not represented here.</p>
      </>
    ),
  },
  {
    id: 'childrens-privacy',
    title: 'Children’s Privacy',
    content: (
      <>
        <p>StrongHaul is intended for people with legal capacity to use the marketplace, not as a service directed to children. No age-verification feature is implemented in this frontend.</p>
        <p>A person under the applicable legal age may use the service only with legally valid authorization and where permitted by law. StrongHaul should establish and review an age and authorization process with Ghanaian counsel before launch. If you believe a child’s personal information has been provided, a verified privacy contact process is required to raise that concern.</p>
      </>
    ),
  },
  {
    id: 'marketing-and-notifications',
    title: 'Marketing and Notifications',
    content: (
      <>
        <p>Renter registration includes an optional marketing-consent checkbox that is unchecked by default. The selection is stored in the backend account profile, but no promotional messages are sent and no email, SMS, push-notification or notification-delivery provider is configured.</p>
        <p>If StrongHaul later sends marketing communications, it should do so only with an appropriate legal basis and required consent, explain how to opt out, and honor withdrawal or objection requests. Transactional or service notifications should be separately described and implemented before being promised.</p>
      </>
    ),
  },
  {
    id: 'changes-to-this-privacy-policy',
    title: 'Changes to This Privacy Policy',
    content: (
      <>
        <p>This policy may be updated when StrongHaul’s data practices, services or legal obligations change. The “Last updated” date identifies the version date.</p>
        <p>Material changes should be communicated through an appropriate channel when available and as required by law. Before production launch, StrongHaul should establish how notices are delivered and how consent or other legal bases are recorded where required.</p>
      </>
    ),
  },
  {
    id: 'contact-and-privacy-complaints',
    title: 'Contact and Privacy Complaints',
    content: (
      <>
        <p>No verified privacy email address, phone number or postal address is configured in this application. The <Link href="/help" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">Help Center</Link> currently contains a frontend-only form; it does not send or save a message and should not be used for formal privacy requests or complaints.</p>
        <p>StrongHaul must publish and verify a privacy contact channel and establish a process for handling data-subject requests and complaints before public launch. Individuals may also contact Ghana’s Data Protection Commission through its current official channels. Do not send sensitive information through a form that is not connected to a secure service.</p>
      </>
    ),
  },
];

export function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(privacySections[0].id);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    function updateActiveSection() {
      let currentSection = privacySections[0].id;

      for (const section of privacySections) {
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
            <Eye className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-wider">StrongHaul Privacy</p>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          <p className="mt-5 max-w-3xl border-l-2 border-warning bg-warning/10 px-4 py-3 text-sm leading-6 text-foreground">
            Authentication is connected to the backend, but listing, enquiry, booking and support flows remain frontend prototypes. This policy requires review by a qualified Ghanaian privacy lawyer and confirmation against live hosting and backend practices before public launch.
          </p>
          <div className="mt-4 flex max-w-3xl items-start gap-3 border border-destructive/25 bg-destructive/5 p-4 text-sm leading-6 text-foreground">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <p><strong>Deployment warning:</strong> the backend hashes passwords with Argon2, but production security depends on HTTPS, secure cookie configuration, database controls and the deployed environment. Those production controls have not been independently verified.</p>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-12">
        <aside className="h-fit lg:sticky lg:top-24">
          <button
            type="button"
            aria-expanded={mobileTocOpen}
            aria-controls="privacy-toc"
            onClick={() => setMobileTocOpen((open) => !open)}
            className="flex min-h-11 w-full items-center justify-between border border-border bg-card px-4 text-left text-sm font-semibold text-primary lg:hidden"
          >
            On this page
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`} />
          </button>
          <nav
            id="privacy-toc"
            aria-label="Privacy Policy sections"
            className={`${mobileTocOpen ? 'block' : 'hidden'} mt-2 max-h-[65vh] overflow-y-auto border border-border bg-card p-2 lg:mt-0 lg:block lg:max-h-[calc(100vh-8rem)] lg:border-0 lg:bg-transparent lg:p-0`}
          >
            <p className="mb-3 hidden px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:block">On this page</p>
            <ol className="space-y-0.5">
              {privacySections.map((section, index) => {
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
          {privacySections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 py-8 first:pt-8 last:pb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Section {index + 1}</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-primary sm:text-2xl">{section.title}</h2>
              <div className="privacy-copy mt-4 space-y-4 text-sm leading-7 text-muted-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:pl-1 [&_li::marker]:text-accent">
                {section.content}
              </div>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}