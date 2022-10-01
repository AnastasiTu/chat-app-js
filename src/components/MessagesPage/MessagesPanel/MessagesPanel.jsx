import React from 'react'
import Header from "./Header";
import MessageList from './MessageList';
import Search from './Search';

export default function MessagesPanel() {
	return (
    <div className='messagespanel'>
      <Header />
			<Search />
			<MessageList />
    </div>
  );
}
