import BuyTab from "@/components/buyTab";
import FloatingListLeft from "@/components/floatingList";
import Header from "@/components/header";
import MarketTraders from "@/components/marketTraders";
import TableTabs from "@/components/tableTabs";
import { AddIcon, ArrowThreeDotsIcon, ExchangeIcon, SettingYellowIcon, SideBarCloseIcon, SideBarOpenIcon, StarIcon } from "@/shared/icon";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { Slider, Tabs } from "rsuite";

export default function Home() {
  const[activeMenu, setActiveMenu] = useState(true);
  const[marketTraders, setMarketTraders] = useState([]);

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
    fetch('../data.json')
    .then((res) => res.json())
    .then((data) => {
      const dataMarketTraders = data.filter((data) =>{return data.label == 'Market Traders'});
      if(dataMarketTraders) {
        setMarketTraders(dataMarketTraders[0].children);
      }
    })
  }, []);

  return (
    <>
      <Header />
      <section className={`main-wrapper relative transition-animation pt-[67px] ${activeMenu && 'xl:pl-[315px]'}`}>
        <FloatingListLeft activeMenu={activeMenu} />

        <div className="bg-black_400 p-[12px] flex items-center">
          <div className="mr-[38px]">
            <Link onClick={() => {setActiveMenu(!activeMenu)}} href={"#"}>
              {activeMenu ? <SideBarCloseIcon /> : <SideBarOpenIcon />}
            </Link>
          </div>
          <ul className="flex items-center mx-[-13px]">
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-blue">AAPL</Link></li>
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-blue">MSFT</Link></li>
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-yellow">EURUSD</Link></li>
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-blue">ARQ</Link></li>
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-blue">EXPD<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-6px] right-[5px]">New</span></Link></li>
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-blue">DAY<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-6px] right-[5px]">New</span></Link></li>
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-blue">ARQ<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-6px] right-[5px]">New</span></Link></li>
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-blue">CME<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-6px] right-[5px]">New</span></Link></li>
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-blue">CMCSA<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-6px] right-[5px]">New</span></Link></li>
            <li className="px-[13px]"><Link href={"#"} className="text-[10px] leading-[20px] font-medium relative text-blue">CHTR<span className="bg-yellow rounded-[15px] px-[4px] py-[3px] text-[7px] leading-[7px] text-black inline-block relative top-[-6px] right-[5px]">New</span></Link></li>
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

        <div className="py-[13px] px-[25px] pr-[87px] flex items-center">
          <div className="flex items-center mr-[32px]">
            <Link className="mr-[8px]" href={'#'}><StarIcon width={18} height={18} color={'#A4A8AB'} /></Link>
            <ReactSelect
              className="react-select-container react-select-container-sm h-[27px] focus-visible:outline-none"
              classNamePrefix="react-select"
              options={LanguageOption} 
              formatOptionLabel={LanguageOption => (
                <div className="flex items-center">
                  <div className="w-[25px] h-[25px] rounded-[50px] overflow-hidden mr-[5px]"><img src={LanguageOption.image} alt={LanguageOption.label} className="w-full h-full object-cover" /></div>
                  <span className="flex-grow text-[18px] leading-[27px] text-white">{LanguageOption.label}</span>
                </div>
              )} 
              defaultValue={LanguageOption[0]} />
          </div>
          <div className="flex-grow">
            <ul className="flex items-center mx-[-15px]">
              <li className="px-[15px]">
                <p className="flex items-center text-[16px] leading-[24px] font-semibold text-white">64,896 <span className="inline-block text-[10px] leading-[15px] font-medium text-yellow ml-[7px]">+0.11%</span></p>
              </li>
              <li className="px-[15px]">
                <p className="inline-block text-[10px] leading-[15px] text-yellow">Index price</p>
                <p className="flex items-center text-[12px] leading-[14px] font-semibold text-white">64,896</p>
              </li>
              <li className="px-[15px]">
                <p className="inline-block text-[10px] leading-[15px] text-yellow">Predicted funding rate</p>
                <p className="flex items-center text-[12px] leading-[14px] font-semibold text-white">62,238.00 <span className="inline-block text-[8px] leading-[12px] font-medium text-yellow ml-[7px]">in 15 min</span></p>
              </li>
              <li className="px-[15px]">
                <p className="inline-block text-[10px] leading-[15px] text-yellow">Open interest</p>
                <p className="flex items-center text-[12px] leading-[14px] font-semibold text-white">44,466 BTC</p>
              </li>
              <li className="px-[15px]">
                <p className="inline-block text-[10px] leading-[15px] text-yellow">24h volume</p>
                <p className="flex items-center text-[12px] leading-[14px] font-semibold text-white">US$7,582,701.351</p>
              </li>
              <li className="px-[15px] ml-auto">
                <Link className="flex items-center" href={"#"}>
                  <p className="inline-block text-[10px] leading-[15px] text-white mr-[8px] ">Setting</p>
                  <SettingYellowIcon />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-[13px]">
          <div className="bg-black_100 p-[12px] rounded-[6px] flex items-center">
            <ul className="flex items-center mx-[-10px]">
              <li className="px-[10px]">
                <h2 className="text-[12px] leading-[15px] text-white font-bold mr-[6px]">Subaccount:</h2>
              </li>
              <li className="px-[10px]">
                <p className=" text-[10px] leading-[15px] text-blue">Main Account</p>
              </li>
              <li className="px-[10px]">
                <p className=" text-[10px] leading-[15px] text-blue">Futures Arbitrage DYDX</p>
              </li>
              <li className="px-[10px]">
                <p className=" text-[10px] leading-[15px] text-success">FuturesTrading</p>
              </li>
            </ul>
            <div className="ml-[28px]">
              <ul className="flex items-center mx-[-7px]">
                <li className="px-[7px]">
                  <Link href={"#"} className="bg-black_500 flex items-center justify-center p-[4px] rounded-[4px] text-center w-[50px] h-[25px]"><AddIcon width={15} height={15} /></Link>
                </li>
                <li className="px-[7px]">
                  <Link href={"#"} className="bg-black_500 flex items-center justify-center p-[4px] rounded-[4px] text-center w-[50px] h-[25px]"><ExchangeIcon width={25} height={25} /></Link>
                </li>
                <li className="px-[7px]">
                  <Link href={"#"} className="bg-black_500 flex items-center justify-center p-[4px] rounded-[4px] text-center w-[50px] h-[25px]"><ArrowThreeDotsIcon width={25} height={25} /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-[13px]">
          <div className="flex flex-wrap mx-[-7px]">
            <div className="w-1/2 px-[7px] mt-[14px]">
              <div className="bg-black_100 rounded-[6px] flex items-center justify-center h-full">
                <p className="text-[90px] text-white">Graph</p>
              </div>
            </div>
            <div className="w-1/2 px-[7px]">
              <div className="flex flex-wrap mx-[-7px]">
                <div className="w-1/2 px-[7px] mt-[14px]">
                  <div className="bg-black_100 rounded-[6px] flex items-center justify-center h-full">
                    <p className="text-[90px] text-white">Depht</p>
                  </div>
                </div>
                <div className="w-1/2 px-[7px] mt-[14px]">
                  <div className="bg-black_100 rounded-[6px] h-full">
                    <Tabs defaultActiveKey="1" appearance="subtle" className="w-2row">
                      <Tabs.Tab eventKey="1" title="Buy BTC-PERP">
                        <BuyTab />
                      </Tabs.Tab>
                      <Tabs.Tab eventKey="2" title="Sell BTC-PERP">
                        2
                      </Tabs.Tab>
                    </Tabs>
                  </div>
                </div>
                <div className="w-1/2 px-[7px] mt-[14px]">
                  <MarketTraders marketTradersAPI={marketTraders} />
                </div>
                <div className="w-1/2 px-[7px] mt-[14px]">
                  <div className="bg-black_100 rounded-[6px] h-full py-[18px] px-[14px]">
                    <div className="flex flex-wrap mx-[-7px]">
                      <div className="w-3/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-black_600">Total collateral:</p>
                      </div>
                      <div className="w-1/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-white text-right">US$3.914.60</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap mx-[-7px]">
                      <div className="w-3/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-black_600">Free collateral:</p>
                      </div>
                      <div className="w-1/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-white text-right">US$1.74</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap mx-[-7px]">
                      <div className="w-3/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-black_600">Leverage:</p>
                      </div>
                      <div className="w-1/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-white text-right">1x</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap mx-[-7px]">
                      <div className="w-3/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-black_600">Max position Leverage:</p>
                      </div>
                      <div className="w-1/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-white text-right">1x</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap mx-[-7px]">
                      <div className="w-3/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-black_600">Margin fraction:</p>
                      </div>
                      <div className="w-1/4 px-[7px] mb-[5px]">
                        <p className="text-[10px] leading-[15px] text-white text-right">100.04%</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap mx-[-7px]">
                      <div className="w-3/4 px-[7px]">
                        <p className="text-[10px] leading-[15px] text-black_600">Maintenance margin requirement:</p>
                      </div>
                      <div className="w-1/4 px-[7px]">
                        <p className="text-[10px] leading-[15px] text-white text-right">3%</p>
                      </div>
                    </div>
                    <div className="border-t border-t-black_600 mt-[10px] pt-[10px]">
                      <h2 className="text-[12px] leading-[15px] text-white font-semibold mb-[20px]">Max account leverage</h2>
                      <div className="px-[8px]">
                        <Slider
                          defaultValue={1}
                          step={1}
                          min={1}
                          max={6}
                          graduated
                          progress
                          renderMark={mark => {
                            switch (mark) {
                              case 1:
                                return <span>{mark}x</span>;
                              case 2:
                                return <span>{mark}x</span>;
                              case 3:
                                return <span>{mark}x</span>;
                              case 4:
                                return <span>5x</span>;
                              case 5:
                                return <span>10x</span>;
                              case 6:
                                return <span>20x</span>;
                            }
                            return null;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-[-7px]">
            <div className="w-3/4 px-[7px] mt-[14px]">
              <div className="bg-black_100 rounded-[6px] h-full p-[15px]">
                <Tabs defaultActiveKey="1" appearance="subtle" className="w-5row">
                  <Tabs.Tab eventKey="1" title="Positions (1)">
                    <TableTabs />
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="2" title="Open Orders (0)">
                    <TableTabs />
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="3" title="Trigger Orders (0)">
                    <TableTabs />
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="3" title="Order History">
                    <TableTabs />
                  </Tabs.Tab>
                  <Tabs.Tab eventKey="3" title="Trade History">
                    <TableTabs />
                  </Tabs.Tab>
                </Tabs>
              </div>
            </div>
            <div className="w-1/4 px-[7px] mt-[14px]">
              <div className="bg-black_100 rounded-[6px] h-full p-[15px]">
                <div className="border-b border-b-black_600 mb-[10px] pb-[10px]">
                  <div className="flex flex-wrap mx-[-7px]">
                    <div className="w-3/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-yellow">Mark Price</p>
                    </div>
                    <div className="w-1/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-white text-right">US$3.914.60</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-7px]">
                    <div className="w-3/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-black_600">Open Interest</p>
                    </div>
                    <div className="w-1/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-white text-right">US$1.74</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-7px]">
                    <div className="w-3/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-black_600">24h volume</p>
                    </div>
                    <div className="w-1/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-white text-right">1x</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-7px]">
                    <div className="w-3/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-black_600">Funding rate</p>
                    </div>
                    <div className="w-1/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-white text-right">1x</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-7px]">
                    <div className="w-3/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-black_600">Minimum position size:</p>
                    </div>
                    <div className="w-1/4 px-[7px] mb-[5px]">
                      <p className="text-[10px] leading-[15px] text-white text-right">100.04%</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mx-[-7px]">
                    <div className="w-3/4 px-[7px]">
                      <p className="text-[10px] leading-[15px] text-black_600">Maximum position size</p>
                    </div>
                    <div className="w-1/4 px-[7px]">
                      <p className="text-[10px] leading-[15px] text-white text-right">3%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
