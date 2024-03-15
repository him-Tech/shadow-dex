import Image from "next/image";
import LogoImg from "../../public/logo.svg";
import { BarIcon, SearchIcon, SettingsWhiteIcon, NotificationIcon } from "../shared/icon";
import Link from "next/link";
import Select, { components } from 'react-select';
// import ReactSelect from "react-select";

export default function Header() {
  const LanguageOption = [
    {
      label: "English",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
      value: "1"
    },
    {
      label: "Indonesia",
      image: "https://cdn.britannica.com/48/1648-050-9C1F365D/Flag-Indonesia.jpg",
      value: "2"
    }
  ];

  return (
    <header className="flex py-[15px] items-center fixed left-0 top-0 w-full bg-black z-20">
      <div className="w-[326px]">
          <Image src={LogoImg} alt="Logo" className="mx-auto"/>
      </div>
      <div className="grow flex items-center">
        <div className="grow">
          <div className="flex items-center">
            <ul className="flex items-center mx-[-15px]">
              <li className="px-[15px]"><BarIcon /></li>
              <li className="px-[15px]"><Link href={"#"} className="text-[11px] leading-[15px] text-[white]">MARKETS</Link></li>
              <li className="px-[15px]"><Link href={"#"} className="text-[11px] leading-[15px] text-[white]">PORTFOLIO</Link></li>
              <li className="px-[15px]"><Link href={"#"} className="text-[11px] leading-[15px] text-[white]">WALLET</Link></li>
              <li className="px-[15px]"><Link href={"#"} className="text-[11px] leading-[15px] text-[white]">DOCS</Link></li>
            </ul>
            <div className="relative w-[200px] ml-[70px]">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon />
              </div>
              <input
                type="text"
                name="Search"
                className="block w-full h-[27px] rounded-md border-white_100 bg-white_100 pr-[10px] pl-[30px] text-[10px] leading-[13px] placeholder:text-[10px] placeholder:leading-[13px] focus:border-white_100 focus-visible:outline-none text-black placeholder:text-gray_100"
                placeholder="Search market"
              />
            </div>
          </div>
        </div>
        <div className="pr-[64px]">
          <ul className="flex items-center mx-[-3px]">
            <li className="px-[3px]">
              <div className="bg-black_400 rounded-[12px] px-[15px] py-[12px] text-[11px] leading-[12px] text-white text-center">0x0000...0000</div>
            </li>
            <li className="px-[3px]">
              <Select 
                className="react-select-container h-[36px] w-full focus-visible:outline-none"
                classNamePrefix="react-select"
                options={LanguageOption} 
                formatOptionLabel={LanguageOption => (
                  <div className="flex items-center">
                    <img src={LanguageOption.image} alt={LanguageOption.label} className="w-[15px] h-[15px] mr-[5px] rounded-[30px]" />
                    <span className="text-[11px] leading-[15px] text-white">{LanguageOption.label}</span>
                  </div>
                )} 
                defaultValue={LanguageOption[0]} />
            </li>
            <li className="px-[3px]">
              <div className="bg-black_400 rounded-[12px] px-[15px] py-[12px] text-[11px] leading-[12px] text-center">
                <SettingsWhiteIcon width={13} height={13} />
              </div>
            </li>
            <li className="px-[3px]">
              <div className="bg-black_400 rounded-[12px] px-[15px] py-[12px] text-[9px] leading-[12px] text-center   relative">
                <NotificationIcon width={13} height={13} />
                <span className="absolute top-[4px] right-[6px] px-[5px] py-[2px] bg-red rounded-[3px]">8</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
