import type { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode; 
  text: string;
}

const Button = ({ className = "", children, text }: Props) => {
  return (
    <button className={className}>
      {children}
      {text}
    </button> // hover:bg-[#3838ff]
  )
}

export default Button