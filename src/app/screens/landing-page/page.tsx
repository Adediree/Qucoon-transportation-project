"use client";
import "./page.css";
import {
  BaseButton,
  BaseDatePicker,
  BaseInput,
  ModernSelect,
  ModernSelectOption,
} from "qucoon-components";
import { Star, Map, MessageCircleMore, ScanQrCode } from "lucide-react";
import { DestinationCard } from "@/components/layouts/DestinationCard";
import { RouteCard } from "@/components/layouts/RouteCard";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RouteConstant } from "@/utilities/constants/routeConstant";

export default function LandingPage() {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [singleDate, setSingleDate] = useState("");
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();
  const locationOptions = [
    { value: "", label: "Select location" },
    { value: "lagos", label: "Lagos" },
    { value: "abuja", label: "Abuja" },
    { value: "port-harcourt", label: "Port Harcourt" },
    { value: "kano", label: "Kano" },
    { value: "ibadan", label: "Ibadan" },
  ];
  const destinationOptions = [
    { value: "", label: "Select location" },
    { value: "lagos", label: "Lagos" },
    { value: "abuja", label: "Abuja" },
    { value: "port-harcourt", label: "Port Harcourt" },
    { value: "kano", label: "Kano" },
    { value: "ibadan", label: "Ibadan" },
  ];

  const topKeywordsOptions: ModernSelectOption[] = [
    {
      label: "Delivery Speed",
      value: "Delivery Speed",
    },

    {
      label: "Customer Service",
      value: "Customer Service",
    },

    {
      label: "Food Quality",
      value: "Food Quality",
    },
    {
      label: "Pricing",
      value: "Pricing",
    },
  ];

  const handleSearch = () => {
    if (!fromLocation || !toLocation) {
      alert("Please fill in all fields");
      return;
    }

    setShowResults(true);
    router.push(
      `${RouteConstant.screens.bookingScreen.path}?from=${fromLocation}&to=${toLocation}&date=${departureDate}`
    );
  };

  return (
    <div className="overall-container">
      <div className="container-1">
        <div className="hero-text-container">
          <p className="text-1">Book Your Next Trip</p>
          <p className="text-2">
            Seamlessly find and book bus tickets across Nigeria
          </p>
        </div>
      </div>
      <div className="container-2">
        <div className="ride-details">
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "white",
              }}
            >
              Where from?
            </label>
            <select
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              style={{
                width: "250px",
                padding: "10px 8px",
                paddingRight: "32px",
                borderRadius: "6px",
                border: "1px solid #D0D5DD",
                backgroundColor: "#1a1a1a",
                color: "white",
                fontSize: "0.875rem",
                cursor: "pointer",
                outline: "none",
              }}
            >
              {locationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "white",
              }}
            >
              Where To?
            </label>
            <select
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              style={{
                width: "250px",
                padding: "10px 8px",
                paddingRight: "32px",
                borderRadius: "6px",
                border: "1px solid #D0D5DD",
                backgroundColor: "#1a1a1a",
                color: "white",
                fontSize: "0.875rem",
                cursor: "pointer",
                outline: "none",
              }}
            >
              {destinationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* <ModernSelect
              placeholderLabel="Keywords"
              // onOptionSelect={}
              selectOptions={topKeywordsOptions}
              size="small"
              label="Top Keywords"
              style={{ fontSize: "16px", color: "#667085", background:"none" }}
            /> */}
          </div>
          {/* <div style={{ width: "250px" }}>
            <BaseInput
              label="Where To?"
              name={"name"}
              inputProps={{ placeholder: "Destination" }}
              labelStyle={{ color: "white" }}
              style={{
                fontFamily: "Poppins",
                backgroundColor: "none",
                background: "none",
                // width: "250px",
              }}
            />
          </div> */}
          <BaseDatePicker
            label="Departure Date"
            labelStyle={{ color: "white", fontFamily: "Poppins" }}
            selected={singleDate}
            // onSelect={setSingleDate}
            // value={departureDate}
            // onChange={(date) => setDepartureDate(date)}
            style={{
              // width: "400px",
              paddingLeft: "32px",
              fontFamily: "Poppins",
            }}
          />
          <BaseButton
            text="Search"
            textStyle={{ color: "black", fontFamily: "Poppins" }}
            onClick={handleSearch}
            style={{
              backgroundColor: "white",
              width: "150px",
              maxHeight: "40px",
              // border: "1px solid",
              // borderColor: "#D0D5DD",
            }}
          />
        </div>
        <div className="feedback-container">
          <div className="customer-rating">
            <Star size={40} color="#F97066" />
            <p className="rating-number">50,000+</p>
            <p className="rating-text">Happy Customers</p>
          </div>
          <div className="customer-rating">
            <Map size={40} color="#32D583" />
            <p className="rating-number">200+</p>
            <p className="rating-text">Routes Covered</p>
          </div>
          <div className="customer-rating">
            <MessageCircleMore size={40} color="#1570EF" />
            <p className="rating-number">24/7</p>
            <p className="rating-text">Customer Support</p>
          </div>
          <div className="customer-rating">
            <ScanQrCode size={40} color="#F79009" />
            <p className="rating-number">100%</p>
            <p className="rating-text">Digital Tickets</p>
          </div>
        </div>
      </div>
      <div className="Container-3">
        <p className="header-text">Featured Destinations</p>
        <div className="destination-container">
          <DestinationCard
            image="/Lagos.jpg"
            title="Lagos"
            subtitle="Explore the vibrant heart of Nigeria"
          />
          <DestinationCard
            image="/Abuja.jpg"
            title="Abuja"
            subtitle="Discover Nigeria’s capital city"
          />
          <DestinationCard
            image="/Benin.jpg"
            title="Benin"
            subtitle="Experience the garden city's beauty"
          />
        </div>
      </div>
      <div className="Container-4">
        <p className="header-text">Popular Routes</p>
        <div className="destination-container">
          <RouteCard origin="Lagos" destination="Abuja" price="5000" />
          <RouteCard origin="Abuja" destination="Port-Harcourt" price="6000" />
          <RouteCard origin="Benin" destination="Zaria" price="7000" />
        </div>
      </div>
    </div>
  );
}
