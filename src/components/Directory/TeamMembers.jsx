import React from 'react'
import TeamItem from './TeamItem';

export default function TeamMembers() {
	return (
    <div className="directory__teams">
      <div className="directory__teams-header">
        <div className="directory__teams-title">Team Members</div>
        <button className="directory__teams-count">6</button>
      </div>
      <div className="directory__teams-scroll">
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
        <TeamItem />
      </div>
    </div>
  );
}
