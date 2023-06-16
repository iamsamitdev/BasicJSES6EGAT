function submitform(){
  // รับค่าจากฟอร์ม
  let fullname = document.formdata.fullname.value
  let address = document.formdata.address.value

  let trdata = ""

  // นับจำนวนแถวในตาราง
  let rowcount = document.getElementById('tbody').rows.length

  // แสดงผลลัพธ์
  trdata += `<tr>
                <td>${rowcount + 1}</td>
                <td>${fullname}</td>
                <td>${address}</td>
                <td><button onclick="deleterow(this)">ลบ</button></td>
              </tr>`
  // แทรกข้อมูลในตาราง
  let tbody = document.getElementById('tbody')
  tbody.insertRow().innerHTML = trdata

}

// Delete row function
function deleterow(row){
  let i = row.parentNode.parentNode.rowIndex - 1
  document.getElementById('tbody').deleteRow(i)
}