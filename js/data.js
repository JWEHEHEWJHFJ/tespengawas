/**
 * data.js
 * Lapisan data untuk aplikasi Pengawas Sekolah.
 * Menggunakan localStorage sebagai penyimpanan sisi klien (tanpa server/backend).
 * Semua halaman (index.html, sekolah.html, pengawas.html) memuat file ini.
 */

const DB_KEY = "pengawas_sekolah_db_v3";
const SESSION_KEY = "pengawas_sekolah_session_v1";

/* ---------- Data awal (seed) ---------- */

const SEED_DATA = {
  users: [
    {
      username: "sdn01",
      password: "sekolah123",
      role: "sekolah",
      namaSekolah: "SDN 01 Panakkukang",
      npsn: "40307001",
      jenjang: "SD",
      pengawasUsername: "pengawas1"
    },
    {
      username: "smpn05",
      password: "sekolah123",
      role: "sekolah",
      namaSekolah: "SMPN 05 Makassar",
      npsn: "40307005",
      jenjang: "SMP",
      pengawasUsername: "pengawas1"
    },
    {
      username: "sdn12",
      password: "sekolah123",
      role: "sekolah",
      namaSekolah: "SDN 12 Rappocini",
      npsn: "40307012",
      jenjang: "SD",
      pengawasUsername: "pengawas2"
    },
    {
      username: "pengawas1",
      password: "pengawas123",
      role: "pengawas",
      namaPengawas: "Drs. Ahmad Yani, M.Pd",
      nip: "196805121993031004",
      wilayah: "Kecamatan Panakkukang"
    },
    {
      username: "pengawas2",
      password: "pengawas123",
      role: "pengawas",
      namaPengawas: "Hj. Sitti Rahmawati, S.Pd., M.M.",
      nip: "197203221998022003",
      wilayah: "Kecamatan Rappocini"
    },
    {
      username: "wakasek01",
      password: "wakasek123",
      role: "wakasek",
      namaWakasek: "Muhammad Ridwan, S.Pd.",
      sekolahUsername: "sdn01",
      namaSekolah: "SDN 01 Panakkukang"
    },
    {
      username: "wakasek05",
      password: "wakasek123",
      role: "wakasek",
      namaWakasek: "Andi Nurul Fadillah, S.Pd.",
      sekolahUsername: "smpn05",
      namaSekolah: "SMPN 05 Makassar"
    },
    {
      username: "wakasek12",
      password: "wakasek123",
      role: "wakasek",
      namaWakasek: "Bahtiar, S.Pd.",
      sekolahUsername: "sdn12",
      namaSekolah: "SDN 12 Rappocini"
    },
    {
      username: "pramuka_sdn01",
      password: "ekskul123",
      role: "ekskul",
      namaEkskul: "Pramuka",
      namaPembina: "Kak Yusran, S.Pd.",
      sekolahUsername: "sdn01",
      namaSekolah: "SDN 01 Panakkukang",
      wakasekUsername: "wakasek01"
    },
    {
      username: "silat_sdn01",
      password: "ekskul123",
      role: "ekskul",
      namaEkskul: "Pencak Silat",
      namaPembina: "Muh. Fadli, S.Pd.",
      sekolahUsername: "sdn01",
      namaSekolah: "SDN 01 Panakkukang",
      wakasekUsername: "wakasek01"
    },
    {
      username: "osis_smpn05",
      password: "ekskul123",
      role: "ekskul",
      namaEkskul: "OSIS",
      namaPembina: "Nurhayati, S.Pd.",
      sekolahUsername: "smpn05",
      namaSekolah: "SMPN 05 Makassar",
      wakasekUsername: "wakasek05"
    },
    {
      username: "pmr_smpn05",
      password: "ekskul123",
      role: "ekskul",
      namaEkskul: "Palang Merah Remaja (PMR)",
      namaPembina: "dr. Wahyuni",
      sekolahUsername: "smpn05",
      namaSekolah: "SMPN 05 Makassar",
      wakasekUsername: "wakasek05"
    },
    {
      username: "senitari_sdn12",
      password: "ekskul123",
      role: "ekskul",
      namaEkskul: "Sanggar Seni Tari",
      namaPembina: "Ibu Herlina, S.Pd.",
      sekolahUsername: "sdn12",
      namaSekolah: "SDN 12 Rappocini",
      wakasekUsername: "wakasek12"
    },
    {
      username: "pramuka_sdn12",
      password: "ekskul123",
      role: "ekskul",
      namaEkskul: "Pramuka",
      namaPembina: "Kak Ilham, S.Pd.",
      sekolahUsername: "sdn12",
      namaSekolah: "SDN 12 Rappocini",
      wakasekUsername: "wakasek12"
    }
  ],
  laporan: [
    {
      id: "LAP-2026-0001",
      sekolahUsername: "sdn01",
      namaSekolah: "SDN 01 Panakkukang",
      jenis: "Laporan Bulanan",
      periode: "Juli 2026",
      isi: "Kegiatan belajar mengajar bulan Juli berjalan lancar. Jumlah siswa aktif 312 orang. Tidak ada kendala berarti pada proses pembelajaran. Rapat guru dilaksanakan 2 kali.",
      lampiran: "Daftar Hadir Guru.pdf, Notulen Rapat.pdf",
      tanggalKirim: "2026-08-02",
      status: "diverifikasi",
      catatanPengawas: "Laporan lengkap dan tepat waktu. Pertahankan konsistensi pengiriman.",
      tanggalVerifikasi: "2026-08-04"
    },
    {
      id: "LAP-2026-0002",
      sekolahUsername: "sdn01",
      namaSekolah: "SDN 01 Panakkukang",
      jenis: "Laporan Sarana Prasarana",
      periode: "Semester Genap 2025/2026",
      isi: "Kondisi 2 ruang kelas mengalami kebocoran atap saat musim hujan. Diperlukan perbaikan segera. Sarana perpustakaan dalam kondisi baik.",
      lampiran: "Foto Kondisi Atap.zip",
      tanggalKirim: "2026-08-15",
      status: "perlu_revisi",
      catatanPengawas: "Mohon lampirkan estimasi biaya perbaikan dan surat pengajuan resmi ke Dinas Pendidikan.",
      tanggalVerifikasi: "2026-08-17"
    },
    {
      id: "LAP-2026-0003",
      sekolahUsername: "sdn01",
      namaSekolah: "SDN 01 Panakkukang",
      jenis: "Laporan Kegiatan",
      periode: "Agustus 2026",
      isi: "Pelaksanaan lomba kebersihan antar kelas dalam rangka HUT RI ke-81. Diikuti oleh 12 kelas, dimenangkan oleh kelas 4B. Kegiatan berjalan tertib dan meningkatkan kesadaran siswa akan kebersihan lingkungan sekolah.",
      lampiran: "Dokumentasi Lomba.zip",
      tanggalKirim: "2026-08-20",
      status: "terkirim",
      catatanPengawas: "",
      tanggalVerifikasi: ""
    },
    {
      id: "LAP-2026-0004",
      sekolahUsername: "smpn05",
      namaSekolah: "SMPN 05 Makassar",
      jenis: "Laporan Kegiatan",
      periode: "Agustus 2026",
      isi: "Pelaksanaan Upacara HUT RI ke-81 berjalan khidmat. Diikuti oleh seluruh siswa dan guru. Turut dilaksanakan lomba-lomba dalam rangka memperingati kemerdekaan.",
      lampiran: "Dokumentasi Kegiatan.zip",
      tanggalKirim: "2026-08-18",
      status: "terkirim",
      catatanPengawas: "",
      tanggalVerifikasi: ""
    },
    {
      id: "LAP-2026-0005",
      sekolahUsername: "smpn05",
      namaSekolah: "SMPN 05 Makassar",
      jenis: "Laporan Bulanan",
      periode: "Juli 2026",
      isi: "Proses pembelajaran tahun ajaran baru dimulai dengan Masa Pengenalan Lingkungan Sekolah (MPLS) selama 3 hari. Jumlah siswa baru kelas 7 sebanyak 118 orang.",
      lampiran: "Jadwal MPLS.pdf",
      tanggalKirim: "2026-08-01",
      status: "diverifikasi",
      catatanPengawas: "Baik, MPLS terlaksana sesuai jadwal.",
      tanggalVerifikasi: "2026-08-03"
    },
    {
      id: "LAP-2026-0006",
      sekolahUsername: "smpn05",
      namaSekolah: "SMPN 05 Makassar",
      jenis: "Laporan Semester",
      periode: "Semester Genap 2025/2026",
      isi: "Rata-rata nilai ujian akhir semester genap mengalami peningkatan 4% dibanding semester sebelumnya. Tingkat kehadiran siswa 96%. Terdapat 3 siswa yang memerlukan pendampingan khusus dalam mata pelajaran Matematika.",
      lampiran: "Rekap Nilai.xlsx, Daftar Siswa Pendampingan.pdf",
      tanggalKirim: "2026-07-10",
      status: "perlu_revisi",
      catatanPengawas: "Mohon lampirkan rencana tindak lanjut pendampingan untuk 3 siswa yang disebutkan, lengkap dengan jadwal dan penanggung jawab.",
      tanggalVerifikasi: "2026-07-12"
    },
    {
      id: "LAP-2026-0007",
      sekolahUsername: "sdn12",
      namaSekolah: "SDN 12 Rappocini",
      jenis: "Laporan Bulanan",
      periode: "Agustus 2026",
      isi: "Kegiatan belajar mengajar berjalan normal. Jumlah siswa aktif 254 orang. Dilaksanakan program literasi pagi setiap hari Senin dan Rabu selama 15 menit sebelum jam pelajaran dimulai.",
      lampiran: "Laporan Program Literasi.pdf",
      tanggalKirim: "2026-08-19",
      status: "diverifikasi",
      catatanPengawas: "Program literasi pagi bagus, teruskan dan dokumentasikan perkembangannya tiap bulan.",
      tanggalVerifikasi: "2026-08-21"
    },
    {
      id: "LAP-2026-0008",
      sekolahUsername: "sdn12",
      namaSekolah: "SDN 12 Rappocini",
      jenis: "Laporan Sarana Prasarana",
      periode: "Agustus 2026",
      isi: "Pengadaan 15 unit komputer baru untuk laboratorium TIK telah selesai dan siap digunakan. Diperlukan tambahan stabilizer listrik agar aman digunakan bersamaan.",
      lampiran: "Berita Acara Serah Terima.pdf, Foto Lab TIK.zip",
      tanggalKirim: "2026-08-12",
      status: "terkirim",
      catatanPengawas: "",
      tanggalVerifikasi: ""
    },
    {
      id: "LAP-2026-0009",
      sekolahUsername: "sdn12",
      namaSekolah: "SDN 12 Rappocini",
      jenis: "Laporan Insidentil",
      periode: "14 Agustus 2026",
      isi: "Terjadi hujan deras disertai angin kencang yang menyebabkan 1 pohon di halaman sekolah tumbang dan menimpa sebagian pagar. Tidak ada korban jiwa maupun luka. Proses belajar mengajar tetap berjalan seperti biasa keesokan harinya.",
      lampiran: "Foto Kejadian.zip, Laporan Kronologi.pdf",
      tanggalKirim: "2026-08-15",
      status: "diverifikasi",
      catatanPengawas: "Terima kasih atas kecepatan pelaporan. Segera koordinasikan perbaikan pagar dengan komite sekolah.",
      tanggalVerifikasi: "2026-08-15"
    },
    {
      id: "LAP-2026-0010",
      sekolahUsername: "sdn12",
      namaSekolah: "SDN 12 Rappocini",
      jenis: "Laporan Semester",
      periode: "Semester Genap 2025/2026",
      isi: "Hasil evaluasi semester genap menunjukkan capaian kurikulum tercapai 92%. Kegiatan ekstrakurikuler pramuka dan seni tari berjalan aktif dengan total 68 peserta.",
      lampiran: "Rekap Capaian Kurikulum.xlsx",
      tanggalKirim: "2026-07-08",
      status: "diverifikasi",
      catatanPengawas: "Capaian kurikulum baik. Pertahankan partisipasi ekstrakurikuler pada semester berikutnya.",
      tanggalVerifikasi: "2026-07-11"
    },
    {
      id: "LAP-2026-0011",
      sekolahUsername: "sdn01",
      namaSekolah: "SDN 01 Panakkukang",
      jenis: "Laporan Insidentil",
      periode: "22 Agustus 2026",
      isi: "Salah satu siswa kelas 3 mengalami kecelakaan kecil saat jam istirahat (terjatuh di area bermain). Sudah ditangani dengan P3K dan pihak orang tua telah dihubungi serta diberi keterangan.",
      lampiran: "",
      tanggalKirim: "2026-08-22",
      status: "terkirim",
      catatanPengawas: "",
      tanggalVerifikasi: ""
    }
  ],
  laporanEkskul: [
    {
      id: "EKS-2026-0001",
      ekskulUsername: "pramuka_sdn01",
      namaEkskul: "Pramuka",
      namaSekolah: "SDN 01 Panakkukang",
      wakasekUsername: "wakasek01",
      jenis: "Laporan Kegiatan",
      periode: "Agustus 2026",
      isi: "Pelaksanaan Perkemahan Jumat-Sabtu (Persami) di halaman sekolah diikuti 45 anggota Pramuka Siaga dan Penggalang. Materi meliputi tali-temali, baris-berbaris, dan permainan kelompok. Kegiatan berjalan aman dan lancar.",
      lampiran: "Dokumentasi Persami.zip, Daftar Hadir Peserta.pdf",
      tanggalKirim: "2026-08-16",
      status: "diverifikasi",
      catatanWakasek: "Kegiatan bagus dan terdokumentasi rapi. Lanjutkan untuk kegiatan Pramuka berikutnya.",
      tanggalTinjau: "2026-08-18"
    },
    {
      id: "EKS-2026-0002",
      ekskulUsername: "pramuka_sdn01",
      namaEkskul: "Pramuka",
      namaSekolah: "SDN 01 Panakkukang",
      wakasekUsername: "wakasek01",
      jenis: "Laporan Keanggotaan",
      periode: "Semester Ganjil 2026/2027",
      isi: "Jumlah anggota baru yang mendaftar pada masa pendaftaran ekstrakurikuler tahun ajaran baru sebanyak 28 siswa, terdiri dari 15 siswa kelas 4 dan 13 siswa kelas 5.",
      lampiran: "Formulir Pendaftaran.zip",
      tanggalKirim: "2026-08-25",
      status: "terkirim",
      catatanWakasek: "",
      tanggalTinjau: ""
    },
    {
      id: "EKS-2026-0003",
      ekskulUsername: "silat_sdn01",
      namaEkskul: "Pencak Silat",
      namaSekolah: "SDN 01 Panakkukang",
      wakasekUsername: "wakasek01",
      jenis: "Laporan Prestasi/Lomba",
      periode: "Agustus 2026",
      isi: "Tim Pencak Silat sekolah meraih Juara 2 kategori tanding usia dini pada Kejuaraan Pencak Silat Pelajar tingkat Kota Makassar. Diwakili oleh 3 atlet siswa kelas 5 dan 6.",
      lampiran: "Sertifikat Juara.pdf, Foto Penyerahan Piala.jpg",
      tanggalKirim: "2026-08-10",
      status: "diverifikasi",
      catatanWakasek: "Selamat atas prestasinya! Mohon data atlet diteruskan ke bagian kesiswaan untuk pengarsipan prestasi sekolah.",
      tanggalTinjau: "2026-08-11"
    },
    {
      id: "EKS-2026-0004",
      ekskulUsername: "osis_smpn05",
      namaEkskul: "OSIS",
      namaSekolah: "SMPN 05 Makassar",
      wakasekUsername: "wakasek05",
      jenis: "Laporan Kegiatan",
      periode: "Agustus 2026",
      isi: "Pelaksanaan Masa Pengenalan Lingkungan Sekolah (MPLS) untuk siswa baru dikoordinasikan oleh OSIS bersama 20 panitia dari pengurus OSIS dan MPK. Kegiatan berlangsung 3 hari dengan materi kedisiplinan, tata tertib, dan pengenalan ekstrakurikuler.",
      lampiran: "Rundown MPLS.pdf, Dokumentasi.zip",
      tanggalKirim: "2026-07-15",
      status: "diverifikasi",
      catatanWakasek: "Pelaksanaan MPLS tertib dan sesuai jadwal. Terima kasih atas kerja panitia OSIS.",
      tanggalTinjau: "2026-07-17"
    },
    {
      id: "EKS-2026-0005",
      ekskulUsername: "osis_smpn05",
      namaEkskul: "OSIS",
      namaSekolah: "SMPN 05 Makassar",
      wakasekUsername: "wakasek05",
      jenis: "Laporan Keuangan",
      periode: "Juli 2026",
      isi: "Laporan penggunaan dana kas OSIS bulan Juli untuk kegiatan bakti sosial dan pembelian atribut organisasi. Total pemasukan Rp1.850.000, total pengeluaran Rp1.620.000, saldo akhir Rp230.000.",
      lampiran: "Rincian Kas OSIS.xlsx, Bukti Nota.zip",
      tanggalKirim: "2026-08-05",
      status: "perlu_revisi",
      catatanWakasek: "Mohon lampirkan bukti nota asli untuk pengeluaran bakti sosial yang belum tercantum, dan tanda tangan bendahara pada rincian kas.",
      tanggalTinjau: "2026-08-07"
    },
    {
      id: "EKS-2026-0006",
      ekskulUsername: "pmr_smpn05",
      namaEkskul: "Palang Merah Remaja (PMR)",
      namaSekolah: "SMPN 05 Makassar",
      wakasekUsername: "wakasek05",
      jenis: "Laporan Kegiatan",
      periode: "Agustus 2026",
      isi: "Pelatihan dasar pertolongan pertama (P3K) bagi 24 anggota baru PMR dilaksanakan selama 2 hari, bekerja sama dengan PMI Cabang Makassar sebagai narasumber.",
      lampiran: "Materi Pelatihan.pdf, Dokumentasi.zip",
      tanggalKirim: "2026-08-20",
      status: "terkirim",
      catatanWakasek: "",
      tanggalTinjau: ""
    },
    {
      id: "EKS-2026-0007",
      ekskulUsername: "senitari_sdn12",
      namaEkskul: "Sanggar Seni Tari",
      namaSekolah: "SDN 12 Rappocini",
      wakasekUsername: "wakasek12",
      jenis: "Laporan Prestasi/Lomba",
      periode: "Agustus 2026",
      isi: "Grup tari tradisional sekolah tampil sebagai perwakilan kecamatan pada Festival Seni Budaya Pelajar tingkat Kota Makassar dan meraih predikat Penampil Terbaik.",
      lampiran: "Video Penampilan.zip, Piagam Penghargaan.pdf",
      tanggalKirim: "2026-08-14",
      status: "diverifikasi",
      catatanWakasek: "Membanggakan! Mohon koordinasi dengan humas sekolah untuk publikasi prestasi ini.",
      tanggalTinjau: "2026-08-15"
    },
    {
      id: "EKS-2026-0008",
      ekskulUsername: "pramuka_sdn12",
      namaEkskul: "Pramuka",
      namaSekolah: "SDN 12 Rappocini",
      wakasekUsername: "wakasek12",
      jenis: "Laporan Insidentil",
      periode: "19 Agustus 2026",
      isi: "Salah satu anggota mengalami dehidrasi ringan saat kegiatan latihan di lapangan pada siang hari. Sudah ditangani dengan istirahat dan pemberian minum di ruang UKS, kondisi kembali normal dalam 30 menit.",
      lampiran: "",
      tanggalKirim: "2026-08-19",
      status: "diverifikasi",
      catatanWakasek: "Terima kasih atas penanganan cepat. Mohon jadwal latihan siang disesuaikan agar tidak pada jam terik matahari.",
      tanggalTinjau: "2026-08-19"
    },
    {
      id: "EKS-2026-0009",
      ekskulUsername: "pramuka_sdn12",
      namaEkskul: "Pramuka",
      namaSekolah: "SDN 12 Rappocini",
      wakasekUsername: "wakasek12",
      jenis: "Laporan Keanggotaan",
      periode: "Semester Ganjil 2026/2027",
      isi: "Rekrutmen anggota baru semester ini berhasil menjaring 32 siswa. Struktur kepengurusan regu telah dibentuk dan mulai aktif latihan setiap hari Jumat sore.",
      lampiran: "Struktur Kepengurusan.pdf",
      tanggalKirim: "2026-08-23",
      status: "terkirim",
      catatanWakasek: "",
      tanggalTinjau: ""
    }
  ]
};

