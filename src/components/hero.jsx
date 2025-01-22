import illustration from '../assets/illustration-hero.svg';
export function Hero (){

    return(
        <div className='grid grid-span-rows-2 mt-5 md:grid-cols-2 md:mt-1 '> 
            <div className=' font-semibold max-w-xl mt-5 ' >
                <p className='font-bold pl-16 py-6 text-5xl md:py-6 '>A simple Bookmark Manger</p >
                <p className='text-slate-400 text-2xl pl-16 py-6 text-wrap'>
                    A clean and simple interface to organize your favourite websites.
                     Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className='flex px-16 gap-5 md:gap-8 mt-2 justify-center'>
                    <button className='bg-indigo-500 text-white p-3 rounded shadow-md'>Get It On Chrome</button>
                    <button className='bg-slate-300 font-semibold p-3 rounded shadow-md'>Get It On Firefox</button>
                </div>
            </div>
            <div className='relative'>
                <img className=' absolute flex' src={illustration} alt={illustration} />
                <div className=' bg-indigo-500 text-4xl w-86 h-64 rounded-l-full mt-64 ml-56'></div>
            </div>
        </div>
    )
}
