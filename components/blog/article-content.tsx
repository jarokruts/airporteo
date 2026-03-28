'use client'

import Image from 'next/image'

export function ArticleContent() {
  return (
    <article
      style={{
        fontFamily: 'var(--font-dm-sans)',
        color: '#1a1a2e',
        fontSize: '16px',
        lineHeight: 1.8,
      }}
    >
      {/* Section 1: Istanbul Begins at the Airport */}
      <section>
        <h2
          id="istanbul-begins-at-the-airport"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: 0,
            marginBottom: '16px',
            paddingTop: '20px',
          }}
        >
          Istanbul Begins at the Airport
        </h2>
        <p style={{ marginBottom: '18px' }}>
          Istanbul Airport is one of the world's busiest hubs, welcoming over 50 million passengers annually. From the moment your plane touches down, you're entering one of the most vibrant and historically rich cities on Earth. But navigating IST doesn't have to be stressful. With{' '}
          <a href="/services" style={{ color: '#d4a04a', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            Airporteo's VIP services
          </a>
          , your Istanbul journey begins smoothly.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Whether you're arriving for business or leisure, your first impression of Istanbul matters. A seamless airport experience sets the tone for your entire trip, and our meet & greet service ensures you're welcomed like a VIP from the moment you step off the plane.
        </p>
        <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '24px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image
            src="https://images.unsplash.com/photo-1556388158-15184a25a6a3?w=780&h=400&fit=crop"
            alt="Istanbul Airport Terminal"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Section 2: Arrivals */}
      <section>
        <h2
          id="arrivals-that-set-the-tone"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '40px',
            marginBottom: '16px',
            paddingTop: '20px',
          }}
        >
          Arrivals That Set the Tone
        </h2>
        <p style={{ marginBottom: '18px' }}>
          Long international flights are exhausting. After hours in the air, the last thing you want is to spend another hour queuing at immigration. Our Fast Track service at Istanbul Airport gets you through security and customs in minutes, not hours. You'll have a dedicated greeter waiting with a personalized sign, whisking you through priority lanes.
        </p>
        <p style={{ marginBottom: '18px' }}>
          For those heading downtown or to nearby Cappadocia, our luxury transfer service is included with all premium packages. Enjoy a comfortable ride in a premium vehicle driven by a professional driver who knows Istanbul's roads intimately. Book with us and receive a <strong style={{ fontWeight: 600 }}>10% discount on all transfers</strong> for your entire stay.
        </p>
      </section>

      {/* Section 3: Departures */}
      <section>
        <h2
          id="departures-without-the-countdown"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '40px',
            marginBottom: '16px',
            paddingTop: '20px',
          }}
        >
          Departures Without the Countdown
        </h2>
        <p style={{ marginBottom: '18px' }}>
          Leaving Istanbul? Don't spend your last minutes in chaotic departure queues. Our meet & greet team will collect you from check-in, fast track you through security, and escort you to your gate. If you're traveling with luggage, we offer baggage assistance to ensure everything is handled smoothly.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The VIP Lounge access included in select packages gives you a serene space to relax before your flight, complete with premium refreshments, showers, and work facilities.
        </p>
        <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '24px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image
            src="https://images.unsplash.com/photo-1554224311-beee415c15c8?w=780&h=400&fit=crop"
            alt="Airport Departure"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Section 4: Connections */}
      <section>
        <h2
          id="connections"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '40px',
            marginBottom: '16px',
            paddingTop: '20px',
          }}
        >
          Connections Through the Busiest Crossroads
        </h2>
        <p style={{ marginBottom: '18px' }}>
          Istanbul Airport is a major hub for connections to Europe, Asia, and the Middle East. If you're connecting through IST, managing a tight layover can be nerve-wracking. Our team specializes in connection assistance, ensuring you make your next flight with time to spare. We recommend allowing at least 90 minutes for international connections through Istanbul.
        </p>
        <p style={{ marginBottom: '18px' }}>
          We'll handle your luggage if it's checked through, escort you through the terminal, and get you to your gate well before boarding. For longer layovers, we can arrange lounge access or even a quick city tour if you have 8+ hours.
        </p>
      </section>

      {/* Section 5: VIP Terminal */}
      <section>
        <h2
          id="vip-terminal-istanbul-airport"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '40px',
            marginBottom: '16px',
            paddingTop: '20px',
          }}
        >
          The VIP Terminal: A World Apart
        </h2>
        <p style={{ marginBottom: '18px' }}>
          Istanbul Airport's VIP Terminal is a sanctuary of comfort and luxury. Separate from the main terminal, it offers an entirely different travel experience for discerning passengers. Here's what awaits you:
        </p>
        <div style={{ position: 'relative', width: '100%', height: '300px', marginBottom: '24px', borderRadius: '8px', overflow: 'hidden' }}>
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=780&h=400&fit=crop"
            alt="VIP Lounge"
            fill
            className="object-cover"
          />
        </div>

        <h3
          id="private-suites"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '19px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '28px',
            marginBottom: '12px',
          }}
        >
          Private Suites
        </h3>
        <p style={{ marginBottom: '18px' }}>
          Eight private suites available 24/7 for rest, meetings, or freshening up. Each suite features a bed, shower, and premium toiletries. Perfect for long layovers or when you want a private space before your flight. A personal butler attends to all your needs, and an onsite spa offers massages and treatments.
        </p>

        <h3
          id="meeting-room"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '19px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '28px',
            marginBottom: '12px',
          }}
        >
          Meeting Room
        </h3>
        <p style={{ marginBottom: '18px' }}>
          A professional meeting room accommodates up to 10 guests, complete with high-speed internet, conference equipment, butler service, and dining options. Ideal for last-minute business meetings or client presentations before departure.
        </p>

        <h3
          id="dining-spa-and-more"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '19px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '28px',
            marginBottom: '12px',
          }}
        >
          Dining, SPA & More
        </h3>
        <ul style={{ marginBottom: '18px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '6px' }}>À la carte dining from Michelin-starred chefs</li>
          <li style={{ marginBottom: '6px' }}>Full-service spa with massage and facial treatments</li>
          <li style={{ marginBottom: '6px' }}>Premium beverage bar with curated wines and spirits</li>
          <li style={{ marginBottom: '6px' }}>Shoe shine and laundry services</li>
          <li style={{ marginBottom: '6px' }}>Business center with office equipment</li>
          <li style={{ marginBottom: '6px' }}>Personal concierge service</li>
          <li style={{ marginBottom: '6px' }}>Duty-free shopping assistance</li>
        </ul>
      </section>

      {/* Section 6: CIP Service */}
      <section>
        <h2
          id="cip-service-istanbul-airport"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '40px',
            marginBottom: '16px',
            paddingTop: '20px',
          }}
        >
          CIP Service Explained
        </h2>
        <p style={{ marginBottom: '18px' }}>
          "CIP" stands for "Commercially Important Person" — a designation for frequent travelers and high-value passengers. CIP Service at Istanbul Airport provides red-carpet treatment similar to diplomatic protocol, with dedicated assistance from the moment you arrive until you board.
        </p>
        <p style={{ marginBottom: '18px' }}>
          The distinction: <strong style={{ fontWeight: 600 }}>VIP Terminal</strong> is a physical space with lounges and suites, while <strong style={{ fontWeight: 600 }}>CIP Service</strong> is personalized assistance throughout the airport. Many premium passengers book both for the ultimate experience.
        </p>
      </section>

      {/* Section 7: Families */}
      <section>
        <h2
          id="families-and-children"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '40px',
            marginBottom: '16px',
            paddingTop: '20px',
          }}
        >
          Families & Children
        </h2>
        <p style={{ marginBottom: '18px' }}>
          Traveling with kids? Our family packages include special accommodations for children. Kids under 7 travel free with all meet & greet and fast track services. We have family-friendly lounge areas, entertainment, and snacks available in the VIP Terminal. Our team is trained to work with families and ensures children are comfortable throughout your airport experience.
        </p>
      </section>

      {/* Section 8: Cancellation Policy */}
      <section>
        <h2
          id="cancellation-policy"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '40px',
            marginBottom: '16px',
            paddingTop: '20px',
          }}
        >
          Cancellation Policy
        </h2>
        <ul style={{ marginBottom: '18px', marginLeft: '20px' }}>
          <li style={{ marginBottom: '6px' }}>
            <strong style={{ fontWeight: 600 }}>7+ days before service:</strong> Full refund
          </li>
          <li style={{ marginBottom: '6px' }}>
            <strong style={{ fontWeight: 600 }}>3-6 days before service:</strong> 50% refund
          </li>
          <li style={{ marginBottom: '6px' }}>
            <strong style={{ fontWeight: 600 }}>Less than 3 days:</strong> No refund, but service can be rescheduled
          </li>
        </ul>
      </section>

      {/* Section 9: FAQ */}
      <section>
        <h2
          id="frequently-asked-questions"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '24px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '40px',
            marginBottom: '16px',
            paddingTop: '20px',
          }}
        >
          Frequently Asked Questions
        </h2>

        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '17px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '20px',
            marginBottom: '8px',
          }}
        >
          How far in advance should I book?
        </h3>
        <p style={{ marginBottom: '20px', color: 'rgba(26,26,46,0.55)', fontSize: '15px', lineHeight: 1.7 }}>
          We recommend booking at least 48 hours before your service date. However, we can often accommodate same-day requests depending on availability. Contact our team for urgent bookings.
        </p>

        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '17px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '20px',
            marginBottom: '8px',
          }}
        >
          Can I use these services for a connection?
        </h3>
        <p style={{ marginBottom: '20px', color: 'rgba(26,26,46,0.55)', fontSize: '15px', lineHeight: 1.7 }}>
          Absolutely. Our connection assistance service is designed for passengers with tight layovers. We'll fast track you through the terminal and ensure you make your next flight.
        </p>

        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '17px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '20px',
            marginBottom: '8px',
          }}
        >
          What if my flight is delayed?
        </h3>
        <p style={{ marginBottom: '20px', color: 'rgba(26,26,46,0.55)', fontSize: '15px', lineHeight: 1.7 }}>
          No problem. Our team monitors your flight status. If there's a delay, we'll adjust our service time accordingly and keep you updated. You'll still receive the full service you paid for.
        </p>

        <h3
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '17px',
            fontWeight: 700,
            color: '#1D215E',
            marginTop: '20px',
            marginBottom: '8px',
          }}
        >
          Is luggage assistance included?
        </h3>
        <p style={{ marginBottom: '20px', color: 'rgba(26,26,46,0.55)', fontSize: '15px', lineHeight: 1.7 }}>
          Yes, luggage assistance is included in all our premium packages. We'll help with check-in, baggage handling, and ensure your bags are properly tagged and tracked.
        </p>
      </section>
    </article>
  )
}
