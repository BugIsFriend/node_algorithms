/*
 * @Author: myerse.lee 
 * @Date: 2018-10-11 21:57:44 
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2018-10-11 21:58:35
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
            throw 'stack is null';
        }
    }

    size() {
        return this._curIndex - this._lastIndex;
    }
}


