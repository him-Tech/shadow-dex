export default function TableTabs() {
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
        <tr>
          <td className="text-[10px] text-success leading-[12px] font-normal px-[8px] py-[4px]">ENS-PERP</td>
          <td className="text-[10px] text-success leading-[12px] font-normal px-[8px] py-[4px]">Long</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">59.67ENS</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">US$3.912.84</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">1.938</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">65.620</td>
          <td className="text-[10px] text-red leading-[12px] font-normal px-[8px] py-[4px] text-right">-US$213.92</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">69.160</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">69.160</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">
            <p className="rounded-[2px] bg-[#3A1621] py-[6px] px-[11px] text-red text-[10px] leading-[10px] font-medium inline-block">MARKET CLOSE</p>
          </td>
        </tr>
        <tr>
          <td className="text-[10px] text-success leading-[12px] font-normal px-[8px] py-[4px]">ENS-PERP</td>
          <td className="text-[10px] text-success leading-[12px] font-normal px-[8px] py-[4px]">Long</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">59.67ENS</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">US$3.912.84</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">1.938</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">65.620</td>
          <td className="text-[10px] text-red leading-[12px] font-normal px-[8px] py-[4px] text-right">-US$213.92</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">69.160</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">69.160</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">
            <p className="rounded-[2px] bg-[#3A1621] py-[6px] px-[11px] text-red text-[10px] leading-[10px] font-medium inline-block">MARKET CLOSE</p>
          </td>
        </tr>
        <tr>
          <td className="text-[10px] text-success leading-[12px] font-normal px-[8px] py-[4px]">ENS-PERP</td>
          <td className="text-[10px] text-success leading-[12px] font-normal px-[8px] py-[4px]">Long</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">59.67ENS</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">US$3.912.84</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">1.938</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">65.620</td>
          <td className="text-[10px] text-red leading-[12px] font-normal px-[8px] py-[4px] text-right">-US$213.92</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">69.160</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">69.160</td>
          <td className="text-[10px] text-white leading-[12px] font-normal px-[8px] py-[4px] text-right">
            <p className="rounded-[2px] bg-[#3A1621] py-[6px] px-[11px] text-red text-[10px] leading-[10px] font-medium inline-block">MARKET CLOSE</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}