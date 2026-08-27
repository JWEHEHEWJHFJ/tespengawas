/* =========================================================
   data/guru-bk.js
   Data khusus untuk dashboard Guru BK (Bimbingan Konseling).
   ========================================================= */

const DATA_GURU_BK = {
  ringkasan: {
    totalKasus: 18,
    kasusSelesai: 11,
    kasusProses: 5,
    kasusPemantauan: 2
  },
  kasus: [
    { tanggal: "2026-08-04", siswa: "M. Rizky Ardiansyah", kelas: "XI IPA 2", kategori: "Pelanggaran Ringan", uraian: "Terlambat masuk kelas 5 kali dalam sebulan", tindakLanjut: "Konseling individu & surat pernyataan", status: "Selesai" },
    { tanggal: "2026-08-06", siswa: "Anisa Putri Wulandari", kelas: "X IPS 1", kategori: "Masalah Pribadi", uraian: "Kesulitan menyesuaikan diri di lingkungan baru", tindakLanjut: "Konseling berkelanjutan 3 sesi", status: "Proses" },
    { tanggal: "2026-08-09", siswa: "Fajar Nugroho", kelas: "XII IPA 1", kategori: "Pelanggaran Sedang", uraian: "Membawa rokok elektrik ke sekolah", tindakLanjut: "Panggilan orang tua & bimbingan khusus", status: "Selesai" },
    { tanggal: "2026-08-12", siswa: "Salsabila Putri", kelas: "XI IPS 3", kategori: "Akademik", uraian: "Penurunan nilai signifikan pada 3 mapel", tindakLanjut: "Analisis penyebab & rencana belajar", status: "Proses" },
    { tanggal: "2026-08-15", siswa: "Dimas Prasetyo", kelas: "X MIPA 4", kategori: "Pelanggaran Berat", uraian: "Terlibat perkelahian dengan siswa lain", tindakLanjut: "Skorsing 3 hari & konseling wajib", status: "Pemantauan" },
    { tanggal: "2026-08-18", siswa: "Nadia Zahra Ramadhani", kelas: "XII IPS 2", kategori: "Masalah Keluarga", uraian: "Orang tua bercerai, berdampak pada emosi siswa", tindakLanjut: "Konseling rutin mingguan", status: "Pemantauan" },
    { tanggal: "2026-08-20", siswa: "Reza Firmansyah", kelas: "XI MIPA 1", kategori: "Pelanggaran Ringan", uraian: "Tidak mengerjakan tugas berulang kali", tindakLanjut: "Pembinaan & pemantauan guru mapel", status: "Selesai" },
    { tanggal: "2026-08-22", siswa: "Putri Ayu Lestari", kelas: "X IPS 2", kategori: "Sosial", uraian: "Konflik pertemanan yang memengaruhi konsentrasi belajar", tindakLanjut: "Mediasi antar siswa", status: "Selesai" }
  ],
  jadwalKonseling: [
    { hari: "Senin", waktu: "09.00 - 11.00", agenda: "Konseling individu kelas X" },
    { hari: "Rabu", waktu: "09.00 - 11.00", agenda: "Konseling individu kelas XI" },
    { hari: "Kamis", waktu: "13.00 - 14.30", agenda: "Konseling kelompok & sosialisasi anti-bullying" },
    { hari: "Jumat", waktu: "08.00 - 09.30", agenda: "Evaluasi kasus & koordinasi wali kelas" }
  ]
};
