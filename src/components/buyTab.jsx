import { ExchangeIcon } from "@/shared/icon";
import { useState } from "react";
import { Button, InputNumber, SelectPicker, Slider, Toggle } from "rsuite";

export default function BuyTab({handleChangeBuySellTabs, handleChangeInput, inputValue}) {
  const options = [
    {
      name: 'Limit order',
    },
    {
      name: 'Limit order 1',
    },
    {
      name: 'Limit order 2',
    },
    {
      name: 'Limit order 3',
    },
  ]
  const [option, setOption] = useState(options[0]);
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const disabled = true;
  
  return(
    <div className="px-[15px] pb-[15px]" >
      <div className="flex flex-wrap mx-[-7px]">
        <div className="w-3/5 px-[7px]">
          <p className="text-[10px] leading-[12px] text-[#888888]">Price</p>
          <InputNumber postfix="RMB" value={inputValue} onChange={(e) => handleChangeInput(e)}  />
        </div>
        <div className="w-2/5 px-[7px]">
          <p className="text-[10px] leading-[12px] text-[#888888]">Order type</p>
          <SelectPicker
            defaultValue={options.name}
            cleanable={false}
            searchable={false}
            data={options}
            labelKey="name"
            valueKey="name"
            onSelect={(_v, item) => {
              setOption(item);
              setValue('');
            }}
            style={{ width: 200 }}
          />
        </div>
      </div>
      <div className="flex flex-wrap mx-[-7px]">
        <div className="w-1/2 px-[7px] mt-[14px]">
          {/* <p className="text-[10px] leading-[12px] text-[#888888]">Amount</p> */}
          <InputNumber postfix="BTC"  placeholder="Amount" />
        </div>
        <div className="w-1/2 px-[7px] mt-[14px]">
          {/* <p className="text-[10px] leading-[12px] text-[#888888]">Amount</p> */}
          <InputNumber postfix="USD"  placeholder="Amount" />
        </div>
      </div>
      <div className="mt-[20px] mb-[14px]">
        <Slider
          progress
          defaultValue={50}
          min={0}
          step={1}
          max={100}
          graduated
          // renderMark={mark => {
          //   if ([25, 50, 75, 100].includes(mark)) {
          //     return <span>{mark}%</span>;
          //   }
          //   return null;
          // }}
          className="rs-slider-progress-custom pl-[12px]"
        />
      </div>
      <p className="text-[10px] leading-[12px] text-gray_600">0.00x Account Leverage</p>
      <ul className="flex mx-[-6px]">
        <li className="px-[6px] mt-[10px]">         
          <div className="flex items-center">
            <Toggle checked={checked} onChange={setChecked} className="toggle-custom"/>
            <p className="text-[10px] leading-[15px] text-white ml-[5px]">Reduce Only</p>
          </div>
        </li>
        <li className="px-[6px] mt-[10px]">
          <div className="flex items-center">
            <Toggle checked={checked1} onChange={setChecked1} className="toggle-custom"/>
            <p className="text-[10px] leading-[15px] text-white ml-[5px]">POST</p>
          </div>
        </li>
        <li className="px-[6px] mt-[10px]">
          <div className="flex items-center">
            <Toggle checked={checked2} onChange={setChecked2} className="toggle-custom"/>
            <p className="text-[10px] leading-[15px] text-white ml-[5px]">IOC</p>
          </div>
        </li>
      </ul>
      <div className="flex mx-[-6px]">
        <div className="px-[6px] mt-[10px] flex-grow">
          <Button className={`rs-btn-custom w-full ${disabled && 'disabled'}`} color="green" appearance="primary">Buy</Button>
        </div>
        <div className="px-[6px] mt-[10px] w-[50px]">
          <Button color="red" appearance="primary" className="rs-btn-custom w-full" onClick={() => handleChangeBuySellTabs('sell-btc-perp')}>
            <ExchangeIcon width={14} height={10} color={'#000000'} />
          </Button>
        </div>
      </div>
    </div>
  )
}