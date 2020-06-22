import React, { useState } from 'react';
import DragAndDrop from './DragAndDrop';
import MainButton from './../../buttons/MainButton';

export default function () {

  const [stageFiles, setStageFiles] = useState([]);

  const addFiles = files =>
    setStageFiles(prev => Array.from(new Set([...prev, ...files])));

  const removeFile = file =>
    setStageFiles(prev => prev.filter(f => f !== file));

  return (
    <div className="w-full flex-grow flex flex-col md:flex-row">
      <div className="w-full flex flex-col">
        <div className="flex-grow flex">
          <DragAndDrop addFiles={addFiles} stageFiles={stageFiles} removeFile={removeFile} initial={stageFiles.length === 0} />
        </div>
        <div className={`${stageFiles.length === 0 ? 'hidden' : ''} w-full flex flex-col p-5`}>
          <MainButton content="Proteger" />
        </div>
      </div>
      <div className="bg-green-400 w-full hidden">
        <p>Hello world</p>
      </div>
    </div>
  );
}