/* ---------- Inisialisasi & akses penyimpanan ---------- */

function initDB() {
  const existing = localStorage.getItem(DB_KEY);
  if (!existing) {
    localStorage.setItem(DB_KEY, JSON.stringify(SEED_DATA));
  }
}

function readDB() {
  initDB();
  try {
    return JSON.parse(localStorage.getItem(DB_KEY));
  } catch (e) {
    localStorage.setItem(DB_KEY, JSON.stringify(SEED_DATA));
    return JSON.parse(JSON.stringify(SEED_DATA));
  }
}

function writeDB(db) {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

/* ---------- Sesi login ---------- */

function setSession(username) {
  sessionStorage.setItem(SESSION_KEY, username);
}

function getSession() {
  return sessionStorage.getItem(SESSION_KEY);
}

function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}

function getCurrentUser() {
  const username = getSession();
  if (!username) return null;
  const db = readDB();
  return db.users.find((u) => u.username === username) || null;
}

/* ---------- Fungsi otentikasi ---------- */

function login(username, password) {
  const db = readDB();
  const user = db.users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    setSession(username);
    return user;
  }
  return null;
}

/**
 * Masuk langsung tanpa kata sandi — dipakai oleh halaman pemilihan akun
 * (index.html) yang tidak lagi meminta login/otentikasi.
 */
