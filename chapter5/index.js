// การสร้างฟังก์ชันใน JavaScript
// 1. ฟังก์ชันประกาศแบบปกติ
function wakeup() {
  alert('ตื่นแล้ว');
}

// 2. ฟังก์ชันประกาศแบบกำหนดชื่อ
let sayHello = function sayHello() {
  alert('สวัสดีครับ');
}

// 3. ฟังก์ชันประกาศแบบไม่ต้องกำหนดชื่อ
let sayGoodbye = function() {
  alert('ลาก่อนครับ')
}

// 4. ฟังก์ชันประกาศแบบ Arrow Function
let greeting = () => alert('ยินดีต้อนรับ')


// ฟังก์ชันแบบมีการรับค่าพารามิเตอร์
function info(name) {
  alert('สวัสดีคุณ ' + name);
}

// ฟังก์ชันแบบมีการรับค่าพารามิเตอร์และมีการ return ค่า
function sum(a, b) {
  let result = a + b
  return result
}

// ฟังก์ชันแบบมีการรับค่าพารามิเตอร์และมีการ return ค่าแบบ Arrow Function
let multiply = (a, b) => a * b
