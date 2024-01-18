const keliling = document.getElementById("keliling");
const luas = document.getElementById("luas");
const hasil = document.getElementById("hasil");
const reset = document.getElementById("reset");
const sisi = document.getElementById("sisi");
const warn = document.getElementById("peringatan");

function valid(sisi) {
    const regex = /\d/;
    return sisi.match(regex);

}

function nilaiKeliling() {
    return sisi.value * 4
}

function nilaiLuas() {
    return sisi.value * sisi.value
}
function hitung() {
    if (valid) {
    keliling.value = nilaiKeliling();
    luas.value = nilaiLuas();
    }
}

function bersih() {
    keliling.value = ''
    luas.value = ''
    sisi.value = ''
}

hasil.addEventListener("click", hitung);
reset.addEventListener("click", bersih);