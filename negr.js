let nums = [2,4,6,7,8,9,10.11]

let mevalar = [
    "olma",
    "banan",
    "uzum",
    "gilos",
    "shaptoli",
    "o'rik",
    "apelsin",
    "olcha",
    "qulipnay",

]

for (const child of mevalar) {
    if (child.includes('a')) {
        console.log(child + 'mevalarda a harifi bor');
    }
}