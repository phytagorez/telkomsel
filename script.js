const btnBeli = document.querySelectorAll('.btn-beli');
const btnMasuk = document.querySelector('.btn-masuk');

function cekNomor(no) {
  return /^[0-9]+$/.test(no) && no.length >= 10 && no.length <= 14;
}

btnBeli.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const card = btn.closest('.card');
    const namaPaket = card.querySelector('h3').innerText;
    const harga = card.querySelector('.harga').innerText;

    const no = prompt(`Beli ${namaPaket} (${harga})\nMasukkan nomor HP:`);
    if (no === null) return;

    const noHp = no.trim();
    if (!cekNomor(noHp)) {
      alert('Nomor HP tidak valid! Masukkan angka saja (10-14 digit).');
      return;
    }

    alert(`Permintaan beli ${namaPaket} untuk nomor ${noHp} berhasil dikirim.`);
  });
});

if (btnMasuk) {
  btnMasuk.addEventListener('click', (e) => {
    e.preventDefault();

    const no = prompt('Masukkan nomor HP untuk masuk:');
    if (no === null) return;

    const noHp = no.trim();
    if (!cekNomor(noHp)) {
      alert('Nomor HP tidak valid! Masukkan angka saja (10-14 digit).');
      return;
    }

    alert(`Kode OTP berhasil dikirim ke nomor ${noHp}.`);
  });
}