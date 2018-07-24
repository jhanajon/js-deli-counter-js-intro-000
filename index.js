function takeANumber(line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}



function nowServing(line) {
  if(line[0]){
  return (`Currently serving ${line.shift()}.`)
}
 else {
  if(line.length < 1) {
  return  "There is nobody waiting to be served!"
}
}
}



function currentLine(line) {
  if(line.length <= 0) {
    return "The line is currently empty."
  }
else {
  if(line.length > 0) {
    var array = []
    for (var i = 0; i < line.length; i++) {
      array.push(`${i+1}. ${line[i]}`)
      }
    return `The line is currently: ${ array.join(", ") }`

//
// function currentLine(line) {
//   if(line.length > 0) {
//     var array = []
//     for (var i = 0; i < line.length; i++) {
//       array.push(`${i+1}. ${line[i]}`)
//     }
//     return `The line is currently: ${ array.join(", ") }`
//   } else {
//     if(line.length <= 0) {
//       return "The line is currently empty."
//     }
//   }
// }

// while (n < 3) {
//   n++;
// }

function currentLine(line) {
// console.log(line)
    if(line.length <= 0) {
      return "The line is currently empty."
>>>>>>> 1a1f81c6bf39301d5d0e2dbbd7f932925fa4e5ac
    }

    else {
      for (var i = 0; i < line.length; i++) {
        line.push(`${i+1}. ${line[i]}`)
      }
        return `The line is currently: ${ line.join(", ")  }`
        }
      }
