
/** 
 * 插入排序算法；
 * 缺点：当最小一个元素在最末端，将会有 N-1 数据的移动； 
 */

function InsertSort(list) {
    for (let i = 1; i < list.length; ++i) {
        for (let j = i; j > 0; --j) {           // 找到 比 list[i] 小的第一个元素；
            if (list[j] < list[j - 1]) {
                let temp = list[j];
                list[j] = list[j - 1];
                list[j - 1] = temp;
            }
        }
    }
    console.log(`InsertSort:    ${list}`);
}

// InsertSort(arr);

/**
 *  希尔排序算法：
 *  step_0: 将 List 分为 每组为 h 个元素的小数组（ h ）；
 *  step_1: 以 h = 3*h+1  并且 h < N 为条件 得出，最大的最大值；
 *          while (h < N / 3) {
 *              h = 3 * h + 1;          // 1, 4, 13, 40, 121, 364, 1093
 *          }
 * 
 *  step_2: h >= 1;   // 即分组时每组至少有一个元素；
 *
 *  step_3: Math.ceil( N/h ):  当前可分得M个小数组 ；
 *  
 *  step_4: j 属于(2，M)小数组； 使用插入排序算法， 分别j小组，j-1, ....., 0小组插入排序，依次插入排序； 
 *          
 *         在插入排序是每个小组只比较对应位置的元素(即小组1第一个元素和小组2第一个元素)，进行排序；
 *  
 *  step_5: h = Math.floor(h/3);  重新分组，重复 step 2;
 */

function ShellSort(list) {
    let N = list.length;
    let h = 1;
    // 计算出数组能飞多少个有序数组；
    while (h < N / 3) {
        h = 3 * h + 1;          // 1, 4, 13, 40, 121, 364, 1093
    }
    console.log('1111       ' + h);
    while (h >= 1) {
        for (let i = h; i < N; ++i) {
            for (let j = i; j >= h; j -= h) {
                if (list[j] < list[j - h]) {
                    let temp = list[j];
                    list[j] = list[j - h];
                    list[j - h] = temp;
                }
            }
        }
        h = Math.floor(h / 3);
    }
    console.log(`ShellSort:    ${list}`);
}


let arr = [8, 12, 85, 5, 8, 3, 751, 18, 34, 73, 32, 39, 8, 6, 77, 8, 4, 3, 4, 2];
ShellSort(arr)
