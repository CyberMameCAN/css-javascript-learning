// 非同期処理とは？
//
// 処理の完了を待たずに別の処理を実行すること
// JavaScriptにおける非同期処理といえば、コールバックを利用することが多い。
//     関数( , callback関数);
// 因みに、コールバック関数の書き方は
//     callback関数(エラーオブジェクト, 結果)
//
// 非同期処理を使うケース(例)
// - ファイルのアップロード・ダウンロード
// - データベースの読み・書き
// 処理が完了するまでに時間がかかるときに使われることが多い。
//
// コールバック関数がネストされ続けていくとコードが分かりづらくなるので、Promiseやasync/awaitが使われる。
//
// Promiseの基本の形
// const promise = new Promise((resolve, reject) => {
    // 非同期の処理
    // 処理が終わったら、resolve(成功した時) or reject(失敗した時) を呼ぶ
// });
// 
// Promiseの状態
// - Fulfilled
//     resolveした時。このとき onFulfilled が呼ばれる
// - Rejected
//     rejectした時。このとき onRejected が呼ばれる
// - Pending
//     Fulfilled または Rejected ではない時。初期化状態等
//
function myPromise(num) {
    return new Promise(function(resolve) {
        // setTimeout() 非同期関数
        // 第1引数: 時間切れになるとここのコードを実行する
        // 第2引数: delay
        setTimeout(() => { resolve(num * num) }, 2000)
    })
}

// async を関数の前に付けて定義
// Node.jsの場合は**必ず**Promiseが返る
//
// await async Functionの中で使う。
// PromiseのFulfilled or Rejected になるまで、非同期処理を待つ。
// 非同期処理が同期処理のように上から順番に実行されるような流れで書けるのが、自分には分かりやすそうな気がした。
async function myAsync() {
    const result = await myPromise(8);

    console.log(result);
}
myAsync();
// thenを使った方法
// myPromise(10).then(function(data) {
//     console.log(data);
//     return myPromise(100)
// }).then(function(data) {
//     console.log(data);
//     return myPromise(1000)
// }).then(function(data) {
//     console.log(data);
// })

// async/awaitを使った方法
async function myAsyncAll() {
    console.log(await myPromise(10));
    console.log(await myPromise(100));
    console.log(await myPromise(1000));
}
myAsyncAll();

//
// 並列処理
//
async function myAsyncAll() {
    const r1 = myPromise(10);
    const r2 = myPromise(100);
    const r3 = myPromise(1000);

    console.log(await r1, await r2, await r3);
}
// myAsyncAll();