/* =========================================================
   data/laporan-organisasi.js
   File ini TIDAK menyimpan data sendiri — ia hanya mendaftarkan
   organisasi siswa apa saja yang datanya perlu ditampilkan
   sebagai laporan di dashboard Wakasek Kesiswaan, Kepala Sekolah,
   dan Pengawas Sekolah.

   Kalau menambah organisasi baru (mis. Rohis, KIR, dsb.):
   1. Buat file data/<nama-organisasi>.js dengan struktur field
      yang sama seperti data/osis.js (namaOrganisasi, periode,
      pembina, anggota, programKerja, kegiatan, keuangan, lpj).
   2. Tambahkan satu baris entri di ORGANISASI_LIST di bawah ini.
   3. Muat file barunya di index.html SEBELUM file ini
      (<script src="data/laporan-organisasi.js">) supaya variabel
      datanya sudah tersedia saat baris dataVar dievaluasi.

   Dengan begitu, dashboard Wakasek Kesiswaan otomatis ikut
   menampilkan organisasi baru tanpa perlu mengubah kode di
   index.html sama sekali.
   ========================================================= */

const ORGANISASI_LIST = [
  { id: "osis",     roleKey: "osis",     label: "OSIS",     color: "#ea580c", dataVar: DATA_OSIS },
  { id: "pramuka",  roleKey: "pramuka",  label: "Pramuka",  color: "#166534", dataVar: DATA_PRAMUKA },
  { id: "pmr",      roleKey: "pmr",      label: "PMR",      color: "#dc2626", dataVar: DATA_PMR },
  { id: "paskibra", roleKey: "paskibra", label: "Paskibra", color: "#1d4ed8", dataVar: DATA_PASKIBRA }
];
