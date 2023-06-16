console.log("Hello World")

// การประกาศตัวแปร ที่ใช้ใน javascript มี 3 แบบ
// 1. var สามารถประกาศได้ทุกที่ แต่มีข้อเสียคือ ถ้าประกาศตัวแปรซ้ำกันจะไม่แจ้งเตือน
var name = "Samit Koyom"
console.log(name)
var name = "Wichai"
console.log(name)
var price = 20
{
    console.log(price)
    price = 30
    console.log(price)
}
console.log(price)

// 2. let สามารถประกาศได้ทุกที่ แต่มีข้อเสียคือ สามารถเปลี่ยนค่าได้
let age = 20
console.log(age)
age = 30
console.log(age)
{
    // console.log(age)
    let age = 40
    console.log(age)
}
console.log(age)

// 3. const ประกาศแล้วไม่สามารถเปลี่ยนค่าได้
const pi = 3.14
console.log(pi)
// pi = 3.15
{
    const pi = 3.15
    console.log(pi)
    // pi = 3.16
}
console.log(pi)