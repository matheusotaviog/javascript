let valores = [8, 1, 7, 4, 2, 9];
valores.sort();

/*
for (let i = 0; i <= valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}
*/

for (let valor in valores) {
    console.log(`A posição ${valor} tem o valor ${valores[valor]}`);
}
