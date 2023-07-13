const arrayOriginal1 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat1 = arrayOriginal1.concat([["André", "Fernanda"], ["Ricardo", "Ana"]], ["Marcelo", "Bia"])

console.log(arrayConcat1)   // ['Maria', 'Carlos', 'Eduardo', 'Samanta', 'André', 'Fernanda', 'Ricardo', 'Ana', 'Marcelo', 'Bia']
console.log(arrayOriginal1) // [ 'Maria', 'Carlos', 'Eduardo', 'Samanta' ]

// ---------------

const arrayOriginal2 = [50, 60, 70]
const arrayConcat2 = arrayOriginal2.concat([80, [90, 100]])

console.log(arrayConcat2)   // [ 50, 60, 70, 80, [ 90, 100 ] ]
console.log(arrayOriginal2) // [ 50, 60, 70 ]