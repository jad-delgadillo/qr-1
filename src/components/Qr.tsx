import React from "react";
import InputForm from "./InputForm";

export default function Qr() {
  return (
    <>
      <div className="flex w-screen max-w-5xl min-h-screen items-center justify-center m-auto">
        <div className="container mx-auto text-xl font-medium bg-gray-100 p-10 rounded">
          <div className="md:grid md:grid-cols-3">
            <InputForm />
            <h1>qrCode</h1>
          </div>
        </div>
      </div>
    </>
  );
}
