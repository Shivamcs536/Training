import React from 'react';
import Styles from "./navbar.module.css"; // Ensure this file exists

const Logo = () => {
  return (
    <div className={Styles.logoBlock}>
      <img 
        src="https://edisonlms-fs.s3.amazonaws.com/tenant_onlinelearning/iidt_logo_137.png" 
        alt="Logo"
      />
    </div>
  );
};

export default Logo;




