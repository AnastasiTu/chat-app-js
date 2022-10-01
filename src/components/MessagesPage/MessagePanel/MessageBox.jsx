import React from "react";
import paperclip from '../../../assets/img/icon/paperclip.svg';
import plane from "../../../assets/img/icon/paper-plane.svg";

export default function MessageBox() {
  return (
    <div className="messagebox">
      <button className="messagebox__files">
        <img src={paperclip} alt="" />
      </button>
      <div className="messagebox__content">
        <input
          className="messagebox__message"
          type="text"
          placeholder="Написать сообщение..."
        />
        <button className="messagebox__send">
          <img src={plane} alt="" />
        </button>
      </div>
    </div>
  );
}