function loginAsUser(username) {
  const db = readDB();
  const user = db.users.find((u) => u.username === username);
  if (user) {
    setSession(username);
    return user;
  }
  return null;
}

function logout() {
  clearSession();
}

/* ---------- Fungsi laporan ---------- */

function generateLaporanId(db) {
  const year = new Date().getFullYear();
  const countThisYear = db.laporan.filter((l) =>
    l.id.startsWith(`LAP-${year}-`)
  ).length;
  const next = String(countThisYear + 1).padStart(4, "0");
  return `LAP-${year}-${next}`;
}

function getLaporanBySekolah(sekolahUsername) {
  const db = readDB();
  return db.laporan
    .filter((l) => l.sekolahUsername === sekolahUsername)
    .sort((a, b) => (a.tanggalKirim < b.tanggalKirim ? 1 : -1));
}

function getLaporanByPengawas(pengawasUsername) {
  const db = readDB();
  const sekolahBinaan = db.users
    .filter((u) => u.role === "sekolah" && u.pengawasUsername === pengawasUsername)
    .map((u) => u.username);
  return db.laporan
    .filter((l) => sekolahBinaan.includes(l.sekolahUsername))
    .sort((a, b) => (a.tanggalKirim < b.tanggalKirim ? 1 : -1));
}

