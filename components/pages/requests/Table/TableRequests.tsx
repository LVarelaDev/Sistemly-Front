import { GeneralDataRequestDto } from "@/models/Requests/Requests";
import { formatDate } from "@/utils/helpers/formatDate";
import Link from "next/link";
import React from "react";

interface Props {
  data: GeneralDataRequestDto[];
}
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

const renderTextPriority = (
  priority: string
): { text: string; color: string } => {
  switch (priority) {
    case "High":
      return { text: "Urgente", color: "bg-red-500 text-white" };
    case "Medium":
      return { text: "Medio", color: "bg-blue-500 text-white" };
    case "Low":
      return { text: "Baja", color: "bg-gray-400 text-black" };
    default:
      break;
  }
};

const TableRequests = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-3 p-4 bg-white rounded-xl border">
      <h1>Listo de requerimientos</h1>
      {data &&
        data.map((item) => (
          <div key={item.id} className="flex gap-2 items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full p-1 border-2 ${getRandomColor()}`}
            >
              {item.letterIcon}
            </div>
            <div className="flex flex-1 rounded-lg p-3 gap-10 border-2">
              <div className="flex flex-col">
                <div className="flex gap-5">
                  <p className="text-sm"> {item.userCreated}</p>
                  <p className="text-sm">
                    {" "}
                    Enviado: {formatDate(item.createDate)}
                  </p>
                </div>
                <Link
                  href={`requests/${item.id}`}
                  className="font-bold hover:text-blue-600 cursor-pointer"
                >
                  {item.name}
                </Link>
              </div>
              <div className="flex flex-col justify-center">
                <div
                  className={`rounded text-center px-4 ${renderTextPriority(item.priority).color}  font-bold text-sm`}
                >
                  {renderTextPriority(item.priority).text}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TableRequests;
