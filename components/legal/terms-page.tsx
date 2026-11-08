'use client';

import { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { ChevronDown, FileText } from 'lucide-react';

const lastUpdated = 'November 8, 2026';

const termsSections: { id: string; title: string; content: ReactNode }[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <p>StrongHaul is an online marketplace that connects independent equipment owners with individuals and businesses looking to rent construction equipment, heavy machinery and trucks. StrongHaul initially focuses on Ghana and is designed to support expansion into other markets.</p>
        <p>These Terms of Service (the “Terms”) govern your access to and use of the StrongHaul website and related marketplace features. They describe the rules that apply when you browse, create an account, publish a listing or contact another user.</p>
        <p>StrongHaul facilitates connections. Owners independently provide and manage their equipment, set their rental prices and availability, and discuss rental arrangements directly with renters. StrongHaul is not the owner, operator or rental provider of listed equipment.</p>
      </>
    ),
  },
  {
    id: 'acceptance-of-terms',
    title: 'Acceptance of Terms',
    content: (
      <>
        <p>By accessing or using StrongHaul, you agree to these Terms and to follow applicable laws. If you do not agree, do not access or use the platform.</p>
        <p>If you use StrongHaul on behalf of a business or other organization, you confirm that you are authorized to accept these Terms for that organization. References to “you” include the organization where applicable.</p>
      </>
    ),
  },
  {
    id: 'eligibility-and-account-registration',
    title: 'Eligibility and Account Registration',
    content: (
      <>
        <p>You must have the legal capacity to enter into binding agreements under the laws that apply to you. A person under the applicable legal age may use StrongHaul only with legally valid authorization and where permitted by law.</p>
        <p>When registering, provide accurate, current and complete information, and update it if it changes. Do not impersonate another person or business, or create an account using information you are not authorized to use.</p>
        <p>You are responsible for protecting your account credentials and for activity carried out through your account, subject to applicable law. Do not share your password. Notify StrongHaul promptly if you suspect unauthorized access or account use. StrongHaul currently supports email-and-password registration and sign-in; email verification and password reset are not implemented. Equipment listing, booking, payments and support workflows remain separate and may not be available through the current frontend.</p>
      </>
    ),
  },
  {
    id: 'how-stronghaul-works',
    title: 'How StrongHaul Works',
    content: (
      <>
        <p>StrongHaul provides an online marketplace where equipment owners may publish listings and renters may browse equipment and contact owners. Browsing available listings does not require an account.</p>
        <p>Owners and renters independently discuss and agree on any rental arrangement, including price, availability, delivery, use and return of the equipment. StrongHaul does not automatically become a party to an agreement between an owner and a renter, and a listing or enquiry does not itself create a rental agreement.</p>
        <p>StrongHaul does not own, possess, operate or provide the listed equipment, and does not control whether an owner or renter proceeds with a proposed arrangement.</p>
      </>
    ),
  },
  {
    id: 'equipment-owner-responsibilities',
    title: 'Equipment Owner Responsibilities',
    content: (
      <>
        <p>If you publish equipment, you represent and agree that you:</p>
        <ul>
          <li>Have the legal right or authorization to list the equipment and make it available for rental.</li>
          <li>Provide accurate, complete and current descriptions, specifications, photographs, rental rates and availability.</li>
          <li>Use genuine photographs that represent the listed equipment.</li>
          <li>Disclose known defects, damage, mechanical issues and material operating limitations.</li>
          <li>Maintain the equipment appropriately and provide relevant operating instructions and information.</li>
          <li>Respond honestly to enquiries and communicate material changes to availability or condition.</li>
          <li>Comply with applicable laws, regulations and safety requirements.</li>
          <li>Honor rental arrangements you independently accept and communicate their terms clearly.</li>
        </ul>
        <p>StrongHaul does not take over these responsibilities by displaying a listing.</p>
      </>
    ),
  },
  {
    id: 'renter-responsibilities',
    title: 'Renter Responsibilities',
    content: (
      <>
        <p>If you contact an owner or rent equipment, you agree to:</p>
        <ul>
          <li>Provide accurate information when making enquiries.</li>
          <li>Confirm the equipment specifications, condition, availability and suitability for your intended work before agreeing to rent.</li>
          <li>Agree directly with the owner on rental terms and confirm all charges before entering an arrangement.</li>
          <li>Ensure equipment is operated only by people with the appropriate training, qualifications and authorization.</li>
          <li>Follow manufacturer instructions and applicable workplace, transport and safety requirements.</li>
          <li>Use reasonable care and return the equipment according to the arrangement made with the owner.</li>
        </ul>
        <p>Renters are responsible for deciding whether equipment and proposed terms are appropriate for their circumstances.</p>
      </>
    ),
  },
  {
    id: 'equipment-listings',
    title: 'Equipment Listings',
    content: (
      <>
        <p>Owners are responsible for their listing information and for ensuring that equipment is legally available for rental. Listings must be accurate and must not be misleading, fraudulent or unlawful.</p>
        <p>Publication of a listing does not mean StrongHaul has inspected, tested, certified, approved or guaranteed the equipment. StrongHaul does not automatically inspect or certify every listed machine.</p>
        <p>To the extent permitted by applicable law, StrongHaul may review, restrict or remove listings that appear inaccurate, misleading, fraudulent, prohibited or otherwise inconsistent with these Terms. A listing may also be unavailable or changed by its owner at any time.</p>
      </>
    ),
  },
  {
    id: 'rental-arrangements',
    title: 'Rental Arrangements',
    content: (
      <>
        <p>Before proceeding, owners and renters should communicate clearly and agree directly on all relevant terms, including:</p>
        <ul>
          <li>Rental duration, rates and how any partial periods are calculated.</li>
          <li>Delivery, collection, transportation and related costs.</li>
          <li>Whether an operator is provided and who is responsible for operation.</li>
          <li>Deposits, if any, and how they are handled.</li>
          <li>Maintenance, fuel, damage, loss and reporting responsibilities.</li>
          <li>Cancellation conditions and any other agreed charges.</li>
        </ul>
        <p>StrongHaul does not automatically guarantee that an enquiry or rental request will result in a booking. Owners and renters are responsible for confirming that their agreement is clear and lawful.</p>
      </>
    ),
  },
  {
    id: 'pricing-and-payments',
    title: 'Pricing and Payments',
    content: (
      <>
        <p>Equipment owners determine their own rental prices. Owners and renters are responsible for confirming payment methods, amounts, due dates, deposits and any additional charges directly before making a rental arrangement.</p>
        <p>StrongHaul does not currently process, hold, protect or guarantee rental payments. Do not assume that a payment made to another user is secured or recoverable through StrongHaul.</p>
        <p>If StrongHaul introduces subscription fees or paid listing plans, those platform fees will be separate from rental payments between owners and renters. Any applicable platform price and billing terms will be presented before a user makes a purchase. Subscription checkout is not currently available in the frontend.</p>
      </>
    ),
  },
  {
    id: 'cancellations-and-disputes',
    title: 'Cancellations and Disputes',
    content: (
      <>
        <p>Owners and renters should establish cancellation conditions before confirming a rental. Because rental arrangements are made directly between those parties, they should first try to address disagreements with each other and refer to the terms they agreed.</p>
        <p>Users may contact StrongHaul to report suspected platform misuse, a listing concern or another issue involving the platform. StrongHaul may review reports and take appropriate action within its responsibilities as a marketplace, subject to applicable law.</p>
        <p>StrongHaul does not guarantee that it will resolve a private dispute between an owner and renter, recover funds, or require either party to take a particular action.</p>
      </>
    ),
  },
  {
    id: 'safety-and-equipment-use',
    title: 'Safety and Equipment Use',
    content: (
      <>
        <p>Users must exercise appropriate care and comply with manufacturer instructions and relevant workplace, transport and safety requirements. Owners should accurately disclose equipment condition and limitations; renters should assess suitability and safe operation before use.</p>
        <p>Read the <Link href="/safety" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">StrongHaul Safety guidance</Link>. It is general information, not a safety certification, professional assessment or substitute for applicable requirements.</p>
        <p>StrongHaul does not independently inspect, certify or guarantee equipment. If a machine appears unsafe or a dangerous situation occurs, stop work when safe and seek appropriate emergency assistance.</p>
      </>
    ),
  },
  {
    id: 'prohibited-activities',
    title: 'Prohibited Activities',
    content: (
      <>
        <p>You must not use StrongHaul to:</p>
        <ul>
          <li>Publish fraudulent listings, false identity information or misleading descriptions.</li>
          <li>List stolen or unlawfully obtained equipment, or equipment you are not authorized to offer.</li>
          <li>Access another user’s account without authorization or attempt to compromise platform security.</li>
          <li>Harass, threaten or engage in abusive conduct toward another user.</li>
          <li>Upload malicious software or harmful, unlawful or infringing content.</li>
          <li>Facilitate unlawful transactions or otherwise use the platform in violation of applicable law.</li>
        </ul>
        <p>Do not interfere with the operation of StrongHaul or attempt to access systems, data or accounts without authorization.</p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: (
      <>
        <p>StrongHaul and its licensors retain rights in the StrongHaul name and branding, website design, software, platform content and other intellectual property, except for materials owned by users or third parties. These Terms do not transfer those rights to you.</p>
        <p>You retain rights you hold in content you submit. By submitting listing text, photographs or other content, you grant StrongHaul a limited, non-exclusive permission to host, reproduce, display and use that content as reasonably necessary to operate, maintain and present the marketplace, subject to applicable privacy requirements and law.</p>
        <p>This permission lasts for the period reasonably needed to provide the service and handle routine records, backups or legal obligations. You are responsible for having the rights and permissions needed to submit your content.</p>
      </>
    ),
  },
  {
    id: 'platform-availability-and-modifications',
    title: 'Platform Availability and Modifications',
    content: (
      <>
        <p>StrongHaul aims to make the platform available but does not guarantee uninterrupted, secure or error-free access. Features may be unavailable because of maintenance, technical issues or other circumstances.</p>
        <p>Subject to applicable law, StrongHaul may change, suspend or discontinue a feature when reasonably necessary. Where required, StrongHaul will provide notice or other protections required by law.</p>
      </>
    ),
  },
  {
    id: 'limitation-of-liability',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>StrongHaul facilitates connections between independent equipment owners and renters. To the extent permitted by applicable law, StrongHaul is not responsible for and does not guarantee:</p>
        <ul>
          <li>The condition, safety, legality, quality or suitability of equipment.</li>
          <li>Equipment availability or the accuracy or completeness of a listing.</li>
          <li>The conduct, statements or ability of an owner or renter.</li>
          <li>That an enquiry will receive a response or result in a rental.</li>
          <li>The formation, performance, payment or outcome of a private rental agreement.</li>
        </ul>
        <p>To the extent permitted by applicable law, StrongHaul will not be liable for indirect or consequential loss arising from a user’s dealings with another user or use of equipment. Nothing in these Terms excludes or limits liability, rights or remedies that cannot lawfully be excluded or limited, including any mandatory protections under Ghanaian law.</p>
        <p>Nothing in this section removes an owner’s or renter’s responsibilities for their own conduct, equipment or agreements.</p>
      </>
    ),
  },
  {
    id: 'indemnification',
    title: 'Indemnification',
    content: (
      <p>To the extent permitted by applicable law, you are responsible for losses, claims and reasonable costs suffered by StrongHaul arising directly from your unlawful conduct, material breach of these Terms or misuse of the platform. This does not apply to the extent a loss was caused by StrongHaul’s own breach, negligence or other conduct for which liability cannot lawfully be excluded. StrongHaul will give you reasonable notice of a claim where legally permitted.</p>
    ),
  },
  {
    id: 'suspension-and-termination',
    title: 'Suspension and Termination',
    content: (
      <>
        <p>Subject to applicable law, StrongHaul may restrict, suspend or terminate access to an account or listing where there is a reasonable basis to believe the user has engaged in fraud, serious or repeated violations of these Terms, unlawful conduct, a security risk or conduct that may harm users or the platform.</p>
        <p>Where appropriate and lawful, StrongHaul may provide notice and an opportunity to address an issue. Suspension or termination does not remove obligations or rights that arose before it, or requirements imposed by law.</p>
      </>
    ),
  },
  {
    id: 'privacy-and-cookies',
    title: 'Privacy and Cookies',
    content: (
      <>
        <p>Personal information is addressed in the <Link href="/privacy" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">StrongHaul Privacy Policy</Link>. Information about cookies and similar technologies is available in the <Link href="/cookies" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">Cookie Policy</Link>.</p>
        <p>Do not submit sensitive personal information unless the relevant service explains how it will be handled. StrongHaul will update its privacy and cookie notices if actual data or cookie practices change.</p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: 'Governing Law',
    content: (
      <p>These Terms are initially governed by the laws of the Republic of Ghana, subject to any mandatory legal requirements that apply to you or the relevant matter. This section does not limit rights or protections that cannot lawfully be waived.</p>
    ),
  },
  {
    id: 'changes-to-these-terms',
    title: 'Changes to These Terms',
    content: (
      <>
        <p>StrongHaul may update these Terms as the marketplace develops or to reflect legal or operational changes. The “Last updated” date at the top indicates when this version was prepared.</p>
        <p>For material changes, StrongHaul will communicate the update through an appropriate channel when available and as required by law. If you do not agree to revised Terms, you should stop using the platform. Continued use after an effective change may indicate acceptance only to the extent permitted by applicable law.</p>
      </>
    ),
  },
  {
    id: 'contact-information',
    title: 'Contact Information',
    content: (
      <>
        <p>No verified contact address for Terms of Service enquiries is currently configured in this application. The site’s Help Center is available for general guidance at <Link href="/help" className="font-semibold text-accent underline underline-offset-4 hover:text-primary">/help</Link>, but its support form is a frontend demonstration and does not transmit or store messages.</p>
        <p>Do not use the demonstration form to send formal legal notices, urgent safety reports or sensitive information. StrongHaul should publish and verify a contact channel before launch.</p>
      </>
    ),
  },
];

