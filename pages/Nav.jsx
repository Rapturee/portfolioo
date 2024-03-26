import React from "react";
import Theme_Toggler from "./ThemeButton"; // Ensure this is the correct path

export default function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div style={{ width: '100%' }}> {/* Placeholder for balancing */}
        {/* Your logo or title here, if any */}
      </div>
      <div>
        <Theme_Toggler />
      </div>
      <div style={{ width: '100%' }} className="flex justify-end space-x-10">
        <a>Home</a>
        <a>Resume</a>
        <a>Contact</a>
        <span>adsadsad</span>
      </div>
    </nav>
  );
}