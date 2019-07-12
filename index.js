// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
typeof (a);
typeof (b);

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
function fun(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
}
fun(a);
console.log(a);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
function fun2(arr, separator) {
    var newArr = "";
    for (var i = 0; i < arr.length - 1; i++) {
        newArr = newArr + arr[i] + separator;
    }
    newArr += arr[i];
    console.log(newArr);
}
fun2(colors, " ");
// case 2 output: 'Red+Green+White+Black'
fun2(colors, "+");
// case 3 output: 'Red,Green,White,Black'
fun2(colors, ",");

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort(function (a, b) {
    return b - a
});

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostVal; // 数组中出现次数最多的元素
var tempObj = {};
var num = 0;
for(var i=a.length-1; i>=0; i--){
    if(tempObj[a[i]]){ // 得到元素出现的次数，并组成obj
        tempObj[a[i]] = tempObj[a[i]]+1;
    }else{
        tempObj[a[i]] = 1;
    }
}
for(var key in tempObj){ // 从对象中得到数组中出现最多的元素
    if(!mostVal){
        mostVal = key;
    }else if(tempObj[mostVal]<tempObj[key]){
        mostVal = key;
    }
}
console.log("次数最多的为"+mostVal);
//TODO should output: 'a'
