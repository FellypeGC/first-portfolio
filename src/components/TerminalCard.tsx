const TerminalCard = () => {
  return (
    <div className="relative terminal-glow max-w-120">
      <div className="bg-[#1f242d] rounded-xl border-b border-white/5 overflow-hidden">
        <div className="flex gap-4 px-4 py-3 items-center justify-between">
          <div className="flex gap-2">
            <span className="size-3 rounded-full bg-[#ff5f56]"></span>
            <span className="size-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="size-3 rounded-full bg-[#27c93f]"></span>
          </div>
          <h2 className="text-[10px] uppercase text-slate-500 font-bold">Developer.ts — Visual Studio Code</h2>
          <span className="w-10"></span>
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
            <span className="text-slate-600 select-none">7</span>
            <span>&nbsp;&nbsp;status: <span className="text-green">"Building the future"</span>,
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-slate-600 select-none">8</span>
            <span>{"}"};</span>
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
  )
}

export default TerminalCard