'use client'

import { useState } from "react";
import { Navbar } from "@/components/navbar";

const NAVY = "#1D215E";
const BLUE = "#3F5CA6";
const GOLD = "#B8913A";
const BORDER = "#E2E5EB";
const GRAY_BG = "#F0F2F5";
const GRAY_TEXT = "#6B7280";

const COUNTRIES = [
  { code: "+974", flag: "🇶🇦" },
  { code: "+971", flag: "🇦🇪" },
  { code: "+1", flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
];

const VEHICLE_TYPES = [
  "Business Sedan",
  "Luxury Sedan",
  "Executive Minivan",
  "Luxury SUV",
];

export default function Step2({ data, updateData, onContinue }) {
  // Initialize state from existing data if available
  const [lead, setLead] = useState(
    data?.leadPassenger || {
      name: "",
      age: "35",
      email: "",
      countryCode: "+974",
      phone: "",
    }
  );

  const [passengers, setPassengers] = useState(
    data?.additionalPassengers || []
  );

  const [checkedBags, setCheckedBags] = useState(
    data?.luggage?.checked ?? 2
  );
  const [cabinBags, setCabinBags] = useState(
    data?.luggage?.cabin ?? 1
  );

  const [requests, setRequests] = useState(
    data?.requests || {
      wheelchair: false,
      childSeat: false,
      extraLuggage: false,
      lounge: false,
      pet: false,
    }
  );

  const [showTransfer, setShowTransfer] = useState(
    data?.showTransfer || false
  );
  const [transfer, setTransfer] = useState(
    data?.transfer || { address: "", vehicle: "" }
  );

  const [vipUpgrade, setVipUpgrade] = useState(
    data?.vipUpgrade || false
  );

  // simple total using existing totalAmount or base 1250
  const baseTotal = data?.totalAmount ?? 1250;
  const total = vipUpgrade ? baseTotal + 2000 : baseTotal;

  const isFormValid =
    lead.name.trim() !== "" &&
    lead.email.trim() !== "" &&
    lead.phone.trim() !== "";

  const toggleRequest = (key) =>
    setRequests({ ...requests, [key]: !requests[key] });

  const addPassenger = () =>
    setPassengers([...passengers, { name: "", age: "" }]);

  const updatePassenger = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

  const handleContinue = () => {
  const updatedData = {
    ...data,
    trip: { ...data.trip },
    leadPassenger: lead,
    additionalPassengers: passengers,
    luggage: { checked: checkedBags, cabin: cabinBags },
    requests,
    showTransfer,
    transfer,
    vipUpgrade,
    totalAmount: total,
  };
  updateData(updatedData);
  onContinue(updatedData);
};

  const addressLabel =
    (data.trip?.type || "Arrival") === "Departure"
      ? "Pick-up Address"
      : "Drop-off Address";

  const showTransferSection =
    (data.trip?.type || "Arrival") !== "Connection";

  return (
    <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@500;600&display=swap');
        .field-input { width: 100%; padding: 12px; border: 1px solid ${BORDER}; border-radius: 10px; font-size: 14px; outline: none; box-sizing: border-box; }
        .field-label { font-size: 11px; font-weight: 700; color: ${NAVY}; margin-bottom: 6px; display: block; text-transform: uppercase; letter-spacing: 0.5px; }
        .section-card { background: #fff; border: 1px solid ${BORDER}; border-radius: 14px; padding: 24px; margin-bottom: 20px; }
        .payment-btn { 
          border: none; border-radius: 12px; padding: 18px; font-weight: 600; width: 100%; font-size: 16px; margin-top: 10px; 
          transition: all 0.3s ease; cursor: ${isFormValid ? 'pointer' : 'not-allowed'};
          background: ${isFormValid ? GOLD : '#D1D5DB'};
          color: ${isFormValid ? '#fff' : '#9CA3AF'};
          box-shadow: ${isFormValid ? '0 4px 14px rgba(184, 145, 58, 0.4)' : 'none'};
        }
        .counter-btn { width: 32px; height: 32px; border: 1px solid ${BORDER}; border-radius: 8px; background: #fff; cursor: pointer; }
        .toggle-track { width: 44px; height: 24px; border-radius: 12px; cursor: pointer; position: relative; transition: 0.25s; }
        .toggle-knob { width: 20px; height: 20px; border-radius: 50%; background: #fff; position: absolute; top: 2px; transition: left 0.25s; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
        .step-circle { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; margin: 0 auto 8px; }
      `}</style>

      <Navbar />

      <nav style={{ background: "#FFFFFF", padding: "20px 0", borderBottom: "1px solid #E2E5EB" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", color: NAVY }}>
          <div style={{ textAlign: "center", opacity: 0.6 }}>
            <div className="step-circle" style={{ background: "#E8EAF0", color: NAVY }}>✓</div>
            <div style={{ fontSize: 11, textTransform: "uppercase", color: NAVY }}>Trip Details</div>
          </div>
          <div style={{ width: 40, height: 1, background: "#E2E5EB" }} />
          <div style={{ textAlign: "center" }}>
            <div className="step-circle" style={{ background: BLUE, color: "#fff" }}>2</div>
            <div style={{ fontSize: 11, textTransform: "uppercase", fontWeight: 700, color: NAVY }}>Your Quote</div>
          </div>
          <div style={{ width: 40, height: 1, background: "#E2E5EB" }} />
          <div style={{ textAlign: "center", opacity: 0.6 }}>
            <div className="step-circle" style={{ border: `1px solid ${NAVY}` }}>3</div>
            <div style={{ fontSize: 11, textTransform: "uppercase", color: NAVY }}>Confirm & Pay</div>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 1150, margin: "40px auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 30, background: "#FFFFFF" }}>
        
        <div className="left-col">
          <div className="section-card">
            <h3 style={{ marginBottom: 20, fontSize: 18, color: NAVY }}>👤 Lead Passenger</h3>
            <div style={{ display: "flex", gap: 12, marginBottom: 15 }}>
              <div style={{ flex: 1 }}>
                <label className="field-label">Full Name (as on passport) *</label>
                <input className="field-input" placeholder="John Smith" value={lead.name} onChange={e => setLead({...lead, name: e.target.value})} />
              </div>
              <div style={{ width: 100 }}>
                <label className="field-label">Age</label>
                <input className="field-input" type="number" value={lead.age} onChange={e => setLead({...lead, age: e.target.value})} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1 }}>
                <label className="field-label">Phone Number *</label>
                <div style={{ display: "flex", gap: 8 }}>
                  <select className="field-input" style={{ width: 120 }} value={lead.countryCode} onChange={e => setLead({...lead, countryCode: e.target.value})}>
                    {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
                  </select>
                  <input 
                    className="field-input" 
                    placeholder="555 123 4567" 
                    value={lead.phone} 
                    maxLength={10}
                    onChange={e => setLead({...lead, phone: e.target.value.replace(/\D/g, '')})} 
                  />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <label className="field-label">Email Address *</label>
                <input className="field-input" placeholder="alex@example.com" value={lead.email} onChange={e => setLead({...lead, email: e.target.value})} />
              </div>
            </div>
          </div>

          <div className="section-card">
            <h3 style={{ marginBottom: 15, fontSize: 18, color: NAVY }}>👥 Additional Passengers</h3>
            {passengers.map((p, idx) => (
              <div key={idx} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <input className="field-input" placeholder="Full Name" value={p.name} onChange={e => updatePassenger(idx, "name", e.target.value)} />
                </div>
                <div style={{ width: 100 }}>
                  <input className="field-input" type="number" placeholder="Age" value={p.age} onChange={e => updatePassenger(idx, "age", e.target.value)} />
                </div>
              </div>
            ))}
            <button onClick={addPassenger} style={{ background: "none", border: `1px dashed ${BLUE}`, borderRadius: 10, padding: 12, color: BLUE, fontWeight: 700, width: "100%", cursor: "pointer" }}>
              + Add Passenger
            </button>
          </div>

          <div className="section-card">
            <h3 style={{ marginBottom: 18, fontSize: 18, color: NAVY }}>🧳 Luggage</h3>
            {[
              { label: "Checked Bags", sub: "First 2 included, then $15 each", val: checkedBags, set: setCheckedBags },
              { label: "Cabin Bags", sub: "Included in service", val: cabinBags, set: setCabinBags }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: i === 0 ? `1px solid ${BORDER}` : "none" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: GRAY_TEXT }}>{item.sub}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button className="counter-btn" onClick={() => item.set(Math.max(0, item.val - 1))}>-</button>
                  <span style={{ fontWeight: 700 }}>{item.val}</span>
                  <button className="counter-btn" onClick={() => item.set(item.val + 1)}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="section-card">
            <h3 style={{ marginBottom: 18, fontSize: 18, color: NAVY }}>✨ Special Requests</h3>
            {[
              { key: "wheelchair", label: "Wheelchair Assistance", sub: "Mobility support throughout the airport" },
              { key: "childSeat", label: "Child Seat", sub: "For ground transfer vehicles" },
              { key: "extraLuggage", label: "Extra Luggage Handling", sub: "Oversized or excess baggage support" },
              { key: "lounge", label: "VIP Lounge Access", sub: "$55 per person" },
              { key: "pet", label: "Pet Assistance", sub: "Help with pet travel documentation" }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${BORDER}` }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: GRAY_TEXT }}>{item.sub}</div>
                </div>
                <div className="toggle-track" style={{ background: requests[item.key] ? BLUE : "#D1D5DB" }} onClick={() => toggleRequest(item.key)}>
                  <div className="toggle-knob" style={{ left: requests[item.key] ? 22 : 2 }} />
                </div>
              </div>
            ))}
          </div>

          {showTransferSection && (
            <div className="section-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: 18, color: NAVY }}>🚗 Hotel Transfer</h3>
                  <p style={{ fontSize: 13, color: GRAY_TEXT }}>Professional transport to your destination</p>
                </div>
                <div className="toggle-track" style={{ background: showTransfer ? BLUE : "#D1D5DB" }} onClick={() => setShowTransfer(!showTransfer)}>
                  <div className="toggle-knob" style={{ left: showTransfer ? 22 : 2 }} />
                </div>
              </div>
              {showTransfer && (
                <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
                  <div style={{ flex: 1.5 }}>
                    <label className="field-label">{addressLabel}</label>
                    <input className="field-input" placeholder="Hotel or destination" value={transfer.address} onChange={e => setTransfer({...transfer, address: e.target.value})} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="field-label">Vehicle Type</label>
                    <select className="field-input" value={transfer.vehicle} onChange={e => setTransfer({...transfer, vehicle: e.target.value})}>
                      <option value="">Select vehicle...</option>
                      {VEHICLE_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="section-card" style={{ border: `1px solid ${GOLD}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <h3 style={{ fontSize: 18, color: NAVY, display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  ���� VIP Platinum Upgrade
                </h3>
                <p style={{ fontSize: 13, color: GRAY_TEXT }}>Private terminal, tarmac limousine, personal VIP advisor</p>
              </div>
              <div className="toggle-track" style={{ background: vipUpgrade ? GOLD : "#D1D5DB" }} onClick={() => setVipUpgrade(!vipUpgrade)}>
                <div className="toggle-knob" style={{ left: vipUpgrade ? 22 : 2 }} />
              </div>
            </div>
            {vipUpgrade && (
              <div style={{ marginTop: 20, paddingTop: 20, borderTop: `1px solid ${BORDER}` }}>
                {[
                  "Dedicated Personal VIP Advisor throughout",
                  "Private lounge access for up to 3 hours",
                  "Individual limousine transfer from/to the aircraft",
                  "Personal greeting at the aircraft",
                  "Customs and passport control via premium fast-track lanes",
                  "No airport crowds — total privacy and serenity"
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: i < 5 ? 12 : 0, color: NAVY, fontSize: 13 }}>
                    <span style={{ color: GOLD, fontWeight: 700 }}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <button 
              style={{
                flex: "0 0 35%",
                padding: "12px 16px",
                borderRadius: 8,
                border: `2px solid ${NAVY}`,
                background: "#FFFFFF",
                color: NAVY,
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onClick={() => goToStep(1)}
            >
              Back
            </button>
            <button 
              className="payment-btn"
              style={{ flex: "0 0 65%" }}
              disabled={!isFormValid} 
              onClick={handleContinue}
            >
              Confirm and Pay
            </button>
          </div>
        </div>

        <aside>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px", position: "sticky", top: 20 }}>
            <h3 style={{ fontSize: 20, marginBottom: 24, color: NAVY }}>Quote Summary</h3>
            <div style={{ display: "grid", gap: 12, fontSize: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: GRAY_TEXT }}>Airport</span>
                <span style={{ fontWeight: 700 }}>{data.trip.airport}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: GRAY_TEXT }}>Service</span>
                <span style={{ fontWeight: 700 }}>{data.trip.type} Meet & Greet</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: GRAY_TEXT }}>Flight Date</span>
                <span style={{ fontWeight: 700 }}>{data.trip.date}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: GRAY_TEXT }}>Flight Number</span>
                <span style={{ fontWeight: 700 }}>{data.trip.arrivalFlight}</span>
              </div>
            </div>
            <div style={{ height: 1, background: BORDER, margin: "20px 0" }} />
            <div style={{ display: "grid", gap: 10, fontSize: 14, marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: GRAY_TEXT }}>Services</span>
                <span style={{ fontWeight: 600 }}>{data.trip.servicePrice} USD</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: GRAY_TEXT }}>Luggage Assistance</span>
                <span style={{ fontWeight: 600 }}>{data.trip.luggagePrice} USD</span>
              </div>
              {vipUpgrade && (
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: GRAY_TEXT }}>VIP Platinum Upgrade</span>
                  <span style={{ fontWeight: 600 }}>+$2,000</span>
                </div>
              )}
            </div>
            <div style={{ background: GRAY_BG, padding: "20px", borderRadius: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: 16, color: NAVY }}>Total</span>
                <span style={{ fontSize: 32, fontWeight: 700, color: NAVY, fontFamily: "'Playfair Display', serif" }}>${total}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
