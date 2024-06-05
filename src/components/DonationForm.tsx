import { NavLink } from 'react-router-dom';

export default function DonationForm() {
    return (
        // whole page container
        <div className='w-full'>

            {/* content container */}
            <div className='grid grid-cols-3 relative'>

                {/* Image */}
                <div className=''>
                    <div>
                        <img className='absolute top-0 left-[-13rem] h-[91vh]' src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>

                {/* Form */}
                <div className='col-span-2 flex items-center justify-center box h-[91vh] w-full bg-sky-700'>
                    <form className='flex flex-col w-[60%] gap-8'>
                        {/* headeing of form */}
                        <span className='px-8 font-bold text-white text-2xl'><h1><strong>Card Information</strong></h1></span>

                        <div>
                            
                            {/* INPUT FIELDS */}
                            <div className='flex flex-col gap-4 border-b border-slate-100 pb-8'>
                                <div className='flex gap-4 w-full'>
                                    <div className='w-full'><input className='w-full rounded-2xl text-white opacity-85 outline-none px-4 py-2 bg-sky-900 border-2 border-sky-950' type="text" placeholder='first name...'/></div>
                                    <div className='w-full'><input className='w-full rounded-2xl text-white opacity-85 outline-none px-4 py-2 bg-sky-900 border-2 border-sky-950' type="text" placeholder='last name...' /></div>
                                </div>
                                <div>
                                    <input className='w-full rounded-2xl text-white opacity-85 outline-none px-4 py-2 bg-sky-900 border-2 border-sky-950' type="text" placeholder='Card No.'/>
                                </div>
                                <div>
                                    <input className='w-full rounded-2xl text-white opacity-85 outline-none px-4 py-2 bg-sky-900 border-2 border-sky-950' type="text" placeholder='CVN'/>
                                </div>
                                <div>
                                    <input className="w-full rounded-2xl text-white opacity-85 outline-none px-4 py-2 bg-sky-900 border-2 border-sky-950" type="text" placeholder='Amount...'/>
                                </div>
                            </div>
                            {/* footer */}
                            <div className='flex justify-around pt-2'>
                                <span className='font-bold text-white text-xl'>Total</span>
                                <span className='font-bold text-white text-xl'>100000</span>
                            </div>

                            <div className='flex justify-between p-8'>
                                <span><NavLink to={"/Cases"} className='px-6 py-3 rounded-3xl bg-[#f2902f] text-[#522222] transition-all duration-100 hover:bg-amber-600 font-bold text-lg active:bg-amber-900 active:text-slate-50' type='submit'>Back</NavLink></span>
                                <span><button className='px-6 py-3 rounded-3xl bg-[#f2902f] text-[#522222] transition-all duration-100 hover:bg-amber-600 font-bold text-lg active:bg-amber-900 active:text-slate-50' type='submit'>Donate</button></span>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
