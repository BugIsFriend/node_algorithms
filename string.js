

//使用二分算法；速度更快


// 切割字符串
function mySplit(content, splitStr) {
    if(content.length == 0 || splitStr.length ==0 || splitStr.length > content.length ) return [];

    let spliteArr = [];
    let startIndex = 0;
    for (let i = 0; i < content.length; ) {
        let k =0;
        while(k <= splitStr.length &&  (k+i <= content.length) && content[k+i]==splitStr[k]){
            k++;
        }

        if(k >= splitStr.length){
            spliteArr.push(content.substr(startIndex, i -  startIndex ));
            i =  k+i;
            startIndex = i;
        }else{
            i++;
        }

        if(i >= content.length) {
            if(startIndex != 0 &&   (i -  startIndex > 0) ){
                spliteArr.push(content.substr(startIndex, i -  startIndex));
            }
            return spliteArr;
        } ;
    }
    return spliteArr;
}


console.log( mySplit("12||2ss1||11||22||adfadf||ssss", "||" ));