import { MarketTradersList } from "@/shared/Helper";
import SimpleBar from "simplebar-react";

export default function MarketTraders() {
  const marketTradersAPI = MarketTradersList;
  return (
    <div className="bg-black_100 rounded-[6px]">
      <p className="text-[10px] leading-[15px] text-center font-semibold text-white p-[10px] w-full">Market Trades</p>
      <SimpleBar forceVisible={true} autoHide={false} className="h-[290px] overflow-auto">
        <table table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="sticky top-0 bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[0] p-[8px] whitespace-nowrap">Price (USD)</th>
              <th className="sticky top-0 bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[0] p-[8px] whitespace-nowrap">Size (BTC)</th>
              <th className="sticky top-0 bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[0] p-[8px] whitespace-nowrap">Time</th>
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
      </SimpleBar>
    </div>
  )
}
