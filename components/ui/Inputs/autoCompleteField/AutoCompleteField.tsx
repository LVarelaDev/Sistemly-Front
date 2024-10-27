import {
  faChevronDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import { RegisterOptions, UseFormReturn } from "react-hook-form";

type Props = {
  form: UseFormReturn<any, any>;
  dataList: any[];
  displayValue: string;
  itemValue: string;
  name: string;
  label?: string;
  rules?: RegisterOptions<any, string>;
  initialValue?: string[];
  displayEmail: string;
  displayIcon: string;
};

const AutoCompleteField = ({
  dataList,
  form,
  displayValue,
  itemValue,
  name,
  label,
  rules,
  initialValue = [],
  displayEmail,
  displayIcon,
}: Props) => {
  const { register, setValue, watch } = form;

  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>(initialValue);
  const comboBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    register(name, rules);
  }, [name, register, rules]);

  useEffect(() => {
    setValue(name, selectedItems);
  }, [selectedItems, name, setValue]);

  useEffect(() => {
    const subscription = watch((value, { name: fieldName }) => {
      if (fieldName === name && value[name] !== selectedItems) {
        setSelectedItems(value[name] || []);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, name, selectedItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        comboBoxRef.current &&
        !comboBoxRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShowOptions = () => {
    setShowOptions(!showOptions);
    setInputValue("");
  };

  const handleSelectItem = (item: any) => {
    const itemId = item[itemValue].toString();
    if (!selectedItems.includes(itemId)) {
      setSelectedItems([...selectedItems, itemId]);
    }
    setShowOptions(false);
  };

  const handleRemoveItem = (itemId: string) => {
    setSelectedItems(selectedItems.filter((id) => id !== itemId));
  };

  const renderNameValues = () => {
    return selectedItems
      .map(
        (id) =>
          dataList.find((item) => item[itemValue] === +id)?.[displayValue] ?? ""
      )
      .join(", ");
  };

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
    <div className="w-full" ref={comboBoxRef}>
      <div className="relative w-full">
        <div
          className="flex flex-wrap bg-white w-full py-2 px-3 rounded-xl border-2 cursor-pointer"
          onClick={handleShowOptions}
          role="button"
        >
          <label className="text-gray-700 block text-xs w-full">{label}</label>

          {/* Display selected items as chips */}
          <div className="flex gap-2 flex-wrap pt-2">
            {selectedItems.length > 0 ? (
              selectedItems.map((id) => {
                const selectedItem = dataList.find(
                  (item) => item[itemValue] === +id
                );
                return (
                  <div
                    key={id}
                    className="flex items-center bg-gray-200 text-gray-800 rounded-full px-3 py-1"
                  >
                    {selectedItem?.[displayValue]}{" "}
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="ml-2 cursor-pointer"
                      onClick={() => handleRemoveItem(id)}
                    />
                  </div>
                );
              })
            ) : (
              <span className="text-sm text-gray-500">
                Selecciona una opción
              </span>
            )}
          </div>

          {/* Chevron to indicate dropdown */}
          <div className="flex items-center justify-end ml-auto">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition-transform duration-20 text-gray-500 ${
                showOptions ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>

        {/* Options dropdown */}
        {showOptions && dataList && (
          <ul className="absolute z-[9999] px-1 bg-white border rounded-xl mt-1 w-full max-h-60 overflow-y-auto custom-scroll shadow-lg">
            <div className="flex gap-2 p-2 items-center border-b">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              <input
                type="text"
                className="outline-none w-full"
                placeholder={label}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            {dataList
              .filter((item) =>
                item[displayValue]
                  ?.toLowerCase()
                  .startsWith(inputValue?.toLowerCase() ?? "")
              )
              .map((item) => (
                <li
                  key={item[itemValue]}
                  className="p-2 hover:bg-gray-300 transition-all duration-300 ease-out rounded-2xl"
                >
                  <button
                    className="w-full text-left text-sm"
                    onClick={() => handleSelectItem(item)}
                  >
                    <div className="flex gap-3 p-1 items-center">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full p-1 border-2 ${getRandomColor()}`}
                      >
                        {item[displayIcon]}
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-bold text-gray-700">
                          {item[displayValue]}{" "}
                        </p>
                        <p className="text-xs text-gray-600">
                          {item[displayEmail]}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutoCompleteField;
