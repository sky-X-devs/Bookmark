import { useState } from "react"
import  IconDown from './../ions/down-chevron-svgrepo-com.svg';
export function FAQ(){
    const [ faqtoggle ,setFAQtoggle] = useState(false);
    const [ q2 , setQ2 ] = useState(false);
    const [ q3 , setQ3 ] = useState(false);
    const [ q4 , setQ4 ] = useState(false);

    return(
        <div className="p-4 ">
            <p className="text-4xl text-center  p-8">Frequently Asked Questions</p>
            <p className="w-[500px] h-16 font-pretty ml-[500px] text-center">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            <div className="w-[650px] mx-[450px] text-slate-500 pt-8 "> 
                <button className="flex hover:text-red-500 " onClick={()=>{setFAQtoggle(c=>!c)}}>What is Bookmark?<img src={IconDown} alt={IconDown} className={`w-8 h-6 ml-[480px] ${faqtoggle?'rotate-180':'rotate-0'} transition duration-500  `} />
                </button>
                {faqtoggle&&<p className="transition duration-500 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>}
                <p className="w-full h-0.5 bg-slate-400 mt-4"></p>
            </div>
            <div className="w-[650px] mx-[450px] text-slate-500 pt-8  "> 
            <button className="flex hover:text-red-500 text-nowrap" onClick={()=>{setQ2(c=>!c)}}>How can I request a new browser?<img src={IconDown} alt={IconDown} className={`w-8 h-6 ml-[374px] ${q2?'rotate-180':'rotate-0'} transition duration-500  `} />
            </button>
            {q2&&<p className="transition duration-500 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>}
            <p className="w-full h-0.5 bg-slate-400 mt-4"></p>
            </div>
            <div className="w-[650px] mx-[450px] text-slate-500 pt-8 "> 
                <button className="flex hover:text-red-500 text-nowrap" onClick={()=>{setQ3(c=>!c)}}>Is ther a mobile app?<img src={IconDown} alt={IconDown} className={`w-8 h-6 ml-[470px] ${q3?'rotate-180':'rotate-0'} transition duration-500  `} />
                </button>
                {q3&&<p className="transition duration-500 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>}
                <p className="w-full h-0.5 bg-slate-400 mt-4"></p>
            </div>
            <div className="w-[650px] mx-[450px] text-slate-500 pt-8 "> 
                <button className="flex hover:text-red-500 text-nowrap" onClick={()=>{setQ4(c=>!c)}}>What about other Chromium browsers?<img src={IconDown} alt={IconDown} className={`w-8 h-6 ml-[340px] ${q4?'rotate-180':'rotate-0'} transition duration-500  `} />
                </button>
                {q4&&<p className="transition duration-500 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>}
                <p className="w-full h-0.5 bg-slate-400 mt-4"></p>
            </div>

        </div>
    )

}
