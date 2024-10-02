import React from "react";
import { SocialIcon } from 'react-social-icons';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center space-x-4 p-4 bg-violet-200">
      <SocialIcon url="https://www.linkedin.com/in/kizuyoko" network='linkedin' target="_blank" />
      <SocialIcon url="https://github.com/kizuyoko" network='github' target="_blank" />       
    </footer>
  );
};

export default Footer;
