const letterPositions = function (sentence){
  const results = {};
  for (let i = 0; i < sentence.length; i ++)
  const init = sentence[i]; 
if (!results[init]) {
  results[init] = [i]
}
else {
  results[init].push(i);
}

console.log(results);
return results;
};