var son = +prompt('son kiriting!')
darajasi = +prompt('sonning darajasini kiriting!')
let daraja = 1;
for (let i = 0; i < darajasi; i++) {
    daraja = daraja * son;
}
console.log(` ${son} sonining ${darajasi} chi darajasi ${daraja}`);
