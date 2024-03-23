import { AddIcon, ArrowThreeDotsIcon, ExchangeIcon } from "@/shared/icon";
import Link from "next/link";

export default function SubAccountMenu() {
  return(
    <div className="px-[13px]">
      <div className="bg-black_100 p-[12px] rounded-[6px] flex items-center flex-wrap">
        <ul className="flex items-center flex-wrap mx-[-10px]">
          <li className="px-[10px] md:mb-[0] mb-[8px]">
            <h2 className="text-[12px] leading-[15px] text-white font-bold mr-[6px]">Subaccount:</h2>
          </li>
          <li className="px-[10px] md:mb-[0] mb-[8px]">
            <p className=" text-[10px] leading-[15px] text-blue">Main Account</p>
          </li>
          <li className="px-[10px] md:mb-[0] mb-[8px]">
            <p className=" text-[10px] leading-[15px] text-blue">Futures Arbitrage DYDX</p>
          </li>
          <li className="px-[10px] md:mb-[0] mb-[8px]">
            <p className=" text-[10px] leading-[15px] text-success">FuturesTrading</p>
          </li>
        </ul>
        <div className="md:ml-[28px] md:mt-[0] mt-[10px] w-full md:w-auto">
          <ul className="flex items-center flex-wrap  mx-[-7px]">
            <li className="px-[7px]">
              <Link href={"#"} className="bg-black_500 flex items-center justify-center p-[4px] rounded-[4px] text-center w-[50px] h-[25px]"><AddIcon width={15} height={15} /></Link>
            </li>
            <li className="px-[7px]">
              <Link href={"#"} className="bg-black_500 flex items-center justify-center p-[4px] rounded-[4px] text-center w-[50px] h-[25px]"><ExchangeIcon width={25} height={15} color={"#fff"}/></Link>
            </li>
            <li className="px-[7px]">
              <Link href={"#"} className="bg-black_500 flex items-center justify-center p-[4px] rounded-[4px] text-center w-[50px] h-[25px]"><ArrowThreeDotsIcon width={25} height={15} /></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}