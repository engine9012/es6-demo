/**
 * Created by jingren on 17/6/13.
 */

/*Array.prototype  属性表示 Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法。*/

if(!Array.prototype.first){
    Array.prototype.first = function () {
        console.log(`如果JavaScript本身不提供 first() 方法，
添加一个返回数组的第一个元素的新方法。`);
        return this[0];
    }
}

//test
let result = [1, 2, 3, 4, 5].first();
console.log(result);    // 1

console.log(`打印Array对象：\n`);
console.log(Array)

//Array.prototype.copyWithin(),在数组内部，将一段元素序列拷贝到另一段元素序列上，覆盖原有的值