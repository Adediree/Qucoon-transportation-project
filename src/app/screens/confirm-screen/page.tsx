"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CircleCheckBig,
  Clock,
  CreditCard,
  MapPin,
  MessageSquare,
} from "lucide-react";
import "./page.css";
import { PaymentInstructionCard } from "@/components/layouts/PaymentInstructionCard";
import { BaseButton } from "qucoon-components";
import { RouteConstant } from "@/utilities/constants/routeConstant";

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const router =  useRouter();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");
  const company = searchParams.get("company");
  const type = searchParams.get("type");
  const departure = searchParams.get("departure");
  const arrival = searchParams.get("arrival");
  const price = searchParams.get("price");
  const seats = searchParams.get("seats");

  // ✅ Converts "6:00 PM" or "06:00" → total minutes since midnight
  const timeToMinutes = (timeStr: string) => {
    const [timePart, period] = timeStr.trim().split(/\s*(AM|PM|am|pm)?\s*/i);
    const [hourStr, minuteStr] = timePart.split(":");
    let hours = Number(hourStr);
    const minutes = Number(minuteStr || 0);

    if (period) {
      const isPM = /pm/i.test(period);
      if (isPM && hours < 12) hours += 12;
      if (!isPM && hours === 12) hours = 0;
    }

    return hours * 60 + minutes;
  };

  // ✅ Calculate duration between two times (supports overnight trips)
  const calculateTravelTime = (departure: string, arrival: string) => {
    const depMinutes = timeToMinutes(departure);
    const arrMinutes = timeToMinutes(arrival);

    let diff = arrMinutes - depMinutes;
    if (diff < 0) diff += 24 * 60; // handle overnight

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    // ✅ Format for human readability
    if (hours > 0 && minutes > 0) return `${hours} hours ${minutes} minutes`;
    if (hours > 0) return `${hours} hours`;
    if (minutes > 0) return `${minutes} minutes`;
    return "0 minutes";
  };

  const travelTime =
    departure && arrival ? calculateTravelTime(departure, arrival) : null;

  const handleWhatsAppConfirm = () => {
    const message = `Hi, I want to confirm my booking for ${from} to ${to} on ${date} with ${company}. Total: ${price}`;
    window.open(
      `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="overall-confirm-container">
      <div className="confirm-container">
        <div className="confirm-header">
          <p className="header-main">Confirm your ride</p>
          <p className="header-sub">
            Please review your booking details and follow the instructions to
            confirm.
          </p>
        </div>
        <div className="background">
          <div className="ride-details">
            <p className="section-info">Ride Details</p>
            <div className="details-div">
              <div className="section-1">
                <div className="route">
                  <MapPin width={24} color="white" />
                  <div className="route-container">
                    <p className="route-description">Route</p>
                    <p className="ride-route">
                      {from} to {to}
                    </p>
                  </div>
                </div>
                <div className="route">
                  <Building2 width={24} color="white" />
                  <div className="route-container">
                    <p className="route-description">Operator</p>
                    <p className="ride-route">{company}</p>
                  </div>
                </div>
              </div>
              <div className="section-1">
                <div className="route">
                  <Clock width={24} color="white" />
                  <div className="route-container">
                    <p className="route-description">Date & Time</p>
                    <p className="ride-route">
                      Wednesday, October 8, 2025, 8:00 AM
                    </p>
                  </div>
                </div>
                <div className="route">
                  <CreditCard width={24} color="white" />
                  <div className="route-container">
                    <p className="route-description">Price</p>
                    <p className="price">₦{price}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="extra-info">
              <div className="route-container-edit">
                <p className="route-description">Duration</p>
                {travelTime && <p className="ride-route">{travelTime}</p>}
              </div>
              <div className="route-container-edit">
                <p className="route-description">Bus Type</p>
                <p className="ride-route">{type}</p>
              </div>
              <div className="route-container-edit">
                <p className="route-description">Seats Available</p>
                <p className="ride-route">{seats} remaining</p>
              </div>
            </div>
          </div>
          <div className="instructions">
            <div className="instruction-text">
              <p className="section-info">Payment Instructions</p>
              <p className="route-description">
                To complete your booking, please follow these steps carefully:
              </p>
            </div>
            <PaymentInstructionCard
              stepNumber={1}
              title="Confirm via WhatsApp"
              subtitle="Send a message to our WhatsApp number to confirm your travel details and the final price with the operator."
              icon={<MessageSquare width={24} color="white" />}
              backgroundColor="rgba(127, 29, 29, 0.2)"
            />
            <PaymentInstructionCard
              stepNumber={2}
              title="Transfer Payment"
              subtitle="Make a transfer to the account details provided via WhatsApp. Ensure the amount matches the confirmed price exactly."
              icon={<CreditCard width={24} color="white" />}
              backgroundColor="rgba(124, 45, 18, 0.2)"
            />
            <PaymentInstructionCard
              stepNumber={3}
              title="Receive Confirmation"
              subtitle="Once your payment is verified, your booking will be finalized, and you will receive an e-ticket via WhatsApp."
              icon={<CircleCheckBig width={24} color="white" />}
              backgroundColor="rgba(20, 83, 45, 0.2)"
            />
          </div>
          <div className="buttons-div">
            <BaseButton
              text="Proceed To WhatsApp"
              onClick={handleWhatsAppConfirm}
              textStyle={{ color: "white", fontFamily: "Poppins" }}
              style={{
                padding: "16px",
                width: "100%",
                // backgroundColor: "none",
                // background: "none",
                // border: "1px solid",
                // borderColor: "#D0D5DD",
              }}
            />
            <BaseButton
              text="Submit Receipt"
              onClick={() => router.push(RouteConstant.screens.submitScreen.path)}
              textStyle={{ color: "white", fontFamily: "Poppins" }}
              style={{
                padding: "16px",
                width: "100%",
                backgroundColor: "#f79009",
                // background: "none",
                // border: "1px solid",
                // borderColor: "#D0D5DD",
              }}
            />
          </div>
        </div>
      </div>
    </div>

    // <div className="confirm-container">
    //   <div className="route">
    //     <p>{from}</p>
    //     <ArrowRight size={16} color="black" />
    //     <p>{to}</p>
    //   </div>
    //   <p>{date}</p>

    //   <div className="details">
    //     <h2>Selected Bus</h2>
    //     <p>Company: {company}</p>
    //     <p>Type: {type}</p>
    //     <p>Departure: {departure}</p>
    //     <p>Arrival: {arrival}</p>

    //     {travelTime && <p>Travel Time: {travelTime}</p>}

    //     <p>Price: ₦{price}</p>
    //     <p>Seats remaining: {seats}</p>
    //   </div>
    // </div>
  );
}
