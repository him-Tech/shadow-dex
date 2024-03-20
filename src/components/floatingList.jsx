import ReactSelect from "react-select";
import { SearchWhiteIcon, StarIcon } from "@/shared/icon";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { StockTraderTableList } from "@/shared/Helper";
import SimpleBar from "simplebar-react";

export default function FloatingListLeft() {
  const[filterActive, setFilterActive] = useState(true);
  const[starFill, setStarFill] = useState(true);
  const StockTraderTableListAPI  = StockTraderTableList;

  const LanguageOption = [
    {
      label: "Stocks",
      value: "1"
    },
    {
      label: "Stocks 2",
      value: "2"
    },
    {
      label: "Stocks 3",
      value: "3"
    }
  ];

  const handleStar = (e) => {
    setStarFill(!starFill);
  }

  return (
    <>
      <div className="bg-black_400 border-r-[1px] border-black_200 p-[12px]">
        <ul className="flex items-center mx-[-9px]">
          <li className="px-[9px]"><Link href={"#"} className="text-[10px] flex leading-[15px] font-medium relative text-blue">Futures</Link></li>
          <li className="px-[9px]"><Link href={"#"} className="text-[10px] flex leading-[15px] font-medium relative text-blue">Spot</Link></li>
          <li className="px-[9px]">
            <ReactSelect 
              className="react-select-container react-select-container-sm h-[24px] w-full focus-visible:outline-none"
              classNamePrefix="react-select"
              options={LanguageOption}  
              defaultValue={LanguageOption[0]} 
              />
          </li>
        </ul>
      </div>
      <div className="bg-black_400 border-r-[1px] border-black_200 py-[9px] mt-[5px] xl:h-[calc(100%_-_47px)] h-[calc(100vh_-_47px)]">
        <div className="flex items-center px-[12px]">
          <div className="pointer-events-none pr-3">
            <SearchWhiteIcon />
          </div>
          <input
            type="text"
            name="Search"
            className="text-white block w-full h-[27px] rounded-0 border-0 border-b-[1px] border-b-gray_300 bg-transparent px-[0] text-[10px] leading-[13px] py-[0] placeholder:text-[10px] placeholder:leading-[13px] focus:border-b-gray_300 focus-visible:outline-none placeholder:text-gray_300"
            placeholder="Search"
          />
        </div>
        <div className="mt-[10px]">
          {/* <div className="lg:h-full md:h-[calc(100vh_-_166px)] h-[calc(100vh_-_192px)] overflow-y-auto"> */}
          <SimpleBar forceVisible={true} autoHide={false} className=" md:h-[calc(100vh_-_166px)] h-[calc(100vh_-_199px)]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-black_400 sticky top-0"></th>
                  <th className="bg-black_400 sticky top-0 text-[10px] text-gray_400 leading-[11px] font-normal px-[5px] py-[8px] whitespace-nowrap">Market</th>
                  <th className={`bg-black_400 sticky top-0 text-[10px] text-gray_400 leading-[11px] font-normal px-[5px] py-[8px] whitespace-nowrap`}><Link href={"#"}>Price</Link></th>
                  <th className={`bg-black_400 sticky top-0 text-[10px] text-gray_400 leading-[11px] font-normal px-[5px] py-[8px] whitespace-nowrap`}><Link href={"#"}>Daily change</Link></th>
                  <th className={`bg-black_400 sticky top-0 text-[10px] ${filterActive ? 'text-white' : 'text-gray_400'} leading-[11px] font-normal px-[5px] py-[8px] whitespace-nowrap text-right`}><Link href={"#"} onClick={() => {setFilterActive(!filterActive)}}>24h volume</Link></th>
                </tr>
              </thead>
              <tbody>
                {
                  StockTraderTableListAPI.map((StockTraderTableList, index) => (
                    <tr key={index}>
                      <td className="border-b-[1px] border-b-black_200 align-middle p-[5px]">
                        <Link onClick={handleStar} href={"#"}><StarIcon width={15} height={14} color={starFill ? '#C19A27' : '#FFFFFF'}  /></Link>
                      </td>
                      <td className="border-b-[1px] border-b-black_200 align-middle text-[10px] leading-[11px] font-normal text-center p-[5px] text-white">{StockTraderTableList.Market}</td>
                      <td className="border-b-[1px] border-b-black_200 align-middle text-[10px] leading-[11px] font-normal text-center p-[5px] text-pink">{StockTraderTableList.Price}</td>
                      <td className="border-b-[1px] border-b-black_200 align-middle text-[10px] leading-[11px] font-normal text-center p-[5px] text-success">{StockTraderTableList.DailyChange}</td>
                      <td className="border-b-[1px] border-b-black_200 align-middle text-[10px] leading-[11px] font-normal text-right p-[5px] text-gray_400">$ {StockTraderTableList.Volume} m</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </SimpleBar>
        </div>
      </div>
    </>
  )
}