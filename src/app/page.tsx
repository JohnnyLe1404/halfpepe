"use client";
import React, { useState } from "react";
import { Schoolbell, Chivo } from "next/font/google";

const schoolbell = Schoolbell({
  subsets: ["latin"],
  weight: "400",
});

const chivo = Chivo({
  subsets: ["latin"],
  weight: "400",
});

const CopyTextComponent = ({
  textColor = "text-black",
  borderColor = "border-black",
}) => {
  const [text, setText] = useState(
    "YcUzxsUL4wTETS1qWe5HsgCHNaQz9wddcoL2L62xn7k"
  );
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <h1
      className={`p-4 text-2xl font-semibold ${textColor} bg-[#4b9143] border ${borderColor} rounded-full cursor-pointer`}
      onClick={handleClick}
    >
      {copied ? "Copied" : text}
    </h1>
  );
};

export default function Home() {
  return (
    <>
      {/* Part 1 */}
      <div
        className={`relative bg-cover bg-center min-h-[700px] ${chivo.className} min-w-[1233px] flex items-center justify-center overflow-hidden`}
        style={{
          backgroundImage:
            "url(https://halfofpepe.com/wp-content/uploads/2024/09/HoP6.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 text-center">
          <h1
            className={`text-[#4b9143] text-9xl ${schoolbell.className} text-shadow antialiased mb-6 shake-animation`}
          >
            Half Of Pepe
          </h1>
          <CopyTextComponent />

          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4b9143] font-semibold w-[162px] border border-black rounded-2xl p-4 text-black text-2xl block text-center hover:rotate-3 hover:scale-110"
            >
              Twitter
            </a>
            <a
              href="https://t.me/your-telegram-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4b9143] font-semibold w-[162px] border border-black rounded-2xl p-4 text-black text-2xl block text-center hover:rotate-3 hover:scale-110"
            >
              Telegram
            </a>
            <a
              href="https://dexscreener.com/your-dexscreener-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4b9143] font-semibold w-[162px] border border-black rounded-2xl p-4 text-black text-2xl block text-center hover:rotate-3 hover:scale-110"
            >
              Dexscreen
            </a>
          </div>
        </div>
      </div>

      {/* Part 2 */}
      <div className="flex flex-row mx-auto my-3 overflow-hidden bg-[#4b9143]">
        <div className="flex flex-row space-x-4 animate-marquee">
          <img
            src="/image/loop.png"
            alt="Marquee"
            className="h-auto w-[700px]"
          />
          <img
            src="/image/loop.png"
            alt="Marquee"
            className="h-auto w-[700px]"
          />
          <img
            src="/image/loop.png"
            alt="Marquee"
            className="h-auto w-[700px]"
          />
        </div>
      </div>

      {/* Part 3 */}
      <div
        className={`relative flex flex-col ${chivo.className} mx-auto my-3 overflow-hidden bg-[#4b9143]`}
      >
        <div
          className="relative items-start min-h-[2400px] w-full flex flex-col overflow-hidden"
          style={{
            backgroundImage:
              'url("https://halfofpepe.com/wp-content/uploads/2024/09/HoP2.png"), url("https://halfofpepe.com/wp-content/uploads/2024/09/HoP1.png")',
            backgroundPosition: "top right, center left",
            backgroundSize: "auto 25%, auto 25%",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-[#4b9143] opacity-85"></div>

          <div className="relative z-10 flex flex-row items-center mt-24 px-72">
            {/* Phần hình ảnh */}
            <img
              src="https://halfofpepe.com/wp-content/uploads/2024/09/HoP3-768x1082.png"
              alt=""
              className=" h-auto w-[400px] shake-animation2"
            />

            {/* Phần văn bản */}
            <div className="flex flex-col items-center justify-center mx-3 text-2xl font-bold text-black">
              <p
                className={` text-8xl mb-5 font-extrabold ${schoolbell.className}`}
              >
                Half of pepe - $pe
              </p>
              <p className="mb-5 text-center ">
                Did you know that $PE - Half of $PEPE means
                <br />
                half the market cap of the whole Pepe?🐸
              </p>
              <p className="mb-5 text-center ">
                We are new and OG Meta on Solana Chain!
              </p>
              <p className="mb-5 text-center ">
                We destroy jeets like whole #PEPE did it and
                <br />
                nothing is going to stop us too!
              </p>
              <div className="flex justify-between space-x-4 row">
                <a
                  href="https://t.me/your-telegram-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#307428] font-semibold w-[162px] border border-black rounded-2xl p-4 text-black text-2xl block text-center hover:rotate-3 hover:scale-110"
                >
                  Dextool
                </a>
                <a
                  href="https://t.me/your-telegram-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#307428] font-semibold w-[162px] border border-black rounded-2xl p-4 text-black text-2xl block text-center hover:rotate-3 hover:scale-110"
                >
                  Raydium
                </a>
              </div>
            </div>
          </div>

          {/* Phần văn bản 2 */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-auto my-10 text-center text-black mt-44">
            <h2
              className={` text-8xl mb-5 font-extrabold ${schoolbell.className}`}
            >
              How to buy $pe
            </h2>

            <div className="mb-5">
              <p className="text-3xl font-bold">01. CREATE WALLET</p>
              <p className="font-bold">
                Download Phantom or your wallet of choice from the app store or
                Google Play for free. Desktop users,
                <br /> download the Google Chrome extension by going to Phantom.
              </p>
            </div>

            <div className="mb-5">
              <p className="text-3xl font-bold">02. GET SOME SOL</p>
              <p className="font-bold">
                Have SOL in your wallet to switch to $PE. If you don’t have any
                SOL, you can buy directly on Phantom,
                <br /> transfer from another wallet, or buy on another exchange
                and send it to your wallet.
              </p>
            </div>

            <div className="mb-5">
              <p className="text-3xl font-bold">03. GO TO JUPITER</p>
              <p className="font-bold">
                Connect to Jupiter. Connect your wallet in Chrome. Paste the $PE
                token address, select $PE, and confirm.
                <br /> When Phantom prompts you for a wallet signature, sign.
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">04. SWAP FOR $PE</p>
              <p className="font-bold">
                Switch SOL for $PE. We have Zero taxes so you don’t need to
                worry about buying with a specific slippage.
              </p>
            </div>
          </div>

          {/* chart */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full my-10 mt-20 text-center text-black">
            <p
              className={`text-8xl mb-5 font-extrabold ${schoolbell.className}`}
            >
              Live Chart
            </p>

            <div
              className="w-[1060px] h-[700px]"
              id="dexscreener-embed"
              style={{ position: "relative", paddingBottom: 0 }}
            >
              <iframe
                src="https://dexscreener.com/solana/99L6SRHEZUhjzVbBu9CmsyE3TPfkg8AbRQvrkBCUkoV7?embed=1&theme=dark&trades=0&info=0"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  border: 0,
                }}
                title="Dexscreener Chart"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Part 4 */}
      <div className="flex flex-row mx-auto my-3 overflow-hidden bg-[#4b9143]">
        <div className="flex flex-row space-x-4 animate-marquee">
          <img
            src="/image/loop.png"
            alt="Marquee"
            className="h-auto w-[700px]"
          />
          <img
            src="/image/loop.png"
            alt="Marquee"
            className="h-auto w-[700px]"
          />
          <img
            src="/image/loop.png"
            alt="Marquee"
            className="h-auto w-[700px]"
          />
        </div>
      </div>

      {/* Part 5 */}
      <div
        className={`relative bg-cover bg-center min-h-[700px] ${chivo.className} min-w-[1233px] flex items-center justify-center overflow-hidden`}
        style={{
          backgroundImage:
            "url(https://halfofpepe.com/wp-content/uploads/2024/09/HoP6.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 text-center">
          <div className="relative z-10 flex flex-row items-center mb-10 px-72">
            <img
              src="https://halfofpepe.com/wp-content/uploads/2024/09/HoP4-1024x479.png"
              alt=""
              className=" h-auto w-[200px]"
            />
          </div>
          <h1
            className={` text-6xl ${schoolbell.className} font-extrabold antialiased mb-4 text-white`}
          >
            Half Of Pepe - $pe
          </h1>
          <h1 className={`text-3xl antialiased mb-6 text-white`}>
            See you at half MarketCap of PEPE We send it to Halfalla!
          </h1>
          <CopyTextComponent
            textColor="text-white"
            borderColor="border-white"
          />
        </div>
      </div>

      {/* Part 6 */}
      <div
        className={`flex flex-row justify-center mx-auto my-3 items-center bg-[#4b9143] ${chivo.className}`}
      >
        <p className="px-4 py-4 font-semibold text-center text-black">
          Copyright © 2024 Half of PEPE | Powered by Half of PEPE
        </p>
      </div>
    </>
  );
}
