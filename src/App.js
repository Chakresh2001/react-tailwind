import React, { useState, useEffect } from 'react';
import './App.css';

const head = ["Multi-inzetbare units", "Eigen parkeerplaatsen", "Flexibel & koppelbaar" ]
const subHead = ["Met minstens twee verdiepingen eenvoudig te richten als werk-, kantoor of opslagruimte.", "ledere unit beschikt over 1 tot 4 eigen parkeerplaatsen.", "De bedrijfsunits variëren van grootte en zijn aan elkaar te schakelen om meer oppervlakte te creëren." ]


function App() {
  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      if(window.scrollY < window.innerHeight){
        setIndex(1)
        setText(head[0]);
        setSubText(subHead[0]);
      }
      else if(window.scrollY >= (window.innerHeight) && window.scrollY < (2*window.innerHeight)){
        setIndex(2);
        setText(head[1]);
        setSubText(subHead[1]);
      }
      else if(window.scrollY >= (2*475)){
        setIndex(3);
        setText(head[2]);
        setSubText(subHead[2]);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div>
      {/* Section 1 */}
      <div className="w-full h-screen bg-[whitesmoke] flex justify-center items-center text-3xl">First Section</div>

      {/* Section 2 */}
      <section className="flex bg-[#3a3c41] py-[100px]">

        <div className="text-white w-1/2 h-screen flex justify-center items-center sticky top-0 flex-col gap-[100px]">
          <div className="w-4/6">
            <h2 className="text-6xl font-medium text-white leading-tight">Flexibele ruimtes om jouw ideale werkplek te creëren</h2>
          </div>

          <div className="w-4/6">
            <p className="font-medium text-2xl text-white leading-loose"><span className="text-[#ed6a18]">{`0${index}`}</span>&nbsp; {text}</p>
            <p className="text-zinc-400 text-xl leading-tight">{subText}</p>
          </div>
        </div>


        <div className="w-1/2 flex flex-col px-[100px] gap-[100px]">
            <div>
              <img className="rounded-lg w-[600px] h-[500px] object-cover" src="https://layers-development.nl/wp-content/uploads/2022/11/31191-Int-01-Bolstoen-unit-02A-scaled-1.jpeg" alt='image1' />
            </div>
            <div>
              <img className="rounded-lg w-[600px] h-[500px] object-cover" src="https://layers-development.nl/wp-content/uploads/2022/10/31632-Ext-02.jpg" alt='image2' />
            </div>
            <div>
              <img className="rounded-lg w-[600px] h-[500px] object-cover" src="https://layers-development.nl/wp-content/uploads/2022/11/03-Flexibel-en-koppelbaar.jpeg" alt='image3' />
            </div>
        </div>
      </section>

      {/* Section 3 */}
      <div className="w-full h-screen bg-[whitesmoke] flex justify-center items-center text-3xl">Third Section</div>
    </div>
    </div>
  );
}

export default App;
