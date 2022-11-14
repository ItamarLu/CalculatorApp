let numberOne = ""
let numberTwo = ""
let operatorVerif = ""
let operatorSc = ""
let sc = numberOne + operatorSc + numberTwo

function bC() {
  numberOne = ""
  numberTwo = ""
  operatorVerif = ""
  operatorSc = ""
  screenText.textContent = "0"
}
function bS() {
  let square = +numberOne
  screenText.textContent = square * square
}
function bE() {
  if (numberTwo != "" ) {
    numberTwo = ""
    sc = numberOne + operatorSc + numberTwo
    screenText.textContent = sc
    return
  }
  if (numberTwo == "" && operatorSc != "") {
    operatorSc = ""
    operatorVerif = ""
    sc = numberOne + operatorSc + numberTwo
    screenText.textContent = sc
    return
  }
  if (numberOne != "" && numberTwo == "" && operatorSc == "") {
    numberOne = ""
    sc = numberOne + operatorSc + numberTwo
    screenText.textContent = sc
    return
  }
}
function bD() {
  operatorVerif = 4
  operatorSc = " / "
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bSe() {
  if (operatorVerif == 0) {
    numberOne += "7"
  }
  else {
    numberTwo += "7"
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bEi() {
  if (operatorVerif == 0) {
    numberOne += "8"
  }
  else {
    numberTwo += "8"
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bN() {
  if (operatorVerif == 0) {
    numberOne += "9"
  }
  else {
    numberTwo += "9"
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bM() {
  operatorVerif = 1
  operatorSc = " x "
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bF() {
  if (operatorVerif == 0) {
    numberOne += "4"
  }
  else {
    numberTwo += "4"
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bFi() {
  if (operatorVerif == 0) {
    numberOne += "5"
  }
  else {
    numberTwo += "5"
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bSi() {
  if (operatorVerif == 0) {
    numberOne += "6"
  }
  else {
    numberTwo += "6"
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bMi() {
  operatorVerif = 2
  operatorSc = " - "
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bO() {
  if (operatorVerif == 0) {
    numberOne += "1"
  }
  else {
    numberTwo += "1"
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bT() {
  if (operatorVerif == 0) {
    numberOne += "2"
  }
  else {
    numberTwo += "2"
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bTh() {
  if (operatorVerif == 0) {
    numberOne += "3"
  }
  else {
    numberTwo += "3"
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bP() {
  operatorVerif = 3
  operatorSc = " + "
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bR() {

  let root = Math.sqrt(+numberOne)
  screenText.textContent = root
}
function bZ() {
  if (operatorVerif == 0) {
    numberOne += "0"
  }
  else {
    numberTwo += "0"
  } 
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bPo() {
  if (operatorVerif == 0) {
    numberOne += "."
  }
  else {
    numberTwo += "."
  }
  sc = numberOne + operatorSc + numberTwo
  screenText.textContent = sc
}
function bEq() {
  let n1 = +numberOne
  let n2 = +numberTwo
  if (operatorVerif==1) {
    screenText.textContent = n1 * n2
  }
  if (operatorVerif==2) {
    screenText.textContent = n1 - n2
  }
  if (operatorVerif==3) {
    screenText.textContent = n1 + n2
  }
  if (operatorVerif==4) {
    screenText.textContent = n1 / n2
  }
}