/* =========================================================
   data/tata-usaha.js
   Data khusus untuk dashboard Tata Usaha.
   ========================================================= */

const DATA_TATA_USAHA = {
  ringkasan: {
    siswaAktif: 864,
    suratMasukBulanIni: 12,
    suratKeluarBulanIni: 9,
    pembayaranTercatatBulanIni: 22
  },
  suratMasuk: [
    { tanggal: "2026-08-04", nomorSurat: "005/DISDIK/VIII/2026", asal: "Dinas Pendidikan Kota", perihal: "Edaran Persiapan Akreditasi Sekolah", status: "Diarsipkan" },
    { tanggal: "2026-08-08", nomorSurat: "112/UNDANGAN/VIII/2026", asal: "Universitas Negeri Kota", perihal: "Undangan Kelas Inspirasi", status: "Diproses" },
    { tanggal: "2026-08-13", nomorSurat: "021/ORTU/VIII/2026", asal: "Wali Murid Kelas XI IPS 2", perihal: "Permohonan Izin Tidak Masuk Sekolah", status: "Diarsipkan" },
    { tanggal: "2026-08-19", nomorSurat: "045/PKL/VIII/2026", asal: "PT Maju Bersama", perihal: "Konfirmasi Jadwal PKL Semester Ganjil", status: "Menunggu Disposisi" },
    { tanggal: "2026-08-24", nomorSurat: "018/PUSKESMAS/VIII/2026", asal: "Puskesmas Kecamatan", perihal: "Jadwal Vaksinasi Booster Siswa", status: "Diproses" }
  ],
  suratKeluar: [
    { tanggal: "2026-08-05", nomorSurat: "089/SMA1/VIII/2026", tujuan: "Dinas Pendidikan Kota", perihal: "Laporan Bulanan Kegiatan Sekolah", status: "Terkirim" },
    { tanggal: "2026-08-10", nomorSurat: "090/SMA1/VIII/2026", tujuan: "Orang Tua Siswa Kelas X", perihal: "Pemberitahuan Jadwal PTS Ganjil", status: "Terkirim" },
    { tanggal: "2026-08-15", nomorSurat: "091/SMA1/VIII/2026", tujuan: "PT Maju Bersama", perihal: "Surat Balasan Konfirmasi PKL", status: "Terkirim" },
    { tanggal: "2026-08-22", nomorSurat: "092/SMA1/VIII/2026", tujuan: "Panitia Job Fair Alumni", perihal: "Surat Dukungan Kegiatan", status: "Draft" }
  ],
  administrasiSiswa: [
    { tanggal: "2026-08-03", siswa: "Naila Putri Andini", kelas: "X IPS 2", jenis: "Siswa Baru", keterangan: "Pindahan dari SMP Negeri 4, kelengkapan berkas lengkap" },
    { tanggal: "2026-08-09", siswa: "Farel Ahmad Maulana", kelas: "XI MIPA 3", jenis: "Mutasi Keluar", keterangan: "Pindah mengikuti orang tua tugas ke luar kota" },
    { tanggal: "2026-08-14", siswa: "Griselda Kirana", kelas: "XII IPS 1", jenis: "Update Data", keterangan: "Perbaikan data NISN pada sistem Dapodik" },
    { tanggal: "2026-08-21", siswa: "Rangga Saputra", kelas: "X MIPA 1", jenis: "Mutasi Masuk", keterangan: "Pindahan dari SMA swasta, menunggu legalisir rapor" }
  ],
  keuangan: [
    { tanggal: "2026-08-05", siswa: "M. Rizky Ardiansyah", kelas: "XI IPA 2", keterangan: "SPP Agustus 2026", nominal: "Rp 350.000", status: "Lunas" },
    { tanggal: "2026-08-06", siswa: "Anisa Putri Wulandari", kelas: "X IPS 1", keterangan: "SPP Agustus 2026", nominal: "Rp 350.000", status: "Belum Lunas" },
    { tanggal: "2026-08-11", siswa: "Fajar Nugroho", kelas: "XII IPA 1", keterangan: "Iuran Kegiatan Perpisahan", nominal: "Rp 250.000", status: "Cicilan" },
    { tanggal: "2026-08-18", siswa: "Salsabila Putri", kelas: "XI IPS 3", keterangan: "SPP Agustus 2026", nominal: "Rp 350.000", status: "Lunas" },
    { tanggal: "2026-08-23", siswa: "Dimas Prasetyo", kelas: "X MIPA 4", keterangan: "SPP Juli 2026 (tunggakan)", nominal: "Rp 350.000", status: "Belum Lunas" }
  ]
};
