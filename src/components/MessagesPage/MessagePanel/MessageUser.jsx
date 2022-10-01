import React from 'react';
import avatar from "../../../assets/img/avatar.png";

export default function MessageUser() {
	return (
    <div className="messagesuser">
      <div className="messagesuser__avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="messagesuser__content">
        <div className="messagesuser__description">
          <div className="messagesuser__message">Круто</div>
        </div>
        <div className="messagesuser__description">
          <div className="messagesuser__message">Хаха чувак</div>
        </div>
        <div className="messagesuser__description">
          <div className="messagesuser__message">Хаха классное приложение.</div>
        </div>
      </div>
    </div>
  );
}
