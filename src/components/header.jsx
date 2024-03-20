import Image from "next/image";
import LogoImg from "../../public/logo.svg";
import { BarIcon, SearchIcon, SettingsWhiteIcon, NotificationIcon, SearchWhiteIcon, CloseIcon } from "../shared/icon";
import Link from "next/link";
import Select, { components } from 'react-select';
import { useEffect, useRef, useState } from "react";
// import ReactSelect from "react-select";

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);
  const MenuRef = useRef(null);
  const BarIconRef = useRef(null);

  const [isSearch, setIsSearch] = useState(false);
  const SearchRef = useRef(null);
  const SearchIconRef = useRef(null);
  
  const LanguageOption = [
    {
      label: "English",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
      value: "1"
    },
    {
      label: "Australia",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
      value: "2"
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (MenuRef.current && !MenuRef.current.contains(event.target) && !BarIconRef.current.contains(event.target)) {
        setIsMenu(false);
      }
      if (SearchRef.current && !SearchRef.current.contains(event.target) && !SearchIconRef.current.contains(event.target)) {
        setIsSearch(false)
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="md:py-[15px] py-[8px] items-center fixed left-0 top-0 w-full bg-black z-20">
      <div className="md:hidden block border-b-[1px] border-b-[rgba(255,255,255,0.3)] pb-[5px] mb-[5px] px-[15px]">
        <ul className="flex mx-[-3px] justify-end items-center">
          <li className="px-[3px] mr-auto">
            <div className="xl:w-[326px] w-[90px]">
              <Link href={"#"} as={"/"} className="cursor-pointer">
                <Image src={LogoImg} alt="Logo" className="xl:w-[100px] h-full w-full object-contain mx-auto"/>
              </Link>
            </div>
          </li>
          <li className="px-[3px]">
            <Select 
              className="react-select-container h-[36px] w-[110px] focus-visible:outline-none"
              classNamePrefix="react-select"
              options={LanguageOption} 
              id="language-select"
              instanceId="language-select"
              formatOptionLabel={LanguageOption => (
                <div className="flex items-center">
                  <div className="w-[15px] h-[15px] rounded-[30px] overflow-hidden mr-[5px]">
                    <img src={LanguageOption.image} alt={LanguageOption.label} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[11px] leading-[15px] text-white w-[calc(100%_-_15px)] truncate">{LanguageOption.label}</span>
                </div>
              )} 
              defaultValue={LanguageOption[0]} />
          </li>
          <li className="px-[3px]">
            <Link href={"#"} className="bg-black_400 w-[36px] h-[36px] flex items-center justify-center rounded-[12px] text-[11px] leading-[12px] text-center">
              <SettingsWhiteIcon width={13} height={13} />
            </Link>
          </li>
          <li className="px-[3px]">
            <Link href={"#"} className="bg-black_400 w-[36px] h-[36px] flex items-center justify-center rounded-[12px] text-[9px] leading-[12px] text-center relative">
              <NotificationIcon width={13} height={13} />
              <span className="absolute top-[4px] right-[0] px-[5px] py-[2px] bg-red rounded-[3px]">8</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="xl:w-[326px] px-[15px] w-[130px] hidden md:block">
          <Link href={"#"} as={"/"} className="cursor-pointer">
            <Image src={LogoImg} alt="Logo" className="xl:w-[100px] h-full w-full object-contain mx-auto"/>
          </Link>
        </div>
        <div className="flex items-center xl:w-[calc(100%_-_326px)] md:w-[calc(100%_-_130px)] w-full md:pl-[0] pl-[15px]">
          <div className="mr-auto">
            <div className="flex items-center">
              <div className="pr-[15px] hidden xl:block"><Link href={'#'}><BarIcon /></Link></div>
              <div className="pr-[8px] block xl:hidden"><Link href={'#'} onClick={() => setIsMenu(!isMenu)} ref={BarIconRef}><BarIcon /></Link></div>
              <div className="px-[8px] block md:hidden"><Link href={'#'} onClick={() => setIsSearch(!isSearch)} ref={SearchIconRef}><SearchIcon width={19} height={19} color={'#FFFFFF'} /></Link></div>
              { isMenu && <div className="overlayMenu fixed bottom-0 md:top-[67px] top-[99px] left-0 w-full h-full z-20"></div> } 
              <div className={`xl:flex xl:items-center xl:mx-[-15px] xl:static fixed z-30 bottom-0 md:top-[67px] top-[99px] left-0 w-[300px] xl:w-auto bg-black h-full xl:py-[0] py-[15px] xl:translate-x-[0] transition-animation ${isMenu ? 'translate-x-[0]' : 'translate-x-[-100%]'}`} ref={MenuRef}>
                <div className="px-[15px] xl:w-auto w-full"><Link href={"#"} className="text-[11px] leading-[15px] text-[white]">MARKETS</Link></div>
                <div className="px-[15px] xl:w-auto w-full"><Link href={"#"} className="text-[11px] leading-[15px] text-[white]">PORTFOLIO</Link></div>
                <div className="px-[15px] xl:w-auto w-full"><Link href={"#"} className="text-[11px] leading-[15px] text-[white]">WALLET</Link></div>
                <div className="px-[15px] xl:w-auto w-full"><Link href={"#"} className="text-[11px] leading-[15px] text-[white]">DOCS</Link></div>
              </div>
              { isSearch && <div className="overlayMenu fixed bottom-0 top-[0] left-0 w-full h-full z-20"></div> } 
              <div className={`md:relative md:w-[200px] 2xl:ml-[70px] z-[21] md:ml-[15px] fixed w-full md:left-[0] top-[-100%] left-[0] transition-animation ${isSearch && 'top-[0]'}`} ref={SearchRef}>
                <div className="pointer-events-none absolute inset-y-0 left-0 items-center pl-3 md:flex hidden">
                  <SearchIcon width={13} height={13} color={'#000000'} />
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 items-center pl-3 md:hidden flex">
                  <SearchIcon width={15} height={15} color={'#FFFFFF'} />
                </div>
                <input
                  type="text"
                  name="Search"
                  className="block w-full md:h-[27px] h-[50px] md:rounded-md md:border-white_100 md:bg-white_100 bg-black_400 border-black_400 md:pr-[10px] md:pl-[30px] px-[35px] text-[10px] leading-[13px] placeholder:text-[10px] placeholder:leading-[13px] focus:border-white_100 focus-visible:outline-none md:text-black text-white placeholder:text-gray_100"
                  placeholder="Search market"
                />
                <div className="absolute inset-y-0 right-0 items-center pr-3 md:hidden flex">
                  <Link onClick={() => setIsSearch(false)} href={'#'}> <img src="/close_icon.svg" className="w-[13px] h-[13px]" alt="Close Icon" /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:pr-[64px] pr-[15px]">
            <ul className="flex mx-[-3px] justify-end">
              <li className="px-[3px]">
                <div className="bg-black_400 rounded-[12px] px-[15px] py-[12px] text-[11px] leading-[12px] text-white text-center w-[104px]">0x0000...0000</div>
              </li>
              <li className="px-[3px] hidden md:block">
                <Select 
                  className="react-select-container h-[36px] w-full focus-visible:outline-none"
                  classNamePrefix="react-select"
                  options={LanguageOption} 
                  formatOptionLabel={LanguageOption => (
                    <div className="flex items-center">
                      <div className="w-[15px] h-[15px] rounded-[30px] overflow-hidden mr-[5px]">
                        <img src={LanguageOption.image} alt={LanguageOption.label} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[11px] leading-[15px] text-white">{LanguageOption.label}</span>
                    </div>
                  )} 
                  defaultValue={LanguageOption[0]} />
              </li>
              <li className="px-[3px] hidden md:block">
                <Link href={"#"} className="bg-black_400 w-[36px] h-[36px] flex items-center justify-center rounded-[12px] text-[11px] leading-[12px] text-center">
                  <SettingsWhiteIcon width={13} height={13} />
                </Link>
              </li>
              <li className="px-[3px] hidden md:block">
                <Link href={"#"} className="bg-black_400 w-[36px] h-[36px] flex items-center justify-center rounded-[12px] text-[9px] leading-[12px] text-center relative">
                  <NotificationIcon width={13} height={13} />
                  <span className="absolute top-[4px] right-[0] px-[5px] py-[2px] bg-red rounded-[3px]">8</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
