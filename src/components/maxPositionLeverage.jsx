import { Slider } from "rsuite";

export default function MaxPositionLeverage() {
  return (
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
  )
}