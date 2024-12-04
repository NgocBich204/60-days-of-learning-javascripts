//   function expression : hàm được định nghĩa trong biểu thức
// let sayHello = function () {
//   console.log("Tôi la lập trình viên chuyên nghiệp Font-End");
// };
// // console.log(sayHello);
// console.log(sayHello());
// const sayHi = sayHello;
// sayHi();
// Ham callback
function ask(quetion, handleYes, handleNo) {
  const answer = confirm(quetion);
  if (answer == true) {
    handleYes();
  } else {
    handleNo();
  }
  function handleNo() {
    console.log("thoats");
  }
  function handleYes() {
    console.log("Dag nhap thanh cong");
  }
  0;
}

ask("Ban co muon dang nhap khong");
