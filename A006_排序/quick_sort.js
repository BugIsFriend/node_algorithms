
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function less(a, b) {
    return a < b;
}


function partition(arr, lo, hi) {
    let i = lo + 1;
    let j = hi;
    let tar = arr[lo];
    while (i < j) {
        while (j > i && arr[j] > tar) {
            j--;
        }

        while (i < j && arr[i] < tar) {
            i++;
        }
        if (i < j) {
            swap(arr, i, j);
        }
    }

    swap(arr, lo, j);
    return j;
}

function quik_sort(arr, lo, hi) {
    if (lo < hi) {
        let partIndex = partition(arr, lo, hi);
        // console.log(arr, partIndex)
        quik_sort(arr, lo, partIndex - 1);
        quik_sort(arr, partIndex + 1, hi);
    }
}


let arr = [1, 2, 3, 4, 3, 46787, 42234, 53453, 12124, 454];
quik_sort(arr, 0, arr.length - 1);
console.log(arr);
