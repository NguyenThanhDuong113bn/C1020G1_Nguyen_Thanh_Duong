function showAdd() {
    let a=parseInt(document.getElementById("Number1").value);
    let b=parseInt(document.getElementById("Number2").value);
    let ketQua;
   ketQua=(a+b);
    document.getElementById("ketqua").innerHTML=("Result :" + ketQua);
}
function showSub() {
    let a=parseInt(document.getElementById("Number1").value);
    let b=parseInt(document.getElementById("Number2").value);
    let ketQua;
    ketQua=(a-b);
    document.getElementById("ketqua").innerHTML=("Result :" + ketQua);
}
function showMul() {
    let a=parseInt(document.getElementById("Number1").value);
    let b=parseInt(document.getElementById("Number2").value);
    let ketQua;
    ketQua=(a*b);
    document.getElementById("ketqua").innerHTML=("Result:" +ketQua);
}
function Div() {
    let a=parseInt(document.getElementById("Number1").value);
    let b=parseInt(document.getElementById("Number2").value);
    let ketQua;
    ketQua=(a/b);
    document.getElementById("ketqua").innerHTML=("Result:" +ketQua);

}