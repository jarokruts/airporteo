import React, { useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const [bookingData, setBookingData] = useState({
orderId: Math.floor(100000 + Math.random() * 900000).toString(),   
 trip: {
      type: "Arrival",
      airport: "Barcelona BCN",
      arrivalFlight: "BA 478",
      departureFlight: "",
      date: "April 15, 2026",
    },
    leadPassenger: {
      name: "",
      age: "35",
      email: "",
      countryCode: "+974",
      phone: "",
    },
    additionalPassengers: [],
    luggage: { checked: 2, cabin: 1 },
    requests: {
      wheelchair: false,
      childSeat: false,
      extraLuggage: false,
      lounge: false,
      pet: false,
    },
    showTransfer: false,
    transfer: { address: "", vehicle: "" },
    totalAmount: 1250,
  });

  const handleTransition = (updatedData) => {
    setBookingData(updatedData);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(3);
      window.scrollTo(0, 0);
    }, 2000);
  };

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1120",
          color: "white",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "4px solid rgba(255,255,255,0.1)",
              borderTopColor: "#B8913A",
              margin: "0 auto 24px",
              animation: "spin 1s linear infinite",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <h2 style={{ fontSize: 24, marginBottom: 8 }}>
            Preparing your VIP service
          </h2>
          <p style={{ opacity: 0.8 }}>
            Please wait a moment while we finalize your booking details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {currentStep === 2 && (
        <Step2
          data={bookingData}
          updateData={setBookingData}
          onContinue={(updatedData) => handleTransition(updatedData)}
        />
      )}

      {currentStep === 3 && (
        <Step3
          data={bookingData}
          onBack={() => setCurrentStep(2)}
        />
      )}
    </>
  );
}