import React from "react";
import avatar from "../../assets/img/avatar.png";

export default function TeamItem() {
  return (
    <div className="teamitem">
      <div className="teamitem__avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="teamitem__description">
        <div className="teamitem__text">
          <div className="teamitem__name">Florencio</div>
          <div className="teamitem__lastname">Dorrance</div>
        </div>
        <div className="teamitem__work">Market Development Manager</div>
      </div>
    </div>
  );
}
