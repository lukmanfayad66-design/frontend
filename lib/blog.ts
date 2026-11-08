export type BlogCategory =
  | 'Equipment Rental'
  | 'Heavy Equipment'
  | 'Construction'
  | 'Transport & Logistics'
  | 'Equipment Ownership'
  | 'Business Tips';

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  publishedAt: string;
  readingMinutes: number;
  author: string;
  image: string;
  imageAlt: string;
  introduction: string;
  sections: BlogSection[];
};

export const blogCategories: BlogCategory[] = [
  'Equipment Rental',
  'Heavy Equipment',
  'Construction',
  'Transport & Logistics',
  'Equipment Ownership',
  'Business Tips',
];

export const blogArticles: BlogArticle[] = [
  {
    slug: 'find-right-excavator-construction-project',
    title: 'How to Find the Right Excavator for Your Construction Project.',
    description:
      'A practical guide to matching excavator size, attachments and site conditions to the work you need to complete.',
    category: 'Heavy Equipment',
    publishedAt: '2026-11-08',
    readingMinutes: 6,
    author: 'StrongHaul Editorial Team',
    image: 'https://images.pexels.com/photos/35846752/pexels-photo-35846752.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt: 'Excavator working at an earthmoving site',
    introduction:
      'The right excavator can make a job more manageable, but the largest machine is not automatically the best choice. Start with the work, the site and the support available, then compare machines against those needs.',
    sections: [
      {
        heading: 'Define the work before choosing a machine',
        paragraphs: [
          'Write down the tasks the excavator must perform: digging foundations, trenching, loading material, clearing land or handling demolition debris. Each task can call for a different reach, bucket capacity and attachment.',
          'Also consider how much material needs to move and how often the machine will work. A clear scope helps you avoid choosing equipment that is either difficult to transport or not suited to the job.',
        ],
      },
      {
        heading: 'Match size and reach to the site',
        paragraphs: [
          'Check access roads, gates, overhead obstructions, ground conditions and space to turn. A compact excavator can be easier to position in a confined site, while larger excavation may require a machine with more reach and capacity.',
          'Compare digging depth, reach and operating weight with the project requirements. Ask the owner for the machine specifications and confirm that the delivery route and working surface can accommodate it.',
        ],
      },
      {
        heading: 'Confirm attachments, condition and arrangements',
        paragraphs: [
          'Ask which buckets or attachments are included and whether they fit the machine. If a specialist attachment is needed, agree on its availability before the rental begins.',
          'Review the inspection process, operating instructions, maintenance condition, rental period, price and responsibilities with the equipment owner. Owners set their own rental terms, so confirm the details directly before work starts.',
        ],
      },
      {
        heading: 'Make a considered choice',
        paragraphs: [
          'Compare suitable options by capability, condition, access and total rental arrangements rather than by machine size alone. StrongHaul helps people discover equipment listings and connect directly with owners to discuss fit and availability.',
        ],
      },
    ],
  },
  {
    slug: 'buying-vs-renting-heavy-equipment',
    title: 'Buying vs Renting Heavy Equipment: Which Makes More Sense?',
    description:
      'Compare ownership and rental considerations to decide what fits your project schedule, cash flow and equipment needs.',
    category: 'Business Tips',
    publishedAt: '2026-11-06',
    readingMinutes: 7,
    author: 'StrongHaul Editorial Team',
    image: 'https://images.pexels.com/photos/36656998/pexels-photo-36656998.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt: 'Heavy dump truck ready for a construction job',
    introduction:
      'Buying and renting solve different equipment needs. The useful comparison is not only the purchase price against a rental rate; it is how each choice fits the work you expect to do and the responsibilities you can take on.',
    sections: [
      {
        heading: 'When ownership may fit',
        paragraphs: [
          'Owning equipment can make sense when a machine is needed regularly, is central to your operations and can be maintained and stored responsibly. Ownership also gives a business more control over when the machine is available for its own jobs.',
          'Consider the full cost of ownership, including financing, insurance, servicing, storage, transport and periods when the equipment is not earning or being used. These costs depend on the machine and your business circumstances.',
        ],
      },
      {
        heading: 'When renting may fit',
        paragraphs: [
          'Renting can provide access to a machine for a defined project or short period without committing to ownership. It may also be useful when the required equipment changes from one job to another.',
          'Rental arrangements vary. Confirm the rate, duration, delivery, fuel, operator requirements, damage responsibilities and availability directly with the equipment owner before agreeing.',
        ],
      },
      {
        heading: 'Compare your actual work pattern',
        paragraphs: [
          'Estimate how often the machine will be needed, how long it may sit idle, and whether you have the people and facilities to manage it. Compare realistic costs over the period you expect to use it rather than relying on a single headline price.',
          'There is no universal answer. A project-based renter and a business with continuous equipment needs may reasonably make different choices.',
        ],
      },
    ],
  },
  {
    slug: 'what-to-check-before-renting-construction-equipment',
    title: 'What to Check Before Renting Construction Equipment.',
    description:
      'Use this practical checklist to discuss machine condition, site fit, pricing and responsibilities with an equipment owner.',
    category: 'Equipment Rental',
    publishedAt: '2026-11-04',
    readingMinutes: 5,
    author: 'StrongHaul Editorial Team',
    image: 'https://images.pexels.com/photos/416988/pexels-photo-416988.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt: 'Bulldozer at a construction and earthmoving site',
    introduction:
      'A useful rental discussion covers more than the machine and the daily price. Before committing, make sure the equipment suits the work and both parties understand how the arrangement will run.',
    sections: [
      {
        heading: 'Check the machine and its fit for the job',
        paragraphs: [
          'Ask for the make, model, year, operating specifications and included attachments. Review recent photographs and ask about known issues, servicing and any operating limits that matter for your work.',
          'Compare the machine dimensions and capabilities with your site access, terrain and job requirements. If possible, arrange an inspection or walk-through with the owner before delivery.',
        ],
      },
      {
        heading: 'Agree on the rental details',
        paragraphs: [
          'Confirm the start and end dates, price basis, payment expectations, delivery and collection responsibilities, fuel, operator arrangements and what happens if the equipment is unavailable or needs attention.',
          'Discuss the process for reporting damage or a breakdown, and record the agreed condition of the equipment at handover. Put the arrangement in writing so both sides can refer to the same details.',
        ],
      },
      {
        heading: 'Prepare the people and site',
        paragraphs: [
          'Confirm that the people operating the equipment are appropriately trained and that the site is ready for delivery and use. Share relevant access instructions and contact details with the owner in advance.',
          'StrongHaul helps renters discover listings and contact owners directly. Rental prices, availability and final arrangements are handled between the renter and equipment owner.',
        ],
      },
    ],
  },
  {
    slug: 'essential-maintenance-tips-heavy-equipment-owners',
    title: 'Essential Maintenance Tips for Heavy Equipment Owners.',
    description:
      'Build consistent inspection and service habits that help you understand equipment condition and plan maintenance responsibly.',
    category: 'Equipment Ownership',
    publishedAt: '2026-11-02',
    readingMinutes: 6,
    author: 'StrongHaul Editorial Team',
    image: 'https://images.pexels.com/photos/28753112/pexels-photo-28753112.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt: 'Wheel loader used for heavy material handling',
    introduction:
      'A consistent maintenance routine starts with the machine maker’s instructions and a clear record of what has been checked and serviced. The exact schedule depends on the equipment, its condition and how it is used.',
    sections: [
      {
        heading: 'Use the equipment manual as your baseline',
        paragraphs: [
          'Follow the manufacturer’s operating and maintenance guidance for inspection intervals, fluids, filters and service procedures. Do not rely on a generic schedule when the machine has model-specific requirements.',
          'Keep service records together with dates, machine hours, work completed and parts replaced. Records make it easier to plan upcoming maintenance and explain equipment history to a prospective renter.',
        ],
      },
      {
        heading: 'Make inspections part of routine use',
        paragraphs: [
          'Before and after use, check visible components for leaks, damage, loose parts, unusual wear and warning indicators. Pay attention to tyres or tracks, lights, guards, hoses and attachments as appropriate for the machine.',
          'If something appears unsafe or outside the machine’s normal operation, stop and get qualified assistance. Do not return equipment to service until a competent person has assessed the concern.',
        ],
      },
      {
        heading: 'Prepare equipment before a rental',
        paragraphs: [
          'Before handover, confirm the equipment is clean enough to inspect, the agreed attachments are present, and operating information is available. Record condition and hours with the renter.',
          'Explain known limitations and the agreed process for reporting a fault. Clear communication helps owners and renters manage the equipment responsibly throughout the arrangement.',
        ],
      },
    ],
  },
  {
    slug: 'choosing-right-crane-construction-project',
    title: 'Choosing the Right Crane for Your Construction Project.',
    description:
      'Start with the load, lift height, reach and site conditions when comparing crane options for a construction job.',
    category: 'Construction',
    publishedAt: '2026-10-30',
    readingMinutes: 6,
    author: 'StrongHaul Editorial Team',
    image: 'https://images.pexels.com/photos/14486702/pexels-photo-14486702.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt: 'Tower crane positioned at a construction site',
    introduction:
      'Crane selection is a planning task that should involve competent lifting professionals. The correct equipment depends on the load, where it must go, site access and the lift plan, not simply the tallest or largest machine available.',
    sections: [
      {
        heading: 'Describe the lift requirements',
        paragraphs: [
          'Document the load weight and dimensions, the required lift height, the horizontal reach and where the crane can be positioned. Include the heaviest lift and the furthest point the load must travel.',
          'A qualified lifting professional should assess the lift plan and confirm the crane configuration and capacity for the actual working radius and conditions.',
        ],
      },
      {
        heading: 'Assess the site and access',
        paragraphs: [
          'Consider ground bearing conditions, space for setup, overhead obstructions, nearby structures, power lines, access roads and room for support vehicles. Site limitations can rule out an otherwise suitable crane.',
          'Check what transport, assembly, permits and traffic arrangements may be required. These details vary by equipment and location, so plan with the owner and relevant qualified parties.',
        ],
      },
      {
        heading: 'Coordinate the full arrangement',
        paragraphs: [
          'Confirm availability, mobilisation timing, configuration, operator requirements and responsibilities before the lift date. Ask for the documents and inspection records required for your project.',
          'StrongHaul can help you discover crane listings and connect with owners. The project team and equipment owner should agree on the lift plan and rental arrangements directly.',
        ],
      },
    ],
  },
  {
    slug: 'understanding-heavy-equipment-transportation',
    title: 'Understanding Heavy Equipment Transportation.',
    description:
      'Plan equipment delivery around dimensions, route access, loading, securing and timing before the job begins.',
    category: 'Transport & Logistics',
    publishedAt: '2026-10-28',
    readingMinutes: 5,
    author: 'StrongHaul Editorial Team',
    image: 'https://images.pexels.com/photos/27099095/pexels-photo-27099095.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt: 'Heavy transport truck carrying equipment on a road',
    introduction:
      'Moving heavy equipment is part of the project plan, not a last-minute detail. Delivery needs to account for the machine, transport vehicle, route and the people responsible for loading and receiving it.',
    sections: [
      {
        heading: 'Collect dimensions and transport details',
        paragraphs: [
          'Confirm the equipment weight and transport dimensions, including any attachments or parts that will travel separately. Share these details with the transport provider so the appropriate vehicle and loading method can be considered.',
          'Agree who arranges transport, loading and unloading, and whether delivery and collection are included in the rental arrangement.',
        ],
      },
      {
        heading: 'Plan the route and permissions',
        paragraphs: [
          'Check the route for bridge limits, road width, turning space, overhead clearance, road condition and site access. Oversize or heavy loads may require permits, escorts or approved routes depending on local rules.',
          'Confirm applicable transport requirements with qualified providers and relevant authorities. Do not assume a route or permit is suitable without checking for the specific load and journey.',
        ],
      },
      {
        heading: 'Coordinate delivery and handover',
        paragraphs: [
          'Set a delivery window, identify a site contact and make sure the receiving area is ready. Allow time for safe unloading and a condition check before the machine is put to work.',
          'Record the equipment condition at collection and delivery, and keep the transport and rental contacts available in case plans change.',
        ],
      },
    ],
  },
];

export const featuredArticle = blogArticles[0];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}