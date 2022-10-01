import React from 'react';
import pdf from '../../assets/img/icon/pdf.svg';
import download from '../../assets/img/icon/download.svg';

export default function FilesItem() {
	return (
    <div className="filesitem">
      <button className="filesitem__file">
        <img src={pdf} alt="" />
      </button>
      <div className="filesitem__description">
        <div className="filesitem__filename">i9.pdf</div>
        <div className="filesitem__fileformat">
          <div className="filesitem__format">PDF</div>
          <div className="filesitem__fileweigth">9mb</div>
        </div>
      </div>
      <button className="filesitem__download">
        <img src={download} alt="" />
      </button>
    </div>
  );
}
