'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
	ArrowRight,
	BadgeCheck,
	Check,
	CircleHelp,
	Clock3,
	Sparkles,
	Tag,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type BillingPeriod = 'monthly' | 'yearly';

const plans = [
	{
		name: 'Basic',
		audience: 'For individual equipment owners',
		monthlyPrice: 0,
		yearlyPrice: 0,
		listingLimit: '1 active equipment listing',
		features: [
			'Standard search visibility',
			'Direct customer enquiries',
			'Basic listing management',
		],
		cta: 'Get Started',
		href: '/signup',
	},
	{
		name: 'Professional',
		audience: 'For owners with multiple machines',
		monthlyPrice: 99,
		yearlyPrice: 990,
		listingLimit: 'Up to 5 active equipment listings',
		features: [
			'Improved search visibility',
			'Direct customer enquiries',
			'Access to featured promotions',
			'Access to verification badge'
		],
		cta: 'Choose Professional',
		href: '/signup',
		recommended: true,
	},
	{
		name: 'Business',
		audience: 'For established rental companies',
		monthlyPrice: 249,
		yearlyPrice: 2490,
		listingLimit: 'Up to 20 active equipment listings',
		features: [
			'Priority search visibility',
			'Business profile',
			'Access to verification badge',
			'Multiple equipment management',
			'Promotional discounts',
		],
		cta: 'Choose Business',
		href: '/signup',
	},
];

const faqs = [
	{
		question: 'Is StrongHaul free to use?',
		answer:
			'Yes. Renters can browse equipment and contact owners for free. Equipment owners can start on the Basic plan, which includes one active listing.',
	},
	{
		question: 'What is the difference between Basic and Professional?',
		answer:
			'Basic includes one active listing and standard search visibility. Professional supports up to five active listings, improved visibilit and access to featured promotions.',
	},
	{
		question: 'Can I change my subscription?',
		answer:
			'You can choose the plan that fits your business. including changing subscription to the the one that best suit your business',
	},
	{
		question: 'What happens when my subscription expires?',
		answer:
			'Your equipment listings are not automatically deleted. If you have more active listings than your plan allows, you will need to upgrade or deactivate listings before adding more.',
	},
	{
		question: 'Can I promote individual equipment listings?',
		answer:
			'Yes. Featured Listing and Extended Featured Listing are optional purchases separate from a subscription. They add a featured badge and promotional placement for a set duration, but do not guarantee rental bookings.',
	},
	{
		question: 'Do renters pay to browse equipment?',
		answer:
			'No. Browsing listings and contacting equipment owners are free for renters.',
	},
	{
		question: 'Does StrongHaul handle equipment bookings?',
		answer:
			'Equipment owners manage their own rental prices, availability and bookings. Renters contact owners directly to discuss the rental.',
	},
	{
		question: 'How does the free trial work?',
		answer:
			'The introductory offer is for the first 10 qualifying equipment owners and provides two months of Professional access with no payment required during the trial. Afterward, you can choose a paid plan or return to Basic. No automatic payment will be taken without your explicit consent. Contact StrongHaul to confirm eligibility and current offer availability.',
	},
];

function formatPrice(amount: number) {
	return `GH₵${amount.toLocaleString('en-GH')}`;
}

