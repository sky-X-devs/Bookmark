import bookMarklogo from './../assets/logo-bookmark.svg';
export function Footer(){
    
    return(
        <div>
        <div className="bg-blue-500 p-24 mt-24  ">
            <p className="text-center text-2xl text-white">35,000+ Already Joined</p>
            <p className="text-4xl text-center w-[450px]  ml-[450px] text-white">Stay up-to-date with what we're doing</p>
            <label class="flex gap-2 justify-center p-2">
                <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border-xl shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1" placeholder="Enter your email address" />
                <button className="text-white bg-red-500 p-3 rounded-xl">Contact Us</button>
            </label>
        </div>
        <div className="bg-indigo-950 w-full h-36">
            <div>
                <img src={bookMarklogo} alt={bookMarklogo} className='' />
                    
            </div>
            </div>
        </div>
    )
}