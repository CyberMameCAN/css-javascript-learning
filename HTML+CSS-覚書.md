# HTML + CSS チートシート

## HTML



## CSS

### セレクタ 3種 (隣接・直下・間接)

- **A + B** A要素の直後(隣接)にある(**1つ目の**)B要素
- **A > B** A要素の直下にあるすべてのB要素 (孫要素は入らない)
- **A ~ B** A要素より以降にあるB要素

#### 何番目？

まずはこの辺を覚えていくとしよう。

- **A:eq(n)** （複数の）A要素の中で、n番目のA要素 
- **A:first-child**
- **A:last-child**
- **A:nth-child(x)**  x番目
- **A:not(:last-child)** 最後以外の要素
- **A:nth-of-type(odd)** 奇数要素

### 疑似要素

css3では::は２つ  

- ::before 要素の直**前**にcontent: ""の内容が挿入される
- ::after 要素の直**後**にcontent: ""の内容が挿入される

### アニメーション

- **transition**プロパティ
  - お手軽
  - 凝ったことはできない
- **animation**プロパティ
  - 複雑だか複雑な制御もできる
  - keyframeと共に使う

#### アットルール

- [@keyframes](https://developer.mozilla.org/ja/docs/Web/CSS/@keyframes)
    - アニメーションの流れに沿ったキーフレーム（または中間地点）のスタイルを定義することによって、一連の CSS アニメーションの中間ステップを制御します。
    - from, to

### position

[MDN position](https://developer.mozilla.org/ja/docs/Web/CSS/position)

- relative
  - 自分自身からの**相対**オフセットで配置
- absolute
  - **絶対**位置
- fixed
  - **絶対**位置
- sticky
  - **粘着**位置