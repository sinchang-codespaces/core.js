function getRGB(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? 'rgb(' +
        parseInt(result[1], 16) + ',' +
        parseInt(result[2], 16) + ',' +
        parseInt(result[3], 16) + 
        ')'
    : null
}

console.log(getRGB('#00ff00'))

var a = 1

function f() {
  function n() {
    console.log(a)
  }

  var a = 2
  n()
}

f()