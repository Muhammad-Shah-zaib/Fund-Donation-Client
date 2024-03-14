import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        // constainer
        <div className="z-10 bg-sky-950 flex justify-between px-16 py-4 text-slate-50">
            {/* left side ~ FOR LOGO */}
            <div><strong>DUMMY LOGO</strong></div>

            {/* right side ~ FOR NAVIGATION */}
            <div className="flex gap-8 items-center">
                <NavLink to={"/"} className="hover:underline underline-offset-2 text-base opacity-80 hover:opacity-100 transition-all duration-200 font-medium cursor-pointer hover:text-white text-slate-100">Home</NavLink>
                <NavLink to={"/Cases"} className="hover:underline underline-offset-2 text-base opacity-80 hover:opacity-100 transition-all duration-200 font-medium cursor-pointer hover:text-white text-slate-100">Cases</NavLink>
                <NavLink to={"/Causes"} className="hover:underline underline-offset-2 text-base opacity-80 hover:opacity-100 transition-all duration-200 font-medium cursor-pointer hover:text-white text-slate-100">Causes</NavLink>
                <NavLink to={"/About-Us"} className="hover:underline underline-offset-2 text-base opacity-80 hover:opacity-100 transition-all duration-200 font-medium cursor-pointer hover:text-white text-slate-100">About Us</NavLink>
                {/* BUTTONS FOR FUNDRAISE AND DONATION */}
                <div className="flex gap-2">
                    <span><Link to={'/Causes'} className=" px-4 py-2 rounded-3xl bg-sky-800 font-medium transition-all duration-200 hover:bg-sky-900 text-base">Fundraise</Link></span>
                    <span><Link to={'/Cases'} className="px-4 py-2 rounded-3xl bg-[#f2902f] text-[#522222] transition-all duration-200 hover:bg-amber-600 font-medium text-base">Donate</Link></span>
                </div>
            </div>
        </div>
    )
}


