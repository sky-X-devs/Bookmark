import { useState } from "react"
import  IconDown from './../ions/down-chevron-svgrepo-com.svg';
export function FAQ(){
    const [ faqtoggle ,setFAQtoggle] = useState(false);
    return(
        <div>
            <p>Frequently Asked Questions</p>
            <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            <div className="w-[650px] mx-[450px] bg-red-200 " >
            <button className="flex" onClick={()=>{setFAQtoggle(c=>!c)}}>What is Bookmark?<img src={IconDown} alt={IconDown} className="w-8 h-6 ml-[480px] " />
            </button>
            {faqtoggle&&<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>}
            </div>
        </div>
    )

}
