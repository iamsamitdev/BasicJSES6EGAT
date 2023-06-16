// การเขียนเงื่อนไขแบบ if else ในภาษา javascript
let score = 35

if(score >= 80){
  console.log("Grade A")
} else if(score >= 70) {
  console.log("Grade B")
} else if(score >= 60) {
  console.log("Grade C")
} else if(score >= 50) {
  console.log("Grade D")
} else {
  console.log("Grade F")
}

// การเขียนเงื่อนไขแบบ switch case ในภาษา javascript
let category = "electronic"
switch(category){
  case "electronic":
    console.log("Category is electronic")
    break
  case "furniture":
    console.log("Category is furniture")
    break
  case "accessories":
    console.log("Category is accessories")
    break
  default:
    console.log("Category is not found")
    break
}

// การเขียนเงื่อนไขแบบ ternary operator ในภาษา javascript
let age = 16
let canVote = age >= 18 ? "ok" : "not ok"
console.log(canVote)