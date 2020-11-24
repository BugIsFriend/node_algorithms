/*
 * @Author: myerse.lee 
 * @Date: 2018-11-18 12:33:07 
 * @Last Modified by: lee
 * @Last Modified time: 2020-11-22 22:42:33
 * 数组的排列组合算法；
 * 1:对于不重复元素的排列组合；
 * 2:对于重复元素的排列组合，可以列用数组下标，进行排列组合；
 */

function permute(source_t) {
    let target_t = [];
    let all_solutions = [];        //元素对应小标的组合；
    let checkMap = new Map();

    let _source_c = source_t.map((value, index) => { return index; })
    console.log(JSON.stringify(_source_c));

    var time_0 = new Date();
    _permute(_source_c, target_t, all_solutions, checkMap);
    var time_1 = new Date();


    console.log('cost time ' + ((time_1.getTime() - time_0.getTime()) / 1000))
    console.log('sss11    ' + all_solutions.length)
}

function isArrRepeated(array) {
    let map = new Map();
    for (const value of array) {
        if (map.get(value) == undefined) {
            map.set(value, 0)
        } else {
            map.set(value, map.get(value) + 1);
            if (map.get(value) > 1) {
                return true;
            }
        }
    }
    return false;
}

function _permute(source_t, target_t, all_combination, checkMap) {
    if (target_t.length < source_t.length) {
        for (let i = 0; i < source_t.length; ++i) {
            if (!checkMap.get(source_t[i])) {
                checkMap.set(source_t[i], true);
                target_t.push(source_t[i]);
                _permute(source_t, target_t, all_combination, checkMap);
                checkMap.set(target_t.pop(), false);;
            }
        }
    } else {
        let copy = target_t.concat([]);
        all_combination.push(copy);
        return
    }
}
let source_t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
permute(source_t);


// todo  算出银行卡6位密码数字 所有情况； 0-9 选出六位数组， 