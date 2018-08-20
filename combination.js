
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