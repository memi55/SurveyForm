 function addNumbers(){
   let num1 = document.getElementById('num1').value;
   let num2 = document.getElementById('num2').value;
  let num3 = parseFloat(num1);
   let num4 = parseFloat(num2);
if (isNaN(num1) || isNaN(num2)) {
  console.error("请输入有效的数字");
}else{ 
   let sum = num3 + num4;        
   alert("两数之和为:" + sum);
}
}