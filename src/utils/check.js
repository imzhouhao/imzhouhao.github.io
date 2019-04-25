export function checkSuccess(list) {
  if (list.includes(2048)) 
    return true;
  return false;
}

export function checkFail(list) {
  if (!list.includes(0)) {
    if (!checkLineFail(list) && !checkColFail(list))
      return true;
  }
  return false;
}

function checkLineFail(list) {
  for (let i = 0; i < 4; i++) {
    for (let j = 4 * i; j < 4 * i + 3; j++) {
      if (list[j] === list[j + 1]) 
        return true;
    }
  }

  return false;
}

function checkColFail(list) {
  for (let i = 0; i < 4; i++) {
    let line = [list[i], list[4 + i], list[8 + i], list[12 + i]]
    for (let j = 0; j < 3; j++) {
      if (line[j] === line[j + 1])
        return true;
    }
  }

  return false;
}