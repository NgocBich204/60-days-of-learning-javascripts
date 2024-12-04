// function sayHello(name) {
//   console.log("hello");
//   console.log("NgocBich");
//   console.log("hello " + name);
// }
// sayHello("Thaycaca");
// truyèn tham số mặc định . k truyền = undefine
function sayhello(name1 = "2003", name2) {
  //   console.log("BichNgocNguyen " + name1);
  console.log("sinh ngày " + name1 + name2);
}
sayhello("05/05", "");
// ? nếu 1 cái có giá trị , cái sau không có thì sao

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 10));

// return : trả về gia trị và không thực câu lệnh sau nó
function Sum(a, b) {
  if (a == b || a == undefined) {
    console.log("tham so khong hop le");
  }
  if (b == null || b == undefined) {
    console.log("Tham so khong hop lệ");
  }
  return console.log(a + b);
}
console.log(Sum(1, 9));
// Phạm vi trong hàm cục bộ
// kiên  thức về biến :
//var sử dụng được trong hàm , còn let chỉ được trong {} chưa nó
function bienCucBo(a, b) {
  if (a == b) {
    // let message = " Hai so bang nhau";
    var message = " Hai so bang nhau";
    // console.log(message);
  }
  console.log(message);
}
bienCucBo(3, 3);
// biên toàn cục
let message = "hello cac ban toi la lap trinh vien font-end chuyen nghiep";
function helloSay(message) {
  console.log(message);
}
helloSay(message);