function getSekolahBinaan(pengawasUsername) {
  const db = readDB();
  return db.users.filter(
    (u) => u.role === "sekolah" && u.pengawasUsername === pengawasUsername
  );
}

function tambahLaporan(laporanBaru) {
  const db = readDB();
  const id = generateLaporanId(db);
  const laporan = {
    id,
    status: "terkirim",
    catatanPengawas: "",
    tanggalVerifikasi: "",
    ...laporanBaru
  };
  db.laporan.push(laporan);
  writeDB(db);
  return laporan;
}

function perbaruiStatusLaporan(id, status, catatan) {
  const db = readDB();
  const laporan = db.laporan.find((l) => l.id === id);
  if (!laporan) return null;
  laporan.status = status;
  laporan.catatanPengawas = catatan || "";
  laporan.tanggalVerifikasi = new Date().toISOString().slice(0, 10);
  writeDB(db);
  return laporan;
}

/* ---------- Fungsi laporan ekstrakurikuler (organisasi ekskul → wakasek kesiswaan) ---------- */

function generateLaporanEkskulId(db) {
  const year = new Date().getFullYear();
  const countThisYear = db.laporanEkskul.filter((l) =>
    l.id.startsWith(`EKS-${year}-`)
  ).length;
  const next = String(countThisYear + 1).padStart(4, "0");
  return `EKS-${year}-${next}`;
}

