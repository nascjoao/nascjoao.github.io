"use client";
import Image from "next/image";
import React from "react";
import { EasterBunny, MultipleBunnies } from "@/shared/assets";
import { Tooltip } from "react-tooltip";
import { useTranslations } from "next-intl";

export default function Bunnies() {
  const [showBunnies, setShowBunnies] = React.useState(false);
  const [ending, setEnding] = React.useState(false);
  const t = useTranslations();

  function setBunniesFree() {
    if (showBunnies) return;
    setEnding(false);
    setShowBunnies(true);
    setTimeout(() => {
      setEnding(true);
      setTimeout(() => {
        setShowBunnies(false);
      }, 50000);
    }, 3000);
  }

  return (
    <>
      {showBunnies && (
        <div className="absolute -z-10 overflow-hidden top-0 left-0 w-full h-80 -translate-y-full">
          <div
            className="h-80 w-[120%] bg-repeat bg-center bg-contain"
            style={{
              backgroundImage: `url(${MultipleBunnies.src})`,
              animation: ending ? "bunny-runs-out 50s forwards linear" : "none",
              maskImage: ending
                ? "linear-gradient(to right, black 80%, transparent 100%)"
                : "none",
              WebkitMaskImage: ending
                ? "linear-gradient(to right, black 80%, transparent 100%)"
                : "none",
              maskSize: ending ? "100% 100%" : "none",
              WebkitMaskSize: ending ? "100% 100%" : "none",
            }}
          />
        </div>
      )}
      <Tooltip id="bunny-tooltip" />
      <Image
        src={EasterBunny}
        alt="Easter bunny"
        width={100}
        height={100}
        onClick={setBunniesFree}
        data-tooltip-id="bunny-tooltip"
        data-tooltip-content={t("happy-easter")}
        data-tooltip-offset={-10}
        style={{
          imageRendering: "pixelated",
        }}
        className="cursor-pointer font-heading absolute top-0 left-1/2 -translate-x-1/2 -translate-y-9/12"
      />
    </>
  );
}
