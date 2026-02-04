// import Button from '../components/Button'

const Home = () => {
  const isAvailable: boolean = true;
  const enterpriseOrCompany: string = "?";

  return (
    <section className="text-white flex justify-center items-center gap-4 md:py-24 max-w-300 mx-auto px-6 md:px-20">
      {/* If: Available for Hire ? Available for hire : Currently working at [enterprise/company name] */}
      <div>
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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-md ">
          Software <span className="text-[rgb(37,106,244)] text-glow">Developer</span>
        </h1>
      </div>

      <div className="relative terminal-glow">
        <div className="bg-[#1f242d] w-full rounded-xl border-b border-white/5">
          <div className="flex gap-4 px-4 py-3 items-center justify-between">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-[#ff5f56]"></span>
              <span className="size-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="size-3 rounded-full bg-[#27c93f]"></span>
            </div>
            <h2 className="text-[10px] uppercase">Developer.ts — Visual Studio Code</h2>
            <div className="w-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
{/* <Button 
  className="w-40 h-16 text-white cursor-pointer text-base font-bold text-center bg-[#0c0c0c] rounded-[10px] outline-none border-none transition-all duration-200 ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]" 
  text="Download Resume" 
/> */}