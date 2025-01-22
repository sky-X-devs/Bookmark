import React from 'react';
import chrome from './../ions/logo-chrome.svg';
import firefox from './../ions/logo-firefox.svg';
import opera from './../ions/logo-opera.svg';

const browsers = [
  {
    logo: chrome,
    name: 'Chrome',
    minVersion: '62',
    altText: 'Chrome browser logo'
  },
  {
    logo: firefox,
    name: 'Firefox',
    minVersion: '55',
    altText: 'Firefox browser logo'
  },
  {
    logo: opera,
    name: 'Opera',
    minVersion: '46',
    altText: 'Opera browser logo'
  }
];

const BrowserCard = ({ logo, name, minVersion, altText, offsetClass = '' }) => (
  <div className={`w-72 h-80 rounded shadow-xl ${offsetClass}`}>
    <img src={logo} alt={altText} className="px-20" />
    <p className="font-bold text-center p-3">Add to {name}</p>
    <p className="text-center text-slate-400">Minimum Version {minVersion}</p>
    <button className="bg-indigo-500 rounded-xl px-5 py-3 my-3 mx-8 font-bold text-white border-2 border-indigo-500 hover:text-indigo-500 hover:bg-white hover:border-indigo-500 hover:border-solid">
      Add & Install Extension
    </button>
  </div>
);

export function Download() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <div className="text-center items-center flex flex-col space-y-4">
        <h2 className="font-semibold md:text-5xl text-3xl">
          Download the extension
        </h2>
        <p className="font-pretty max-w-md text-slate-400">
          We've got more browsers in the pipeline. Please do let us know if you've
          got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center place-items-center gap-8">
        {browsers.map((browser, index) => (
          <BrowserCard
            key={browser.name}
            {...browser}
            offsetClass={index === 1 ? 'mt-2' : index === 2 ? 'mt-4' : ''}
          />
        ))}
      </div>
    </div>
  );
}
