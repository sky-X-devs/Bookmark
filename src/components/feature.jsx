import { useState } from "react"
import image1 from './../assets/illustration-features-tab-1.svg';
import image2 from './../assets/illustration-features-tab-2.svg';
import image3 from './../assets/illustration-features-tab-3.svg';
export function Feature (){
    const [ index , setIndex ] = useState(0);
    const featureTab = [{   image:image1,
        title:'Bookmark in one click',
        description:'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },{image:image2,
        title:'Intelligent search',
        description:'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },{image:image3,
        title:'Share your bookmarks',
        description:'Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.'
    }];

    return(
        <div>
            <div className=" text-center mb-16 ">
                <p className=" font-bold text-3xl md:text-6xl py-8">Feature</p>
                <p className="text-pretty text-slate-800">Our aim is to make it quick and easy for you to access your </p>
                <p> favourite websites. Your bookmarks sync between your</p>
                <p>devices so you can access them on the go.</p>
            </div>
            <div className="flex justify-center ">
                <div className=" md:absolute w-[500px] grid md:grid-cols-3 grid-rows-3 font-semibold text-slate-500 space-y-2 ">
                    <button className="hover:text-red-400 hover:underline underline underline-offset-8 "onClick={()=>{setIndex(0)}} >Simple Bookmarking</button>
                    <button className="hover:text-red-400 hover:underline underline underline-offset-8"onClick={()=>{setIndex(1)}} >Speedy Searching</button>
                    <button className="hover:text-red-400 hover:underline underline underline-offset-8"onClick={()=>{setIndex(2 )}}>Easy Sharing</button>
                </div>
            </div>
                    
            <TabData  featureTab= {featureTab[index]}/>
        </div>  
    ) 
}
function TabData ({featureTab}){
        
    
    return(
        <div className="grid grid-span-rows-2  md:grid-cols-2 md:space-y-20 space-y-5" >   
            <div className=' hidden md:block bg-indigo-500 text-4xl w-[600px] h-64 rounded-r-full md:mt-64  '></div>        
                <div className="md:absolute flex justify-center md:ml-32 ">    
                    <img className=' ' src={featureTab.image} alt={image1} />
                </div>     
                <div className=" md:w-[450px] space-y-5 " > 
                    <p className="font-semibold text-4xl text-center ">{featureTab.title}</p>
                    <div className=" w-96 md:w-[450px] ml-48 md:ml-0">
                        <p className="pretty text-center text-slate-400">{featureTab.description}</p>
                    </div>    
                    <div className="flex justify-center">
                        <button className="bg-indigo-500 rounded  px-5 py-3 my-8 font-bold text-white border-2 border-indigo-500 hover:text-indigo-500 hover:bg-white hover:border-indigo-500 hover:border-solid">
                            More Info   
                        </button>
                    </div>
                </div>       
            
        </div>
    )
}

