
function func1() {
    var i = 0;
    var func2 = function (flag) {
        i++;
        console.log(` ${flag}   ${i}`)
    }
    return func2;
}

var fun2 = func1()
var fun3 = func1()


fun2('flag  2');
fun2('flag  2');
fun3('flag  3');


function less(a, b) {
    return a < b;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort(array) {

    let temArr = Object.assign(array);
    console.log(array);
    for (let i = temArr.length - 1; i > 0; i--) {
        heap_sort(temArr, i, temArr.length - 1);
    }

    for (let i = 1; i < temArr.length; i++) {
        array[i - 1] = temArr[i];
    }
}


function heap_sort(array, h, length) {
    if (h > length) {
        return;
    }

    let left = h * 2;
    let right = left + 1;

    heap_sort(array, left, length);
    heap_sort(array, right, length);

    if (right <= length) {
        if (less(array[left], array[right])) {
            swap(array, left, right);
        }

        if (less(array[h], array[left])) {
            swap(array, h, left);
        }
    } else if (left <= length) {
        if (less(array[h], array[left])) {
            swap(array, h, left);
        }
    }

}

let arr = [1, 2, 42, 3, 5, 6, 9, 7, 54, 3]
sort(arr)
console.log(arr)