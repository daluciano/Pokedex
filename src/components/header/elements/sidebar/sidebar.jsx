import React from "react";
import { slide as Menu } from "react-burger-menu";

export default function Siderbar() {
  return (
    // Pass on our props
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/Page2">
        Page 2
      </a>
    </Menu>
  );
}
