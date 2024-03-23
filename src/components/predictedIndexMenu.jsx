import { SettingYellowIcon, StarIcon } from "@/shared/icon";
import Link from "next/link";
import { useState } from "react";
import ReactSelect from "react-select";

export default function PredictedIndexMenu() {
  const[starFill, setStarFill] = useState(true);
  const LanguageOption = [
    {
      label: "AAPL-EURUSD",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      value: "1"
    },
    {
      label: "AAPL-FACEBOOK",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      value: "2"
    }
  ];

  return (
    <div className="py-[13px] 2xl:pr-[87px] px-[15px] flex items-center md:flex-nowrap flex-wrap relative">
      <div className="flex items-center md:mr-[32px] xl:w-[227px] md:w-[167px] w-[calc(100%_-_100px)]">
        <Link className="mr-[8px] inline-block" href={'/'} onClick={(e) => setStarFill(!starFill)}><StarIcon width={18} height={18} color={starFill ? '#C19A27' : '#FFFFFF'} /></Link>
        <ReactSelect
          className="react-select-container react-select-container-sm h-[27px] focus-visible:outline-none"
          classNamePrefix="react-select"
          options={LanguageOption} 
          formatOptionLabel={LanguageOption => (
            <div className="flex items-center">
              <div className="w-[25px] h-[25px] rounded-[50px] overflow-hidden mr-[5px]">
                <img src={LanguageOption.image} alt={LanguageOption.label} className="w-full h-full object-cover" />
              </div>
              <span className="w-[calc(100%_-_30px)] xl:text-[18px] text-[12px] leading-[27px] text-white truncate">{LanguageOption.label}</span>
            </div>
          )} 
          defaultValue={LanguageOption[0]} />
      </div>
      <div className="flex items-center xl:w-[calc(100%_-_227px)] md:w-[calc(100%_-_167px)] overflow-hidden">
        <ul className="flex items-center mx-[-15px] md:w-[calc(100%_-_63px)] overflow-x-auto overflow-y-hidden">
          <li className="px-[15px]">
            <p className="whitespace-nowrap flex items-center text-[16px] leading-[24px] font-semibold text-white">64,896 <span className="inline-block text-[10px] leading-[15px] font-medium text-yellow ml-[7px]">+0.11%</span></p>
          </li>
          <li className="px-[15px]">
            <p className="whitespace-nowrap inline-block text-[10px] leading-[15px] text-yellow">Index price</p>
            <p className="whitespace-nowrap flex items-center text-[12px] leading-[14px] font-semibold text-white">64,896</p>
          </li>
          <li className="px-[15px]">
            <p className="whitespace-nowrap inline-block text-[10px] leading-[15px] text-yellow">Predicted funding rate</p>
            <p className="whitespace-nowrap flex items-center text-[12px] leading-[14px] font-semibold text-white">62,238.00 <span className="inline-block text-[8px] leading-[12px] font-medium text-yellow ml-[7px]">in 15 min</span></p>
          </li>
          <li className="px-[15px]">
            <p className="whitespace-nowrap inline-block text-[10px] leading-[15px] text-yellow">Open interest</p>
            <p className="whitespace-nowrap flex items-center text-[12px] leading-[14px] font-semibold text-white">44,466 BTC</p>
          </li>
          <li className="px-[15px]">
            <p className="whitespace-nowrap inline-block text-[10px] leading-[15px] text-yellow">24h volume</p>
            <p className="whitespace-nowrap flex items-center text-[12px] leading-[14px] font-semibold text-white">US$7,582,701.351</p>
          </li>
        </ul>
        <div className="ml-auto w-[63px] text-right md:static absolute top-[16px] right-[15px]">
          <Link className="flex items-center" href={"#"}>
            <p className="inline-block text-[10px] leading-[15px] text-white mr-[8px] ">Setting</p>
            <SettingYellowIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}