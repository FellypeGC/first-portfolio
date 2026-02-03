import Button from '../components/Button'

const Home = () => {
  const isAvailable: boolean = true;
  const enterpriseOrCompany: string = "?";

  return (
    <div className="text-white h-screen flex w-full justify-center items-center gap-4">
      {/* If: Available for Hire ? Available for hire : Currently working at [enterprise/company name] */}
      {isAvailable ? (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Hire
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(37,106,244,0.1)] text-[rgb(37,106,244)] border border-[rgba(37,106,244,0.2)] text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              {/* O pulso usa a cor exata com opacidade para o efeito de rastro */}
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(37,106,244)] opacity-75"></span>
              {/* A bolinha central sólida */}
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(37,106,244)]"></span>
            </span>
            Working at {enterpriseOrCompany}
          </div>
        )
      }

      <h1 className="text-4xl">Portfolio Tech Stack is being updated...</h1>
    </div>
  )
}

export default Home
{/* <Button 
  className="w-40 h-16 text-white cursor-pointer text-base font-bold text-center bg-[#0c0c0c] rounded-[10px] outline-none border-none transition-all duration-200 ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]" 
  text="Download Resume" 
/> */}