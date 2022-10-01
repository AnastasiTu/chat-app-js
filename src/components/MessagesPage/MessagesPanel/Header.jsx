import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__title">Сообщения</div>
      <div className="header__counter">
        <button>12</button>
      </div>
      <button className="header__plus">
        <div className="plus"></div>
        <div className="active"></div>
      </button>
    </div>
  );
}