export function TermsPage() {
  const [activeSection, setActiveSection] = useState(termsSections[0].id);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    function updateActiveSection() {
      let currentSection = termsSections[0].id;

      for (const section of termsSections) {
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
            <FileText className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-wider">StrongHaul Legal</p>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          <p className="mt-5 max-w-3xl border-l-2 border-warning bg-warning/10 px-4 py-3 text-sm leading-6 text-foreground">
            Draft for review by a qualified Ghanaian lawyer before public launch. These terms describe the current marketplace model and should be finalized against StrongHaul’s implemented services and policies.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-12">
        <aside className="h-fit lg:sticky lg:top-24">
          <button
            type="button"
            aria-expanded={mobileTocOpen}
            aria-controls="terms-toc"
            onClick={() => setMobileTocOpen((open) => !open)}
            className="flex min-h-11 w-full items-center justify-between border border-border bg-card px-4 text-left text-sm font-semibold text-primary lg:hidden"
          >
            On this page
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`} />
          </button>
          <nav
            id="terms-toc"
            aria-label="Terms of Service sections"
            className={`${mobileTocOpen ? 'block' : 'hidden'} mt-2 max-h-[65vh] overflow-y-auto border border-border bg-card p-2 lg:mt-0 lg:block lg:max-h-[calc(100vh-8rem)] lg:border-0 lg:bg-transparent lg:p-0`}
          >
            <p className="mb-3 hidden px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground lg:block">On this page</p>
            <ol className="space-y-0.5">
              {termsSections.map((section, index) => {
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
          {termsSections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 py-8 first:pt-8 last:pb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">Section {index + 1}</p>
              <h2 className="mt-2 text-xl font-bold tracking-tight text-primary sm:text-2xl">{section.title}</h2>
              <div className="terms-copy mt-4 space-y-4 text-sm leading-7 text-muted-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:pl-1 [&_li::marker]:text-accent">
                {section.content}
              </div>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}