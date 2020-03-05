/*
 * @Author: myerse.lee 
 * @Date: 2018-11-18 12:33:07 
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2020-03-05 16:25:29
 * 排列组合算法；
 * 
 */

var source_t = [3, 4, 5, 6, 7]
var target_t = []
var all_solutions = []

function permute(source_t, target_t, all_combination) {
    if (target_t.length < source_t.length) {
        for (var i = 0; i < source_t.length; ++i) {
            target_t.push(source_t[i]);
            permute(source_t, target_t, all_combination);
            // console.log('111     ' + JSON.stringify(target_t))
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
            [].concat
            var copy = target_t.concat([]);
            all_combination.push(copy);
        }
        return
    }
}

permute(source_t, target_t, all_solutions);
// console.log('sss11    ' + JSON.stringify(all_solutions))
// console.log('sss11    ' + JSON.stringify(all_solutions))
// console.log('sss11    ' + JSON.stringify(all_solutions))
console.log('sss11    ' + JSON.stringify(all_solutions))
console.log('sss11    ' + all_solutions.length)






async function asyncFunc() {
    for (let i = 0; i < 10; ++i) {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(new Date().getSeconds())
                resolve();
            }, 2000)
        })
    }

}

asyncFunc()
console.log('create element 0    ' + (new Date().getSeconds()))

const object = {
    asyncFunc1: async function () {
        console.log(1111)
    }
}

object.asyncFunc1().then(function () {
    console.log(22222)
})



async function asyncFunc2() {


    await new Promise()


}

asyncFunc2()
while (true) {
    setTimeout(() => {
        console.log('asyncFunc   11             ')
    }, 1500)
}


let { a: na, b: nb } = { a: '111', b: '222' };
console.log(na)
console.log(nb)









let taskItem = {
    performer: 'some_one',
    tasks: [
        {
            beginTime: '1111',
            testTime: '1111',
            deadLine: 'sss',
        }
    ]
}

let { performer, tasks: [{ beginTime, testTime, deadLine }] } = taskItem
console.log(performer, beginTime, testTime, deadLine)


var resolveAfter2Seconds = function () {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(20);
            console.log("slow promise is done");
        }, 2000);
    });
};

var resolveAfter1Second = function () {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(10);
            console.log("fast promise is done");
        }, 1000);
    });
};



// var sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');

//     // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
//     const slow = await resolveAfter2Seconds();

//     const fast = await resolveAfter1Second();
//     console.log(slow);
//     console.log(fast);
// }

// sequentialStart()


var concurrentStart = async function () {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second();

    console.log(await slow);
    console.log(await fast); // waits for slow to finish, even though fast is already done!
}

concurrentStart()


let arroFunc = () => {
    console.log(arguments);
    // console.log(11111);
}

arroFunc(11, 222);


function createCounter() {
    let counter = 0
    const myFunction = function () {
        counter = counter + 1
        return counter

    }
    return myFunction

}
const increment = createCounter()
const increment2 = createCounter()
const c1 = increment()
const c2 = increment2()
const c3 = increment()
console.log('example increment', c1, c2, c3)


function closureFunc() {
    var count = 0;
    return function closureFunc1() {
        console.log(count++);
    }
}

var closureTest = closureFunc();
closureTest();
closureTest();
var count = 0;
closureTest();




let targetObject = {
    keyA: '2222',
    keyb: '2222'
}


let handle1 = {
    get: function (target, key) {
        console.log(`handle1 `);
        return target[key];
    },
    set: function (target, key, value) {
        console.log(`handle1 `);
        target[key] = value;
    }
}


let handle2 = {
    get: function (target, key) {
        console.log(`handle2 `);
        return target[key];
    },
    set: function (target, key, value) {
        console.log(`handle2 `);
        target[key] = value;
    }
}

let proxyTargetObject1 = new Proxy(targetObject, handle1);
let proxyTargetObject2 = new Proxy(targetObject, handle2);

proxyTargetObject1.keyA = 11;


