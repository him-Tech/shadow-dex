import Link from "next/link";

export default function SecondaryMenu() {
  return (
    <div className="p-[12px] overflow-x-auto">
      <div className="flex items-center w-full">
        <ul className="flex items-center mx-[-13px]">
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-blue">AAPL</Link></li>
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-blue">MSFT</Link></li>
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-yellow">EURUSD</Link></li>
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-blue">ARQ</Link></li>
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-blue">EXPD<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-8px] right-[5px]">New</span></Link></li>
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-blue">DAY<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-8px] right-[5px]">New</span></Link></li>
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-blue">ARQ<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-8px] right-[5px]">New</span></Link></li>
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-blue">CME<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-8px] right-[5px]">New</span></Link></li>
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-blue">CMCSA<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-8px] right-[5px]">New</span></Link></li>
          <li className="px-[13px]"><Link href={"#"} className="text-[10px] flex items-center leading-[20px] font-medium relative text-blue">CHTR<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-8px] right-[5px]">New</span></Link></li>
        </ul>
        <div className="ml-[25px] pl-[25px] border-l-[1px] border-l-white">
          <ul className="flex items-center mx-[-9px]">
            <li className="px-[9px]"><Link href={"#"} className="text-[10px] leading-[20px] relative text-blue">Futures</Link></li>
            <li className="px-[9px]"><Link href={"#"} className="text-[10px] leading-[20px] relative text-blue">Swap</Link></li>
            <li className="px-[9px]"><Link href={"#"} className="text-[10px] leading-[20px] relative text-blue">Stacking</Link></li>
            <li className="px-[9px]"><Link href={"#"} className="text-[10px] leading-[20px] relative text-blue">Liquidity</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}