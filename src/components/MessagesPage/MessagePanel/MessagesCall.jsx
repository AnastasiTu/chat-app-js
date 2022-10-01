import React from "react";
import MessageBox from "./MessageBox";
import MessagesHeader from "./MessagesHeader";
import MessagesList from "./MessagesList";

export default function MessagesCall() {
  return (
    <div className="messages__block">
      <MessagesHeader />
      <MessagesList />
      <MessageBox />
    </div>
  );
}
