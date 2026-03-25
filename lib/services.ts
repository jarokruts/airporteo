export interface ServicePricing {
  airport: string
  airportCode: string
  price: number
  currency: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface Service {
  id: string
  slug: string
  name: string
  shortDescription: string
  longDescription: string
  icon: string
  color: string
  features: string[]
  benefits: string[]
  duration: string
  targetAudience: string
  pricing: ServicePricing[]
  faqs: ServiceFAQ[]
  relatedServices: string[]
}

export const SERVICES: Record<string, Service> = {
  'fast-track': {
    id: 'fast-track',
    slug: 'fast-track',
    name: 'Fast Track Immigration',
    shortDescription: 'Skip the queues and breeze through immigration with dedicated lanes.',
    longDescription: 'Experience hassle-free immigration with our Fast Track service. Our team will escort you through dedicated immigration lanes, ensuring a swift and smooth passage through Barcelona El Prat Airport. Perfect for business travelers and those with tight connections.',
    icon: 'Zap',
    color: '#B8913A',
    features: [
      'Dedicated immigration lanes',
      'Priority processing',
      'Experienced escort throughout',
      'Baggage assistance',
      'Customs guidance',
      'Direct routing to luggage claim or departure'
    ],
    benefits: [
      'Save 30-45 minutes on immigration',
      'Stress-free airport experience',
      'Professional guidance',
      'No long queues',
      'Fixed pricing regardless of wait times'
    ],
    duration: '30-45 minutes',
    targetAudience: 'Travelers with tight connections, business professionals, families with young children',
    pricing: [
      { airport: 'Barcelona El Prat (BCN)', airportCode: 'BCN', price: 89, currency: 'EUR' },
      { airport: 'Madrid Barajas (MAD)', airportCode: 'MAD', price: 85, currency: 'EUR' },
      { airport: 'Paris Charles de Gaulle (CDG)', airportCode: 'CDG', price: 95, currency: 'EUR' },
      { airport: 'London Heathrow (LHR)', airportCode: 'LHR', price: 120, currency: 'GBP' },
      { airport: 'Amsterdam Schiphol (AMS)', airportCode: 'AMS', price: 99, currency: 'EUR' },
      { airport: 'Frankfurt (FRA)', airportCode: 'FRA', price: 92, currency: 'EUR' }
    ],
    faqs: [
      {
        question: 'What documents do I need to bring?',
        answer: 'Bring your valid passport and any required visas. Our team will guide you through the process.'
      },
      {
        question: 'Can I use this service for departures?',
        answer: 'Yes, our Fast Track service is available for both arrivals and departures.'
      },
      {
        question: 'Is the service available 24/7?',
        answer: 'Yes, we operate round the clock to serve all flight schedules.'
      },
      {
        question: 'Do I need to book in advance?',
        answer: 'We recommend booking at least 24 hours in advance to guarantee availability, but same-day bookings are possible based on availability.'
      }
    ],
    relatedServices: ['meet-and-greet', 'vip-platinum']
  },
  'meet-and-greet': {
    id: 'meet-and-greet',
    slug: 'meet-and-greet',
    name: 'Meet & Greet',
    shortDescription: 'Personal welcome service with dedicated assistance from arrival to departure.',
    longDescription: 'Our Meet & Greet service provides a warm welcome at the airport with personalized assistance. Our professional greeters will meet you at the terminal, assist with your luggage, provide airport information, and ensure you reach your destination comfortably. Perfect for first-time visitors and those seeking a premium welcome experience.',
    icon: 'Users',
    color: '#B8913A',
    features: [
      'Personal greeting at terminal entrance',
      'Luggage assistance and handling',
      'Airport navigation guidance',
      'Transportation coordination',
      'Local information and recommendations',
      'Professional bilingual greeters'
    ],
    benefits: [
      'Personalized welcome experience',
      'No need to navigate the airport alone',
      'Luggage handled professionally',
      'Expert local knowledge',
      'Reduced stress and anxiety',
      'Perfect for business or leisure travel'
    ],
    duration: '1-2 hours',
    targetAudience: 'International travelers, first-time airport visitors, corporate travelers, elderly passengers',
    pricing: [
      { airport: 'Barcelona El Prat (BCN)', airportCode: 'BCN', price: 79, currency: 'EUR' },
      { airport: 'Madrid Barajas (MAD)', airportCode: 'MAD', price: 75, currency: 'EUR' },
      { airport: 'Paris Charles de Gaulle (CDG)', airportCode: 'CDG', price: 89, currency: 'EUR' },
      { airport: 'London Heathrow (LHR)', airportCode: 'LHR', price: 110, currency: 'GBP' },
      { airport: 'Amsterdam Schiphol (AMS)', airportCode: 'AMS', price: 84, currency: 'EUR' },
      { airport: 'Frankfurt (FRA)', airportCode: 'FRA', price: 82, currency: 'EUR' }
    ],
    faqs: [
      {
        question: 'How will I recognize my greeter?',
        answer: 'Your greeter will be holding a name sign or will have received your photo in advance. You will also receive their contact details via email.'
      },
      {
        question: 'What if my flight is delayed?',
        answer: 'We monitor flight status in real-time and our greeters adjust their arrival time accordingly. You will receive updates via SMS.'
      },
      {
        question: 'Can the greeter assist with check-in?',
        answer: 'Absolutely! Our greeters can assist with navigating to check-in and providing information, though they cannot perform the actual check-in.'
      },
      {
        question: 'Is this service available for international flights only?',
        answer: 'No, our service is available for both domestic and international flights.'
      }
    ],
    relatedServices: ['fast-track', 'vip-platinum']
  },
  'vip-platinum': {
    id: 'vip-platinum',
    slug: 'vip-platinum',
    name: 'VIP Platinum',
    shortDescription: 'Ultimate luxury airport experience with white-glove service and exclusive privileges.',
    longDescription: 'Our VIP Platinum service is the pinnacle of luxury airport experiences. Enjoy priority handling, exclusive lounge access, dedicated concierge support, and white-glove service from the moment you arrive until you depart. Designed for discerning travelers who demand the very best.',
    icon: 'Crown',
    color: '#D4AF37',
    features: [
      'Priority Fast Track immigration and customs',
      'Premium lounge access (multiple hours)',
      'Dedicated personal concierge',
      'VIP luggage handling',
      'Private car arrangements',
      'Premium meal and beverage service',
      'Priority baggage claim',
      'Exclusive retail and spa access'
    ],
    benefits: [
      'Ultimate time-saving experience',
      'Maximum comfort and relaxation',
      'Personalized attention throughout',
      'Exclusive amenities and services',
      'Business facilities and quiet spaces',
      'VIP treatment at every step'
    ],
    duration: '2-4 hours',
    targetAudience: 'Executives, high-net-worth individuals, frequent first-class travelers, diplomats',
    pricing: [
      { airport: 'Barcelona El Prat (BCN)', airportCode: 'BCN', price: 299, currency: 'EUR' },
      { airport: 'Madrid Barajas (MAD)', airportCode: 'MAD', price: 289, currency: 'EUR' },
      { airport: 'Paris Charles de Gaulle (CDG)', airportCode: 'CDG', price: 329, currency: 'EUR' },
      { airport: 'London Heathrow (LHR)', airportCode: 'LHR', price: 399, currency: 'GBP' },
      { airport: 'Amsterdam Schiphol (AMS)', airportCode: 'AMS', price: 315, currency: 'EUR' },
      { airport: 'Frankfurt (FRA)', airportCode: 'FRA', price: 305, currency: 'EUR' }
    ],
    faqs: [
      {
        question: 'Is lounge access included all day?',
        answer: 'Lounge access is included for the duration of your service package (typically 2-4 hours depending on your flight time). Extended access can be arranged for an additional fee.'
      },
      {
        question: 'Can I book a private car?',
        answer: 'Yes, our concierge can arrange premium car services to and from the airport with advance notice.'
      },
      {
        question: 'What happens if my flight is cancelled?',
        answer: 'Our concierge team will assist with rebooking and will continue to support you throughout the process at no additional charge.'
      },
      {
        question: 'Can family members be included?',
        answer: 'Absolutely! You can add family members to your booking. Each additional person is charged at 70% of the base rate.'
      }
    ],
    relatedServices: ['fast-track', 'meet-and-greet']
  }
}

export function getService(slug: string): Service | null {
  return SERVICES[slug] || null
}

export function getAllServices(): Service[] {
  return Object.values(SERVICES)
}

export function getServiceBySlug(slug: string): Service | undefined {
  return Object.values(SERVICES).find(service => service.slug === slug)
}
