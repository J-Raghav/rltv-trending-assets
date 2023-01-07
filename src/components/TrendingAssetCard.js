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
        className={`${className} font-mono leading-lg py-2 w-5/6 leading mx-auto bg-[#14172b] border-t border-[#35384c] rounded-full`}
      >
        {children}
      </div>
      <p className="font-semibold text-mono text-[.7rem] text-[#6a72a2]/75">
        {title}
      </p>
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

export default function TrendingAssetCard(props) {
  const { assetDetails } = props;
  const deltaStyles =
    assetDetails.priceDeltaPercentage > 0
      ? { sign: "+", className: "text-[#02e897]" }
      : { sign: "", className: "text-[#e74749]" };
  const gradientClass = `bg-gradient-to-b from-[#35384c] to-[#1b1e33]`;
  const currencyFormatOptions =  {
    maximumFractionDigits: 12, 
    style: 'currency',
    currency: 'USD'
  } 
  return (
    <div className="relative mt-12 pt-12 bg-[#1b1e33] border-t border-[#35384c] p-4 text-center rounded-lg">
      <div className="absolute w-full -top-16 left-0">
        <div className="mx-auto w-28 h-28 border-b p-4 border-[#35384c] bg-[#14172b] rounded-full">
          <div
            className={`mx-auto w-20 h-20 p-5 border-t border-[#35384c] rounded-full ${gradientClass}`}
          >
            <img
              src={iconMap[assetDetails.id]}
              className="w-10 h-10 rounded-full"
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
