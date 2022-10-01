import React from 'react';
import avatar from "../../../assets/img/avatar.png";

export default function MessageCompanion() {
	return (
    <div className="messagescompanion">
      <div className="messagescompanion__avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="messagescompanion__content">
        <div className="messagescompanion__description">
          <div className="messagescompanion__message">Круто</div>
        </div>
        <div className="messagescompanion__description">
          <div className="messagescompanion__message">Хаха чувак</div>
        </div>
        <div className="messagescompanion__description">
          <div className="messagescompanion__message">
            Хаха классное приложение.
          </div>
        </div>
      </div>
    </div>
  );
}
