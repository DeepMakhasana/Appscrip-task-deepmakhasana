import React from "react";
import TopNotificationBar from "./TopNotificationBar";
import MedialBar from "./MedialBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <TopNotificationBar />
      <MedialBar />
      <Navbar />
    </header>
  );
};

export default Header;
