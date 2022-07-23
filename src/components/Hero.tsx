import axios from "axios";
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

  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      Authorization: "Bearer 4b0b3e90-0a46-11ed-bbd3-65ce00374c15",
    },
  };
  const bodyParameters = {
    colorDark: inputValue.color,
    qrCategory: "url",
    text: inputValue.url,
  };

  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://qrtiger.com/api/qr/static",
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    } catch (err) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  // 4b0b3e90-0a46-11ed-bbd3-65ce00374c15
  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error,
  };

  return (
    <>
      <div className="flex w-screen max-w-5xl min-h-screen items-center justify-center m-auto">
        <div className="container mx-auto text-xl font-medium   bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-800 p-10 rounded-2xl">
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
