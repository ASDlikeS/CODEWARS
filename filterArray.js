function filter_list(l) {
    return l.filter(el => typeof el === `number` && !isNaN (el) )
}

console.log(filter_list([24, 6, `awff`, `aefawe`, 7, `124`]));
