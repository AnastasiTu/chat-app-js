import React from "react";
import avatar from "../../../assets/img/avatar.png";
import online from '../../../assets/img/icon/online.svg';
import offline from "../../../assets/img/icon/offline.svg";

export default function MessageItem() {
  return (
    <div className="messagesitem">
      <div className="messagesitem__avatar">
        <img src={avatar} alt="" className="messagesitem__img" />
        <div className="messagesitem__online">
          <img src={online} alt="" />
          <div className="messagesitem__indicator">online</div>
        </div>
      </div>
      <div className="messagesitem__description">
        <div className="messagesitem__text">
          <div className="messagesitem__name">
            <div className="messagesitem__title">Имя</div>
            <div className="messagesitem__title">Фамилия</div>
          </div>
          <div className="messagesitem__subtitle">
            Хаха классное прил...
          </div>
        </div>
        <div className="messagesitem__time">12мин</div>
      </div>
    </div>
  );
}
