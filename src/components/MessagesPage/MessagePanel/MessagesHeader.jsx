import React from "react";
import call from '../../../assets/img/icon/phone.svg';
import avatar from '../../../assets/img/avatar.png'
import online from "../../../assets/img/icon/online.svg";
import menu from '../../../assets/img/icon/menu.svg'
//import offline from "../../../assets/img/icon/offline.svg";

export default function MessagesHeader() {
  return (
    <div className="messages__header">
      <div className="messages__photo">
        <img src={avatar} alt="" />
      </div>
      <div className="messages__id">
        <div className="messages__name">
          <div className="messages__firstname">Имя</div>
          <div className="messages__lastname">Фамилия</div>
        </div>
        <div className="messages__online">
          <img className="messages__indicator" src={online} alt="" />
          <div className="messages__presents">online</div>
        </div>
      </div>
      <div className="messages__call">
        <button className="messages__calling">
          <img className="messages__phone" src={call} alt="" />
        </button>
        <button className="messages__calling">
          <img src={menu} alt="" />
        </button>
      </div>
    </div>
  );
}
