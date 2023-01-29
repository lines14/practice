function getMultiples(dataLength) {
  let result = [];
  for (let i = 0; i <= dataLength/8; i++) {
    result.unshift(i * 8)
  }
  return result;
};
  
  
function dataReverse(data) {
  let answer = [];
  const multiples = getMultiples(data.length)
  for(let j = 0; j < multiples.length -1; j++) {
    answer.push(...data.slice(multiples[j+1], multiples[j]))
  }
  console.log(answer);
  return answer
};