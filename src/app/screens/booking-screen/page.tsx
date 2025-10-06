"use client";

import { useRouter, useSearchParams } from "next/navigation";
import "./page.css";
import { ArrowRight } from "lucide-react";
import { BusFilter } from "@/components/layouts/BusFilter";
import { BusCard } from "@/components/layouts/BusCard";
import { useState } from "react";
import { RouteConstant } from "@/utilities/constants/routeConstant";

const BookingSreen = () => {
  const searchParams = useSearchParams();

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  const router = useRouter();

  const [seats, setSeats] = useState(24);

  const handleSelectSeat = (bus: any) => {
    setSeats((prev) => (prev > 0 ? prev - 1 : 0));

    router.push(
      `${RouteConstant.screens.confirmScreen.path}?from=${from}&to=${to}&date=${date}` +
        `&company=${bus.BusCompany}&type=${bus.BusType}` +
        `&departure=${bus.DepartureTime}&arrival=${bus.ArrivalTime}` +
        `&price=${bus.Price}&seats=${bus.Seats}`
    );
  };

  return (
    <div className="booking-overall-container">
      <div className="results">
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <p className="destination">{from}</p>
          <ArrowRight size={16} color="white" />
          <p className="destination">{to}</p>
        </div>
        <p>{date}</p>
      </div>
      <div className="selection">
        <BusFilter origin={"filter"} />
        <BusCard
          BusCompany={"ABC Transport"}
          BusType={"Luxury"}
          DepartureTime={"6:00"}
          ArrivalTime={"10:00"}
          Price={"5000"}
          Seats={seats}
          onSelectSeat={handleSelectSeat}
        />
      </div>
    </div>
  );
};

export default BookingSreen;
