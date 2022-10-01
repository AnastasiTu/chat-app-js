import React from 'react'
import FilesItem from './FilesItem';

export default function Files() {
	return (
    <div className="directory__files">
      <div className="directory__teams-header">
        <div className="directory__teams-title">Files</div>
        <button className="directory__teams-counts">125</button>
      </div>
      <div className="directory__files-scroll">
        <FilesItem />
        <FilesItem />
        <FilesItem />
        <FilesItem />
        <FilesItem />
        <FilesItem />
        <FilesItem />
        <FilesItem />
        <FilesItem />
      </div>
    </div>
  );
}
