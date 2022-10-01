import React from 'react'
import Files from './Files';
import Header from './Header'
import TeamMembers from './TeamMembers';

export default function Directory() {
	return (
    <div className="directory header__content header__content-directory">
      <Header />
			<TeamMembers />
			<Files/>
    </div>
  );
}
