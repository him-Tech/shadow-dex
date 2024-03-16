export default function MarketPrice() {
  return (
    <div className="bg-black_100 rounded-[6px] h-full p-[15px]">
      <div className="border-b border-b-black_600 mb-[10px] pb-[10px]">
        <div className="flex flex-wrap mx-[-7px]">
          <div className="w-3/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-yellow">Mark Price</p>
          </div>
          <div className="w-1/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-white text-right">US$3.914.60</p>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-7px]">
          <div className="w-3/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-black_600">Open Interest</p>
          </div>
          <div className="w-1/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-white text-right">US$1.74</p>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-7px]">
          <div className="w-3/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-black_600">24h volume</p>
          </div>
          <div className="w-1/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-white text-right">1x</p>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-7px]">
          <div className="w-3/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-black_600">Funding rate</p>
          </div>
          <div className="w-1/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-white text-right">1x</p>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-7px]">
          <div className="w-3/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-black_600">Minimum position size:</p>
          </div>
          <div className="w-1/4 px-[7px] mb-[5px]">
            <p className="text-[10px] leading-[15px] text-white text-right">100.04%</p>
          </div>
        </div>
        <div className="flex flex-wrap mx-[-7px]">
          <div className="w-3/4 px-[7px]">
            <p className="text-[10px] leading-[15px] text-black_600">Maximum position size</p>
          </div>
          <div className="w-1/4 px-[7px]">
            <p className="text-[10px] leading-[15px] text-white text-right">3%</p>
          </div>
        </div>
      </div>
    </div>
  )
}