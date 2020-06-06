/*
 * @Author: myerse.lee 
 * @Date: 2018-10-11 22:03:26 
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2020-06-06 17:02:27
 */


class Stack {
    constructor() {
        this._stack_array = {};
        this._curIndex = 0;
        this._lastIndex = 0;
    }

    push(item) {
        this._stack_array[this._curIndex++] = item;
        return this;
    }

    pop() {
        if (this._curIndex > this._lastIndex) {
            let item_pop = this._stack_array[--this._curIndex];
            delete this._stack_array[this._curIndex];
            return item_pop;
        } else {
            return null;
        }
    }

    pick() {
        return this._stack_array[this._curIndex - 1];
    }

    size() {
        return this._curIndex - this._lastIndex;
    }

    convertToArray() {
        var copyArr = new Array(this._curIndex);
        for (var i = this._lastIndex; i < this._curIndex; ++i) {
            copyArr[i] = this._stack_array[i];
        }
        return copyArr;
    }
}



function calculateOp(popElement) {

    var ops = '*/+-';
    for (var i = 0; i < ops.length; ++i) {
        var resultElement = new Stack();
        for (var k = 0; k < popElement.length; ++k) {
            if (ops[i] == popElement[k]) {
                switch (popElement[k]) {
                    case '*':
                        var popItem = resultElement.pop();
                        popItem = popItem * popElement[k + 1];
                        resultElement.push(popItem);
                        k = k + 1;
                        break;
                    case '/':
                        var popItem = resultElement.pop();
                        popItem = popItem / popElement[k + 1];
                        resultElement.push(popItem);
                        k = k + 1;
                        break;
                    case '+':
                        var popItem = resultElement.pop();
                        popItem = popItem + popElement[k + 1];
                        resultElement.push(popItem);
                        k = k + 1;
                        break;
                    case '-':
                        var popItem = resultElement.pop();
                        popItem = popItem - popElement[k + 1];
                        resultElement.push(popItem);
                        k = k + 1;
                        break;
                }
            } else {
                resultElement.push(popElement[k])
            }
        }

        popElement = resultElement.convertToArray();
    }

    console.log(popElement)
}


function getNum(expressionStr, startIndex) {
    var stopStr = '()+-*/';
    var isBreak = false;
    var numStr = 0;
    var k = startIndex + 1;
    for (; k < expressionStr.length; ++k) {
        for (var n = 0; n < stopStr.length; ++n) {
            if (expressionStr[k] == stopStr[n]) {
                isBreak = true;
                break;
            }
        }

        if (isBreak) {
            break;
        }
    }
    numStr = parseFloat(expressionStr.substring(startIndex, k));
    return [k, numStr];
}

function calculateExpression(expressionStr) {
    var stack_value = new Stack();
    var stack_op = new Stack();
    var formate_exp = [];

    // calculateExpression('31*(1+(12-2)*(2-3)*1+2)')
    for (var i = 0; i < expressionStr.length; ++i) {        // 将数据格式化；
        var numberStr = '.0123456789';
        if (numberStr.indexOf(expressionStr[i]) != -1) {
            var numInfo = getNum(expressionStr, i);
            i = numInfo[0];
            formate_exp.push(numInfo[1]);
        } else {
            formate_exp.push(expressionStr[i]);
        }
    }


    console.log(stack1.convertToArray())
    // while (true) {
    //     var item1 = stack1.pop();
    //     console.log(stack1.convertToArray())
    //     if (item1) {
    //         if (item1 == ')') {
    //             console.log(stack2)
    //             var popStack = []; // 去
    //             while (true) {
    //                 var pop_l_braces = stack2.pop();
    //                 if (pop_l_braces == '(') {
    //                     var resultOp = calculateOp(popStack.reverse());
    //                     stack2.push(resultOp);
    //                     break;  //while 
    //                 } else {
    //                     popStack.push(pop_l_braces);
    //                 }
    //             }   //while
    //         } else {
    //             stack2.push(item1);
    //         }
    //     } else {
    //         break;
    //     }
    // }

    // console.log(stack1.convertToArray())
    // console.log(stack2.convertToArray())
}

var expreString = '31*(1+(12-2)*(2-3)*1+2)';
console.log(expreString)
calculateExpression(expreString)


var threeSum = function (nums) {
    var allCollects = [];
    var map = {};

    // console.log(map)
    Math.pow
    for (var i = 0; i < nums.length - 1; ++i) {
        for (var k = i + 1; k < nums.length; ++k) {
            var totalValue = nums[i] + nums[k];
            var firstIndex = nums.indexOf(-totalValue);
            var lastIndex = nums.lastIndexOf(-totalValue);
            if (nums.indexOf(-totalValue) != -1 && firstIndex != lastIndex) {
                var arr = [nums[i], nums[k], -totalValue];
                arr.sort(function (a, b) {
                    return a - b;
                })

                var canInsert = true;
                for (var m = 0; m < allCollects.length; ++m) {
                    if (allCollects[m][0] == arr[0] && allCollects[m][1] == arr[1] && allCollects[m][2] == arr[2]) {
                        canInsert = false;
                        break;
                    }
                }
                if (canInsert) {
                    allCollects.push(arr);
                }

            }
        }
    }

    return allCollects;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))


var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length - 1; ++i) {
        var indexNum = null;
        for (var k = indexNum; k < nums.length; ++k) {
            if (nums[i] + nums[k] == target) {
                indexNum = k;
                isEqualTarget = true;
                break;
            }
        }

        if (indexNum) {
            return [i, indexNum];
        }
    }
    return null;
};

console.log(twoSum([2, 3, 4, 5, 6, 8], 11))


var addTwoNumbers = function (l1, l2) {
    var num1 = 0;
    for (var i = l1.length - 1; i >= 0; --i) {
        num1 += l1[i] * Math.pow(10, i);
    }

    var num2 = 0;
    for (var i = l2.length - 1; i >= 0; --i) {
        num2 += l2[i] * Math.pow(10, i);
    }

    var sum = num1 + num2;
    var result = []
    while (sum > 0) {
        result.push(sum % 10);
        sum = Math.floor(sum / 10);
    }

    return result;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))
