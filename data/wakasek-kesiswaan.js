/* =========================================================
   data/wakasek-kesiswaan.js
   Data khusus untuk dashboard Wakasek Kesiswaan.
   ========================================================= */

const DATA_KESISWAAN = {
  ringkasan: {
    totalSiswa: 864,
    pelanggaranBulanIni: 9,
    prestasiBulanIni: 6,
    ekstrakurikulerAktif: 12
  },
  pelanggaran: [
    { tanggal: "2026-08-03", siswa: "Fajar Nugroho", kelas: "XII IPA 1", jenis: "Atribut seragam tidak lengkap", poin: 5, status: "Ditindaklanjuti" },
    { tanggal: "2026-08-07", siswa: "Dimas Prasetyo", kelas: "X MIPA 4", jenis: "Perkelahian di lingkungan sekolah", poin: 50, status: "Skorsing" },
    { tanggal: "2026-08-11", siswa: "Bella Anggraini", kelas: "XI IPS 1", jenis: "Terlambat masuk sekolah", poin: 5, status: "Peringatan" },
    { tanggal: "2026-08-14", siswa: "Yoga Pratama", kelas: "X IPS 3", jenis: "Membawa HP saat ujian", poin: 15, status: "Ditindaklanjuti" },
    { tanggal: "2026-08-19", siswa: "Cindy Amelia", kelas: "XII IPS 3", jenis: "Tidak mengikuti upacara tanpa keterangan", poin: 10, status: "Peringatan" }
  ],
  prestasi: [
    { tanggal: "2026-08-05", siswa: "Alya Ramadhani", kelas: "XI MIPA 2", bidang: "Olimpiade Matematika", tingkat: "Kabupaten", capaian: "Juara 1" },
    { tanggal: "2026-08-08", siswa: "Bayu Kurniawan", kelas: "XII IPA 3", bidang: "Futsal", tingkat: "Provinsi", capaian: "Juara 2" },
    { tanggal: "2026-08-13", siswa: "Tim Paduan Suara", kelas: "Gabungan", bidang: "Lomba Paduan Suara", tingkat: "Kota", capaian: "Juara 1" },
    { tanggal: "2026-08-21", siswa: "Kirana Dewi", kelas: "X IPS 1", bidang: "Debat Bahasa Inggris", tingkat: "Kabupaten", capaian: "Juara 3" }
  ],
  ekstrakurikuler: [
    { nama: "Pramuka", pembina: "Ibu Wulan Sari, S.Pd.", jadwal: "Jumat, 14.00 - 16.00", anggota: 96 },
    { nama: "Futsal", pembina: "Bapak Doni Iskandar", jadwal: "Selasa & Kamis, 15.30 - 17.00", anggota: 34 },
    { nama: "Paduan Suara", pembina: "Ibu Maria Angelina, S.Sn.", jadwal: "Rabu, 14.00 - 15.30", anggota: 28 },
    { nama: "Karya Ilmiah Remaja", pembina: "Bapak Teguh Prasetya, S.Si.", jadwal: "Senin, 14.00 - 15.30", anggota: 22 },
    { nama: "PMR", pembina: "Ibu Ratna Sari, S.Kep.", jadwal: "Sabtu, 08.00 - 10.00", anggota: 40 }
  ]
};
