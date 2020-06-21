import React, { useState } from 'react';
import ListOfFiles from './ListOfFiles';
/*global _node */

export default function DragAndDrop({ addFiles, stageFiles }) {

  const [initial, setInitial] = useState(true);

  console.log(stageFiles);

  const addVisualEffect = e => {
    e.classList.add('bg-gray-400', 'bg-opacity-25');
  }

  const removeVisualEffect = e => {
    e.classList.remove('bg-gray-400', 'bg-opacity-25');
  }

  const rf = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragEnter = e => {
    console.log('Entre');
    addVisualEffect(e.target);
  }

  const onDragLeave = e => {
    console.log('Sali');
    removeVisualEffect(e.target);
  }

  const onDrop = e => {
    removeVisualEffect(e.target);

    e.preventDefault();
    e.stopPropagation();

    changeState(Array.from(e.dataTransfer.files).map(file => file.path));

    return false;
  }

  const changeState = files => {
    if (files.length !== 0) {
      setInitial(false);
      addFiles(files);
    }
  }

  const onClick = async () => {
    const files = await _node.dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] });
    changeState(files.filePaths);
  }

  return (
    <div className="w-full flex-grow rounded bg-gray-300 shadow p-4 flex justify-center items-center flex-col max-h-full">
      <ListOfFiles visible={!initial} stageFiles={[...stageFiles]} />

      <div className={`${initial ? 'flex-grow flex-col' : 'h-20'} flex items-center justify-center w-full relative`}>
        <div className="absolute w-full h-full bg-transparent hover:bg-indigo-500 hover:bg-opacity-25 cursor-pointer transition ease-in-out duration-150"
          onDragEnter={onDragEnter} onDragOver={rf} onDragLeave={onDragLeave} onDragEnd={rf} onDrop={onDrop} onClick={onClick}
        />
        <span className={`mdi mdi-text-box-plus-outline text-gray-400`} style={{ fontSize: `${initial ? '5rem' : '1.5rem'}` }}></span>
        <p className={`${initial ? 'mb-4' : 'text-base ml-3'} text-gray-500 quicksand font-medium`}>Arrastra tus archivos aquí</p>
      </div>
    </div>
  );
}