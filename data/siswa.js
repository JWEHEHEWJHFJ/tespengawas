/* =========================================================
   data/siswa.js
   Master data siswa (NISN, nama, kelas).

   File ini adalah SUMBER DATA UTAMA untuk seluruh siswa di sekolah.
   Form-form input di dashboard Guru BK, Wakasek Kesiswaan, dan
   Organisasi Siswa (OSIS/Pramuka/PMR/Paskibra) membaca daftar ini
   untuk menampilkan pilihan siswa dalam bentuk dropdown ("spinner"),
   sehingga:
   - Input jadi lebih cepat (tinggal pilih, tidak perlu mengetik nama & kelas)
   - Data nama & kelas selalu konsisten dengan data induk siswa
   - Setiap catatan otomatis tertaut ke NISN siswa yang bersangkutan

   Cara menambah/mengubah data siswa:
   - Tambah/ubah/hapus objek {nisn, nama, kelas} di bawah ini.
   - NISN harus unik untuk setiap siswa.
   - Setelah disimpan, dropdown siswa di semua dashboard akan otomatis
     ter-update mengikuti isi file ini (tidak perlu ubah index.html).
   ========================================================= */

const SISWA_LIST = [
  { nisn: "0081000037", nama: "Anisa Wulandari", kelas: "X MIPA 1" },
  { nisn: "0081000074", nama: "Ahmad Pratama", kelas: "X MIPA 1" },
  { nisn: "0081000111", nama: "Salsabila Ramadhani", kelas: "X MIPA 1" },
  { nisn: "0081000148", nama: "M. Saputra", kelas: "X MIPA 1" },
  { nisn: "0081000185", nama: "Nadia Anggraini", kelas: "X MIPA 2" },
  { nisn: "0081000222", nama: "Muhammad Wijaya", kelas: "X MIPA 2" },
  { nisn: "0081000259", nama: "Putri Amelia", kelas: "X MIPA 2" },
  { nisn: "0081000296", nama: "Bagus Nugroho", kelas: "X MIPA 2" },
  { nisn: "0081000333", nama: "Bella Andini", kelas: "X MIPA 3" },
  { nisn: "0081000370", nama: "Fajar Ramadhan", kelas: "X MIPA 3" },
  { nisn: "0081000407", nama: "Cindy Mahardika", kelas: "X MIPA 3" },
  { nisn: "0081000444", nama: "Reza Maulana", kelas: "X MIPA 3" },
  { nisn: "0081000481", nama: "Kirana Safitri", kelas: "X IPS 1" },
  { nisn: "0081000518", nama: "Dimas Wibowo", kelas: "X IPS 1" },
  { nisn: "0081000555", nama: "Naila Kusuma", kelas: "X IPS 1" },
  { nisn: "0081000592", nama: "Yusuf Hidayat", kelas: "X IPS 1" },
  { nisn: "0081000629", nama: "Aulia Handayani", kelas: "X IPS 2" },
  { nisn: "0081000666", nama: "Rangga Gunawan", kelas: "X IPS 2" },
  { nisn: "0081000703", nama: "Sabrina Wibowo", kelas: "X IPS 2" },
  { nisn: "0081000740", nama: "Bayu Iskandar", kelas: "X IPS 2" },
  { nisn: "0081000777", nama: "Larasati Cahyani", kelas: "X IPS 3" },
  { nisn: "0081000814", nama: "Fikri Santoso", kelas: "X IPS 3" },
  { nisn: "0081000851", nama: "Zahra Az-Zahra", kelas: "X IPS 3" },
  { nisn: "0081000888", nama: "Galih Permana", kelas: "X IPS 3" },
  { nisn: "0081000925", nama: "Alya Kirani", kelas: "XI MIPA 1" },
  { nisn: "0081000962", nama: "Dzaki Yulianto", kelas: "XI MIPA 1" },
  { nisn: "0081000999", nama: "Naura Melati", kelas: "XI MIPA 1" },
  { nisn: "0081001036", nama: "Farhan Sutrisno", kelas: "XI MIPA 1" },
  { nisn: "0081001073", nama: "Citra Ramadhani", kelas: "XI MIPA 2" },
  { nisn: "0081001110", nama: "Rifqi Saputra", kelas: "XI MIPA 2" },
  { nisn: "0081001147", nama: "Aisyah Lestari", kelas: "XI MIPA 2" },
  { nisn: "0081001184", nama: "Aditya Firmansyah", kelas: "XI MIPA 2" },
  { nisn: "0081001221", nama: "Keisya Amelia", kelas: "XI MIPA 3" },
  { nisn: "0081001258", nama: "Reyhan Nugroho", kelas: "XI MIPA 3" },
  { nisn: "0081001295", nama: "Dewi Kartika", kelas: "XI MIPA 3" },
  { nisn: "0081001332", nama: "Danu Setiawan", kelas: "XI MIPA 3" },
  { nisn: "0081001369", nama: "Rina Mahardika", kelas: "XI IPS 1" },
  { nisn: "0081001406", nama: "Ilham Maulana", kelas: "XI IPS 1" },
  { nisn: "0081001443", nama: "Ratna Rahmawati", kelas: "XI IPS 1" },
  { nisn: "0081001480", nama: "Arya Kurniawan", kelas: "XI IPS 1" },
  { nisn: "0081001517", nama: "Wulan Kusuma", kelas: "XI IPS 2" },
  { nisn: "0081001554", nama: "Zaki Hidayat", kelas: "XI IPS 2" },
  { nisn: "0081001591", nama: "Intan Puspita", kelas: "XI IPS 2" },
  { nisn: "0081001628", nama: "Raka Susanto", kelas: "XI IPS 2" },
  { nisn: "0081001665", nama: "Diah Wibowo", kelas: "XI IPS 3" },
  { nisn: "0081001702", nama: "Fauzan Iskandar", kelas: "XI IPS 3" },
  { nisn: "0081001739", nama: "Fitri Utami", kelas: "XI IPS 3" },
  { nisn: "0081001776", nama: "Gilang Prasetyo", kelas: "XI IPS 3" },
  { nisn: "0081001813", nama: "Yuni Az-Zahra", kelas: "XII IPA 1" },
  { nisn: "0081001850", nama: "Wahyu Permana", kelas: "XII IPA 1" },
  { nisn: "0081001887", nama: "Anisa Maharani", kelas: "XII IPA 1" },
  { nisn: "0081001924", nama: "Ahmad Hakim", kelas: "XII IPA 1" },
  { nisn: "0081001961", nama: "Salsabila Melati", kelas: "XII IPA 2" },
  { nisn: "0081001998", nama: "M. Sutrisno", kelas: "XII IPA 2" },
  { nisn: "0081002035", nama: "Nadia Wulandari", kelas: "XII IPA 2" },
  { nisn: "0081002072", nama: "Muhammad Pratama", kelas: "XII IPA 2" },
  { nisn: "0081002109", nama: "Putri Lestari", kelas: "XII IPA 3" },
  { nisn: "0081002146", nama: "Bagus Firmansyah", kelas: "XII IPA 3" },
  { nisn: "0081002183", nama: "Bella Anggraini", kelas: "XII IPA 3" },
  { nisn: "0081002220", nama: "Fajar Wijaya", kelas: "XII IPA 3" },
  { nisn: "0081002257", nama: "Cindy Kartika", kelas: "XII IPS 1" },
  { nisn: "0081002294", nama: "Reza Setiawan", kelas: "XII IPS 1" },
  { nisn: "0081002331", nama: "Kirana Andini", kelas: "XII IPS 1" },
  { nisn: "0081002368", nama: "Dimas Ramadhan", kelas: "XII IPS 1" },
  { nisn: "0081002405", nama: "Naila Rahmawati", kelas: "XII IPS 2" },
  { nisn: "0081002442", nama: "Yusuf Kurniawan", kelas: "XII IPS 2" },
  { nisn: "0081002479", nama: "Aulia Safitri", kelas: "XII IPS 2" },
  { nisn: "0081002516", nama: "Rangga Wibowo", kelas: "XII IPS 2" },
  { nisn: "0081002553", nama: "Sabrina Puspita", kelas: "XII IPS 3" },
  { nisn: "0081002590", nama: "Bayu Susanto", kelas: "XII IPS 3" },
  { nisn: "0081002627", nama: "Larasati Handayani", kelas: "XII IPS 3" },
  { nisn: "0081002664", nama: "Fikri Gunawan", kelas: "XII IPS 3" }
];
