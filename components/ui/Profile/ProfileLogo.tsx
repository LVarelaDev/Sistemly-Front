import React from "react";

interface Props {
  lettersIcon: string;
}
const ProfileLogo = ({ lettersIcon }: Props) => {
  const tailwindColors = [
    "bg-red-200 text-red-800",
    "bg-green-200 text-green-800",
    "bg-blue-200 text-blue-800",
    "bg-yellow-200 text-yellow-800",
    "bg-purple-200 text-purple-800",
    "bg-pink-200 text-pink-800",
    "bg-indigo-200 text-indigo-800",
    "bg-teal-200 text-teal-800",
    "bg-orange-200 text-orange-800",
  ];

  const getRandomColor = (): string => {
    const randomIndex = Math.floor(Math.random() * tailwindColors.length);
    return tailwindColors[randomIndex];
  };
  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full p-1 border-2 ${getRandomColor()}`}
    >
      {lettersIcon}
    </div>
  );
};

export default ProfileLogo;
