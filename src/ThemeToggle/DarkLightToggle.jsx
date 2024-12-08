import React, { useState } from 'react';
import RootLayout from '../Components/RootLayout/RootLayout';

const DarkLightToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // ডার্ক মোড টগল ফাংশন
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      if (!darkMode) {
        document.documentElement.classList.add("dark"); // ডার্ক ক্লাস যোগ করা
      } else {
        document.documentElement.classList.remove("dark"); // ডার্ক ক্লাস সরানো
      }
    };

    return (
      <div>
        <button onClick={toggleDarkMode} className="btn btn-primary m-4">
          Toggle Dark Mode
        </button>

        <div className="bg-base-100 dark:bg-base-900 p-10">
          <h1 className="text-4xl text-primary dark:text-secondary">
        
          </h1>
          <button className="btn btn-accent">A DaisyUI Button</button>
        </div>
      </div>
    );
};

export default DarkLightToggle;