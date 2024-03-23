import { MarketTraderTableList } from "@/shared/Helper";
import SimpleBar from "simplebar-react";

export default function TableTabs() {
  const tableTabsAPI = MarketTraderTableList;
  return (
    <SimpleBar style={{ height: 290 }} forceVisible={true} autoHide={false}>
      <table table className="table-auto border-collapse w-full min-w-[830px]">
        <thead className="sticky top-[-2px] z-[1]">
          <tr>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap text-left"><button type="button">Market</button></th>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap text-left"><button type="button">Side</button></th>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap text-right"><button type="button">Position Size</button></th>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap text-right"><button type="button">Notional Size</button></th>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap text-right"><button type="button">Est. liquidation price</button></th>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap text-right"><button type="button">Mark price</button></th>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap text-right"><button type="button">Mark price</button></th>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap text-right"><button type="button">Avg open price</button></th>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap text-right"><button type="button">Break-even price</button></th>
            <th className="sticky top-[-2px] z-[1] bg-black_100 border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal pt-[5px] p-[8px] whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody>
          {
            tableTabsAPI.map((tableTabs, index) => (
              <tr key={index}>
                <td className="text-[10px] text-success leading-[12px] font-normal px-[8px] py-[4px]">{tableTabs.Market}</td>
                <td className="text-[10px] text-success leading-[12px] font-normal px-[8px] py-[4px]">{tableTabs.Side}</td>
                <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">{tableTabs.PositionSize}</td>
                <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">{tableTabs.NotionalSize}</td>
                <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">{tableTabs.EstLiquidationPrice}</td>
                <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">{tableTabs.MarkPrice}</td>
                <td className="text-[10px] text-pink leading-[12px] font-normal px-[8px] py-[4px] text-right">{tableTabs.MarkPriceRed}</td>
                <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">{tableTabs.AvgOpenPrice}</td>
                <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">{tableTabs.BreakEvenPrice}</td>
                <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">
                  <button type="button" className="rounded-[2px] bg-[#3A1621] py-[6px] px-[11px] text-[#883448] text-[10px] leading-[10px] font-medium inline-block">{tableTabs.Status}</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </SimpleBar>
  )
}