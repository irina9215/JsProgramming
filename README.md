JsProgramming
=============


Learning Note

1. 浏览器适应：
    docunment.body.clientHeight  客户端窗口的高度
    docunment.body.clientWidth   客户端窗口的宽度
    通过元素ID取得元素再取元素的样式，然后进行更改
    浏览器改变大小时出发onresize事件
2. life cycle 生命周期
3. 脚本层次 script level （位于任何函数或者任何代码之外）   
   是脚本的最上层，就在<script>标签里。被视为全局的，生命周期与脚本一样，而且能被任何页面内的代码访问
4. 数组
   value 与 具有唯一性的key，需要以key访问value。key通常以0开始，逐次加一。数字编号键又被称为索引index。
   二维数组：数组里的数组，具有行与列的列表。table。
5. 变量
   可以对引用类型动态添加属性：
   var person = new Object;
   person.name = "irina";
   alert(person.name);
结果：irina

    不能给基本类型添加属性：
    var name = "irina";
    name.age = 23;
    alert("name.age");
    
结果：undefined
6.作用域链scope chain：保证对执行环境有权访问的所变量和函数的有序访问。
  标识符解析：沿着作用域链一级一级的搜索标识符的过程。
  var color = "blue";
  
  function changeColor(){
    var anotherColor = "red";
    
    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        
        //这里可以访问color、anotherColor和tempColor
    }
    
    //这里可以访问color和anotherColor，但不能访问tempColor
    swapColors();
  }
  
  //这里只能访问color
  changeColor();
  
  changeColor();
  
涉及的三个执行环境：全局环境、changeColor()的局部环境和swapColor（）的局部环境。
  内部环境可以通过作用域链访问所有的外部环境，但外部环境不能访问内部环境中的任何变量和函数。
7. 延长作用域链：在作用域链的前端临时增加一个变量对象，该变量会在代买执行之后被移除。
8. 没有块级作用域：if语句中的变量声明会将变量添加到当前的执行环境中。
  if (ture){
    var color ="blue";
}

alert(color);  //"blue"

for语句创建的变量i即使在for循环结束后，也依旧会存在于循环外部的执行环境中。
  for(var i = 0; i < 10; i ++ ){
  doSomething(i);
  }
  
  alert(i);  //10
  
9. 声明变量：使用var声明的变量会自动添加到最接近的环境中。
example：

function add (num1, num2){
  sum = sum1 + sum2;
  return sum;
}
var result = add(10, 20);  //30
alert(sum);   //由于sum不是有效的变量，因此会导致错误


function add(num1,num2){
sum = num1+num2;
}
var result(10,20); //30
alert(sum);         //30
没有使用关键字，当调用完add()后，添加到全局环境中的变量sum将继续存在；即使函数已经执行完毕，后面的代码依旧可以访问它。


