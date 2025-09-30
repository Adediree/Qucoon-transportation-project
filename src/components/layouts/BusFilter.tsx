"use client";

import React from "react";
import "./BusFilter.css";

import { ArrowRight } from "lucide-react";
import { ModernSelect, ModernSelectOption } from "qucoon-components";

type BusFilterProps = {
  origin: string;
  destination?: string;
  price?: string;
};

export const BusFilter: React.FC<BusFilterProps> = ({
  origin,
  // destination,
  // price,
}) => {
  const PriceRange = [
    { value: "", label: "All Prices" },
    { value: "under ₦4000", label: "Under ₦4000" },
    { value: "₦4000 - ₦8000", label: "₦4000 - ₦8000" },
    { value: "₦4000 - ₦8000", label: "₦4000 - ₦8000" },
  ];
  const DepartureTimes = [
    { value: "", label: "All Times" },
    { value: "9AM", label: "9AM" },
    { value: "9AM", label: "9AM" },
    { value: "9AM", label: "9AM" },
  ];
  const BusTypes = [
    { value: "", label: "All Times" },
    { value: "Standard", label: "Standard" },
    { value: "Luxury", label: "Luxury" },
    { value: "Premium", label: "Premium" },
  ];

  return (
    <div className="filter-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          // paddingLeft: "16px",
        }}
      >
        <label
          style={{
            fontFamily: "Poppins",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "white",
          }}
        >
          Price Range
        </label>
        <select
          // value={fromLocation}
          // onChange={(e) => setFromLocation(e.target.value)}
          style={{
            width: "200px",
            padding: "10px 8px",
            paddingRight: "32px",
            borderRadius: "6px",
            border: "1px solid #D0D5DD",
            backgroundColor: "#1a1a1a",
            color: "white",
            fontFamily: "Poppins",
            fontSize: "0.875rem",
            cursor: "pointer",
            outline: "none",
          }}
        >
          {PriceRange.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label
          style={{
            fontFamily: "Poppins",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "white",
          }}
        >
          Departure Time
        </label>
        <select
          // value={fromLocation}
          // onChange={(e) => setFromLocation(e.target.value)}
          style={{
            width: "200px",
            padding: "10px 8px",
            paddingRight: "32px",
            borderRadius: "6px",
            border: "1px solid #D0D5DD",
            backgroundColor: "#1a1a1a",
            color: "white",
            fontFamily: "Poppins",
            fontSize: "0.875rem",
            cursor: "pointer",
            outline: "none",
          }}
        >
          {DepartureTimes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label
          style={{
            fontFamily: "Poppins",
            fontSize: "0.875rem",
            fontWeight: "500",
            color: "white",
          }}
        >
          Bus Types
        </label>
        <select
          // value={fromLocation}
          // onChange={(e) => setFromLocation(e.target.value)}
          style={{
            width: "200px",
            padding: "10px 8px",
            paddingRight: "32px",
            borderRadius: "6px",
            border: "1px solid #D0D5DD",
            backgroundColor: "#1a1a1a",
            color: "white",
            fontFamily: "Poppins",
            fontSize: "0.875rem",
            cursor: "pointer",
            outline: "none",
          }}
        >
          {BusTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
