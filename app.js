const clacBody = document.getElementById("clac-body");
const display = document.getElementById("display");
const buttonBig = document.getElementById("button-big");
const clear = document.getElementById("clear");
const deletebtn = document.getElementById("delete");
const buttonSmall = document.getElementById("button-small");
const btn7 = document.getElementById("btn7");
const btn4 = document.getElementById("btn4");
const btn1 = document.getElementById("btn1");
const btndot = document.getElementById("btndot");
const btn8 = document.getElementById("btn8");
const btn5 = document.getElementById("btn5");
const btn2 = document.getElementById("btn2");
const btn0 = document.getElementById("btn0");
const btn9 = document.getElementById("btn9");
const btn6 = document.getElementById("btn6");
const btn3 = document.getElementById("btn3");
const btnequal = document.getElementById("btnequal");
const btnDivide = document.getElementById("btnDivide");
const btnMultiply = document.getElementById("btnMultiply");
const btnSub = document.getElementById("btnSub");
const btnAdd = document.getElementById("btnAdd");
const btnsm = document.getElementsByClassName("btn-sm");
const num = document.getElementsByClassName("num");
const opBtn = document.getElementsByClassName("op-btn");

let a = "";
let b = "";
let num1 = "";
let op = [];
let num2 = "";
let ans = "";

// function
const clearMe = () => {
  a = "";
  b = "";
  display.textContent = "";
};
const deleteMe = () => {
  //
};

const sum = (a, b) => {
  ans = a + b;
  display.textContent = ans;
  a = "";
  b = "";
};
const min = (a, b) => {
  ans = a - b;
  display.textContent = ans;
  a = "";
  b = "";
};
const mul = (a, b) => {
  ans = a * b;
  display.textContent = ans;
  a = "";
  b = "";
};
const div = (a, b) => {
  ans = a / b;
  display.textContent = ans;
  a = "";
  b = "";
};

// event
for (let btn of btnsm) {
  btn.addEventListener("click", (e) => {
    a += e.target.innerText;
    display.textContent = a;
    // add
    if (e.target == btnAdd) {
      b = a.split("").pop();
      op.push(b);
      a = a.split("+");
      a = String(a[0]);
      num1 = Number(a);
      clearMe();
    }
    if (e.target == btnSub) {
      b = a.split("").pop();
      op.push(b);
      a = a.split("-");
      a = String(a[0]);
      num1 = Number(a);
      clearMe();
    }
    if (e.target == btnMultiply) {
      b = a.split("").pop();
      op.push(b);
      a = a.split("*");
      a = String(a[0]);
      num1 = Number(a);
      clearMe();
    }
    if (e.target == btnDivide) {
      b = a.split("").pop();
      op.push(b);
      a = a.split("÷");
      a = String(a[0]);
      num1 = Number(a);
      clearMe();
    }
    if (e.target == btnequal) {
      a = a.split("=");
      a = String(a[0]);
      num2 = Number(a);
      if (op[0] == "+") {
        sum(num1, num2);
      }
      if (op[0] == "-") {
        min(num1, num2);
      }
      if (op[0] == "*") {
        mul(num1, num2);
      }
      if (op[0] == "÷") {
        div(num1, num2);
      }
    }
  });
}

clear.addEventListener("click", () => {
  clearMe();
});
deletebtn.addEventListener("click", () => {
  deleteMe();
});
