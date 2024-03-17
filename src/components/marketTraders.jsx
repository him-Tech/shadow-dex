import { MarketTradersList } from "@/shared/Helper";

export default function MarketTraders() {
  const marketTradersAPI = MarketTradersList;
  return (
    <div className="bg-black_100 rounded-[6px] h-full">
      <p className="text-[10px] leading-[15px] text-center font-semibold text-white p-[10px] w-full">Market Trades</p>
      <div className="mt-[5px]">
        <table table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap">Price (USD)</th>
              <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap">Size (BTC)</th>
              <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap">Time</th>
            </tr>
          </thead>
          <tbody>
            { marketTradersAPI.map((marketTraders, index) => (
                <tr key={index}>
                  <td className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-success leading-[12px] font-normal text-center p-[4px] ">{marketTraders.price}</td>
                  <td className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-white leading-[12px] font-normal text-center p-[4px]">{marketTraders.size}</td>
                  <td className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-white leading-[12px] font-normal text-center p-[4px] ">{marketTraders.time}</td>
                </tr>
              ))
            }
          </tbody>
        </table>    
      </div>
    </div>
  )
}
