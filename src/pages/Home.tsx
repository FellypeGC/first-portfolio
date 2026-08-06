// import Button from '../components/Button'
import { Link } from 'react-router';
import StatusBadge from '../components/StatusBadge';
import TerminalCard from '../components/TerminalCard';
import { ArrowRight } from "lucide-react"

const Home = () => {
  const isAvailable: boolean = true;
  const enterpriseOrCompany: string = "?";

  return (
    <section className="text-white flex justify-center items-center gap-4 px-6 md:py-24 md:px-20 max-w-300 mx-auto flex-wrap">
      <div className="w-100"> 
        {/* If: Available for Hire ? Available for hire : Currently working at [enterprise/company name] */}
        <StatusBadge isAvailable={isAvailable} companyName={enterpriseOrCompany} />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-md ">
          Software <span className="text-[rgb(37,106,244)] text-glow">Developer</span>
        </h1>
        <p>
          Hello, World! I'm a Software Developer focused on Front-End rather than Back-End, building reliable, scalable and custom-made applications.
        </p>

        <div className="flex gap-4">
          <Link 
            to="/projects" 
            className="flex items-center justify-center w-40 h-14 text-white cursor-pointer text-base font-bold text-center bg-[rgb(37,106,244)] rounded-[10px] outline-none border-none transition-all duration-200 ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]"
          >
            View Projects
            <ArrowRight className="ml-2" />
          </Link>
          
          <Link
            to="/contact"
            className="flex items-center justify-center w-40 h-14 text-white cursor-pointer text-base font-bold text-center bg-[#0c0c0c] rounded-[10px] outline-none border border-white/10 transition-all duration-200 ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* VS Code Terminal Card */}
      <TerminalCard />
    </section>
  )
}

export default Home
{/* <Button 
  className="w-40 h-16 text-white cursor-pointer text-base font-bold text-center bg-[#0c0c0c] rounded-[10px] outline-none border-none transition-all duration-200 ease-in-out delay-0 hover:opacity-90 hover:scale-[0.95]" 
  text="Download Resume" 
/> */}