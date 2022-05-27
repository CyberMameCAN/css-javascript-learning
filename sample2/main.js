const ageToType = (age) => {
    if (age < 0) {
        return "正の数値を指定してください"
    } else if (age < 3) {
        return "赤ちゃん"
    } else if (age < 18) {
        return "子供"
    } else if (age < 65) {
        return "大人"
    } else {
        return "お年寄り"
    }
}

const type = ageToType(-80);
console.log(type)