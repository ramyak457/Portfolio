import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar(){
    const[mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div>
                        <span className="text-sm sm:text-xl md:text-2xl font-medium space-x-1">
                            <span className="font-extrabold bg-gradient-to-r from-indigo-500 to-teal-400 text-transparent bg-clip-text">Ramya</span>
                            <span className="font-extrabold bg-gradient-to-r from-teal-400 to-indigo-400 text-transparent bg-clip-text">Kumar</span>
                        </span>
                    </div>

                    {/* Nav links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#home" className="text-white hover:text-blue-400 text-sm lg:text-base">Home</a>
                        <a href="#about" className="text-white hover:text-blue-400 text-sm lg:text-base">About</a>
                        <a href="#projects" className="text-white hover:text-blue-400 text-sm lg:text-base">Projects</a>
                        <a href="#skills" className="text-white hover:text-blue-400 text-sm lg:text-base">Skills</a>
                        <a href="#contacts" className="text-white hover:text-blue-400 text-sm lg:text-base">Contacts</a>
                    </div>

                    <button className="md:hidden p-3 text-white hover:text-blue-400" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
                        {mobileMenuIsOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" /> }     
                    </button>
                </div>
            </div>  

            {mobileMenuIsOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-right">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a href="#home" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:text-blue-400 text-sm lg:text-base">Home</a>
                        <a href="#about" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:text-blue-400 text-sm lg:text-base">About</a>
                        <a href="#projects" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:text-blue-400 text-sm lg:text-base">Projects</a>
                        <a href="#skills" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:text-blue-400 text-sm lg:text-base">Skills</a>
                        <a href="#contacts" onClick={() => setMobileMenuIsOpen(false)} className="block text-white hover:text-blue-400 text-sm lg:text-base">Contacts</a>
                    </div>
                </div>
            )}        
        </nav>
    );
}