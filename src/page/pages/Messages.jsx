import React from "react";
import MessagesCall from "../../components/MessagesPage/MessagePanel/MessagesCall";
import MessagesPanel from "../../components/MessagesPage/MessagesPanel/MessagesPanel";

export default function Messages() {
  return (
    <header className="header__content">
      <MessagesPanel/>
			<MessagesCall />
    </header>
  );
}
