import Image from "next/image";
import { useContext } from "react";
import { InputContext } from "./Hero";

const QrCode = () => {
  const { response, loading, error } = useContext(InputContext);

  if (loading) {
    return (
      <div className="animate-pulse flex flex-col items-center justify-center px-10 gap-3">
        <div className="h-32 w-full bg-gray-300"></div>
        <div className="h-8 w-full bg-gray-300"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className=" text-gray-500 flex items-center">
        Sorry, something went wrong :(
      </div>
    );
  }
  return (
    <div className="bg-gray-100 rounded-r-medium flex flex-col items-center justify-center">
      {response ? (
        <div className="p-5 rounded-xl shadow-gray-500 w-[250px] h-[250px] bg-gray-300 shadow-lg">
          <img src={response} alt={"QR Code Image"} className="rounded-xl" />
        </div>
      ) : (
        <div className="text-gray-500 border rounded p-3">
          Your Qr-Code will show here.
        </div>
      )}
      <button className="mt-7 p-2 px-4 bg-orange-500 hover:bg-orange-600 transition-all text-white rounded">
        Download
      </button>
    </div>
  );
};

export default QrCode;
