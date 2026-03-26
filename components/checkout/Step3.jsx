'use client'

import React, { useState } from "react";

const NAVY = "#1D215E";
const BLUE = "#3F5CA6";
const GOLD = "#B8913A";
const BORDER = "#E2E5EB";
const GRAY_BG = "#F0F2F5";
const GRAY_TEXT = "#6B7280";

export default function Step3({ data, onBack }) {
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedBcn, setAgreedBcn] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [promoMsg, setPromoMsg] = useState("");

  if (!data || !data.leadPassenger) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", background: GRAY_BG }}>
        <p style={{ color: GRAY_TEXT }}>Loading your booking details...</p>
      </div>
    );
  }

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "AIRPORTEO10") {
      setDiscount(data.totalAmount * 0.1);
      setPromoMsg("✓ 10% discount applied!");
    } else {
      setDiscount(0);
      setPromoMsg("✗ Invalid promo code");
    }
  };

  const finalTotal = data.totalAmount - discount;
  const isConfirmDisabled = !(agreedTerms && agreedBcn);
  const trip = data.trip || {};
  const flight = trip.type === "Departure" ? trip.departureFlight : trip.arrivalFlight;
  const serviceLabel = trip.type === "Departure" ? "Departure Assistance" : "Arrivals Meet & Greet";
  const serviceDescription = trip.type === "Departure"
    ? "Your dedicated Airporteo agent will meet you at the hotel or address, assist with luggage and escort you through the departure terminal."
    : "Your dedicated Airporteo agent will be waiting for you in the arrivals hall with a name sign, assist with luggage and escort you to your transfer.";

  return (
    <div style={{ background: GRAY_BG, minHeight: "100vh", padding: "48px 20px 80px" }}>

      {/* Page title */}
      <div style={{ maxWidth: 700, margin: "0 auto 32px" }}>
        <div style={{ fontSize: 13, color: GRAY_TEXT, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Step 3 of 3</div>
        <h1 style={{ fontSize: 36, color: NAVY, margin: 0, fontWeight: 700 }}>Review &amp; Confirm</h1>
        <p style={{ color: GRAY_TEXT, marginTop: 8, fontSize: 15 }}>Please verify your service details before completing payment.</p>
      </div>

      <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* ── SERVICE CONFIRMATION CARD ── */}
        <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 8px 40px rgba(29,33,94,0.18)" }}>

        {/* Gold top bar */}
<div style={{ background: GOLD, padding: "16px 28px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
  <div>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: NAVY, opacity: 0.7, marginBottom: 4 }}>
      Airporteo VIP Service
    </div>
    <div style={{ fontSize: 22, fontWeight: 800, color: NAVY }}>
      {serviceLabel}
    </div>
  </div>
  <div style={{ textAlign: "right" }}>
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: NAVY, opacity: 0.7, marginBottom: 4 }}>
      Order
    </div>
    <div style={{ fontSize: 22, fontWeight: 800, color: NAVY }}>
      #{data.orderId || "000000"}
    </div>
  </div>
