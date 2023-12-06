import { useState } from "react"

const ItemAcordion = ({ bgColor, icon, textTitle, textInfo, height }) => {

  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div onClick={() => setIsActive(!isActive)}
        className={`bg-[${bgColor}] flex flex-row items-center p-4 h-28 cursor-pointer`}>
        <img
          className="border-r-2 w-14 pr-2 border-[#021731]"
          src={icon}
          alt="servicios"
        />
        <p
          className="text-[#021731] text-sm md:text-base font-extrabold leading-snug text-justify p-4"
        >
          {textTitle}
        </p>
      </div>
      <div
        className={`transition-all overflow-hidden ${isActive ? `h-${height}` : 'h-0'}`}
      >
        <div className="p-4 text-center">
          <p>{textInfo}</p>
        </div>
      </div>
    </>

  )
}

export { ItemAcordion }