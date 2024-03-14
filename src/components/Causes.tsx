import { useNavigate } from "react-router-dom";

export default function Causes() {
    const navigate = useNavigate();

    // function to navigate to desired url
    const MoveToCaseDescription = (id: number) => {
        navigate("/Causes/" + id);
    }

    return (
        // Container
        <div className="w-full relative">
            {/* Content on the IMAGE */}
            <header>
                <div className="absolute inset-0 left-40 z-10 flex h-[91vh] items-center">
                    <span className="flex flex-col gap-2 text-white font-medium font-serif text-3xl">
                        Donation
                        <strong className="text-5xl dont-bold">Fund Raising</strong>
                    </span>
                </div>
                {/* IMAGE  */}
                <div>
                    <div className="brightness-50 max-h-[91vh] overflow-hidden ">
                    <img className="h-[91vh] w-full" src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="np img" />
                    </div>
                
                </div>
            </header>


            {/* Caes Cards */}
            <main>
                {/* container of cards with grid */}
                <div className="py-8 px-20 grid grid-cols-3 gap-4">
                    {/* cards goes here */}
                    <div onClick={() => MoveToCaseDescription(1)} className="flex flex-col gap-2 h-[70vh] hover:shadow-none transition-shadow duration-300 shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[45%] w-full">
                            <img className="w-full h-full" src="https://papercrush.pk/wp-content/uploads/2019/07/IMG_0331-3-scaled.jpg" alt="no img" />
                        </span>

                        {/* content */}
                        <span className="border-b-2 border-slate-300 mx-4 py-3 text-lg font-medium font-serif"><span className="text-base opacity-75 text-slate-950 font-sans">Organized By: &nbsp;</span><strong>NSS</strong></span>

                        {/* Short Description */}
                        <span className="px-4">
                            <p className="font-medium text-xl text-slate-800">NSS: Mess Fee</p>
                            <p className="opacity-75">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur voluptates neque laboriosam delectus.
                            </p>
                        </span>

                        {/* Donate button */}
                        <div className="flex gap-3 justify-end px-8">
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>

                    </div>

                    <div onClick={() => MoveToCaseDescription(1)} className="flex flex-col gap-2 h-[70vh] hover:shadow-none transition-shadow duration-300 shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[45%] w-full">
                            <img className="w-full h-full" src="https://papercrush.pk/wp-content/uploads/2019/07/IMG_0331-3-scaled.jpg" alt="no img" />
                        </span>

                        {/* content */}
                        <span className="border-b-2 border-slate-300 mx-4 py-3 text-lg font-medium font-serif"><span className="text-base opacity-75 text-slate-950 font-sans">Organized By: &nbsp;</span><strong>NMB</strong></span>

                        {/* Short Description */}
                        <span className="px-4">
                            <p className="font-medium text-xl text-slate-800">NVB Marathon</p>
                            <p className="opacity-75">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur voluptates neque laboriosam delectus.
                            </p>
                        </span>

                        {/* Donate button */}
                        <div className="flex gap-3 justify-end px-8">
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>

                    </div>

                    <div onClick={() => MoveToCaseDescription(1)} className="flex flex-col gap-2 h-[70vh] hover:shadow-none transition-shadow duration-300 shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[45%] w-full">
                            <img className="w-full h-full" src="https://papercrush.pk/wp-content/uploads/2019/07/IMG_0331-3-scaled.jpg" alt="no img" />
                        </span>

                        {/* content */}
                        <span className="border-b-2 border-slate-300 mx-4 py-3 text-lg font-medium font-serif"><span className="text-base opacity-75 text-slate-950 font-sans">Organized By: &nbsp;</span><strong>NMB</strong></span>

                        {/* Short Description */}
                        <span className="px-4">
                            <p className="font-medium text-xl text-slate-800">NVB Marathon</p>
                            <p className="opacity-75">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur voluptates neque laboriosam delectus.
                            </p>
                        </span>

                        {/* Donate button */}
                        <div className="flex gap-3 justify-end px-8">
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>

                    </div>


                    <div onClick={() => MoveToCaseDescription(1)} className="flex flex-col gap-2 h-[70vh] hover:shadow-none transition-shadow duration-300 shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[45%] w-full">
                            <img className="w-full h-full" src="https://papercrush.pk/wp-content/uploads/2019/07/IMG_0331-3-scaled.jpg" alt="no img" />
                        </span>

                        {/* content */}
                        <span className="border-b-2 border-slate-300 mx-4 py-3 text-lg font-medium font-serif"><span className="text-base opacity-75 text-slate-950 font-sans">Organized By: &nbsp;</span><strong>NMB</strong></span>

                        {/* Short Description */}
                        <span className="px-4">
                            <p className="font-medium text-xl text-slate-800">NVB Marathon</p>
                            <p className="opacity-75">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur voluptates neque laboriosam delectus.
                            </p>
                        </span>

                        {/* Donate button */}
                        <div className="flex gap-3 justify-end px-8">
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>

                    </div>


                    <div onClick={() => MoveToCaseDescription(1)} className="flex flex-col gap-2 h-[70vh] hover:shadow-none transition-shadow duration-300 shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[45%] w-full">
                            <img className="w-full h-full" src="https://papercrush.pk/wp-content/uploads/2019/07/IMG_0331-3-scaled.jpg" alt="no img" />
                        </span>

                        {/* content */}
                        <span className="border-b-2 border-slate-300 mx-4 py-3 text-lg font-medium font-serif"><span className="text-base opacity-75 text-slate-950 font-sans">Organized By: &nbsp;</span><strong>NMB</strong></span>

                        {/* Short Description */}
                        <span className="px-4">
                            <p className="font-medium text-xl text-slate-800">NVB Marathon</p>
                            <p className="opacity-75">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur voluptates neque laboriosam delectus.
                            </p>
                        </span>

                        {/* Donate button */}
                        <div className="flex gap-3 justify-end px-8">
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>

                    </div>


                    

                    

                    
                    
                    {/* END OF Main div container */}
                </div>
            </main>
        </div>
    )
}
