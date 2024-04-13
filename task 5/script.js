/*
Напишите функцию getMonth(n), 
которая принимает номер месяца и возвращает его название. 
Например, getMonth(12) ⇒ 'декабрь'. Используйте if/else.
*/

function getMonth(n) {
    if (n === 1) return 'january';
    if (n === 2) return 'february';
    if (n === 3) return 'march';
    if (n === 4) return 'april';
    if (n === 5) return 'may';
    if (n === 6) return 'june';
    if (n === 7) return 'july';
    if (n === 8) return 'august';
    if (n === 9) return 'september';
    if (n === 10) return 'october';
    if (n === 11) return 'november';
    if (n === 12) return 'december';
return 'not stated';
}

getMonth(9)
