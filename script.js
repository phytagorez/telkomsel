const listBtnBeli = document.querySelectorAll('.btn-beli');

listBtnBeli.forEach((tombol) => {
  tombol.addEventListener('click', (e) => {
    e.preventDefault();

    const kartu = tombol.closest('.card');
    const namaPaket = kartu.querySelector('h3').textContent;
    const hargaPaket = kartu.querySelector('.harga').textContent;

    const noHp = prompt(`Beli ${namaPaket} (${hargaPaket})\nMasukkan nomor Telkomsel Anda:`);
    
    if (noHp) {
      alert(`Permintaan untuk nomor ${noHp} berhasil dikirim. Silakan cek SMS konfirmasi.`);
    }
  });
});

const btnMasuk = document.querySelector('.btn-masuk');

if (btnMasuk) {
  btnMasuk.addEventListener('click', (e) => {
    e.preventDefault();
    const noHp = prompt('Masukkan nomor Telkomsel untuk masuk ke akun:');
    if (noHp) {
      alert(`Kode verifikasi (OTP) telah dikirim ke ${noHp}.`);
    }
  });
}