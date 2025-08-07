import React from "react";

const Header: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen p-4 text-center text-white bg-center bg-cover bg-custom-image">
      <div className="flex flex-col items-center justify-center max-w-4xl animate-fade-up animate-ease-out animate-duration-[3500ms]">
        <h1>Welcome to Yoko's Portfolio!</h1>
        <p>Scroll down to explore the features. </p>
        <p>If you have any feedback or issues, don't hesitate to contact me via 
          <a href="https://www.linkedin.com/in/kizuyoko" target="_blank"> LinkedIn </a> 
          or  
          <a href="https://github.com/kizuyoko" target="_blank"> GitHub</a>.
        </p>
        <p></p>
        <small className="text-slate-300">Some of them might be expired, please contact me to activate if you want to try.</small>
        <p className="p-4 mt-6 border border-white rounded">
          This portfolio is currently being rebuilt!<br />
          A new and improved version is on its way.<br />
          Preview it <a href="https://yoko-portfolio-kappa.vercel.app" target="_blank">here</a>.
        </p>
      </div>
    </section>
  );
};

export default Header;
