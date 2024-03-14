import { useNavigate } from "react-router-dom";

export default function Cases() {
    // using router hook to navigate programatically
    const navigate = useNavigate();


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
                    <div onClick={() => MoveToCaseDescription(1)} className="flex flex-col gap-4 h-[60vh] hover:shadow-none transition-shadow duration-300 shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 h-[60vh]  shadow-lg shadow-slate-400">

                        {/* image */}
                        <span className="h-[60%] w-full bg-blue-500">
                            <img src="" alt="" />
                        </span>

                        {/* content */}
                        <span className="mt-4 text-center font-serif">Mess Fee: Donate a needy person here</span>
                        <div className="flex gap-3 justify-between px-8">
                            <span><button className="rounded-3xl bg-slate-200 hover:bg-slate-400 active:bg-slate-600 font-medium shadow-lg hover:shadow-none px-4 py-2 ">Donation: 5000 / 15000</button></span>
                            <span><button className="px-4 py-2 shadow-md shadow-slate-400 active:shadow-none rounded-3xl bg-sky-600 text-sky-950 font-bold hover:bg-sky-700 hover:text-slate-100 active:bg-slate-800 transition-all duration-200 border-none outline-none">Donate</button></span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

function changeBodyBackground (){
    const body = document.getElementById('root');

    body?.classList.add("bg-white");
    body?.classList.remove("bg-[#0C4A6E]");
}
