/*
 * @Author: myerse.lee 
 * @Date: 2018-11-18 12:33:07 
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2020-06-30 10:33:54
 * 数组的排列组合算法；
 * 
 */

var source_t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var target_t = []
var all_solutions = []

function permute(source_t, target_t, all_combination) {
    if (target_t.length < source_t.length) {
        for (var i = 0; i < source_t.length; ++i) {
            target_t.push(source_t[i]);
            permute(source_t, target_t, all_combination);
            target_t.pop();
        }
    } else {
        var isInsert = true;
        for (var k = 0; k < target_t.length; ++k) {
            for (var j = 0; j < target_t.length; ++j) {
                if ((k != j) && target_t[k] == target_t[j]) {
                    isInsert = false;
                    break;
                }
            }
        }
        if (isInsert) {
            var copy = target_t.concat([]);
            all_combination.push(copy);
        }
        return
    }
}

var time_0 = new Date();
permute(source_t, target_t, all_solutions);

var time_1 = new Date();

console.log('cost time ' + ((time_1 - time_0) / 1000))
console.log('sss11    ' + JSON.stringify(all_solutions))
console.log('sss11    ' + all_solutions.length)


// todo 算出银行卡6位密码数字 所有情况；