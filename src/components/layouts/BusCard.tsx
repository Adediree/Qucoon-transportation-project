"use client";

import React, { useState } from "react";
import "./BusCard.css";

import { Clock, Users, Wifi, MapPin } from "lucide-react";
import { BaseButton } from "qucoon-components";
import Image from "next/image";
const BusImage = "/BusImage.jpg";

type BusCardProps = {
  BusCompany: string;
  BusType: string;
  DepartureTime: string;
  ArrivalTime: string;
  Price: string;
  Seats: number;
  onSelectSeat: (bus: {
    BusCompany: string;
    BusType: string;
    DepartureTime: string;
    ArrivalTime: string;
    Price: string;
    Seats: number;
  }) => void;
};

export const BusCard: React.FC<BusCardProps> = ({
  BusCompany,
  BusType,
  DepartureTime,
  ArrivalTime,
  Price,
  Seats,
  onSelectSeat,
}) => {
  const isSoldOut = Seats === 0;
  // const [availableSeats, setAvailableSeats] = useState<number>(Seats);

  // const handleSelectSeat = () => {
  //   if (availableSeats > 0) {
  //     setAvailableSeats((prev) => prev - 1);
  //   } else {
  //     alert("No seats available!");
  //   }
  // };

  return (
    <div className="bus-card">
      <div className="bus-details">
        <div className="bus-titles">
          <p className="bus-company">{BusCompany}</p>
          <p className="bus-type">{BusType}</p>
        </div>
        <div className="travel-details">
          <div className="time">
            <Clock width={24} color="white" />
            <div className="time-container">
              <p className="time-description">Depature</p>
              <p className="ride-time">{DepartureTime} AM</p>
            </div>
          </div>
          <div className="time">
            <Clock width={24} color="white" />
            <div className="time-container">
              <p className="time-description">Arrival</p>
              <p className="ride-time">{ArrivalTime} AM</p>
            </div>
          </div>
          <div className="time">
            <Users width={24} color="white" />
            <div className="time-container">
              <p className="time-description">Available</p>
              <p className="ride-time">{Seats} seats</p>
            </div>
          </div>
        </div>
        <div className="utilities">
          <div className="wifi">
            <Wifi width={24} color="#47e159" />
            <p className="time-description">Free WIFI</p>
          </div>
          <div className="gps">
            <div className="wifi">
              <MapPin width={24} color="#232ec7" />
              <p className="time-description">GPS Tracking</p>
            </div>
          </div>
        </div>
      </div>
      <div className="confirmation-section">
        <Image
          src={BusImage}
          alt={""}
          width={250}
          height={250}
          className="BusImage"
        />
        <p className="amount">₦{Price}</p>
        <p className="time-description">per Seat</p>
        <BaseButton
          text="Select Seat"
          textStyle={{ color: "White" }}
          onClick={() =>
            onSelectSeat({
              BusCompany,
              BusType,
              DepartureTime,
              ArrivalTime,
              Price,
              Seats,
            })
          }
          disabled={isSoldOut}
          style={{
            backgroundColor: "#f79009",
            opacity: isSoldOut ? 0.7 : 1,
            cursor: "pointer",
            // width: "150px",
            // maxHeight: "40px",
            // border: "1px solid",
            // borderColor: "#D0D5DD",
          }}
        />
      </div>
    </div>
  );
};
