import Head from "next/head";
import React from "react";

export default function Container(props: any) {
  const { children } = props;
  const meta = {
    title: "QR Generator",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="flex text-white w-screen min-h-screen items-center justify-center m-auto bg-black">
        {children}
      </div>
    </>
  );
}
