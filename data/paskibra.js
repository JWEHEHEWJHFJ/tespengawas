/* =========================================================
   data/paskibra.js
   Data khusus untuk dashboard organisasi Paskibra.
   ========================================================= */

const DATA_PASKIBRA = {
  namaOrganisasi: "Paskibra",
  periode: "2025/2026",
  pembina: "Doni Iskandar, S.Pd.",

  anggota: [
    { nama: "Aditya Nugraha", kelas: "XI IPA 2", jabatan: "Komandan Paskibra" },
    { nama: "Nabila Syafitri", kelas: "XI IPS 2", jabatan: "Wakil Komandan" },
    { nama: "Reyhan Firdaus", kelas: "X MIPA 3", jabatan: "Sekretaris" },
    { nama: "Zahra Amalia", kelas: "X IPS 1", jabatan: "Bendahara" },
    { nama: "Galih Prasetyo", kelas: "XI MIPA 3", jabatan: "Koordinator Latihan Fisik" }
  ],

  programKerja: [
    { nama: "Latihan Baris-Berbaris (LBB) Rutin", bidang: "Kedisiplinan", target: "2 kali/minggu", capaian: "Terlaksana rutin Selasa & Kamis", status: "Berjalan" },
    { nama: "Seleksi Anggota Paskibra Baru", bidang: "Regenerasi", target: "1 kali/tahun", capaian: "32 pendaftar, tahap wawancara", status: "Berjalan" },
    { nama: "Pengibaran Bendera Upacara Rutin", bidang: "Kedisiplinan", target: "Setiap Senin", capaian: "Berjalan sesuai jadwal", status: "Berjalan" },
    { nama: "Seleksi Paskibra Tingkat Kabupaten", bidang: "Prestasi", target: "1 kali/tahun", capaian: "Menunggu jadwal dari Dispora", status: "Belum Mulai" }
  ],

  kegiatan: [
    { tanggal: "2026-08-04", nama: "Latihan Intensif Pengibaran HUT RI", deskripsi: "Persiapan khusus upacara 17 Agustus", status: "Selesai" },
    { tanggal: "2026-08-17", nama: "Pengibaran Bendera Upacara HUT RI ke-81", deskripsi: "Bertugas penuh di lapangan sekolah", status: "Selesai" },
    { tanggal: "2026-08-20", nama: "Evaluasi & Latihan Rutin Pasca HUT RI", deskripsi: "Evaluasi teknis dan kekompakan tim", status: "Selesai" },
    { tanggal: "2026-09-02", nama: "Wawancara Seleksi Anggota Baru", deskripsi: "Tahap akhir seleksi calon anggota Paskibra", status: "Direncanakan" }
  ],

  keuangan: [
    { tanggal: "2026-08-01", keterangan: "Kas awal periode dari sekolah", jenis: "Pemasukan", nominal: 900000 },
    { tanggal: "2026-08-10", keterangan: "Perlengkapan atribut pengibaran HUT RI", jenis: "Pengeluaran", nominal: 480000 },
    { tanggal: "2026-08-17", keterangan: "Konsumsi latihan intensif", jenis: "Pengeluaran", nominal: 210000 },
    { tanggal: "2026-08-18", keterangan: "Apresiasi dari sekolah pasca tugas HUT RI", jenis: "Pemasukan", nominal: 500000 }
  ],

  lpj: [
    { tanggal: "2026-08-19", periode: "Agustus 2026", disusunOleh: "Aditya Nugraha (Komandan Paskibra)", isi: "Tugas pengibaran bendera pada peringatan HUT RI ke-81 berjalan lancar dan tertib. Evaluasi tim menunjukkan kekompakan formasi sudah baik, perlu peningkatan pada aba-aba kompak di bagian akhir." }
  ]
};
