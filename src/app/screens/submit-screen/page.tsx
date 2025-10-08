"use client";

import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CircleCheckBig,
  Clock,
  CreditCard,
  InfoIcon,
  MapPin,
  MessageSquare,
  Upload,
} from "lucide-react";
import "./page.css";
import { PaymentInstructionCard } from "@/components/layouts/PaymentInstructionCard";
import { BaseButton, BaseDatePicker, BaseInput } from "qucoon-components";
import { useState } from "react";

export default function submitPage() {
  const [receiptImage, setReceiptImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
    const [referenceNumber, setReferenceNumber] = useState("");


  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setReceiptImage(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert(
        "Receipt submitted successfully! We will verify your payment within 2-4 hours and send your e-ticket via WhatsApp."
      );
      // In real app, navigate to success page or ticket page
    } catch (error) {
      alert("Error submitting receipt. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overall-submit-container">
      <div className="submit-container">
        <div className="submit-header">
          <p className="header-main">Submit Your Receipt</p>
          <p className="header-sub">
            To complete your booking, please submit your payment receipt. You
            can either upload a picture of the receipt or fill out the form
            below with your payment details.
          </p>
        </div>
        <div className="background">
          <div className="instructions">
            <PaymentInstructionCard
              stepNumber={1}
              title="Payment Verification Process"
              subtitle="Our team will verify your payment within 2-4 hours during business hours (8 AM - 6 PM). You will receive your e-ticket via WhatsApp once verified."
              icon={<InfoIcon width={24} color="white" />}
              backgroundColor="rgba(127, 29, 29, 0.2)"
            />
          </div>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <div
              style={{
                border: "2px dashed #9CA3AF", // manually apply dashed border
                borderRadius: "12px",
                width: "100%",
                padding: "2rem",
                textAlign: "center",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#F87171")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#9CA3AF")
              }
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <Upload className="h-12 w-12 text-gray-400" />
                <h3 className="text-lg font-semibold text-white-900">
                  Upload Receipt
                </h3>
                <p className="text-sm text-gray-600">
                  Drag and drop or browse to upload a clear picture of your
                  receipt.
                  <br />
                  JPG, PNG up to 5MB.
                </p>

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="receipt-upload"
                />
                <label
                  htmlFor="receipt-upload"
                  // Inline style ensures padding shows even if Tailwind isn't applied
                  style={{
                    display: "inline-block",
                    padding: "10px 28px", // proper padding
                    backgroundColor: "#ef4444", // red-500
                    color: "#ffffff",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontFamily: "inherit",
                    textAlign: "center",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                    transition:
                      "background-color 180ms ease, transform 120ms ease",
                    userSelect: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#dc2626")
                  } // red-600
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#ef4444")
                  }
                >
                  Browse Files
                </label>

                {receiptImage && (
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <CreditCard className="h-4 w-4 text-green-500" />
                    <p className="text-sm text-green-600 font-medium">
                      Selected: {receiptImage.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p>Or Enter Payment Details</p>
            <BaseInput
              // type="email"
              placeholder="e.g. FirstBank"
              label="Bank Name *"
              labelStyle={{ color: "white", fontFamily: "Poppins" }}
              style={{
                width: "100%",
                fontFamily: "Poppins",
                backgroundColor: "grey",
              }}
            />
            <BaseInput
              // type="email"
              placeholder="Enter Account Number"
              label="Account Number *"
              labelStyle={{ color: "white", fontFamily: "Poppins" }}
              style={{
                width: "100%",
                fontFamily: "Poppins",
                backgroundColor: "grey",
              }}
            />
            <BaseInput
              // type="email"
              placeholder="e.g. 5000"
              label="Amount Paid *"
              labelStyle={{ color: "white", fontFamily: "Poppins" }}
              style={{
                width: "100%",
                fontFamily: "Poppins",
                backgroundColor: "grey",
              }}
            />
            <BaseDatePicker
              label="Transaction Date *"
              labelStyle={{ color: "white", fontFamily: "Poppins" }}
              // selected={singleDate}
              // onSelect={setSingleDate}
              // value={departureDate}
              // onChange={(date) => setDepartureDate(date)}
              style={{
                // width: "400px",
                width: "100%",
                paddingLeft: "32px",
                fontFamily: "Poppins",
                background: "none",
              }}
            />
            <BaseInput
              // type="email"
              placeholder="Enter reference number if available"
              label="Reference Number (Optional)"
              labelStyle={{ color: "white", fontFamily: "Poppins" }}
              style={{
                width: "100%",
                fontFamily: "Poppins",
                backgroundColor: "grey",
              }}
            />
            <div className="follow-up">
              <p style={{ color: "black" }}>What happens next?</p>
              <div className="steps">
                <p className="steps-description">
                  1. Our team will verify your payment details
                </p>
                <p className="steps-description">
                  2. You'll receive a confirmation via WhatsApp
                </p>
                <p className="steps-description">
                  3. Your e-ticket will be sent with QR code
                </p>
                <p className="steps-description">
                  4. Present the QR code at the boarding gate
                </p>
              </div>
            </div>
            <div className="buttons-div">
              <BaseButton
                text="Submit Receipt"
                // onClick={() => router.push(RouteConstant.auth.login.path)}
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
          </form>
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
