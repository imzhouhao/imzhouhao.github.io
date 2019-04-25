export default function (target, list) {
  switch (target) {
    case 0:
      // console.log("没滑动");
      break;
    case 1:
      return moveTop(list);
    case 2:
      return moveBottom(list);
    case 3:
      return moveLeft(list);
    case 4:
      return moveRight(list);
    default:
      return list;
  }
}

function moveLeft(list) {
  let newList = [];
  for (let i = 0; i < 4; i++) {
    let line = list
      .slice(4 * i, 4 * i + 4)
      .filter(val => val !== 0);
    let j = 0;
    while (j < line.length - 1) {
      if (line[j] === line[j + 1]) {
        line.splice(j, 2, line[j] + line[j + 1]);
        break;
      }
      j++;
    }
    line = [...line, ...(new Array(4 - line.length).fill(0))];
    newList.push(...line);
  }
  return newList;
}

function moveRight(list) {
  let newList = [];
  for (let i = 0; i < 4; i++) {
    let line = list
      .slice(4 * i, 4 * i + 4)
      .filter(val => val !== 0);
    let j = line.length - 1;
    while (j > -1) {
      if (line[j] === line[j + 1]) {
        line.splice(j, 2, line[j] + line[j + 1]);
        break;
      }
      j--;
    }
    line = [...(new Array(4 - line.length).fill(0)), ...line];
    newList.push(...line);
  }
  return newList;
}

function moveTop(list) {
  let newList = new Array(16);
  for (let i = 0; i < 4; i++) {
    let line = [list[i], list[4 + i], list[8 + i], list[12 + i]]
      .filter(val => val !== 0);
    let j = 0;
    while (j < line.length - 1) {
      if (line[j] === line[j + 1]) {
        line.splice(j, 2, line[j] + line[j + 1]);
        break;
      }
      j++;
    }
    let newLine = [...line, ...(new Array(4 - line.length).fill(0))];
    [newList[i], newList[4 + i], newList[8 + i], newList[12 + i]] = newLine;
  }
  return newList;
}

function moveBottom(list) {
  let newList = [];
  for (let i = 0; i < 4; i++) {
    let line = [list[i], list[4 + i], list[8 + i], list[12 + i]]
      .filter(val => val !== 0);
    let j = line.length - 1;
    while (j > -1) {
      if (line[j] === line[j + 1]) {
        line.splice(j, 2, line[j] + line[j + 1]);
        break;
      }
      j--;
    }
    let newLine = [...(new Array(4 - line.length).fill(0)), ...line];
    [newList[i], newList[4 + i], newList[8 + i], newList[12 + i]] = newLine;
  }
  return newList;
}