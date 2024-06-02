import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCaseService from "../CustomHooks/useCaseService";
import { CaseResponseListDto } from "../Models/CaseResponseDto";

export default function Cases() {
    // using router hook to navigate programatically
    const navigate = useNavigate();

    // custom Hooks
    const { GetAllVerfiedCases } = useCaseService();

    // Hooks
    const [caseList, setCaseList] = useState<CaseResponseListDto>([]);
    useEffect(() => {
        GetAllVerfiedCases(setCaseList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    changeBodyBackground();
    // function to navigate to desired url
    const MoveToCaseDescription = (id: number) => {
        navigate("/Cases/" + id);
    }

    return (
        // Container
        <div className="w-full relative">
            {/* Content on the IMAGE */}
            <header>
                <div className="absolute inset-0 left-40 z-10 flex h-[91vh] items-center">
                    <span className="flex flex-col gap-2 text-white font-medium font-serif text-3xl">
                        Donation
                        <strong className="text-5xl dont-bold">Cases</strong>
                    </span>
                </div>
                {/* IMAGE  */}
                <div>
                    <div className="brightness-50 max-h-[91vh] overflow-hidden ">
                        <img className="h-[91vh] w-full" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="np img" />
                    </div>

                </div>
            </header>


            {/* Caes Cards */}
            <main>
                {/* container of cards with grid */}
                <div className="py-8 px-20 grid grid-cols-3 gap-4">
                    {/* cards goes here */}
                    {caseList.map((c, i) => (
                        <div key={i} onClick={() => MoveToCaseDescription(c.caseId)} className="flex flex-col gap-4 h-[60vh] hover:shadow-none transition-shadow duration-300 shadow-lg shadow-slate-400">

                            {/* image */}
                            <span className="h-[60%] w-full bg-blue-500">
                                <img src="" alt="" />
                            </span>

                            {/* content */}
                            <div className="flex px-1 flex-col justify-between min-h-[100px]">
                                <span className="mt-4 text-center"><span className="text-base font-medium text-slate-800">{c.title}: </span> &nbsp;&nbsp;&nbsp;{c.description.substring(0,21)}...</span>
                                <div className="flex gap-3 justify-between px-8">
                                    <span className="relative group">
                                        <button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">{c.collectedDonations} / {c.requiredDonations}</button>
                                        <span className=" invisible group-hover:visible group-hover:top-[-1.5rem] transition-all duration-100 absolute top-[-1rem] left-1 bg-blue-50 px-2 py-0.5 rounded-3xl font-bold font-mono">Donations</span>
                                    </span>
                                    <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </main>
        </div>
    )
}

function changeBodyBackground() {
    const body = document.getElementById('root');

    body?.classList.add("bg-white");
    body?.classList.remove("bg-[#0C4A6E]");
}
