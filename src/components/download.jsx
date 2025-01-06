import chrome from './../ions/logo-chrome.svg';
import firefox from './../ions/logo-firefox.svg';
import opera from './../ions/logo-opera.svg';


export function Download(){

    return(
        <div className="p-8">
            <p className="font-semibold text-4xl py-5 px-[500px]">Download the extension</p>
            <p className="w-[500px] h-16 font-pretty ml-[450px] text-center">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>            
            <div className="px-64 grid grid-cols-3 gap-10 py-8 ">
                <div className="w-72 h-80 rounded shadow-xl ">
                    <img src={chrome} alt={chrome} className='px-20' />   
                    <p className='font-bold text-center p-3'>Add to Chrome</p>
                    <p className='text-center text-slate-400'>Minimum Version 62</p>
                    <button className="bg-indigo-500 rounded-xl px-5 py-3 my-3 mx-8 font-bold text-white border-2 border-indigo-500 hover:text-indigo-500 hover:bg-white hover:border-indigo-500 hover:border-solid ">
                        Add & Install Extension   </button>
                </div>   
                <div className="w-72 h-80 rounded shadow-xl mt-2">
                    <img src={firefox} alt={firefox} className='px-20' />  
                    <p className='font-bold text-center p-3'>Add to Chrome</p> 
                    <p className='text-center text-slate-400'>Minimum Version 55</p> 
                    <button className="bg-indigo-500 rounded-xl px-5 py-3 my-3 mx-8 font-bold text-white border-2 border-indigo-500 hover:text-indigo-500 hover:bg-white hover:border-indigo-500 hover:border-solid ">
                        Add & Install Extension   </button>

                </div>
                <div className="w-72 h-80 rounded shadow-xl mt-4">
                    <img src={opera} alt={opera} className='px-20' /> 
                    <p className='font-bold text-center p-3'>Add to Chrome</p>
                    <p className='text-center text-slate-400'>Minimum Version 46</p>
                    <button className="bg-indigo-500 rounded-xl px-5 py-3 my-3 mx-8 font-bold text-white border-2 border-indigo-500 hover:text-indigo-500 hover:bg-white hover:border-indigo-500 hover:border-solid ">
                        Add & Install Extension   </button>
    
                </div>
            </div>
        </div>
    )
}
