
// 不使用内部排序算法；

function mergeSortedArray(arr1, arr2) {
    let j = 0, k = 0;
    let arr3 = new Array(arr1.length + arr2.length);

    for (let i = 0; i < arr3.length; ++i) {

        let a1 = null;  // 防止元素为零；
        if (j < arr1.length) {
            a1 = arr1[j];
        }

        let a2 = null;   // 防止元素为零；
        if (k < arr2.length) {
            a2 = arr2[k];
        }

        if (j < arr1.length && k < arr2.length) {
            if (a1 <= a2) {
                arr3[i] = a1;
                j++;
            }

            if (a2 < a1) {
                arr3[i] = a2;
                k++;
            }
        } else if (j < arr1.length) {
            arr3[i] = a1;
            j++;
        } else if (k < arr2.length) {
            arr3[i] = a2;
            k++;
        }
    }
    console.log(arr3)
}

let arr1 = [0, 2, 4];
let arr2 = [2, 3, 4, 5];
mergeSortedArray(arr1, arr2)