</div>

          {/* Navy body */}
          <div style={{ background: NAVY, padding: 28 }}>

            {/* Personal greeting */}
            <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>Dear</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: "white" }}>
                {data.leadPassenger.name || "Valued Guest"}
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 6, lineHeight: 1.6 }}>
                {serviceDescription}
              </div>
            </div>

            {/* Service details grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Date of Service</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: GOLD }}>{trip.date || "—"}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Airport</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "white" }}>{trip.airport || "Barcelona BCN"}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Luggage Handled</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "white" }}>
                  {data.luggage?.checked || 0} Checked · {data.luggage?.cabin || 0} Cabin
                </div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 6 }}>Passengers</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "white" }}>
                  {1 + (data.additionalPassengers?.length || 0)} {1 + (data.additionalPassengers?.length || 0) === 1 ? "Person" : "People"}
                </div>
              </div>
            </div>

            {/* Special requests */}
            {Object.entries(data.requests || {}).filter(([, v]) => v).length > 0 && (
              <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>Special Requests Included</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {Object.entries(data.requests || {}).filter(([, v]) => v).map(([k]) => (
                    <span key={k} style={{ fontSize: 13, padding: "4px 12px", borderRadius: 999, border: `1px solid ${GOLD}`, color: GOLD, textTransform: "capitalize" }}>
                      ✓ {k}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Flight reference — secondary, small */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4 }}>Flight Reference</div>
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{flight || "—"}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4 }}>Contact</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{data.leadPassenger.email || "—"}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>{data.leadPassenger.countryCode} {data.leadPassenger.phone || "—"}</div>
              </div>
            </div>

          </div>
        </div>

        {/* ── ORDER SUMMARY ── */}
        <div style={{ background: "white", borderRadius: 16, padding: 24, border: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 16 }}>Order Summary</div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: GRAY_TEXT, marginBottom: 10 }}>
            <span>VIP Meet &amp; Greet Service</span>
            <span>$1,000</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: GRAY_TEXT, marginBottom: 16 }}>
            <span>Luggage Assistance</span>
            <span>$250</span>
          </div>
          {discount > 0 && (
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: "green", marginBottom: 16 }}>
              <span>Promo discount</span>
              <span>-${discount.toFixed(0)}</span>
            </div>
          )}
          <div style={{ height: 1, background: BORDER, marginBottom: 16 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: NAVY }}>Total Due</span>
            <span style={{ fontSize: 38, fontWeight: 800, color: NAVY, fontFamily: "serif" }}>${finalTotal}</span>
          </div>
        </div>

        {/* ── PROMO CODE ── */}
        <div style={{ background: "white", borderRadius: 16, padding: 24, border: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: NAVY, marginBottom: 12 }}>Have a promo code?</div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              value={promoCode}
              onChange={(e) => { setPromoCode(e.target.value); setPromoMsg(""); }}
              placeholder="Enter promo code"
              style={{ flex: 1, borderRadius: 10, border: `1px solid ${BORDER}`, padding: "12px 14px", fontSize: 14, outline: "none" }}
            />
            <button
              onClick={handleApplyPromo}
              style={{ padding: "12px 20px", borderRadius: 10, border: "none", background: BLUE, color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
            >
              Apply
            </button>
          </div>
          {promoMsg && (
            <div style={{ fontSize: 13, marginTop: 8, color: promoMsg.startsWith("✓") ? "green" : "#EF4444" }}>{promoMsg}</div>
          )}
        </div>

        {/* ── POLICY ACKNOWLEDGEMENT ── */}
        <div style={{ background: "white", borderRadius: 16, padding: 24, border: `1px solid ${BORDER}` }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: NAVY, marginBottom: 16 }}>Policy Acknowledgement</div>
          <label style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: GRAY_TEXT, marginBottom: 14, cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={agreedTerms}
              onChange={(e) => setAgreedTerms(e.target.checked)}
              style={{ width: 18, height: 18, marginTop: 1, accentColor: BLUE, flexShrink: 0 }}
            />
            <span>I agree to the general <strong style={{ color: NAVY }}>Terms &amp; Conditions</strong> and authorize Airporteo to provide the services listed above for the selected date and time at {trip.airport || "Barcelona BCN"}.</span>
          </label>
          <label style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: GRAY_TEXT, cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={agreedBcn}
              onChange={(e) => setAgreedBcn(e.target.checked)}
              style={{ width: 18, height: 18, marginTop: 1, accentColor: BLUE, flexShrink: 0 }}
            />
            <span>I have read and accept the <strong style={{ color: NAVY }}>BCN-specific 24-hour cancellation policy</strong> and understand that late changes or no-shows may incur full charges.</span>
          </label>
        </div>

        {/* ── CONFIRM BUTTON ── */}
        <button
          disabled={isConfirmDisabled}
          style={{
            width: "100%",
            padding: "18px 0",
            borderRadius: 999,
            border: "none",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: 0.5,
            cursor: isConfirmDisabled ? "not-allowed" : "pointer",
            background: isConfirmDisabled ? "#D1D5DB" : `linear-gradient(135deg, ${GOLD}, #d4a84b)`,
            color: isConfirmDisabled ? "#9CA3AF" : NAVY,
            boxShadow: isConfirmDisabled ? "none" : "0 4px 24px rgba(184,145,58,0.45)",
            transition: "all 0.2s ease",
          }}
        >
          {isConfirmDisabled ? "Please accept the policies above" : `🔒 Confirm & Pay $${finalTotal}`}
        </button>

        {/* ── PAYMENT TRUST ── */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 12, color: GRAY_TEXT, marginBottom: 10 }}>Secure payments via</div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
            {["VISA", "MasterCard", "AmEx", "Apple Pay", "Google Pay", "Crypto", "Bank Transfer"].map((method) => (
              <span key={method} style={{ fontSize: 12, padding: "6px 14px", border: `1px solid ${BORDER}`, borderRadius: 8, color: GRAY_TEXT, background: "white" }}>
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* ── BACK LINK ── */}
        <div style={{ textAlign: "center" }}>
          <button onClick={onBack} style={{ background: "transparent", border: "none", color: BLUE, fontSize: 14, cursor: "pointer" }}>
            ← Back to Details
          </button>
        </div>

      </div>
    </div>
  );
}
