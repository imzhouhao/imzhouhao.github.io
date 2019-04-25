export default function sum(list) {
  let sumRank = 0;
  list.forEach(val => {
    if (val > 2) 
      sumRank = sumRank + rank(val) 
  });

  return sumRank;
}

function rank(num) {
  let rank = 0;
  let exponent = 1;
  while (true) {
    let child = Math.pow(2, exponent + 1);
    rank = rank + child;
    exponent++;
    if (child >= num)
      break;
  }

  return rank;
}