# Sistem Pelaporan Pengawas Sekolah

Aplikasi web **satu halaman** (single-page app — HTML, CSS, JavaScript murni,
tanpa framework/backend) untuk mengelola dua alur pelaporan sekolah:

1. **Sekolah → Pengawas Sekolah** (pelaporan pengawasan lintas sekolah/kecamatan)
2. **Organisasi Ekstrakurikuler → Wakasek Kesiswaan** (pelaporan kegiatan ekskul di dalam satu sekolah)

Seluruh halaman (pemilihan akun + keempat dashboard) kini digabung dalam
**satu file `index.html`**; perpindahan tampilan dilakukan oleh JavaScript
tanpa reload/navigasi ke file lain. Cocok dihosting gratis di **GitHub Pages**.

## Fitur

- **Satu halaman (SPA)**: tidak ada lagi berkas HTML terpisah per peran — cukup buka `index.html`, dan aplikasi berpindah tampilan secara instan.
- **Tanpa login/kata sandi**: pilih peran dan nama akun dari daftar, lalu langsung masuk ke dashboard.
- **Dashboard Sekolah**: mengirim laporan (bulanan, semester, kegiatan, sarana prasarana, insidentil) ke pengawas pembina dan memantau status verifikasinya.
- **Dashboard Pengawas**: melihat seluruh laporan dari sekolah binaan, memfilter berdasarkan sekolah/status, memberi catatan, lalu **Verifikasi** atau **Minta Revisi**.
- **Dashboard Organisasi Ekstrakurikuler**: setiap organisasi ekskul (Pramuka, OSIS, PMR, Seni Tari, dst.) dapat mengirim laporan kegiatan, keanggotaan, prestasi/lomba, keuangan, atau insidentil kepada Wakasek Kesiswaan sekolahnya.
- **Dashboard Wakasek Kesiswaan**: melihat seluruh laporan dari organisasi ekskul di sekolahnya, memfilter berdasarkan organisasi/status, memberi catatan, lalu **Verifikasi** atau **Minta Revisi**.
- **Status laporan**: Menunggu → Terverifikasi / Perlu Revisi, ditampilkan sebagai "stempel" digital.
- Data disimpan di **localStorage** browser (cocok untuk demo/prototipe berbasis situs statis; setiap perangkat punya salinan datanya sendiri).

## Struktur Berkas

```
pengawas-sekolah/
├── index.html          # SATU-SATUNYA halaman: pemilihan akun + keempat dashboard (CSS sudah menyatu di dalamnya)
├── css/
│   └── style.css        # Salinan gaya visual untuk referensi/edit (tidak lagi di-link dari HTML)
└── js/
    ├── data.js          # Data awal (seed) + fungsi localStorage untuk kedua alur pelaporan
    └── app.js           # Seluruh logika aplikasi: routing antar-tampilan + keempat dashboard
```

> **Catatan tampilan:** gaya (CSS) ditulis langsung di dalam tag `<style>`
> pada `index.html`, bukan dipanggil dari `css/style.css` melalui `<link>`.
> Ini supaya tampilan tidak pernah gagal termuat hanya karena folder `css/`
> tertinggal saat menyalin/mengunggah file. Font juga memakai font bawaan
> sistem operasi (bukan Google Fonts) agar tidak bergantung koneksi internet
> ke luar. Jika Anda mengedit tampilan, ubah `css/style.css` lalu salin ulang
> isinya ke dalam tag `<style>` di `index.html`.
>
> **Catatan navigasi:** karena semuanya sekarang satu halaman, perpindahan
> antar dashboard (dan tombol "Ganti Akun") tidak mengubah URL/alamat
> browser — semuanya diatur oleh `js/app.js` dengan menampilkan/
> menyembunyikan bagian (`<section class="view">`) yang relevan.

## Akun yang Tersedia

Tidak ada kata sandi — cukup pilih salah satu nama berikut di halaman pembuka.

**Pihak Sekolah**
| Nama Sekolah | NPSN |
|---|---|
| SDN 01 Panakkukang | 40307001 |
| SMPN 05 Makassar | 40307005 |
| SDN 12 Rappocini | 40307012 |

**Pengawas Sekolah**
| Nama | Wilayah Binaan |
|---|---|
| Drs. Ahmad Yani, M.Pd | Kecamatan Panakkukang (membina SDN 01 &amp; SMPN 05) |
| Hj. Sitti Rahmawati, S.Pd., M.M. | Kecamatan Rappocini (membina SDN 12) |

**Wakasek Kesiswaan**
| Nama | Sekolah |
|---|---|
| Muhammad Ridwan, S.Pd. | SDN 01 Panakkukang |
| Andi Nurul Fadillah, S.Pd. | SMPN 05 Makassar |
| Bahtiar, S.Pd. | SDN 12 Rappocini |

**Organisasi Ekstrakurikuler**
| Organisasi | Sekolah | Pembina |
|---|---|---|
| Pramuka | SDN 01 Panakkukang | Kak Yusran, S.Pd. |
| Pencak Silat | SDN 01 Panakkukang | Muh. Fadli, S.Pd. |
| OSIS | SMPN 05 Makassar | Nurhayati, S.Pd. |
| Palang Merah Remaja (PMR) | SMPN 05 Makassar | dr. Wahyuni |
| Sanggar Seni Tari | SDN 12 Rappocini | Ibu Herlina, S.Pd. |
| Pramuka | SDN 12 Rappocini | Kak Ilham, S.Pd. |

## Cara Menjalankan di Lokal

Karena hanya berkas statis, cukup buka `index.html` langsung di browser,
atau jalankan server lokal sederhana:

```bash
cd pengawas-sekolah
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Cara Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `pengawas-sekolah`.
2. Unggah seluruh isi folder ini (`index.html`, folder `css/`, folder `js/`) ke root repository tersebut.
   ```bash
   cd pengawas-sekolah
   git init
   git add .
   git commit -m "Inisialisasi aplikasi pelaporan pengawas sekolah (single-page)"
   git branch -M main
   git remote add origin https://github.com/USERNAME/pengawas-sekolah.git
   git push -u origin main
   ```
3. Di GitHub, buka repository → **Settings** → **Pages**.
4. Pada bagian **Build and deployment**, pilih **Source: Deploy from a branch**.
5. Pilih **Branch: main** dan folder **/(root)**, lalu klik **Save**.
6. Tunggu 1–2 menit, situs akan aktif di:
   `https://USERNAME.github.io/pengawas-sekolah/`

## Catatan Pengembangan Lanjutan

- Data saat ini tersimpan di `localStorage` browser sehingga **tidak
  disinkronkan antar perangkat**. Untuk penggunaan produksi lintas sekolah,
  lapisan `js/data.js` bisa diganti agar memanggil backend/API
  (misalnya Firebase, Supabase, atau REST API) sambil mempertahankan
  fungsi-fungsi yang sama (`tambahLaporan`, `getLaporanBySekolah`,
  `tambahLaporanEkskul`, `getLaporanEkskulByWakasek`, dst.) — `js/app.js`
  tidak perlu diubah selama nama fungsi tersebut dipertahankan.
- Tambahan yang mudah dikembangkan: unggah lampiran berupa berkas asli,
  ekspor laporan ke PDF, notifikasi email saat laporan baru masuk,
  laporan rekap tahunan per organisasi ekskul.