export default function PricingPage() {
	const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');

	return (
		<div className="overflow-hidden">
			<section className="relative border-b border-border bg-primary text-primary-foreground">
				<div className="absolute inset-y-0 right-0 hidden w-2/5 border-l border-primary-foreground/10 lg:block">
					<div className="h-full bg-[linear-gradient(135deg,transparent_49.7%,hsl(var(--accent))_50%,transparent_50.3%)] opacity-30" />
				</div>
				<div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
					<div className="max-w-3xl">
						<p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
							<span className="h-px w-8 bg-accent" /> Plans for every fleet
						</p>
						<h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
							The right plan to keep your equipment working.
						</h1>
						<p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
							Start with one listing for free, then scale your presence as your
							fleet grows. Prices are shown in Ghana cedis.
						</p>
						<a
							href="#plans"
							className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors hover:text-accent"
						>
							Compare plans <ArrowRight className="h-4 w-4" />
						</a>
					</div>
				</div>
			</section>

			<section id="plans" className="scroll-mt-20 py-14 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-wider text-accent">Owner plans</p>
							<h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Simple, transparent pricing</h2>
							<p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
								Choose a plan by the number of active equipment listings you need.
							</p>
						</div>
						<div
							className="inline-flex w-fit items-center rounded-lg border border-border bg-card p-1"
							role="group"
							aria-label="Billing period"
						>
							<button
								type="button"
								aria-pressed={billingPeriod === 'monthly'}
								onClick={() => setBillingPeriod('monthly')}
								className={cn(
									'min-h-10 rounded-md px-4 text-sm font-semibold transition-colors',
									billingPeriod === 'monthly' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
								)}
							>
								Monthly
							</button>
							<button
								type="button"
								aria-pressed={billingPeriod === 'yearly'}
								onClick={() => setBillingPeriod('yearly')}
								className={cn(
									'min-h-10 rounded-md px-4 text-sm font-semibold transition-colors',
									billingPeriod === 'yearly' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
								)}
							>
								Yearly
								<span className="ml-2 text-xs text-accent">Save up to GH₵498</span>
							</button>
						</div>
					</div>

					<div className="mt-8 grid items-stretch gap-5 lg:grid-cols-3">
						{plans.map((plan) => {
							const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
							const savings = plan.monthlyPrice * 12 - plan.yearlyPrice;

							return (
								<article
									key={plan.name}
									className={cn(
										'relative flex flex-col border bg-card p-6 sm:p-7',
										plan.recommended ? 'border-accent shadow-[0_12px_40px_-24px_hsl(var(--accent)/0.55)]' : 'border-border'
									)}
								>
									{plan.recommended && (
										<div className="absolute -top-px right-6 flex -translate-y-1/2 items-center gap-1.5 rounded-sm bg-accent px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent-foreground">
											<Sparkles className="h-3.5 w-3.5" /> Recommended
										</div>
									)}
									<div className="flex items-start justify-between gap-3">
										<div>
											<h3 className="text-xl font-bold text-primary">{plan.name}</h3>
											<p className="mt-1 text-sm text-muted-foreground">{plan.audience}</p>
										</div>
										{plan.name === 'Business' && <BadgeCheck className="h-5 w-5 shrink-0 text-accent" />}
									</div>
									<div className="mt-7 min-h-[76px]">
										<p className="flex flex-wrap items-baseline gap-x-2">
											<span className="text-4xl font-bold tracking-tight text-primary">{formatPrice(price)}</span>
											<span className="text-sm text-muted-foreground">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
										</p>
										{billingPeriod === 'yearly' && plan.monthlyPrice > 0 && (
											<p className="mt-1 text-sm font-medium text-success">
												Save {formatPrice(savings)} per year
											</p>
										)}
										{plan.monthlyPrice === 0 && <p className="mt-1 text-sm text-muted-foreground">No subscription fee</p>}
									</div>
									<div className="mt-5 border-t border-border pt-5">
										<p className="text-sm font-semibold text-primary">{plan.listingLimit}</p>
										<ul className="mt-4 space-y-3">
											{plan.features.map((feature) => (
												<li key={feature} className="flex gap-2.5 text-sm leading-5 text-muted-foreground">
													<Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
													{feature}
												</li>
											))}
										</ul>
									</div>
									<div className="mt-auto pt-7">
										<Button
											asChild
											className={cn(
												'h-11 w-full font-semibold',
												plan.recommended
													? 'bg-accent text-accent-foreground hover:bg-accent/90'
													: 'bg-primary text-primary-foreground hover:bg-primary/90'
											)}
										>
											<Link href={plan.href}>
												{plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
											</Link>
										</Button>
										{plan.monthlyPrice > 0 && (
											<p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
												Subscription checkout is not available yet. No payment is taken here.
											</p>
										)}
									</div>
								</article>
							);
						})}
					</div>
					<p className="mt-5 text-center text-xs leading-5 text-muted-foreground">
						When a subscription expires, listings are not deleted. To add listings above your current plan limit, upgrade or deactivate listings first.
					</p>
				</div>
			</section>

			<section className="border-y border-border bg-secondary/60">
				<div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8 lg:py-14">
					<div className="max-w-3xl">
						<p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
							<Clock3 className="h-4 w-4" /> Introductory offer
						</p>
						<h2 className="mt-3 text-2xl font-bold text-primary sm:text-3xl">Get 2 Months of Professional Access Free</h2>
						<p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
							Available to the first 10 qualifying equipment owners. No payment is required during your two-month trial. After it ends, choose a paid plan or return to Basic. We will not take automatic payment without your explicit consent.
						</p>
						<p className="mt-3 text-xs leading-5 text-muted-foreground">
							Eligibility and offer availability must be confirmed with StrongHaul. No countdown or live availability is implied.
						</p>
					</div>
					<Button asChild size="lg" className="h-12 w-full bg-primary px-6 text-primary-foreground hover:bg-primary/90 md:w-auto">
						<Link href="/signup">List Your Equipment <ArrowRight className="ml-2 h-4 w-4" /></Link>
					</Button>
				</div>
			</section>

			<section className="py-14 sm:py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="max-w-2xl">
						<p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
							<Tag className="h-4 w-4" /> Optional promotion
						</p>
						<h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Give a listing extra visibility</h2>
						<p className="mt-2 text-sm leading-6 text-muted-foreground">
							Promote individual equipment separately from your subscription. Featured placement does not guarantee rental bookings.
						</p>
					</div>
					<div className="mt-7 grid gap-5 md:grid-cols-2">
						<article className="flex flex-col border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
							<div>
								<h3 className="text-lg font-bold text-primary">Featured Listing</h3>
								<p className="mt-1 text-sm text-muted-foreground">Featured badge and priority placement in relevant search results.</p>
								<p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-muted-foreground"><Clock3 className="h-4 w-4" /> 7 days</p>
							</div>
							<div className="mt-5 flex items-center justify-between gap-4 sm:mt-0 sm:block sm:text-right">
								<p className="text-2xl font-bold text-primary">GH₵30</p>
								<Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
									<Link href="/signup">Get Started</Link>
								</Button>
							</div>
						</article>
						<article className="flex flex-col border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
							<div>
								<h3 className="text-lg font-bold text-primary">Extended Featured Listing</h3>
								<p className="mt-1 text-sm text-muted-foreground">Featured badge and extended promotional visibility.</p>
								<p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-muted-foreground"><Clock3 className="h-4 w-4" /> 14 days</p>
							</div>
							<div className="mt-5 flex items-center justify-between gap-4 sm:mt-0 sm:block sm:text-right">
								<p className="text-2xl font-bold text-primary">GH₵50</p>
								<Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
									<Link href="/signup">Get Started</Link>
								</Button>
							</div>
						</article>
					</div>
					<p className="mt-4 text-xs leading-5 text-muted-foreground">
						Featured promotions are optional purchases, not subscriptions. Checkout is not yet available; these buttons lead to registration only. Promotions expire after their purchased duration.
					</p>
				</div>
			</section>

			<section className="border-t border-border bg-card py-14 sm:py-18 lg:py-20">
				<div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
					<div>
						<p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
							<CircleHelp className="h-4 w-4" /> Help & details
						</p>
						<h2 className="mt-2 text-3xl font-bold tracking-tight text-primary">Frequently asked questions</h2>
						<p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
							Clear answers about listings, plans and how rentals work on StrongHaul.
						</p>
						<Link href="/signup" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
							List your equipment <ArrowRight className="h-4 w-4" />
						</Link>
					</div>
					<Accordion type="single" collapsible className="border-t border-border">
						{faqs.map((faq, index) => (
							<AccordionItem key={faq.question} value={`faq-${index}`} className="border-border">
								<AccordionTrigger className="gap-4 text-left text-sm font-semibold text-primary hover:no-underline sm:text-base">
									{faq.question}
								</AccordionTrigger>
								<AccordionContent className="max-w-2xl text-sm leading-6 text-muted-foreground">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>

			<section className="bg-primary text-primary-foreground">
				<div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
					<div>
						<h2 className="text-2xl font-bold">Ready to put your equipment to work?</h2>
						<p className="mt-1 text-sm text-primary-foreground/70">Create your owner account and start with a free listing.</p>
					</div>
					<Button asChild size="lg" className="h-12 bg-accent px-6 font-semibold text-accent-foreground hover:bg-accent/90">
						<Link href="/signup">List Your Equipment <ArrowRight className="ml-2 h-4 w-4" /></Link>
					</Button>
				</div>
			</section>
		</div>
	);
}