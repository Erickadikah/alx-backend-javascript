export default function cleanSet(set, startString) {
  const newList = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  for (const prop of set) {
    if ((typeof prop === 'string') && (prop.startsWith(startString))) {
      newList.push(prop.slice(startString.length));
    }
  }
  return newList.join('-');
}
