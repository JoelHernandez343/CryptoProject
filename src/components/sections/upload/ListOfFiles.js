import React from 'react';

export default function ListOfFiles({ visible, stageFiles }) {

  const buildFileList = files => files.map(file => <p key={file}>{file}</p>);

  return (
    <div className={`${visible ? '' : 'hidden'} flex-grow bg-green-400 w-full`}>
      {buildFileList(stageFiles)}
    </div>
  );
}