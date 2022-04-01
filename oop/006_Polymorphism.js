class Orang {
    constructor(nama) {
        this.nama = nama;
    }
    
    show() {
        console.log(`Hallo, nama saya ${this.nama}`);
    }
}

const kontak = [
    new Orang("prayogaea"),
    new Orang("putriajeng"),
];

kontak.forEach((orang) => {
    orang.show();
});