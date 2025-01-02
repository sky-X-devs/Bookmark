import { useState } from "react"
import image1 from './../assets/illustration-features-tab-1.svg';
import image2 from './../assets/illustration-features-tab-2.svg';
import image3 from './../assets/illustration-features-tab-3.svg';
export function Feature (){
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
            <div className=" text-center mb-16">
                <p className=" font-bold text-6xl py-8">Feature</p>
                <p className="text-pretty">Our aim is to make it quick and easy for you to access your </p>
                <p> favourite websites. Your bookmarks sync between your</p>
                <p>devices so you can access them on the go.</p>
            </div>
            <div className="flex justify-center">
                <div className=" absolute w-[500px] flex justify-between font-semibold text-slate-500 ">
                    <button className="hover:text-red-400 hover:underline hover:underline-offset-8">Simple Bookmarking</button>
                    <button className="hover:text-red-400 hover:underline hover:underline-offset-8">Speedy Searching</button>
                    <button className="hover:text-red-400 hover:underline hover:underline-offset-8">Easy Sharing</button>
                </div>
            </div>
            <div className="relative w-[535px] bg-slate-200 h-0.5 mb-10 mt-10 flex ml-[500px]"></div>
                {featureTab.forEach(tabdata)}
        </div>
    ) 
}
function tabdata (index,data){
    console.log(data)
    console.log(index,"<- index")
    console.log('tabdata is called ');
    return(
        <div>
            <img src="data[index].image" alt="" />
            <p className="text-3xl">{data[index].title}</p>
            <p className="text-slate-300 font-balance" >{data[index].description}</p>
        </div>
    )
}
