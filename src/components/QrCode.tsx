import Image from "next/image";

const QrCode = () => {
  return (
    <div className="bg-gray-100 rounded-r-medium flex flex-col items-center justify-center">
      <div className="p-5 rounded-xl shadow-gray-500 bg-gray-300 shadow-lg">
        <Image
          src={"https://qrtiger.com/temp/1658541098944.png"}
          alt={"QR Code Image"}
          width={500}
          height={500}
          className="rounded-xl"
        />
      </div>
      <button className="mt-7 p-2 px-4 bg-orange-500 hover:bg-orange-600 transition-all text-white rounded">
        Download
      </button>
    </div>
  );
};

export default QrCode;
