import React from "react";

interface Props {
  title: string;
  value: string | number | boolean;
  direction?: "flex-col" | "flex-row";
  sizeTitle?: "text-xs" | "text-sm" | "text-base" | "text-lg";
  sizeValue?: "text-xs" | "text-sm" | "text-base" | "text-lg";
  gap?: "gap-1" | "gap-2" | "gap-3";
}

const InformationSection = ({
  title,
  value,
  direction = "flex-row",
  gap = "gap-3",
  sizeValue = "text-lg",
  sizeTitle = "text-base",
}: Props) => {
  return (
    <div className={`flex ${direction} ${gap} justify-start items-start`}>
      <p className={`${sizeTitle}`}>{title}:</p>
      <p className={`${sizeValue} font-bold`}>{value}</p>
    </div>
  );
};

export default InformationSection;
