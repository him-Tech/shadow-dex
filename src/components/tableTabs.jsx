import { MarketTraderTableList } from "@/shared/Helper";

export default function TableTabs() {
  const tableTabsAPI = MarketTraderTableList;
  return (
    <table table class="table-auto border-collapse w-full">
      <thead>
        <tr>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap text-left">Market</th>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap text-left">Side</th>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap text-right">Position Size</th>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap text-right">Notional Size</th>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap text-right">Est. liquidation price</th>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap text-right">Mark price</th>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap text-right">Mark price</th>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap text-right">Avg open price</th>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap text-right">Break-even price</th>
          <th className="border-b-[1px] border-b-whiteOpacity10 text-[10px] text-gray_500 leading-[12px] font-normal p-[8px] whitespace-nowrap"></th>
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
                <p className="rounded-[2px] bg-[#3A1621] py-[6px] px-[11px] text-[#883448] text-[10px] leading-[10px] font-medium inline-block">{tableTabs.Status}</p>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}