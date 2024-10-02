import {
  faChevronDown,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import { RegisterOptions, UseFormReturn } from "react-hook-form";

type props = {
  form: UseFormReturn<any, any>;
  dataList: any[];
  displayValue: string;
  itemValue: string;
  name: string;
  label?: string;
  rules?: RegisterOptions<any, string>;
  initialValue?: string;
};

const FComboBox = ({
  dataList,
  form,
  displayValue,
  itemValue,
  name,
  label,
  rules,
  initialValue,
}: props) => {
  const { register, setValue, watch } = form;

  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selected, setSelected] = useState<string>(initialValue || "");
  const comboBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCustomEvent = (event: CustomEvent) => {
      if (event.detail.name !== name) {
        setShowOptions(false);
      }
    };

    document.addEventListener(
      "combobox-opened",
      handleCustomEvent as EventListener
    );

    return () => {
      document.removeEventListener(
        "combobox-opened",
        handleCustomEvent as EventListener
      );
    };
  }, [name]);

  const handleShowOptions = () => {
    const newShowOptions = !showOptions;
    setShowOptions(newShowOptions);
    setInputValue("");

    if (newShowOptions) {
      const event = new CustomEvent("combobox-opened", { detail: { name } });
      document.dispatchEvent(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleShowOptions();
    }
  };

  useEffect(() => {
    register(name, rules);
  }, [name, register, rules]);

  useEffect(() => {
    setValue(name, selected);
  }, [selected, name, setValue]);

  useEffect(() => {
    const subscription = watch((value, { name: fieldName }) => {
      if (fieldName === name && value[name] !== selected) {
        setSelected(value[name] || null);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, name, selected]);

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

  const handleCleanValue = (e: React.MouseEvent) => {
    e.stopPropagation();
    setValue(name, null);
    setSelected("");
  };

  const renderNameValue = () => {
    return (
      dataList.find((x) => x[itemValue] === +selected)?.[displayValue] ?? ""
    );
  };

  return (
    <div className="w-full" ref={comboBoxRef}>
      <div className="relative w-full">
        <div
          className="flex bg-white w-full py-2 px-3 rounded-xl border-2 cursor-pointer"
          onClick={handleShowOptions}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="flex flex-col flex-1 ">
            <label
              htmlFor="inputSelect"
              className="text-gray-700 block text-xs cursor-pointer"
            >
              {label}
            </label>
            <div className="flex justify-between items-center text-sm text-gray-500">
              {selected === "" ? "Selecciona una opción" : renderNameValue()}
            </div>
          </div>
          <div className="flex items-center justify-end">
            {selected !== "" ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="transition-transform duration-20 text-gray-500"
                onClick={handleCleanValue}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`transition-transform duration-20 text-gray-500 ${
                  showOptions ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
        </div>
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
                    onClick={() => {
                      if (item[itemValue].toString() !== selected) {
                        setSelected(item[itemValue].toString());
                        handleShowOptions();
                      }
                    }}
                  >
                    {item[displayValue]}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FComboBox;
