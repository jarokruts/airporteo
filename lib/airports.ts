export interface Airport {
  id: string
  code: string
  name: string
  city: string
  country: string
  image: string
  rating: number
  reviews: number
  terminals: Terminal[]
  services: Service[]
  hours: {
    arrival: string
    departure: string
  }
  facilities: string[]
}

export interface Terminal {
  name: string
  airlines: string[]
  facilities: string[]
}

export interface Service {
  id: string
  name: string
  description: string
  type: 'arrival' | 'departure' | 'vip'
  price: number
}

export const AIRPORTS: Record<string, Airport> = {
  BCN: {
    id: 'barcelona',
    code: 'BCN',
    name: 'Barcelona-El Prat',
    city: 'Barcelona',
    country: 'Spain',
    image: '/images/airport-barcelona.jpg',
    rating: 4.8,
    reviews: 1250,
    terminals: [
      {
        name: 'Terminal 1',
        airlines: ['Lufthansa', 'Iberia', 'British Airways', 'Air France'],
        facilities: ['Restaurants', 'Shopping', 'Lounges', 'ATM'],
      },
      {
        name: 'Terminal 2',
        airlines: ['Ryanair', 'Vueling', 'EasyJet', 'Norwegian'],
        facilities: ['Fast Food', 'Shops', 'WiFi', 'Parking'],
      },
    ],
    services: [
      { id: '1', name: 'Meet & Greet', description: 'Personal welcome service', type: 'arrival', price: 45 },
      { id: '2', name: 'Fast Track', description: 'Express security & check-in', type: 'departure', price: 35 },
      { id: '3', name: 'VIP Platinum', description: 'Premium lounge access', type: 'vip', price: 150 },
    ],
    hours: {
      arrival: '05:00 - 23:00',
      departure: '05:00 - 23:00',
    },
    facilities: ['WiFi', 'Restaurants', 'Shopping', 'Lounges', 'Hotels', 'ATM', 'Currency Exchange'],
  },
  LHR: {
    id: 'london',
    code: 'LHR',
    name: 'London Heathrow',
    city: 'London',
    country: 'United Kingdom',
    image: '/images/airport-london.jpg',
    rating: 4.6,
    reviews: 2100,
    terminals: [
      {
        name: 'Terminal 2',
        airlines: ['Air Canada', 'Lufthansa', 'Turkish Airlines'],
        facilities: ['Shopping', 'Dining', 'Lounges', 'Business Center'],
      },
      {
        name: 'Terminal 3',
        airlines: ['British Airways', 'Iberia', 'Japan Airlines'],
        facilities: ['Shops', 'Restaurants', 'Lounges', 'WiFi'],
      },
      {
        name: 'Terminal 5',
        airlines: ['British Airways', 'American Airlines'],
        facilities: ['Premium Lounge', 'Dining', 'Shopping', 'WiFi'],
      },
    ],
    services: [
      { id: '1', name: 'Meet & Greet', description: 'Personal welcome service', type: 'arrival', price: 55 },
      { id: '2', name: 'Fast Track', description: 'Express security & check-in', type: 'departure', price: 45 },
      { id: '3', name: 'VIP Platinum', description: 'Premium lounge access', type: 'vip', price: 180 },
    ],
    hours: {
      arrival: '04:00 - 22:30',
      departure: '04:00 - 22:30',
    },
    facilities: ['WiFi', 'Restaurants', 'Shopping', 'Lounges', 'Hotels', 'ATM', 'Medical Center'],
  },
  CDG: {
    id: 'paris',
    code: 'CDG',
    name: 'Paris Charles de Gaulle',
    city: 'Paris',
    country: 'France',
    image: '/images/airport-paris.jpg',
    rating: 4.5,
    reviews: 1850,
    terminals: [
      {
        name: 'Terminal 1',
        airlines: ['Air France', 'Lufthansa', 'Alitalia'],
        facilities: ['Shops', 'Restaurants', 'Lounges'],
      },
      {
        name: 'Terminal 2',
        airlines: ['Ryanair', 'Easy Jet', 'Air Corsica'],
        facilities: ['Fast Food', 'Shops', 'WiFi'],
      },
    ],
    services: [
      { id: '1', name: 'Meet & Greet', description: 'Personal welcome service', type: 'arrival', price: 50 },
      { id: '2', name: 'Fast Track', description: 'Express security & check-in', type: 'departure', price: 40 },
      { id: '3', name: 'VIP Platinum', description: 'Premium lounge access', type: 'vip', price: 160 },
    ],
    hours: {
      arrival: '04:30 - 23:00',
      departure: '04:30 - 23:00',
    },
    facilities: ['WiFi', 'Restaurants', 'Shopping', 'Lounges', 'Hotels', 'ATM', 'Pharmacy'],
  },
  JFK: {
    id: 'newyork',
    code: 'JFK',
    name: 'New York JFK',
    city: 'New York',
    country: 'USA',
    image: '/images/airport-newyork.jpg',
    rating: 4.4,
    reviews: 2400,
    terminals: [
      {
        name: 'Terminal 1',
        airlines: ['American Airlines', 'Finnair', 'Turkish Airlines'],
        facilities: ['Lounges', 'Dining', 'Shopping', 'Business Center'],
      },
      {
        name: 'Terminal 4',
        airlines: ['Air France', 'Lufthansa', 'Japan Airlines'],
        facilities: ['Premium Dining', 'Luxury Shops', 'Lounges'],
      },
    ],
    services: [
      { id: '1', name: 'Meet & Greet', description: 'Personal welcome service', type: 'arrival', price: 65 },
      { id: '2', name: 'Fast Track', description: 'Express security & check-in', type: 'departure', price: 55 },
      { id: '3', name: 'VIP Platinum', description: 'Premium lounge access', type: 'vip', price: 200 },
    ],
    hours: {
      arrival: '05:00 - 23:30',
      departure: '05:00 - 23:30',
    },
    facilities: ['WiFi', 'Restaurants', 'Shopping', 'Lounges', 'Hotels', 'ATM', 'Currency Exchange'],
  },
  DXB: {
    id: 'dubai',
    code: 'DXB',
    name: 'Dubai International',
    city: 'Dubai',
    country: 'UAE',
    image: '/images/airport-dubai.jpg',
    rating: 4.9,
    reviews: 1600,
    terminals: [
      {
        name: 'Terminal 1',
        airlines: ['Emirates', 'Flydubai', 'Air Arabia'],
        facilities: ['Gold Lounge', 'Duty Free', 'Shopping', 'Spas'],
      },
      {
        name: 'Terminal 3',
        airlines: ['Emirates', 'Qantas', 'British Airways'],
        facilities: ['Premium Lounges', 'Fine Dining', 'Luxury Shops'],
      },
    ],
    services: [
      { id: '1', name: 'Meet & Greet', description: 'Personal welcome service', type: 'arrival', price: 60 },
      { id: '2', name: 'Fast Track', description: 'Express security & check-in', type: 'departure', price: 50 },
      { id: '3', name: 'VIP Platinum', description: 'Premium lounge access', type: 'vip', price: 220 },
    ],
    hours: {
      arrival: '24/7',
      departure: '24/7',
    },
    facilities: ['WiFi', 'Restaurants', 'Shopping', 'Spas', 'Hotels', 'ATM', 'Prayer Rooms'],
  },
  SIN: {
    id: 'singapore',
    code: 'SIN',
    name: 'Singapore Changi',
    city: 'Singapore',
    country: 'Singapore',
    image: '/images/airport-singapore.jpg',
    rating: 4.9,
    reviews: 1400,
    terminals: [
      {
        name: 'Terminal 1',
        airlines: ['Singapore Airlines', 'SilkAir', 'Scoot'],
        facilities: ['Lounges', 'Dining', 'Shopping', 'Gardens'],
      },
      {
        name: 'Terminal 4',
        airlines: ['Budget carriers', 'Regional airlines'],
        facilities: ['Fast Food', 'Shops', 'WiFi', 'Lounges'],
      },
    ],
    services: [
      { id: '1', name: 'Meet & Greet', description: 'Personal welcome service', type: 'arrival', price: 70 },
      { id: '2', name: 'Fast Track', description: 'Express security & check-in', type: 'departure', price: 60 },
      { id: '3', name: 'VIP Platinum', description: 'Premium lounge access', type: 'vip', price: 240 },
    ],
    hours: {
      arrival: '24/7',
      departure: '24/7',
    },
    facilities: ['WiFi', 'Restaurants', 'Shopping', 'Lounges', 'Hotels', 'ATM', 'Gardens'],
  },
  FRA: {
    id: 'frankfurt',
    code: 'FRA',
    name: 'Frankfurt am Main',
    city: 'Frankfurt',
    country: 'Germany',
    image: '/images/airport-frankfurt.jpg',
    rating: 4.7,
    reviews: 1550,
    terminals: [
      {
        name: 'Terminal 1',
        airlines: ['Lufthansa', 'Air France', 'British Airways', 'Swiss International'],
        facilities: ['Restaurants', 'Shopping', 'Lounges', 'Business Center'],
      },
      {
        name: 'Terminal 2',
        airlines: ['Condor', 'Eurowings', 'Air Europa'],
        facilities: ['Dining', 'Shops', 'WiFi', 'Lounges'],
      },
    ],
    services: [
      { id: '1', name: 'Meet & Greet', description: 'Personal welcome service', type: 'arrival', price: 52 },
      { id: '2', name: 'Fast Track', description: 'Express security & check-in', type: 'departure', price: 42 },
      { id: '3', name: 'VIP Platinum', description: 'Premium lounge access', type: 'vip', price: 170 },
    ],
    hours: {
      arrival: '04:00 - 23:00',
      departure: '04:00 - 23:00',
    },
    facilities: ['WiFi', 'Restaurants', 'Shopping', 'Lounges', 'Hotels', 'ATM', 'Currency Exchange'],
  },
}

export function getAirport(code: string): Airport | null {
  return AIRPORTS[code.toUpperCase()] || null
}

export function getAllAirports(): Airport[] {
  return Object.values(AIRPORTS)
}

export function getRelatedAirports(code: string, limit = 5): Airport[] {
  const all = getAllAirports()
  return all.filter(airport => airport.code !== code).slice(0, limit)
}
