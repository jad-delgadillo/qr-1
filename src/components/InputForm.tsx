import React, { useContext } from "react";
import { InputContext } from "./Hero";
import InputColor from "./InputColor";
import InputField from "./InputField";

const InputForm = () => {
  const { getQrCode, inputValue } = useContext(InputContext);
  const handleSubmit = () => getQrCode();
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />

      <button
        disabled={!inputValue.url}
        onClick={handleSubmit}
        className="relative rounded max-w-xs px-5 py-2.5 overflow-hidden group bg-green-500 disabled:bg-gray-300 hover:disabled:bg-gray-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 hover:disabled:bg-gray-300 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative hover:disabled:bg-gray-300">
          Generate QR-Code
        </span>
      </button>
    </div>
  );
};

export default InputForm;
