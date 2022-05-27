const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach(todo => {
        add(todo);
    });
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); // デフォルトのイベントを発生させないように設定（ここではブラウザのリロードを無効にする為に設定）
    // console.log(input.value);
    add();
});

function add(todo) {
    let todoText;

    if (todo) {
        todoText = todo.text;
    } else {
        todoText = input.value;
    }

    // if (todoText.length > 0) {
    if (todoText) { // 暗黙的型変換
        const li = document.createElement("li");
        
        li.innerText = todoText;
        li.classList.add("list-group-item");

        if (todo && todo.completed) {
            li.classList.add("text-decoration-line-through");
        }

        // 右クリックの時
        li.addEventListener("contextmenu", function (event) {   // 右クリックを検知
            event.preventDefault();
            let result = window.confirm(li.innerText + "\n\n削除します");
            if (result) {
                li.remove();                                    // 右クリで指定したリストを削除
                saveData();
            }
        });

        // ダブルクリックの時
        li.addEventListener("dblclick", function (event) {
            event.preventDefault();
            console.log("ダブルクリック")
        });

        li.addEventListener("click", function () {
            li.classList.toggle("text-decoration-line-through");
            saveData();
        });

        ul.appendChild(li);
        input.value = "";
        saveData();
    }
}

function saveData() {
    const lists = document.querySelectorAll("li"); // liタグを全部取ってくる
    let todos = [];

    lists.forEach(li => {
        let todo = {    // オブジェクト型
            text: li.innerText,
            completed: li.classList.contains("text-decoration-line-through")
        };

        todos.push(todo);
        // console.log(list.innerText);
    });
    // JSONで保存するのが効率的
    localStorage.setItem("todos", JSON.stringify(todos));
}