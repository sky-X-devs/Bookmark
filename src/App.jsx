
import bookMarklogo from './assets/logo-bookmark.svg';
import { Hero } from './components/hero';
export default function App(){
 return(
   <div>
     <nav className='flex justify-between p-16 '>
      <img className='' src={bookMarklogo} alt={bookMarklogo} />
      <div className='grid grid-cols-4 gap-8'>
        <button className='text-gray-400 hover:text-red-400 '>FEATURE</button>
        <button className='text-gray-400 hover:text-red-400 ' >DOWNLOAD</button>
        <button className='text-gray-400 hover:text-red-400'>FAQ</button>
        <button className='text-white  bg-red-500 rounded
          hover:border-red-500 p-2 hover:text-red-500 hover:bg-white shadow-md'>LOGIN</button>  
      </div>
      </nav>
      <Hero/>
    </div>
  )
}