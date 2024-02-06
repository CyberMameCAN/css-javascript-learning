# JavaScript

## キーワード

- ES5
- 現代はES6
- Vanilla JS

## HTMLへ

### HTMLへ追加
	const body = document.getElementsByTagName("body")[0];
	const p = document.createElement("p");
	p.textContent = "XXX";
	body.appendChild(p);

### CSSを変更
circleというIDが付いたCSSのtransformという属性にXXを設定する。

	let circle = document.getElementById("circle");
	circle.style.transform = XX;


## 型
**typeof**で調べることができる。

- let
- const
  - const tax = 0.1;
  - tax = 0.2; (変更するとエラー)
- var
  - letとほぼ同じ
  - 今は使わない（昔の記法）

### データ型

- プリミティブ型
  - 真偽値
  - 数値
  - 文字列
  - etc...
- オブジェクト
  - オブジェクト
  - 配列
  - 関数
  - etc...

### オブジェクト

	let user = {
	  name: "Toshiya",
	  age: 52,
	  printAge: function() {
	    console.log(this.age);
	  }
	};
	
	user.name;        // => "Toshiya"
	user.printAge(); // => 52

### 暗黙的型変換

- なんのため：データ型を意識しなくてもプログラムが書けるように
- if文の条件式 -> データを真偽値に変換してくれる

#### 以下はfalseになる値

- false
- undefined
- null
- 0 (ゼロ)
- On
- NaN
- "" (空文字)

## 関数

- functionで定義

1. アロー関数 **=>** （現在の主流）
2. xxx = function () {とりあえず子の書き方を覚える異にする。}
3. function xxx() {}

### アロー関数の書き方

	const func = (x) => x * x;
	const x=3;
	console.log(func(x));
	headingMenu();

### よくある書き方

	let upBtn = document.getElementById("upBtn");
	// cssのcircle IDのtransform要素を取ってくる
	let rotateValue = circle.style.transform;
	let rotateSum;

	upBtn.onclick = function () {
		// 時計回りに+90°回転
		rotateSum = rotateValue + "rotate(-90deg)";
		circle.style.transform = rotateSum;
		rotateValue = rotateSum
	}

### 返り値がない関数
**undefined**を返す


### コールバック関数
別の関数に呼び出してもらう関数  
参考キーワード）**高階関数**


## ループ

### forEach

	const array = [1, 2, 3];
	array.forEach(value => {
	  console.log(value * 2);
	});

## addEventListener

- ターゲット.addEventListener(イベント名, 関数);
  - form.addEventLister("submit", function () { console.log("Logs"); })

## Document

## localStorage

	// データの保存
	localStorage.setItem('キー', '値');
	// データの取得
	localStorage.getItem('キー');

localStorageでは文字列形式で保存されるため、**JSONに変換**した方が効率的

### document.querySelector(), document.querySelectorAll()

使えるようにする。
指定されたセレクターまたはセレクター群に一致する、文書内の最初の Element を返す。  
無ければ null を返す。

### document.createElement()

HTML 要素を生成  
.appendChild() で追加
