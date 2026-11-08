export type HelpCategory = {
  id: string;
  title: string;
  description: string;
  topics: string[];
};

export type HelpFaq = {
  question: string;
  answer: string;
  categoryId: string;
};

export const helpCategories: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn what StrongHaul is and how to get started with the marketplace.',
    topics: ['What StrongHaul is', 'Create an account', 'Sign in', 'How the marketplace works'],
  },
  {
    id: 'finding-equipment',
    title: 'Finding Equipment',
    description: 'Browse listings, compare equipment details and connect with owners.',
    topics: ['Search for equipment', 'Filter listings', 'View equipment details', 'Contact an owner'],
  },
  {
    id: 'listing-equipment',
    title: 'Listing Equipment',
    description: 'Understand what owners will need to prepare when creating a listing.',
    topics: ['Create an owner account', 'Listing information', 'Equipment photographs', 'Rental pricing', 'Manage listings'],
  },
  {
    id: 'rentals-bookings',
    title: 'Rentals and Bookings',
    description: 'Learn how renters and owners coordinate a rental directly.',
    topics: ['Arrange a rental', 'Confirm availability', 'Discuss duration', 'Agree on arrangements'],
  },
  {
    id: 'equipment-owners',
    title: 'For Equipment Owners',
    description: 'Keep your equipment details and rental information clear and current.',
    topics: ['Manage listings', 'Update equipment information', 'Respond to renters', 'Keep listings accurate'],
  },
  {
    id: 'renters',
    title: 'For Renters',
    description: 'Find suitable equipment and discuss arrangements with its owner.',
    topics: ['Find suitable equipment', 'Contact owners', 'Confirm rental arrangements', 'Understand responsibilities'],
  },
  {
    id: 'account-security',
    title: 'Account and Security',
    description: 'Find guidance on account details, passwords and suspicious activity.',
    topics: ['Manage account information', 'Update passwords', 'Account security', 'Report suspicious activity'],
  },
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Get guidance for website problems, errors and account questions.',
    topics: ['Report a website problem', 'Report an error', 'Account-related assistance'],
  },
];

export const helpFaqs: HelpFaq[] = [
  {
    question: 'What is StrongHaul?',
    answer: 'StrongHaul is an equipment rental marketplace that helps equipment owners showcase construction equipment, heavy machinery and trucks, and helps people looking for equipment discover listings and connect with owners. The marketplace is initially focused on Ghana.',
    categoryId: 'getting-started',
  },
  {
    question: 'Is StrongHaul an equipment rental company?',
    answer: 'No. StrongHaul connects equipment owners with potential renters. StrongHaul does not own or operate the equipment listed on the marketplace.',
    categoryId: 'getting-started',
  },
  {
    question: 'How do I create an account or sign in?',
    answer: 'Use the registration page to choose an Equipment Owner or Renter account, or use the sign-in page if you already have an account. Account flows currently demonstrate the frontend only and are not backed by production authentication.',
    categoryId: 'getting-started',
  },
  {
    question: 'Can I browse equipment without creating an account?',
    answer: 'Yes. Visitors can browse equipment listings and view the details available on each listing without registering.',
    categoryId: 'finding-equipment',
  },
  {
    question: 'How do I rent equipment?',
    answer: 'Browse available listings, compare the equipment details and location, then contact the equipment owner to discuss availability and terms. The owner and renter arrange the rental directly.',
    categoryId: 'renters',
  },
  {
    question: 'How do I search, filter and view equipment details?',
    answer: 'Use Browse Equipment to search and apply the available category, status and price filters. Open a listing to review its description, specifications, location and rental information provided by the owner.',
    categoryId: 'finding-equipment',
  },
  {
    question: 'How do I contact equipment owners directly?',
    answer: 'Use the contact details or contact action shown on the equipment listing, when available. You can browse without creating an account. StrongHaul does not guarantee that an owner will respond.',
    categoryId: 'finding-equipment',
  },
  {
    question: 'How do I list my equipment?',
    answer: 'Equipment owners need an owner account to access the owner workspace. The listing entry page is available in the frontend, but the full listing submission workflow is still being developed.',
    categoryId: 'listing-equipment',
  },
  {
    question: 'What information should an equipment listing include?',
    answer: 'Prepare the equipment name, category, make and model, location, specifications, availability, rental price and clear photographs. Accurate details help potential renters understand the equipment. The full submission form is not yet available in the current frontend.',
    categoryId: 'listing-equipment',
  },
  {
    question: 'Who determines rental prices?',
    answer: 'Equipment owners set their own rental prices. Renters should confirm the rate, rental duration and any additional arrangements directly with the owner before proceeding.',
    categoryId: 'equipment-owners',
  },
  {
    question: 'Does StrongHaul own the equipment listed?',
    answer: 'No. Equipment is listed by its owners. StrongHaul provides a marketplace for discovery and connection; owners remain responsible for their equipment and rental arrangements.',
    categoryId: 'equipment-owners',
  },
  {
    question: 'Does StrongHaul handle rental payments or bookings?',
    answer: 'The current StrongHaul frontend does not process rental payments or manage booking transactions. Renters and owners discuss payment, availability, duration and other rental terms directly.',
    categoryId: 'rentals-bookings',
  },
  {
    question: 'What happens if an equipment owner does not respond?',
    answer: 'StrongHaul cannot guarantee a response time. You may follow up using the contact details on the listing or consider another suitable listing. If you encounter a website issue, use the support form below; it is not connected to a support system yet.',
    categoryId: 'renters',
  },
  {
    question: 'How can I report a problem or suspicious activity?',
    answer: 'Use the support form below to prepare a report. It currently validates the information in your browser but does not send or store a support request because no support backend is connected.',
    categoryId: 'technical-support',
  },
  {
    question: 'How do I update account details or a password?',
    answer: 'Account settings and password screens are frontend interfaces only at this stage. Changes are not saved to an account service. Avoid entering sensitive credentials into this demonstration.',
    categoryId: 'account-security',
  },
];