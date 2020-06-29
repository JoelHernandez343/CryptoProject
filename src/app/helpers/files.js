/*global _node*/
import { icons } from './_icons';

const getIcon = name => {
  let ext = name.substring(name.lastIndexOf('.') + 1);

  return name === ext || !icons.has(ext) ? icons.get('others') : icons.get(ext);
};

const getFileName = file => file.replace(/.*[\\/]/, '');
const getIsFile = async path => await _node.getIsFile(path);
const removeFile = async options => await _node.removeFile(options);

export { getFileName, getIsFile, getIcon, removeFile };
