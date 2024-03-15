import ReactSelect from "react-select";
import { SearchWhiteIcon, StarIcon } from "@/shared/icon";
import Link from "next/link";
import { useState } from "react";

export default function FloatingListLeft({activeMenu}) {
  const[filterActive, setFilterActive] = useState(true);
  const[starFill, setStarFill] = useState(true);

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
  return (
    <div className={`w-[315px] bg-black xl:absolute fixed top-[67px] h-full z-10 transition-animation ${activeMenu ? 'left-0': 'left-[-100%]'}`}>
      <div className="bg-black_400 border-r-[1px] border-black_200 py-[9px] px-[12px]">
        <ul className="flex items-center mx-[-9px]">
          <li className="px-[9px]"><Link href={"#"} className="text-[10px] leading-[15px] font-medium relative text-blue">Futures</Link></li>
          <li className="px-[9px]"><Link href={"#"} className="text-[10px] leading-[15px] font-medium relative text-blue">Spot</Link></li>
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
      <div className="bg-black_400 border-r-[1px] border-black_200 py-[9px] px-[12px] mt-[5px] h-full">
        <div className="flex items-center">
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
          <table class="table-auto border-collapse">
            <thead>
              <tr>
                <th></th>
                <th className="text-[10px] text-gray_400 leading-[11px] font-normal p-[8px] whitespace-nowrap">Market</th>
                <th className={`text-[10px] text-gray_400 leading-[11px] font-normal p-[8px] whitespace-nowrap`}><Link href={"#"}>Price</Link></th>
                <th className={`text-[10px] text-gray_400 leading-[11px] font-normal p-[8px] whitespace-nowrap`}><Link href={"#"}>Daily change</Link></th>
                <th className={`text-[10px] ${filterActive ? 'text-white' : 'text-gray_400'} leading-[11px] font-normal p-[8px] whitespace-nowrap`}><Link href={"#"} onClick={() => {setFilterActive(!filterActive)}}>24h volume</Link></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b-[1px] border-b-black_200">
                  <Link onClick={() => setStarFill(!starFill)} href={"#"}><StarIcon color={starFill ? '#C19A27' : 'white'}  /></Link>
                </td>
                <td className="border-b-[1px] border-b-black_200 text-[10px] text-gray_400 leading-[11px] font-normal text-center p-[8px] text-white">TSLA/USD</td>
                <td className="border-b-[1px] border-b-black_200 text-[10px] text-gray_400 leading-[11px] font-normal text-center p-[8px] text-red">1,086.50</td>
                <td className="border-b-[1px] border-b-black_200 text-[10px] text-gray_400 leading-[11px] font-normal text-center p-[8px] text-success">0.14%</td>
                <td className="border-b-[1px] border-b-black_200 text-[10px] text-gray_400 leading-[11px] font-normal text-center p-[8px] text-gray_400">$ 3.52 m</td>
              </tr>
            </tbody>
          </table>    
        </div>
      </div>
    </div>
  )
}