import { NavLink } from "react-router-dom";
import LandingFooter from "../shared/components/landing-footer";



export default function Landing() {
    changeRootBgColor();    
    return (
        <>
        {/* CONTAINER */}
        <div className="relative h-[91vh] w-[100vw]">
        {/* Loading he nvabar first from children */}
            {/* Container */}
            <div className="h-[88vh] w-[100vw] bg-[#0C4A6E] grid grid-cols-12">
                {/* picture */}
                <div className="relative overflow-hidden col-span-7">
                    {/* For image */}
                    <div className="z-10 overflow-hidden rotate-[-45deg] rounded-[50%] h-[91vh] w-[80vw] absolute top-0 left-[-18rem]">
                        {/* Image goes here */}
                        <img className="rotate-[25deg] h-[110vh] w-[110vw]" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img" />
                    </div>

                    <div className="rotate-[-70deg] bg-[#f2902f] w-[45vw] h-[70vh] absolute bottom-[-10rem] left-[5rem]" style={{borderBottomRightRadius: "0", borderTopRightRadius: "100%", borderBottomLeftRadius: "100%"}}>
                        
                    </div>

                </div>

                {/* content */}
                <div className="col-span-5 flex flex-col gap-4 max-w-[70%] mt-20 text-white">
                    <strong className="text-4xl font-black font-sans cursor-default">DONATE FOR THE BETTERMENT OF SOCIETY</strong>
                    <p className="text-lg opacity-60 cursor-default">
                        We are dedicated to help the society in every possible way. We are here to help you to help the society.
                    </p>
                    <div className="flex justify-center">
                        <NavLink to={"/Cases"} className=" px-4 py-2 text-lg font-medium bg-amber-600 text-amber-950  rounded-3xl shadow-lg hover:shadow-none hover:bg-amber-700 transition-all duration-200">Make a Contribution</NavLink>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="mb-1 z-30 absolute bottom-0  left-0 w-full flex justify-center">
                <LandingFooter/>
            </div>
        </div>
        </>
    )
}


function changeRootBgColor(){
    const root = document.getElementById("root") as HTMLElement;
    root.classList.add("bg-[#0C4A6E]");
    root.classList.remove("bg-white");
}