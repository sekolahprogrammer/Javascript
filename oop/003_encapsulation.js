class Siswa {
    #nama;
    #umur;

    get nama() {
        return this.#nama;
    }

    set nama(nama) {
        if(new RegExp(/\d/).test(nama)) {
            console.log('Nama tidak boleh mengandung angka!');
        }else {
            this.#nama = nama;
        }
    }

    get umur() {
        return this.#umur;
    }

    set umur(umur) {
        if(typeof umur === "number") {
            this.#umur = umur;
        }else {
            console.log('Umur harus bertipe data integer!');
        }
    }
}

const siswa1 = new Siswa();

// console.log(siswa1.nama); // undefined
// console.log(siswa1.umur); // undefined

// siswa1.nama = "harus string"; // false
siswa1.nama = "prayogaea";
// siswa1.umur = "harus integer";
siswa1.umur = 21;

console.log("Nama : " + siswa1.nama + "\nUmur : " + siswa1.umur);