class Produk {
    constructor(id, nama, harga) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
    }
}

const produk1 = new Produk(1, "produk Satu", 1000);
const produk2 = new Produk(2, "produk Dua", 2000);
const produk3 = new Produk(3, "produk Tiga", 3000);

console.log(produk1.nama + " Harga " + produk1.harga);
console.log(produk2.nama + " Harga " + produk2.harga);
console.log(produk3.nama + " Harga " + produk3.harga);