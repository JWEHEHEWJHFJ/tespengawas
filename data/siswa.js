/* =========================================================
   data/siswa.js
   Master data siswa — format sederhana: satu siswa per entri,
   dengan format:

       NISN@Nama Siswa@Kelas

   Setiap entri siswa dipisahkan dengan simbol 🚟 (bukan baris baru).
   Contoh dua siswa pertama:

       0081000037@Anisa Wulandari@X MIPA 1🚟0081000074@Ahmad Pratama@X MIPA 1

   Kenapa format ini?
   - Tidak perlu memahami sintaks JavaScript (tanda kutip, koma,
     kurung kurawal) untuk menambah/mengubah data siswa.
   - Jangan gunakan karakter "@" di dalam nama atau kelas (dipakai
     sebagai pemisah kolom), dan jangan gunakan "🚟" di dalam nama
     atau kelas (dipakai sebagai pemisah antar-siswa).

   File ini HANYA berisi teks mentah (SISWA_RAW). Proses pengubahan
   teks ini menjadi data yang bisa dipakai (SISWA_LIST) dilakukan di
   index.html — lihat bagian "Parsing data siswa" di sana.

   Cara menambah siswa baru: tambahkan di bagian akhir teks, didahului
   simbol 🚟, dengan format yang sama, contoh:
       ...🚟0081099999@Nama Siswa Baru@X MIPA 1
   ========================================================= */

const SISWA_RAW = `0081000037@Anisa Wulandari@X MIPA 1🚟0081000074@Ahmad Pratama@X MIPA 1🚟0081000111@Salsabila Ramadhani@X MIPA 1🚟0081000148@M. Saputra@X MIPA 1🚟0081000185@Nadia Anggraini@X MIPA 2🚟0081000222@Muhammad Wijaya@X MIPA 2🚟0081000259@Putri Amelia@X MIPA 2🚟0081000296@Bagus Nugroho@X MIPA 2🚟0081000333@Bella Andini@X MIPA 3🚟0081000370@Fajar Ramadhan@X MIPA 3🚟0081000407@Cindy Mahardika@X MIPA 3🚟0081000444@Reza Maulana@X MIPA 3🚟0081000481@Kirana Safitri@X IPS 1🚟0081000518@Dimas Wibowo@X IPS 1🚟0081000555@Naila Kusuma@X IPS 1🚟0081000592@Yusuf Hidayat@X IPS 1🚟0081000629@Aulia Handayani@X IPS 2🚟0081000666@Rangga Gunawan@X IPS 2🚟0081000703@Sabrina Wibowo@X IPS 2🚟0081000740@Bayu Iskandar@X IPS 2🚟0081000777@Larasati Cahyani@X IPS 3🚟0081000814@Fikri Santoso@X IPS 3🚟0081000851@Zahra Az-Zahra@X IPS 3🚟0081000888@Galih Permana@X IPS 3🚟0081000925@Alya Kirani@XI MIPA 1🚟0081000962@Dzaki Yulianto@XI MIPA 1🚟0081000999@Naura Melati@XI MIPA 1🚟0081001036@Farhan Sutrisno@XI MIPA 1🚟0081001073@Citra Ramadhani@XI MIPA 2🚟0081001110@Rifqi Saputra@XI MIPA 2🚟0081001147@Aisyah Lestari@XI MIPA 2🚟0081001184@Aditya Firmansyah@XI MIPA 2🚟0081001221@Keisya Amelia@XI MIPA 3🚟0081001258@Reyhan Nugroho@XI MIPA 3🚟0081001295@Dewi Kartika@XI MIPA 3🚟0081001332@Danu Setiawan@XI MIPA 3🚟0081001369@Rina Mahardika@XI IPS 1🚟0081001406@Ilham Maulana@XI IPS 1🚟0081001443@Ratna Rahmawati@XI IPS 1🚟0081001480@Arya Kurniawan@XI IPS 1🚟0081001517@Wulan Kusuma@XI IPS 2🚟0081001554@Zaki Hidayat@XI IPS 2🚟0081001591@Intan Puspita@XI IPS 2🚟0081001628@Raka Susanto@XI IPS 2🚟0081001665@Diah Wibowo@XI IPS 3🚟0081001702@Fauzan Iskandar@XI IPS 3🚟0081001739@Fitri Utami@XI IPS 3🚟0081001776@Gilang Prasetyo@XI IPS 3🚟0081001813@Yuni Az-Zahra@XII IPA 1🚟0081001850@Wahyu Permana@XII IPA 1🚟0081001887@Anisa Maharani@XII IPA 1🚟0081001924@Ahmad Hakim@XII IPA 1🚟0081001961@Salsabila Melati@XII IPA 2🚟0081001998@M. Sutrisno@XII IPA 2🚟0081002035@Nadia Wulandari@XII IPA 2🚟0081002072@Muhammad Pratama@XII IPA 2🚟0081002109@Putri Lestari@XII IPA 3🚟0081002146@Bagus Firmansyah@XII IPA 3🚟0081002183@Bella Anggraini@XII IPA 3🚟0081002220@Fajar Wijaya@XII IPA 3🚟0081002257@Cindy Kartika@XII IPS 1🚟0081002294@Reza Setiawan@XII IPS 1🚟0081002331@Kirana Andini@XII IPS 1🚟0081002368@Dimas Ramadhan@XII IPS 1🚟0081002405@Naila Rahmawati@XII IPS 2🚟0081002442@Yusuf Kurniawan@XII IPS 2🚟0081002479@Aulia Safitri@XII IPS 2🚟0081002516@Rangga Wibowo@XII IPS 2🚟0081002553@Sabrina Puspita@XII IPS 3🚟0081002590@Bayu Susanto@XII IPS 3🚟0081002627@Larasati Handayani@XII IPS 3🚟0081002664@Fikri Gunawan@XII IPS 3`;
