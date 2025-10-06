import React from "react";
import "./PaymentInstructionCard.css";

interface PaymentInstructionCardProps {
  stepNumber: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode; // 👈 icon passed as a prop
  backgroundColor?: string; // optional background
}

export const PaymentInstructionCard: React.FC<PaymentInstructionCardProps> = ({
  stepNumber,
  title,
  subtitle,
  icon,
  backgroundColor,
}) => {
  return (
    <div
      className="payment"
      style={{
        ...(backgroundColor ? { backgroundColor } : {}),
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      {icon}
      <div className="payment-container">
        <p className="payment-description">
          {stepNumber}. {title}
        </p>
        <p className="payment-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};
