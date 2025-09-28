"use client";

import React from "react";
import "./DestinationCard.css";

type DestinationCardProps = {
  image: string; // from /public folder e.g. "/Lagos.jpg"
  title: string;
  subtitle: string;
};

export const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  title,
  subtitle,
}) => {
  return (
    <div className="destination-1" style={{ backgroundImage: `url(${image})` }}>
      <div className="destination-hero-text-container">
        <p className="destination-text-1">{title}</p>
        <p className="destination-text-2">{subtitle}</p>
      </div>
    </div>
  );
};
