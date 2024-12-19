function likes(names) {

    if(names == 0) return `no one likes this`
    if(names.length == 1) return `${names[0]} likes this`
    if(names.length == 2) return `${names[0]} and ${names[1]} like this`
    if(names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    if(names.length > 3) return `${names[0]}, ${names[1]} and ${(names.length-2)} other like this`
}

//2 METHOD

// function likes (names) {
//     const templates = [
//       'no one likes this',
//       '{name} likes this',
//       '{name} and {name} like this',
//       '{name}, {name} and {name} like this',
//       '{name}, {name} and {n} others like this'
//     ];
//     const idx = Math.min(names.length, 4);
    
//     return templates[idx].replace(/{name}|{n}/g, val => {
//       return val === '{name}' ? names.shift() : names.length;
//     });
//   }

  likes([`Nikita`, `andrey`]);