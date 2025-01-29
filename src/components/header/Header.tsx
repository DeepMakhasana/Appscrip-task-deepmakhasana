"use client";
import React, { useState } from "react";
import TopNotificationBar from "./TopNotificationBar";
import MedialBar from "./MedialBar";
import Navbar from "./Navbar";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <header>
      <TopNotificationBar />
      <MedialBar setMenuToggle={setMenuToggle} />
      <Navbar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
    </header>
  );
};

export default Header;
