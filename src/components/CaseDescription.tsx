import { NavLink, useParams } from "react-router-dom";
import useCaseService from "../CustomHooks/useCaseService";
import { useEffect, useState } from "react";
import { CaseResponseDto } from "../Models/CaseResponseDto";

export default function CaseDescription() {
    // route hooks
    const params = useParams();

    // custom Hooks
    const {GetCaseById} = useCaseService(); 

    // Hooks
    const [activeCase, setActiveCase] = useState<CaseResponseDto>();

    useEffect(() => {
        console.log(params.id);
        GetCaseById(setActiveCase, Number.parseInt(params.id!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        // Container for the whole page
        <div className='px-20 py-4 w-full'>
            {/* header */}
            {/* container for the content */}
            <div className='flex flex-col gap-8'>

            <header>
                {/* IMAGE */}
                <div className='h-[70vh] w-full overflow-hidden'>
                    <img src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </header>

            {/* Main */}
            <main>
                {/* Content */}
                <div className='px-14'> 

                    {/* container for the content */}
                    <div>

                        {/* header of content */}
                        <div className='w-full pb-8 border-b-2 border-slate-300'>
                            <span>
                                <h1 className='text-3xl font-medium font-serif text-[#2E4049]'>Donation: {activeCase?.collectedDonations} / {activeCase?.requiredDonations} </h1>
                            </span>
                        </div>

                        {/* Description */}
                        <div>
                            <section className='py-8'>
                            {/* heading */}
                            <div>
                                <span>
                                    <h2 className='pb-4 text-2xl font-medium text-[#2E4049]'>Details about the Case</h2>
                                </span>
                            </div>
                            {/* description content */}
                                <div>
                                    <span className='inline-block'>
                                        <p className='opacity-70'>{activeCase?.description}</p>
                                    </span>
                                </div>
                            </section>

                            {/* donate button div */}
                            <div className='w-full flex justify-end'>
                                <NavLink to={"/Cases/" + params.id + "/Donation"} className='rounded-3xl px-8 py-4 font-bold text-sm text-sky-950 bg-sky-500 hover:bg-sky-700 hover:text-slate-50 hover:shadow-none transition-all duration-300 active:bg-sky-950 shadow-lg shadow-slate-400'>DONATE</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            </div>
        </div>
    )
}
