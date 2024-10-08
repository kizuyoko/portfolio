import React from "react";

const Header: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-custom-image bg-cover bg-center text-center text-white p-4">
      <div className="animate-fade-up animate-ease-out animate-duration-[3500ms]">
        <h1>Welcome to Yoko's Portfolio!</h1>
        <p>Scroll down to explore the features. </p>
        <p>If you have any feedback or issues, don't hesitate to contact me via 
          <a href="https://www.linkedin.com/in/kizuyoko" target="_blank"> LinkedIn </a> 
          or  
          <a href="https://github.com/kizuyoko" target="_blank"> GitHub</a>.
        </p>
        <small className="text-slate-300">Some of them might be expired, please contact me to activate if you want to try.</small>
      </div>
    </section>
  );
};

export default Header;
