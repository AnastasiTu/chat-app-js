import React from 'react';
import search from '../../../assets/img/icon/search_messages.svg';

export default function Search() {
	const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
	return (
    <div className="search">
      <button className='search__button'>
        <img src={search} alt="" />
      </button>
      <input
        className="search__content"
        type="text"
        placeholder="Поиск сообщений..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