function getLaporanEkskulByEkskul(ekskulUsername) {
  const db = readDB();
  return db.laporanEkskul
    .filter((l) => l.ekskulUsername === ekskulUsername)
    .sort((a, b) => (a.tanggalKirim < b.tanggalKirim ? 1 : -1));
}

function getLaporanEkskulByWakasek(wakasekUsername) {
  const db = readDB();
  const ekskulBinaan = db.users
    .filter((u) => u.role === "ekskul" && u.wakasekUsername === wakasekUsername)
    .map((u) => u.username);
  return db.laporanEkskul
    .filter((l) => ekskulBinaan.includes(l.ekskulUsername))
    .sort((a, b) => (a.tanggalKirim < b.tanggalKirim ? 1 : -1));
}

function getEkskulBinaan(wakasekUsername) {
  const db = readDB();
  return db.users.filter(
    (u) => u.role === "ekskul" && u.wakasekUsername === wakasekUsername
  );
}

function tambahLaporanEkskul(laporanBaru) {
  const db = readDB();
  const id = generateLaporanEkskulId(db);
  const laporan = {
    id,
    status: "terkirim",
    catatanWakasek: "",
    tanggalTinjau: "",
    ...laporanBaru
  };
  db.laporanEkskul.push(laporan);
  writeDB(db);
  return laporan;
}

function perbaruiStatusLaporanEkskul(id, status, catatan) {
  const db = readDB();
  const laporan = db.laporanEkskul.find((l) => l.id === id);
  if (!laporan) return null;
  laporan.status = status;
  laporan.catatanWakasek = catatan || "";
  laporan.tanggalTinjau = new Date().toISOString().slice(0, 10);
  writeDB(db);
  return laporan;
}

/* ---------- Label & util tampilan ---------- */

const STATUS_LABEL = {
  terkirim: "Menunggu",
  diverifikasi: "Terverifikasi",
  perlu_revisi: "Perlu Revisi"
};

function formatTanggal(isoDate) {
  if (!isoDate) return "-";
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}
