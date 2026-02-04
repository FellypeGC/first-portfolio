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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(37,106,244)] opacity-75"></span>
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
        <div className="bg-[#1f242d] rounded-xl border-b border-white/5 overflow-hidden w-135">
          <div className="flex gap-4 px-4 py-3 items-center justify-between">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-[#ff5f56]"></span>
              <span className="size-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="size-3 rounded-full bg-[#27c93f]"></span>
            </div>
            <h2 className="text-[10px] uppercase text-slate-500 font-bold">Developer.ts — Visual Studio Code</h2>
            <div className="w-10"></div>
          </div>
          <div className="p-6 font-mono bg-[#161B22] overflow-x-auto">
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">1</span>
              <span>
                <span className="text-purple">import</span> {"{ "} 
                <span>Developer</span> {"} "}
                <span>from</span>{" "}
                <span className="text-green">"@core/types"</span>;
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">2</span>
              <span>&nbsp;</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">3</span>
              <span>
                <span className="text-purple">const</span> {" "} 
                <span className="text-blue-400">Fellype</span>
                <span>: Developer =</span> {" {"}
                <span></span>
                <span className="text-green"></span>
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">4</span>
              <span>&nbsp;&nbsp;name: <span className="text-green">"Fellype Gabriel"</span>,
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">5</span>
              <span>&nbsp;&nbsp;role: <span className="text-green">"Software Developer"</span>,
              </span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">6</span>
              <span>&nbsp;&nbsp;focus: [<span className="text-green">"React.js"</span>, <span className="text-green">"TypeScript"</span>,
              <span className="text-green"> "Tailwind CSS"</span>, <span className="text-green"> "Node.js"</span>, <span className="text-green"> "PostgreSQL"</span>],</span>
            </div>

            <div className="flex gap-4">
              <span className="text-slate-600 select-none">6</span>
              <span>&nbsp;&nbsp;focus: [<span className="text-green">'Typescript'</span>, <span className="text-green">'Next.js'</span>, <span className="text-green">'Clean Architecture'</span>],</span>
            </div>
            <div className="flex gap-4">
              <span className="text-slate-600 select-none">7</span>
              <span>&nbsp;&nbsp;status: <span className="text-green">"Building the future"</span>,
              </span>
            </div>

            {/* Última linha */}
            <div className="flex gap-4 mt-2">
              <span className="text-slate-600 select-none">9</span>
              <span className="animate-pulse inline-block w-2 h-5 bg-[rgb(37,106,244)]"></span>
            </div>
          </div>
        </div>

        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-[rgb(37,106,244)]/10 rounded-xl blur-3xl" data-alt="Abstract soft blue glow pattern"></div>
      </div>

      
    </section>
    
  )
}

export default Home
{/* <Button 
  className="w-40 h-16 text-white cursor-pointer text-base font-bold text-center bg-[#0c0c0c] rounded-[10px] outline-none border-none transition-all duration-200 ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]" 
  text="Download Resume" 
/> */}