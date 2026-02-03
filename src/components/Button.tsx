
type Props = {
  className: string;
  text: string;
}

const Button = ({ className = "", text }: Props) => {
  return (
    <button className={className}>{text}</button> // hover:bg-[#3838ff]
  )
}

export default Button