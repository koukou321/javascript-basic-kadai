const nijou = (num) => {
    const answer = num * num;
    return answer; // 計算結果を戻り値として返す
};

// 関数の戻り値を変数に格納してから、それをコンソールに出力
const result1 = nijou(11);
console.log(result1); // 121が出力される

const result2 = nijou(245);
console.log(result2); // 60025が出力される
