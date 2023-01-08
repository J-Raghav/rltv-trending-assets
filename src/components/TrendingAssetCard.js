import React from "react";
import bitcoin1200 from "./icons/bitcoin-1200.png";
import solana512 from "./icons/solana-512.png";
import ethereum800 from "./icons/ethereum-800.png";
import shibainu512 from "./icons/shibainu-512.png";
import binance2000 from "./icons/binance-2000.png";

import { trendingAssets } from "../App";

export function PillWithTitle(props) {
  const { children, className, title } = props;

  return (
    <div>
      <div
        className={`${className} font-mono leading-lg py-2 w-[90%] leading mx-auto bg-[#14172b] border-t border-[#35384c] rounded-full`}
      >
        {children}
      </div>
      <p className="font-semibold text-mono text-[.7rem] text-[#6a72a2]/75">
        {title}
      </p>
    </div>
  );
}

export default function TrendingAssetCard(props) {
  const { assetDetails } = props;
  const deltaStyles =
    assetDetails.priceDeltaPercentage > 0
      ? { sign: "+", className: "text-[#02e897]" }
      : { sign: "", className: "text-[#e74749]" };

  const currencyFormatOptions =  {
    maximumFractionDigits: 12, 
    style: 'currency',
    currency: 'USD'
  } 
  const iconBackground = `bg-gradient-to-t ${assetDetails.accentColor} via-[#1b1e33]`
  
  return (
    <div className={`relative ${leftCurve} ${rightCurve} mt-12 pt-16 bg-[#1b1e33] border-t border-[#35384c] p-4 text-center rounded-2xl`}>
      <div className="absolute w-full -top-16 left-0">
        <div className="mx-auto w-32 h-32 border-b p-4 border-[#35384c] bg-[#14172b] rounded-full">
          <div className={`mx-auto w-24 h-24 p-6 border-t border-[#35384c] rounded-full ${iconBackground}`}>
            <img
              src={iconMap[assetDetails.id]}
              className="w-12 h-12 rounded-full"
              alt={assetDetails.shorthand}
            />
          </div>
        </div>
      </div>
      <h2 className="font-bold text-xs text-[#6a72a2] my-2">{`${assetDetails.name} (${assetDetails.shorthand})`}</h2>
      <PillWithTitle title="Price" className="mt-3">
        <span className="text-base">
          {assetDetails.price.toLocaleString("en-in", currencyFormatOptions)}
        </span>
        <span className={`text-sm ${deltaStyles.className}`}>
          {`
             ${deltaStyles.sign}${assetDetails.priceDeltaPercentage}%`}
        </span>
      </PillWithTitle>
      <PillWithTitle title="TVL" className="mt-3">
        <span>{assetDetails.tvl.toLocaleString("en-in", currencyFormatOptions)}</span>
      </PillWithTitle>
      <PillWithTitle title="Popular Pairs" className="mt-6">
        {assetDetails.popularPairs.map((pp) => {
          const ad = trendingAssets.find((x) => x.id === pp);
          return (
            <img
              src={iconMap[ad.id]}
              key={pp}
              className="w-6 h-6 inline-block mx-1 rounded-full"
              alt={ad.shorthand}
            />
          );
        })}
      </PillWithTitle>
    </div>
  );
}

const iconMap = {
  1: bitcoin1200,
  2: solana512,
  3: ethereum800,
  4: binance2000,
  5: shibainu512
};

const leftCurve =  [
  "content-['']",
  "block",
  "h-4",
  "w-8",
  "absolute",
  "-top-px",
  "left-1/2",
  "-translate-x-24",
  "bg-[#1b1e33]",
  "border-t",
  "border-[#35384c]",
  "rounded-tr-2xl",
  "drop-shadow-[.5rem_-.25rem_0_#14172b]"
]
  .map(i => `before:${i}`)
  .join(' ');

const rightCurve = [
  "content-['']",
  "block",
  "h-4",
  "w-8",
  "absolute",
  "-top-px",
  "left-1/2",
  "translate-x-16",
  "bg-[#1b1e33]",
  "border-t",
  "border-[#35384c]",
  "drop-shadow-[-.5rem_-.25rem_0_#14172b]",
  "rounded-tl-2xl"
]
  .map(i => `after:${i}`)
  .join(' ');