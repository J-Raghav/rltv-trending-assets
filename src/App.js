import "./App.css";
import TrendingAssetCard from "./components/TrendingAssetCard";

export const trendingAssets = [
  {
    id: 1,
    name: "Bitcoin",
    shorthand: "BTC",
    price: 31812.8,
    priceDeltaPercentage: 10,
    tvl: 60000,
    popularPairs: [2, 3],
    accentColor: 'from-yellow-500/10'
  },
  {
    id: 2,
    name: "Solana",
    shorthand: "SOL",
    price: 32.83,
    priceDeltaPercentage: -12.32,
    tvl: 60000,
    popularPairs: [1],
    accentColor: 'from-green-500/10'
  },
  {
    id: 3,
    name: "Ethereum",
    shorthand: "ETH",
    price: 1466.45,
    priceDeltaPercentage: -11.93,
    tvl: 60000,
    popularPairs: [1, 2],
    accentColor: 'from-white/10'
  },
  {
    id: 4,
    name: "Binance",
    shorthand: "BUSD",
    price: 1.00,
    priceDeltaPercentage: .26,
    tvl: 60000,
    popularPairs: [1, 3],
    accentColor: 'from-yellow-500/10'
  },
  {
    id: 5,
    name: "Shiba Inu",
    shorthand: "SHIB",
    price: .00000001948,
    priceDeltaPercentage: -8.1,
    tvl: 60000,
    popularPairs: [4],
    accentColor: 'from-orange-500/10'
  },
];

function App() {
  return (
    <div className="w-full mh-screen bg-[#14172b] text-white flex justify-center align-middle">
      <div className="w-5/6 my-32">
        <h1 className="font-bold text-base text-white/80 mb-16">Trending Assets</h1>
        <div className="grid gap-16 items-stretch grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {trendingAssets.map(
            ad => <TrendingAssetCard key={ad.id} assetDetails={ad}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
