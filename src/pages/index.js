import { useEffect, useRef, useState } from "react";
import ReactSelect from "react-select";
import Link from "next/link";
import { Tabs } from "rsuite";
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
import TableTabsOpenOrders from "@/components/tableOpenOrders";
import TableTriggerOrders from "@/components/tableTriggerOrders";
import TableTradeHistory from "@/components/tableTradeHistory";
import SecondaryMenu from "@/components/secondaryMenu";
import PredictedIndexMenu from "@/components/predictedIndexMenu";
import SubAccountMenu from "@/components/subAccountMenu";

export default function Home() {
  const [isWidth, setIsWidth] = useState();
  const [isFloatingList, setIsFloatingList] = useState(false);
  const ref = useRef(null);
  const [isHeight, setIsHeight] = useState();
  const [activeKey, setActiveKey] = useState('buy-btc-perp');
  const [inputValue, setInputValue] = useState(12547);


  useEffect(() => {
    setIsHeight(window.innerHeight);
    if (window.innerWidth >= 1280) {
      setIsFloatingList(true);
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsHeight(window.innerHeight);
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

  function handleChangeInput (value) {
    setInputValue(value);
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
            <SecondaryMenu />
          </div>

          {/* Index price, Predicted funding rate, Open interest */}
          <PredictedIndexMenu />

          {/* Sub account */}
          <SubAccountMenu />

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
                          <BuyTab handleChangeBuySellTabs={handleChangeBuySellTabs} inputValue={inputValue} handleChangeInput={handleChangeInput}  />
                        </Tabs.Tab>
                        <Tabs.Tab eventKey="sell-btc-perp" title="Sell BTC-PERP">
                          <SellTab handleChangeBuySellTabs={handleChangeBuySellTabs} inputValue={inputValue} handleChangeInput={handleChangeInput} />
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
                      <TableTabsOpenOrders />
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="3" title="Trigger Orders (0)">
                      <TableTriggerOrders />
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="4" title="Order History">
                      <TableTabs />
                    </Tabs.Tab>
                    <Tabs.Tab eventKey="5" title="Trade History">
                      <TableTradeHistory />
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
