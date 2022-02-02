let num = [5, 8, 2, 9, 3, 6, 7, 4]

num.push(1)
num.sort()

console.log(`Lista elementos no vetor: ${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(7)

if (pos == -1) {
    console.log('Valor não encontrado.')
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}
