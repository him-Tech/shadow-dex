import { useEffect, useRef, useState } from "react";
import ReactSelect from "react-select";
import Link from "next/link";
import { Button, Tabs } from "rsuite";
import { AddIcon, ArrowThreeDotsIcon, ExchangeIcon, SettingYellowIcon, SideBarCloseIcon, SideBarOpenIcon, StarIcon } from "@/shared/icon";
import BuyTab from "@/components/buyTab";
import SellTab from "@/components/sellTab";
import FloatingListLeft from "@/components/floatingList";
import Header from "@/components/header";
import MarketPrice from "@/components/marketPrice";
import MarketTraders from "@/components/marketTraders";
import MaxPositionLeverage from "@/components/maxPositionLeverage";
import TableTabs from "@/components/tableTabs";
import SimpleBar from "simplebar-react";

export default function Home() {
  const [isWidth, setIsWidth] = useState();
  const [isFloatingList, setIsFloatingList] = useState(false);
  const[starFill, setStarFill] = useState(true);
  const ref = useRef(null);
  const [isHeight, setIsHeight] = useState();
  const [activeKey, setActiveKey] = useState('buy-btc-perp');

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

  useEffect(() => {
    setIsHeight(window.innerHeight);
    if (window.innerWidth >= 1280) {
      setIsFloatingList(true);
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if ( window.innerWidth < 1280) {
        setIsFloatingList(false);
        setIsWidth(window.innerWidth);
        document.addEventListener('click', handleClickOutside, true);
      } else {
           
        setIsWidth(window.innerWidth);
        document.removeEventListener('click', handleClickOutside, true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsFloatingList(false);
    }
  };

  function handleChangeBuySellTabs (key) {
    setActiveKey(key);
  }

  

  return (
    
    <>
      <Header />
      { isWidth < 1280 && (isFloatingList && <div className="overlayMenu fixed bottom-0 md:top-[67px] top-[99px] left-0 w-full h-full z-[9]" ></div>) } 
      <div className={`w-[315px] bg-black xl:absolute fixed md:top-[67px] top-[99px] md:h-[calc(100vh_-_67px)] overflow-hidden z-10 transition-animation ${isFloatingList ? 'left-0': 'left-[-100%]'}`} ref={ref} onClick={handleClickOutside}>
        <FloatingListLeft />
      </div>
      <SimpleBar style={{ height: isHeight  }} forceVisible={true} autoHide={false}>
      <section className={`main-wrapper relative transition-animation md:pt-[67px] pt-[99px] ${isFloatingList && 'xl:pl-[315px]'}`} style={{ height: isHeight }}>

          <div className="bg-black_400 flex items-center md:pr-[0] pr-[15px] ">
            <div className="p-[15px] md:mr-[14px] flex items-center justify-center" >
              <Link href={"#"} className="flex" onClick={() => {setIsFloatingList(!isFloatingList)}}>
                {isFloatingList ? <SideBarCloseIcon /> : <SideBarOpenIcon />}
              </Link>
            </div>
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
          </div>

          {/* Index price, Predicted funding rate, Open interest */}
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

          {/* Sub account */}
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

          <div className="px-[13px] pb-[15px]">
            <div className="flex flex-wrap mx-[-7px]">
              <div className="xl:w-1/2 px-[7px] mt-[14px] w-full">
                <div className="bg-black_100 rounded-[6px] flex items-center justify-center h-full min-h-[300px]">
                  <p className="2xl:text-[90px] xl:text-[60px] text-white">Graph</p>
                </div>
              </div>
              <div className="xl:w-1/2 px-[7px] w-full">
                <div className="flex flex-wrap mx-[-7px]">
                  <div className="md:w-1/2 w-full px-[7px] mt-[14px]">
                    <div className="bg-black_100 rounded-[6px] flex items-center justify-center h-full min-h-[300px]">
                      <p className="2xl:text-[90px] xl:text-[60px] text-white">Depht</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full px-[7px] mt-[14px]">
                    <div className="bg-black_100 rounded-[6px] h-full">
                      <Tabs activeKey={activeKey} onSelect={setActiveKey} defaultActiveKey="1" appearance="subtle" className="w-2row buy-sell-tabs">
                        <Tabs.Tab eventKey="buy-btc-perp" title="Buy BTC-PERP">
                          <BuyTab handleChangeBuySellTabs={handleChangeBuySellTabs} />
                        </Tabs.Tab>
                        <Tabs.Tab eventKey="sell-btc-perp" title="Sell BTC-PERP">
                          <SellTab handleChangeBuySellTabs={handleChangeBuySellTabs} />
                        </Tabs.Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mx-[-7px]">
                  <div className="md:w-1/2 w-full px-[7px] mt-[14px]">
                    <MarketTraders />
                  </div>
                  <div className="md:w-1/2 w-full px-[7px] mt-[14px]">
                    <MaxPositionLeverage />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mx-[-7px]">
              <div className="xl:w-3/4 px-[7px] mt-[14px] w-full">
                <div className="bg-black_100 rounded-[6px] h-full p-[15px]">
                  <Tabs defaultActiveKey="1" appearance="subtle" className="w-5row no-border-line no-gap">
                    <Tabs.Tab eventKey="1" title="Positions (1)">
                      <TableTabs />
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="2" title="Open Orders (0)">
                      <TableTabs />
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="3" title="Trigger Orders (0)">
                      <TableTabs />
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="4" title="Order History">
                      <TableTabs />
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="5" title="Trade History">
                      <TableTabs />
                    </Tabs.Tab>
                  </Tabs>
                </div>
              </div>
              <div className="xl:w-1/4 px-[7px] mt-[14px] w-full">
              <MarketPrice />
              </div>
            </div>
          </div>
        </section>
      </SimpleBar>
    </>
  );
}
