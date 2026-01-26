import React from 'react'

type Props = {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="w-40 h-16 text-white cursor-pointer text-base font-bold text-center 
    bg-[#0c0c0c] rounded-[10px] outline-none border-none transition-all duration-200 
    ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]">{text}</button> // hover:bg-[#3838ff]
  )
}

export default Button