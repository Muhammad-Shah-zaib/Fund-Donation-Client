import { NavLink, useParams } from "react-router-dom";

export default function CaseDescription() {
    const params = useParams();

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
                                <h1 className='text-3xl font-medium font-serif text-[#2E4049]'>Donation: 5,000 / 13,000 </h1>
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
                                        <p className='opacity-70'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur eveniet quis odit ut cum officiis natus molestiae nesciunt cupiditate iusto vitae harum autem facere at laborum, illo asperiores ratione nulla aspernatur, ea, quas ab. Aliquid, odio quisquam. Repellendus assumenda voluptatem in cum minus repudiandae magni exercitationem consequuntur. Repellendus error aperiam quibusdam, repudiandae ea voluptatem est minus sequi dicta similique amet laboriosam harum quia veniam ut tenetur non quis blanditiis qui placeat at eaque. Fuga itaque asperiores aliquam eos ab recusandae exercitationem veniam quam non omnis ullam eveniet, nulla cum deserunt ea aut natus. Tenetur autem ipsam officia exercitationem eos aperiam quod praesentium sint aspernatur. Nisi placeat excepturi repellendus fugiat sint maiores officia est ad adipisci, culpa provident, beatae a deserunt quae quaerat ut quasi laboriosam sed ea dolore pariatur accusantium. Voluptate eum sit libero porro pariatur hic quia cum vel saepe. Tempora fuga quaerat atque quam impedit repellendus dolores in omnis sed voluptatem, praesentium corporis ducimus voluptas similique sit possimus cum neque ipsam nulla excepturi alias quos deserunt magnam? Temporibus quisquam blanditiis nam quis facilis eos consequatur quod labore. Eveniet deleniti, accusamus repudiandae voluptatum voluptatem officia quis a hic sed corrupti natus, maxime perspiciatis tenetur dolorem laborum iure numquam esse?</p>
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
