"use client";

import React from "react";
import "./RouteCard.css";

import { ArrowRight } from "lucide-react";

type RouteCardProps = {
  origin: string;
  destination: string;
  price: string;
};

export const RouteCard: React.FC<RouteCardProps> = ({
  origin,
  destination,
  price,
}) => {
  return (
    <div className="route-container">
      <div className="route-direction">
        <p className="route-text-1">{origin}</p>
        <ArrowRight size={24} color="#F79009" />
        <p className="route-text-1">{destination}</p>
      </div>
      <div className="route-price">
        <p className="price">₦{price}</p>
        <p className="price-text">Starting from</p>
      </div>
    </div>
  );
};
