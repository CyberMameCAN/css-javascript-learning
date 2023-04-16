# HTML + CSS チートシート

## HTML



## CSS

### セレクタ
* **A > B** A要素の直下にあるすべてのB要素
* **A:eq(n)** （複数の）A要素の中のn番目のA要素 
* **A + B** A要素の直後にある(1つ目の)B要素

### 疑似要素
css3では::は２つ  

- ::before 要素の直**前**にcontent: ""の内容が挿入される
- ::after 要素の直**後**にcontent: ""の内容が挿入される

### アットルール

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