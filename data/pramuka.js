/* =========================================================
   data/pramuka.js
   Data khusus untuk dashboard organisasi Pramuka.
   ========================================================= */

const DATA_PRAMUKA = {
  namaOrganisasi: "Pramuka",
  periode: "2025/2026",
  pembina: "Kak Wulan Sari, S.Pd. (Pembina Putri) & Kak Doni Iskandar (Pembina Putra)",

  anggota: [
    { nama: "Kirana Ayu", kelas: "XI IPA 2", jabatan: "Pradana (Ketua)" },
    { nama: "Yusuf Al Ghifari", kelas: "XI MIPA 1", jabatan: "Wakil Pradana" },
    { nama: "Naura Zahira", kelas: "X IPS 2", jabatan: "Ketua Regu Elang" },
    { nama: "Raka Wibowo", kelas: "X MIPA 1", jabatan: "Ketua Regu Rajawali" },
    { nama: "Citra Mahardika", kelas: "XI IPS 3", jabatan: "Sekretaris Dewan Penggalang" },
    { nama: "Fauzan Ramadhan", kelas: "X IPA 3", jabatan: "Bendahara Dewan Penggalang" }
  ],

  programKerja: [
    { nama: "Latihan Rutin Mingguan", bidang: "Kepramukaan Dasar", target: "Setiap Jumat", capaian: "Terlaksana rutin", status: "Berjalan" },
    { nama: "Perkemahan Sabtu Minggu (Persami)", bidang: "Kemandirian", target: "2 kali/tahun", capaian: "1 kali terlaksana Juli 2026", status: "Berjalan" },
    { nama: "Jambore Ranting", bidang: "Kepramukaan Lanjutan", target: "1 kali/tahun", capaian: "Menunggu jadwal kwartir ranting", status: "Belum Mulai" },
    { nama: "Pelantikan Penggalang Ramu-Rakit-Terap", bidang: "Kepramukaan Dasar", target: "Sesuai capaian SKU", capaian: "12 anggota naik tingkat", status: "Berjalan" }
  ],

  kegiatan: [
    { tanggal: "2026-08-01", nama: "Latihan Rutin: Tali-temali & Sandi", deskripsi: "Materi dasar kepramukaan untuk anggota baru", status: "Selesai" },
    { tanggal: "2026-08-08", nama: "Latihan Rutin: Baris-berbaris", deskripsi: "Persiapan gerak jalan HUT RI", status: "Selesai" },
    { tanggal: "2026-08-15", nama: "Latihan Rutin: P3K Lapangan", deskripsi: "Kolaborasi dengan PMR sekolah", status: "Selesai" },
    { tanggal: "2026-08-29", nama: "Perkemahan Sabtu Minggu (Persami) II", deskripsi: "Lokasi bumi perkemahan kota, fokus pada kemandirian dan kerja sama tim", status: "Direncanakan" }
  ],

  keuangan: [
    { tanggal: "2026-08-01", keterangan: "Kas awal periode dari sekolah", jenis: "Pemasukan", nominal: 1000000 },
    { tanggal: "2026-08-05", keterangan: "Iuran anggota bulan Agustus", jenis: "Pemasukan", nominal: 280000 },
    { tanggal: "2026-08-10", keterangan: "Pembelian tali dan perlengkapan latihan", jenis: "Pengeluaran", nominal: 340000 },
    { tanggal: "2026-08-15", keterangan: "Sewa perlengkapan P3K latihan", jenis: "Pengeluaran", nominal: 150000 }
  ],

  lpj: [
    { tanggal: "2026-08-16", periode: "Minggu ke-2-3 Agustus 2026", disusunOleh: "Kirana Ayu (Pradana)", isi: "Latihan rutin berjalan sesuai jadwal. Kolaborasi dengan PMR untuk materi P3K mendapat respons positif dari anggota." }
  ]
};
