import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, I'm Kanak Umrani
          </h1>
          {/* <p className="text-gray-500">Welcome to my beautiful portfolio</p> */}
          <p className="mt-3">About me:</p>
          <ul className="leading-9">
            <li>👩🏻‍💻 XROS'23 Fellow</li>
            <li>👩🏻‍🎓 BE Final Year Student</li>
            <li>🐼 Blockchain enthusiast</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: Only few ones listed here</p>
          <p className="mt-3">
            <b>Tech Stack I use 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>Three JS</li>
            <li>Solidity</li>
            <li>web3.js</li>
            <li>ethers.js</li>
            <li>Python</li>
          </ul>
          <p className="mt-3">
            <b>🔬 Projects 🔬</b>
            
          </p>
          <ul className="leading-9">
            <li><a href="https://github.com/daredevil3435/CXRNFT_">NFT Minting dApp</a></li>
            <li><a href="https://github.com/daredevil3435/todo_dApp">To-Do dApp</a></li>
            <li><a href="https://github.com/daredevil3435/EventOrgn">Event organization</a></li>
            
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
           Drop email at 
          </h1>
          <p className="text-gray-500">
            I'm always ready to learn new skill
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
          📩  <a href="email:kanakumrani02@gmail.com"> kanakumrani02@gmail.com</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};

