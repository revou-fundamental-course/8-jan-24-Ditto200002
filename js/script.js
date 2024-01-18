const keliling = document.getElementById("keliling");
const luas = document.getElementById("luas");
const hasil = document.getElementById("hasil");
const reset = document.getElementById("reset");
const sisi = document.getElementById("sisi");
const warn = document.getElementById("peringatan");

function hitungLuas() {
    document.getElementById("rumus-keliling").classList.add("hide");
    document.getElementById("rumus-luas").classList.remove("hide");
    document.getElementById("toggleLuas").classList.add("biru");
    document.getElementById("toggleKeliling").classList.remove("biru");
}

function hitungKeliling() {
    document.getElementById("rumus-luas").classList.add("hide");
    document.getElementById("rumus-keliling").classList.remove("hide");
    document.getElementById("toggleKeliling").classList.add("biru");
    document.getElementById("toggleLuas").classList.remove("biru");
}


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
document.getElementById("toggleLuas").addEventListener("click", hitungLuas);
document.getElementById("toggleKeliling").addEventListener("click", hitungKeliling);


hasil.addEventListener("click", hitung);
reset.addEventListener("click", bersih);