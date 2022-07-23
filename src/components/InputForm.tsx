import React, { useContext } from "react";
import { InputContext } from "./Hero";
import InputColor from "./InputColor";
import InputField from "./InputField";

const InputForm = () => {
  const { getQrCode } = useContext(InputContext);
  const handleSubmit = () => getQrCode();
  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button
        onClick={handleSubmit}
        className="bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded mt-4 hover:bg-blue-500 disabled:bg-gray-300 transition-all"
      >
        Generate QR-Code
      </button>
    </div>
  );
};

export default InputForm;
