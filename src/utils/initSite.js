// 确认位置为空
function check(lists, index) {
  return lists[index] !== 0;
}

// 随机生成2或4
function random() {
  if (Math.random() > 0.5) {
    return 4
  }
  return 2
}


export default function (lists) {
  const max = Math.max(...lists);
  const newValue = max >= 16 ? random() : 2;
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * 16);
  } while (check(lists, newIndex));

  return {
    index: newIndex,
    value: newValue
  }
}