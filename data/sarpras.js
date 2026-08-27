/* =========================================================
   data/sarpras.js
   Data khusus untuk dashboard Wakasek Sarana Prasarana.
   ========================================================= */

const DATA_SARPRAS = {
  ringkasan: {
    totalAset: 312,
    kondisiBaik: 268,
    perluPerbaikan: 31,
    rusakBerat: 13
  },
  inventaris: [
    { nama: "Proyektor Ruang Kelas", jumlah: 24, kondisi: "Baik", lokasi: "Ruang Kelas X - XII" },
    { nama: "Komputer Lab TIK", jumlah: 40, kondisi: "Baik", lokasi: "Lab Komputer" },
    { nama: "Kursi Siswa", jumlah: 900, kondisi: "Baik", lokasi: "Seluruh Ruang Kelas" },
    { nama: "AC Ruang Guru", jumlah: 6, kondisi: "Perlu Perbaikan", lokasi: "Ruang Guru" },
    { nama: "Alat Praktik Lab IPA", jumlah: 58, kondisi: "Baik", lokasi: "Lab Fisika/Kimia/Biologi" },
    { nama: "Kipas Angin Aula", jumlah: 10, kondisi: "Rusak Berat", lokasi: "Aula Sekolah" }
  ],
  pengajuanPerbaikan: [
    { tanggal: "2026-08-05", item: "AC Ruang Guru unit 2", pemohon: "Staf Tata Usaha", prioritas: "Sedang", status: "Diproses" },
    { tanggal: "2026-08-09", item: "Atap bocor Ruang Kelas XI IPS 2", pemohon: "Wali Kelas XI IPS 2", prioritas: "Tinggi", status: "Diproses" },
    { tanggal: "2026-08-14", item: "Kipas angin Aula (4 unit)", pemohon: "Wakasek Kesiswaan", prioritas: "Rendah", status: "Menunggu Anggaran" },
    { tanggal: "2026-08-20", item: "Keran wastafel toilet siswa lantai 2", pemohon: "Petugas Kebersihan", prioritas: "Tinggi", status: "Selesai" }
  ],
  kondisiRuang: [
    { ruang: "Ruang Kelas (36 ruang)", kondisi: "Baik", catatan: "Perawatan rutin berjalan normal" },
    { ruang: "Laboratorium IPA", kondisi: "Baik", catatan: "Alat praktik lengkap & terawat" },
    { ruang: "Laboratorium Komputer", kondisi: "Baik", catatan: "Perlu penambahan unit tahun depan" },
    { ruang: "Perpustakaan", kondisi: "Baik", catatan: "Renovasi rak buku selesai Juli 2026" },
    { ruang: "Aula Sekolah", kondisi: "Perlu Perbaikan", catatan: "Sirkulasi udara kurang optimal" }
  ]
};
