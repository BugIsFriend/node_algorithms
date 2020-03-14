/*
 * @Author: myerse.lee
 * @Date: 2019-10-28 15:46:48
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2020-03-05 17:02:38
 * @Desc 乱序一个数组 不开辟新的内存实现洗牌算法, 
 *  
 * 要求：不开辟新的数据，；
 * 思想: 
 *      step_0: 取得数组长度N，作为循环技术；
 *      step_1: [0,N) 区间取得一个随机数；  temp = Math.floor(Math.randow()*N);
 *      step_2: 交换 temp 和 N 对应的数值；
 *      step_3: N减一；
 *      step_4: 重复 step_1 步骤， 直到 N 小于等于 0；
 */

function shuffle_array(cards) {
    let card_count = cards.length;
    let random_index = 0;
    let swap_temp_num = -1;

    while (card_count > 0) {
        random_index = Math.floor(Math.random() * card_count);
        swap_temp_num = cards[random_index];
        cards[random_index] = cards[card_count - 1];
        cards[card_count - 1] = swap_temp_num;
        --card_count;
    }
    return cards;
}

console.log(shuffle_array([1, 2, 3, 4, 5, 6, 7, 8]))

