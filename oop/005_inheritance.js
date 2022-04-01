class Siswa {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    run() {
        console.log(`Nama : ${this.nama} \nUmur : ${this.umur}`);
    }
    show() {
        console.log(`${this.nama} orangnya Ganteng`);
    }
}

class Data extends Siswa {
    constructor(nama, umur, hobby){
        super(nama, umur);
        this.hobby  = hobby;
    }

    hobbi() {
        console.log(`${this.nama} Seorang ${this.hobby}`);
    }

    show() {
        super.show();
    }
}

const data = new Data("Prayoga Eka ardiansyah", 21 ,"Programmer");
data.run();
data.show();
data.hobbi();