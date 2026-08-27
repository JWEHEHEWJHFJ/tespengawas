/* =========================================================
   data/users.js
   Daftar akun pengguna & metadata peran (role).
   CATATAN KEAMANAN:
   Karena aplikasi ini murni statis (HTML/CSS/JS di GitHub Pages,
   tanpa server/database), daftar akun ini bisa dibaca siapa pun
   yang membuka source code. JANGAN gunakan password asli/sensitif.
   Untuk penggunaan produksi sungguhan, ganti mekanisme ini dengan
   backend + database + hashing password yang sesungguhnya.
   ========================================================= */

const USERS = [
  { username: "pengawas",  password: "pengawas123",  role: "pengawas",           name: "Dr. Ahmad Sutrisno, M.Pd.",   jabatan: "Pengawas Sekolah" },
  { username: "kepsek",    password: "kepsek123",    role: "kepala_sekolah",     name: "Hj. Siti Rahmawati, S.Pd., M.M.", jabatan: "Kepala Sekolah" },
  { username: "gurubk",    password: "bk123",        role: "guru_bk",            name: "Budi Santoso, S.Pd.",          jabatan: "Guru BK" },
  { username: "wakesis",   password: "wakesis123",   role: "wakasek_kesiswaan",  name: "Rina Amelia, S.Pd.",           jabatan: "Wakasek Kesiswaan" },
  { username: "kurikulum", password: "kurikulum123", role: "kurikulum",          name: "Drs. Hendra Wijaya",           jabatan: "Wakasek Kurikulum" },
  { username: "humas",     password: "humas123",     role: "humas",              name: "Dewi Lestari, S.Sos.",         jabatan: "Wakasek Humas" },
  { username: "sarpras",   password: "sarpras123",   role: "sarpras",            name: "Agus Setiawan, S.T.",          jabatan: "Wakasek Sarana Prasarana" }
];

/* Metadata tampilan per-role: label, warna aksen, singkatan untuk "stempel" */
const ROLE_INFO = {
  pengawas:          { label: "Pengawas Sekolah",   short: "PWS", color: "#8b5e34" },
  kepala_sekolah:    { label: "Kepala Sekolah",      short: "KS",  color: "#1b2a4a" },
  guru_bk:           { label: "Guru BK",             short: "BK",  color: "#0f766e" },
  wakasek_kesiswaan: { label: "Wakasek Kesiswaan",   short: "KSW", color: "#9d174d" },
  kurikulum:         { label: "Wakasek Kurikulum",   short: "KUR", color: "#a16207" },
  humas:             { label: "Wakasek Humas",       short: "HMS", color: "#4338ca" },
  sarpras:           { label: "Wakasek Sarpras",     short: "SPR", color: "#b91c1c" }
};

/* Peran yang berperan sebagai pemantau (monitoring) atas semua divisi */
const MONITORING_ROLES = ["pengawas", "kepala_sekolah"];
