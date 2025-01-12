import { useRef } from 'react';
import bookMarklogo from './assets/logo-bookmark.svg';
import { Hero } from './components/hero';
import { Feature } from './components/feature';
import { Download } from './components/download';
import { FAQ } from './components/askedQuestion';
import { Footer } from './components/footer';

const NAVIGATION_ITEMS = [
  { id: 'features', label: 'FEATURES', Component: Feature },
  { id: 'downloads', label: 'DOWNLOAD', Component: Download },
  { id: 'faq', label: 'FAQ', Component: FAQ }
];
const [navtoggle, setNavToggle] = useState(false);

export default function App() {
  const refs = {
    features: useRef(null),
    downloads: useRef(null),
    faq: useRef(null)
  };

  const handleScroll = (sectionId) => {
    refs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex flex-col md:flex-row justify-between p-4 md:p-16 items-center">
        <img 
          className="h-8 mb-4 md:mb-0" src={bookMarklogo}  alt="Bookmark Logo"   />
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {NAVIGATION_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-gray-400 hover:text-red-400 transition-colors"  >
              
              {label}
            </button>
          ))}
          <button 
            className="text-white bg-red-500 rounded px-6 py-2 hover:border-red-500 hover:text-red-500  hover:bg-white shadow-md transition-all"  >
            LOGIN
          </button>
        </div>
      </nav>

      <main className="flex-1">
        <Hero />
        
        <div ref={refs.features}>
          <Feature />
        </div>
        
        <div ref={refs.downloads}>
          <Download />
        </div>
        
        <div ref={refs.faq}>
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}
