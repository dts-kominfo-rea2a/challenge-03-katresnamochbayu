// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
function listBelanjaan(){
  let arrBelanjaan = arguments[0];
  let arrGabungBelanjaan = [];
  for (let id = 0; id < arrBelanjaan.length; id++) {
    arrGabungBelanjaan.push("- " + arrBelanjaan[id].nama + " x " + arrBelanjaan[id].kuantitas);
  }
  return arrGabungBelanjaan;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
function totalBelanjaan() {
  let arrBelanjaan = arguments[0];
  let sum = 0;
  for (let id = 0; id < arrBelanjaan.length; id++) {
    sum += arrBelanjaan[id].harga * arrBelanjaan[id].kuantitas;
  }
  return sum;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
