import { useLayoutEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import { CauseResponseDto } from "../Models/CauseResponseDto";
import useCauseBankService from "../CustomHooks/useCauseBankService";

export default function CauseDescription() {
    const [cause, setCause] = useState<CauseResponseDto | null>(null);
    // router hooks
    const params = useParams();

    // custom hooks
    const { GetCauseById } = useCauseBankService();

    // useEffect to get the id from the url
    useLayoutEffect(() => {
        // getting the id from the url via params
        GetCauseById(setCause, Number.parseInt(params.id!));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        // Container for the whole page
        <div className='px-20 py-4 w-full'>
            {/* header */}
            {/* container for the content */}
            <div className='flex flex-col gap-8'>

                <header>
                    {/* IMAGE */}
                    <div className='h-[70vh] w-full overflow-hidden'>
                        <img src="https://papercrush.pk/wp-content/uploads/2019/07/IMG_0331-3-scaled.jpg" alt="" />
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
                                    <h1 className='text-3xl font-medium font-serif text-[#2E4049]'>Donate For {cause?.causeTitle}</h1>
                                </span>
                            </div>

                            {/* Description */}
                            <div>
                                <section className='py-8 border-b border-slate-200'>
                                    {/* heading */}
                                    <div>
                                        <span>
                                            <h2 className='pb-4 text-2xl font-medium text-[#2E4049]'>Cause Description</h2>
                                        </span>
                                    </div>
                                    {/* description content */}
                                    <div>
                                        <span className='inline-block'>
                                            <p className='opacity-70'>{cause?.causeDescription}</p>
                                        </span>
                                    </div>
                                </section>

                                {/* donate button div */}
                                <div className='w-full flex justify-end py-4'>
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
