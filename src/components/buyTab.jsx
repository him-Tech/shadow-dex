import { InputNumber } from "rsuite";

export default function BuyTab() {
  return(
    <div className="px-[15px] pb-[20px]" >
      <div className="flex flex-wrap mx-[-7px]">
        <div className="w-3/4 px-[7px]">
          <p className="text-[10px] leading-[12px] text-[#888888]">Price</p>
          <InputNumber postfix="RMB" />
        </div>
        <div className="w-1/4 px-[7px]">
          <p className="text-[10px] leading-[15px] text-white">Buy</p>
        </div>
      </div>
      <div className="flex flex-wrap mx-[-7px]">
        <div className="w-1/2 px-[7px] mt-[14px]">
          <InputNumber postfix="BTC" />
        </div>
        <div className="w-1/2 px-[7px] mt-[14px]">
          <InputNumber postfix="USD" />
        </div>
      </div>
    </div>
  )
}