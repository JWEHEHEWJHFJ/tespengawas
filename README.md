# SIM Sekolah — Portal Login & Dashboard Multi-Peran

Aplikasi web statis (HTML + CSS + JS, tanpa perlu server/database) untuk portal
login sekolah dengan dashboard berbeda untuk tiap jabatan:

- Guru BK
- Wakasek Kesiswaan
- Wakasek Kurikulum
- Wakasek Humas
- Wakasek Sarana Prasarana
- Tata Usaha
- Organisasi Siswa: OSIS, Pramuka, PMR, Paskibra
- Kepala Sekolah (memantau semua divisi & organisasi di atas)
- Pengawas Sekolah (memantau semua divisi & organisasi di atas)

## Struktur file

```
index.html                     ← halaman login + seluruh dashboard (HTML/CSS/JS jadi satu)
data/users.js                  ← daftar akun & peran (role) untuk login
data/guru-bk.js                ← data khusus dashboard Guru BK
data/wakasek-kesiswaan.js      ← data khusus dashboard Wakasek Kesiswaan
data/kurikulum.js              ← data khusus dashboard Wakasek Kurikulum
data/humas.js                  ← data khusus dashboard Wakasek Humas
data/sarpras.js                ← data khusus dashboard Wakasek Sarpras
data/tata-usaha.js             ← data khusus dashboard Tata Usaha
data/osis.js                   ← data khusus dashboard OSIS
data/pramuka.js                ← data khusus dashboard Pramuka
data/pmr.js                    ← data khusus dashboard PMR
data/paskibra.js               ← data khusus dashboard Paskibra
data/laporan-organisasi.js     ← daftar organisasi siswa yang dipantau Wakasek Kesiswaan / Kepala Sekolah / Pengawas
```

`index.html` memuat kelima file data di atas dengan `<script src="...">`,
jadi tiap divisi bisa mengelola datanya sendiri di file terpisah tanpa
menyentuh file yang lain.

## Cara deploy ke GitHub Pages

1. Buat repository baru di GitHub (bisa publik atau privat jika punya GitHub Pro/Team/EDU).
2. Upload seluruh isi folder ini (`index.html` dan folder `data/`) ke root repository tersebut.
3. Buka **Settings → Pages** di repository.
4. Pada **Source**, pilih branch `main` dan folder `/ (root)`, lalu **Save**.
5. Tunggu 1–2 menit, GitHub akan memberi URL seperti:
   `https://<username-anda>.github.io/<nama-repo>/`
6. Buka URL tersebut — halaman login akan langsung muncul.

## Akun demo (ganti sebelum dipakai sungguhan)

Semua akun didefinisikan di `data/users.js`:

| Username    | Password       | Peran                  |
|-------------|----------------|-------------------------|
| gurubk      | bk123          | Guru BK                 |
| wakesis     | wakesis123     | Wakasek Kesiswaan       |
| kurikulum   | kurikulum123   | Wakasek Kurikulum       |
| humas       | humas123       | Wakasek Humas           |
| sarpras     | sarpras123     | Wakasek Sarpras         |
| tu          | tu123          | Tata Usaha              |
| osis        | osis123        | Ketua OSIS              |
| pramuka     | pramuka123     | Pradana (Ketua Pramuka) |
| pmr         | pmr123         | Ketua PMR               |
| paskibra    | paskibra123    | Komandan Paskibra       |
| kepsek      | kepsek123      | Kepala Sekolah          |
| pengawas    | pengawas123    | Pengawas Sekolah        |

Untuk mengganti nama sekolah, buka `index.html`, cari objek `CONFIG` di
bagian `<script>` paling bawah, dan ubah `schoolName`.

## Fitur tiap dashboard

