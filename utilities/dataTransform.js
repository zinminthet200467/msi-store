// developed it to transform data into
//  ''3' column 'one' role' horizontal scroll ui type in playstore app tabs
export function biteSizeTransform(data, noOfBites) {
  let start = 0;
  let end = noOfBites;
  let length = data.length;
  let newData = [];

  while (true) {
    if (start + noOfBites < length) {
      newData.push(data.slice(start, end));
      start += noOfBites;
      end += noOfBites;
    } else {
      newData.push(data.slice(start, end));
      break;
    }
  }

  return newData;
}
