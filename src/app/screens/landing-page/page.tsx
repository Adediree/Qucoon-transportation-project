"use client";
import "./page.css";
import { BaseButton, BaseDatePicker, BaseInput } from "qucoon-components";
import { Star, Map, MessageCircleMore, ScanQrCode } from "lucide-react";
import { DestinationCard } from "@/components/layouts/DestinationCard";
import { RouteCard } from "@/components/layouts/RouteCard";

export default function LandingPage() {
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
          <div style={{ width: "250px" }}>
            <BaseInput
              label="Where from?"
              name={"name"}
              inputProps={{ placeholder: "Origin" }}
              labelStyle={{ color: "white" }}
              style={{
                fontFamily: "Poppins",
                backgroundColor: "none",
                background: "none",
                // width: "250px",
                // border: "1px solid red",
              }}
            />
          </div>
          <div style={{ width: "250px" }}>
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
          </div>
          <BaseDatePicker
            label="Departure Date"
            labelStyle={{ color: "white" }}
            style={{ width: "400px", paddingLeft: "32px" }}
          />
          <BaseButton
            text="Search"
            textStyle={{ color: "black" }}
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
