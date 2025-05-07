

function Navbar() {
    
  return (
    <nav className="bg-[rgba(243,238,234,1)] text-[rgba(125,113,94,1)] shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <a href="#" className="text-xl font-bold relative group inline-block font-[cursive] ">
        Her<span className="text-[rgb(232,138,196)]" >Code</span>Hub
      
      <span class="absolute left-0 right-0 bottom-0 h-[2px] bg-[rgba(125,113,94,1)] transform scale-x-0 origin-center transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
      </a>
      <div className="hidden md:flex space-x-4">
        <a href="#skills" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[rgba(125,113,94,0.1)]">
          Skills
        </a>
        <a href="#projects" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[rgba(125,113,94,0.1)]">
          Link
        </a>
        <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[rgba(125,113,94,0.1)]">
          Contact
        </a>
      </div>
    </div>
  </nav>
  
  );
}

export default Navbar;
