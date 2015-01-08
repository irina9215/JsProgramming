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
  
  alert("Color is now " + color);
  
  
