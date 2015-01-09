变量……

1.一个变量只存一种类型的数据，
2.尽量减少对隐式转换的依赖，这样可增强程序的可读性，日后修改程序时不至于混乱，
3.使用匈牙利命名法，
4.使用局部变量时记得加 var 进行声明，不然会与全局变量冲突，

网站性能优化方面

1.在对当前DOM进行操作之前，尽可能多的做一些准备工作，保证N次创建，1次写入。
2.在对DOM操作之前，把要操作的元素，先从当前DOM结构中删除：

通过removeChild()或者replaceChild()实现真正意义上的删除。
设置该元素的display样式为“none”。

修改操作完成后，将上面这个过程反转过来，建议使用第2种方式。

3.CSS部分
另外一个经常引起回流操作的情况是通过style属性对元素的外观进行修改，如element.style.backgroundColor = “blue”;
每次修改元素的style属性，都肯定会触发回流操作，要解决这个问题可以：
使用更改className的方式替换style.xxx=xxx的方式。
使用style.cssText = ”;一次写入样式。
避免设置过多的行内样式
添加的结构外元素尽量设置它们的位置为fixed或absolute
避免使用表格来布局
避免在CSS中使用JavaScript expressions(IE only)

4.将获取的DOM数据缓存起来。这种方法，对获取那些会触发回流操作的属性（比如offsetWidth等）尤为重要。

5.当对HTMLCollection对象进行操作时，应该将访问的次数尽可能的降至最低，最简单的，你可以将length属性缓存在一个本地变量中，这样就能大幅度的提高循环的效率。
一、避免大字符串字面量对象操作，如 字符串.lenth，尽量转换为new String(字符串)后再进行操作
二、在做字符查找替换等操作时善用正则表达式快速掌握ECMAScript正则表达式。
三、减少语句，利用运算符优先级实现if else表达式，使用三元表达式，使用连续表达式（看情况，将损失程序可读性）
四、将CSS，JS文件合并到一个文件（非BT爱好者还是不要玩了^_^）
五、避免Javascript事件绑定出现内存泄漏”These memory leaks often occur as a result of circular references between JavaScript objects and objects within IE’s DOM (document object model).” Microsoft GPDE Team Blog
六、使用WEB Workers技术（支持html5的浏览器）Web Workers为JavaScript提供了一种能在后台进程中运行的方法，Web Workers进程能够在不影响用户界面的情况下处理任务。
七、Y!14条（14 Rules for Faster-Loading Web Sites）
* Rule 1 – Make Fewer HTTP Requests
* Rule 2 – Use a Content Delivery Network (Server端)
* Rule 3 – Add an Expires Header (Server端)
* Rule 4 – Gzip Components (Server端)
* Rule 5 – Put Stylesheets at the Top
* Rule 6 – Put Scripts at the Bottom
* Rule 7 – Avoid CSS Expressions
* Rule 8 – Make JavaScript and CSS External
* Rule 9 – Reduce DNS Lookups (Server端)
* Rule 10 – Minify JavaScript
* Rule 11 – Avoid Redirects (Server端)
* Rule 12 – Remove Duplicate Scripts
* Rule 13 – Configure ETags (Server端)
* Rule 14 – Make AJAX Cacheable
* Rule 15 – Use Iframes Wisely
八、微软早期的DHTML优化建议 * 使用数组push替代字符串累加

javascript的and运算符的操作

逻辑AND运算的运算数可以是任何类型的，不止是Boolean值，如果某个运算数不是原始的Boolean型值，逻辑AND运算并不一定返回Boolean值
1）如果一个运算数是对象，另一个是 Boolean 值，返回该对象。
2）如果两个运算数都是对象，返回第二个对象。
3）如果某个运算数是 null，返回 null。
4）如果某个运算数是 NaN，返回 NaN。
5）如果某个运算数是 undefined，发生错误。
6）如果两个运算数都是boolean类型，则返回boolean值

javascript小知识点……

1、==和===的区别：”==” 只要求值相等; “===” 要求值和类型都相等
2、isFinite() 函数用于检查其参数是否是无穷大，如果 number 是有限数字（或可转换为有限数字），那么返回 true。否则，如果 number 是 NaN（非数字），或者是正、负无穷大的数，则返回 false。
3、判断空值用 val === null 即可
4、|0和~~是很好的一个例子，使用这两者可以将浮点转成整型且效率方面要比同类的parseInt,Math.round 要快.顺便说句，
//!!将一个值方便快速转化为布尔值 !!window===true 。

var foo = (12.4 / 4.13) | 0;//结果为3
var bar = ~~(12.4 / 4.13);//结果为3

5、不声明第三个变量的值交换

var a = 1, b = 2; a = [b, b = a][0];

6、对于传统的if语句，如果执行体代码超过了1 条语句，则需要加花括号，而利用逗号表达式，可以执行任意条代码而不用加花括号。

if (conditoin) alert(1), alert(2), console.log(3);

7、&&的妙用

var day = (new Date).getDay() === 0;
//传统if语句
if (day) {
    alert('Today is Sunday!');
};
//运用逻辑与代替if
day && alert('Today is Sunday!');

8、禁止别人以iframe加载你的页面

if (window.location != window.parent.location) window.parent.location = window.location;
