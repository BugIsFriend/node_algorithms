/*
 * @Author: myerse.lee
 * @Date: 2019-10-28 15:46:48
 * @Last Modified by: myerse.lee
 * @Last Modified time: 2019-10-28 15:59:56
 * @Desc 乱序一个数组 不开辟新的内存实现洗牌算法, 
 */

function shuffleCard(cards) {
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

// console.log(shuffleCard([1, 2, 3, 4, 5, 6, 7, 8]))

