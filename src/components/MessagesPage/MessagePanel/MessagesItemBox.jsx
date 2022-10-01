import React from 'react';
import MessageCompanion from './MessageCompanion';
import MessageUser from './MessageUser';

export default function MessagesItemBox() {
	return (
    <div className="messagesitembox messagesitembox-scroll">
      <MessageUser />
      <MessageCompanion />
      <MessageUser />
      <MessageCompanion />
      <MessageUser />
      <MessageCompanion />
      <MessageUser />
      <MessageCompanion />
    </div>
  );
}