- **Guru BK**: ringkasan kasus, data kasus BK (bisa tambah kasus baru), jadwal konseling.
- **Wakasek Kesiswaan**: ringkasan, pelanggaran siswa (bisa tambah), prestasi siswa (bisa tambah), daftar ekstrakurikuler.
- **Wakasek Kurikulum**: ringkasan, jadwal ujian (bisa tambah agenda), capaian kurikulum, daftar mata pelajaran.
- **Wakasek Humas**: ringkasan, kegiatan (bisa tambah), kerjasama mitra, publikasi (bisa tambah).
- **Wakasek Sarpras**: ringkasan aset, inventaris, pengajuan perbaikan (bisa tambah), kondisi ruang.
- **Tata Usaha**: ringkasan, surat masuk (bisa tambah), surat keluar (bisa tambah), administrasi siswa/mutasi (bisa tambah), keuangan & pembayaran siswa (bisa tambah).
- **OSIS / Pramuka / PMR / Paskibra** (organisasi siswa): setiap organisasi punya dashboard sendiri dengan tab
  Ringkasan, Anggota/Pengurus (bisa tambah), Program Kerja (bisa tambah), Kegiatan (bisa tambah),
  Keuangan/Kas organisasi (bisa tambah pemasukan-pengeluaran, saldo dihitung otomatis), dan
  Laporan Pertanggungjawaban/LPJ (bisa tambah laporan berkala) — inilah bentuk pertanggungjawaban
  organisasi ke Pembina, Wakasek Kesiswaan, dan pimpinan sekolah.
- **Kepala Sekolah & Pengawas Sekolah**: ringkasan lintas semua divisi & organisasi di atas (read-only) ditambah halaman
  **Catatan Pemantauan** untuk menuliskan arahan/pembinaan yang tersimpan dan bisa dilihat bersama.

Data baru yang ditambahkan lewat form "+ Tambah ..." langsung ikut muncul di
dashboard Kepala Sekolah dan Pengawas Sekolah, karena keduanya membaca sumber
data yang sama.

## Menambah organisasi siswa baru (mis. Rohis, KIR, dsb.)

Karena dashboard organisasi dibangun secara generik dari `data/laporan-organisasi.js`,
menambah organisasi baru tidak perlu mengubah kode dashboard sama sekali:

1. Buat file baru, misalnya `data/rohis.js`, dengan struktur field yang sama
   seperti `data/osis.js` (`namaOrganisasi`, `periode`, `pembina`, `anggota`,
   `programKerja`, `kegiatan`, `keuangan`, `lpj`).
2. Tambahkan akun login untuk organisasi tersebut di `data/users.js`
   (isi `role` dengan id organisasi, misalnya `"rohis"`).
3. Tambahkan tampilan role-nya di `ROLE_INFO` (juga di `data/users.js`).
4. Tambahkan satu baris entri baru di `ORGANISASI_LIST` pada
   `data/laporan-organisasi.js`.
5. Muat file `data/rohis.js` di `index.html` **sebelum**
   `data/laporan-organisasi.js` (letakkan tag `<script src="data/rohis.js">`
   di antara file organisasi lain dan file laporan-organisasi.js).

Setelah itu, organisasi baru otomatis punya dashboard lengkap (Ringkasan,
Anggota, Program Kerja, Kegiatan, Keuangan, LPJ) dan otomatis muncul di
tab "Laporan Organisasi" milik Wakasek Kesiswaan serta tab "Organisasi Siswa"
milik Kepala Sekolah/Pengawas Sekolah.

## ⚠️ Keterbatasan penting (baca sebelum dipakai sungguhan)

Ini adalah aplikasi **statis** tanpa backend/database sungguhan, karena
dihosting di GitHub Pages. Konsekuensinya:

1. **Login bukan otentikasi aman.** Daftar username/password ada di
   `data/users.js` yang bisa dibaca siapa pun yang membuka source code
   halaman. Jangan gunakan password yang juga dipakai di sistem lain, dan
   jangan anggap ini setara sistem login sungguhan untuk data sensitif.
2. **Data yang ditambahkan lewat form disimpan di `localStorage` browser
   masing-masing perangkat.** Artinya data yang ditambahkan Guru BK di
   komputernya sendiri **tidak otomatis muncul** di komputer Kepala Sekolah,
   kecuali mereka membuka aplikasi dari perangkat/browser yang sama.
   Untuk data bersama yang benar-benar tersinkron antar pengguna dan
   perangkat, aplikasi ini perlu dihubungkan ke backend + database
   sungguhan (misalnya Google Sheets API, Firebase, atau server sendiri).
3. Cocok dipakai untuk: demo internal, prototipe, atau penggunaan di satu
   perangkat/laboratorium bersama. Untuk penggunaan sekolah nyata dengan
   banyak pengguna di berbagai lokasi, disarankan menambahkan backend.
