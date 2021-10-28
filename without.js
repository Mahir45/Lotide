const without = function(words,exclude) {
  let array = [];

  for (i = 0; i < words.length; i++) {
    // console.log(source[i])
    if (exclude.includes(words[i]) === false){
      array.push(words[i])
    }
  }
  return array
}
console.log(without(['hello', 'world', 'lighthouse' ], ['lighthouse' ]))