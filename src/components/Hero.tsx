import React, { createContext, useState } from "react";
import InputForm from "./InputForm";
import QrCode from "./QrCode";

// Create Context API
export const InputContext = createContext("any");

export default function Hero() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });
  const value = {
    inputValue,
    setInputValue,
  };
  console.log(inputValue);

  return (
    <>
      <div className="flex w-screen max-w-5xl min-h-screen items-center justify-center m-auto">
        <div className="container mx-auto text-xl font-medium bg-gray-100 p-10 rounded">
          <div className="md:grid md:grid-cols-3">
            <InputContext.Provider value={value}>
              <InputForm />
              <QrCode />
            </InputContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}
