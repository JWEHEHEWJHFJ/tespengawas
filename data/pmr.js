/* =========================================================
   data/pmr.js
   Data khusus untuk dashboard organisasi PMR (Palang Merah Remaja).
   ========================================================= */

const DATA_PMR = {
  namaOrganisasi: "PMR",
  periode: "2025/2026",
  pembina: "Ratna Sari, S.Kep.",

  anggota: [
    { nama: "Bagas Wirawan", kelas: "XI IPA 3", jabatan: "Ketua PMR" },
    { nama: "Aisyah Putri", kelas: "XI IPS 1", jabatan: "Wakil Ketua" },
    { nama: "Dzaki Ramadhan", kelas: "X MIPA 2", jabatan: "Sekretaris" },
    { nama: "Larasati Wibowo", kelas: "X IPS 3", jabatan: "Bendahara" },
    { nama: "Fikri Setiawan", kelas: "XI MIPA 1", jabatan: "Koordinator UKS" }
  ],

  programKerja: [
    { nama: "Pelatihan P3K Dasar untuk Anggota Baru", bidang: "Kesehatan", target: "1 kali/semester", capaian: "Terlaksana Agustus 2026", status: "Selesai" },
    { nama: "Donor Darah Sekolah", bidang: "Sosial Kemanusiaan", target: "2 kali/tahun", capaian: "Persiapan jadwal dengan PMI Kota", status: "Berjalan" },
    { nama: "Piket Rutin UKS", bidang: "Kesehatan", target: "Setiap hari sekolah", capaian: "Berjalan sesuai jadwal piket", status: "Berjalan" },
    { nama: "Simulasi Tanggap Bencana", bidang: "Kesiapsiagaan", target: "1 kali/tahun", capaian: "Belum dijadwalkan", status: "Belum Mulai" }
  ],

  kegiatan: [
    { tanggal: "2026-08-06", nama: "Pelatihan P3K Dasar", deskripsi: "Materi penanganan luka dan pingsan untuk anggota baru", status: "Selesai" },
    { tanggal: "2026-08-15", nama: "Kolaborasi Latihan P3K dengan Pramuka", deskripsi: "Berbagi materi dasar pertolongan pertama", status: "Selesai" },
    { tanggal: "2026-08-22", nama: "Rapat Persiapan Donor Darah", deskripsi: "Koordinasi dengan PMI Kota dan Wakasek Kesiswaan", status: "Selesai" },
    { tanggal: "2026-09-15", nama: "Donor Darah Sekolah", deskripsi: "Kerja sama dengan PMI Kota, ditargetkan 80 pendonor", status: "Direncanakan" }
  ],

  keuangan: [
    { tanggal: "2026-08-01", keterangan: "Kas awal periode dari sekolah", jenis: "Pemasukan", nominal: 700000 },
    { tanggal: "2026-08-06", keterangan: "Pembelian obat & perlengkapan P3K", jenis: "Pengeluaran", nominal: 260000 },
    { tanggal: "2026-08-15", keterangan: "Iuran anggota bulan Agustus", jenis: "Pemasukan", nominal: 150000 }
  ],

  lpj: [
    { tanggal: "2026-08-23", periode: "Agustus 2026", disusunOleh: "Bagas Wirawan (Ketua PMR)", isi: "Pelatihan P3K dasar terlaksana dengan baik. Persiapan donor darah sekolah sedang dikoordinasikan dengan PMI Kota, menunggu konfirmasi jadwal final." }
  ]
};
