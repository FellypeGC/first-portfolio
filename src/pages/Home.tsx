import Button from '../components/Button'

const Home = () => {
  return (
    <div className="text-white h-screen flex w-full justify-center items-center gap-4">
      <h1 className="text-4xl">Portfolio Tech Stack is being updated...</h1>
      <Button 
        className="w-40 h-16 text-white cursor-pointer text-base font-bold text-center bg-[#0c0c0c] rounded-[10px] outline-none border-none transition-all duration-200 ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]" 
        text="Download Resume" 
      />
    </div>
  )
}

export default Home