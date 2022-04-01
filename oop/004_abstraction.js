class Lingkaran {
    constructor(jari_jari) {
        this.jari_jari = jari_jari;
    }

    Diameter() {
        return this.jari_jari * 2;
    }

    Luas() {
        return Math.round(Math.PI * this.jari_jari ** 2);
    }

    Keliling() {
        return Math.round(2 * Math.PI * this.jari_jari);   
    }
}

const lingkaran = new Lingkaran(20);
console.log(lingkaran.Diameter());
console.log(lingkaran.Luas());
console.log(lingkaran.Keliling());