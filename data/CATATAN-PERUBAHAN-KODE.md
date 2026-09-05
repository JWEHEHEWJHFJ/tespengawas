# Catatan: penyesuaian kode karena format .js → .json

Karena file data sekarang JSON murni (bukan lagi `const NAMA = {...}` di file
.js), ada 2 titik kecil di kode yang perlu disesuaikan supaya isi JSON tetap
menjadi variabel global yang dipakai index.html (USERS, DATA_GURU_BK, dst).

## 1. code.gs — path file & cara menyisipkan ke halaman

Ganti daftar path (ekstensi `.js` → `.json`):

```js
const GITHUB_DATA_FILES = {
  users:               'data/users.json',
  siswa:               'data/siswa.json',
  guru_bk:             'data/guru-bk.json',
  wakasek_kesiswaan:   'data/wakasek-kesiswaan.json',
  kurikulum:           'data/kurikulum.json',
  humas:               'data/humas.json',
  sarpras:             'data/sarpras.json',
  tata_usaha:          'data/tata-usaha.json',
  osis:                'data/osis.json',
  pramuka:             'data/pramuka.json',
  pmr:                 'data/pmr.json',
  paskibra:            'data/paskibra.json',
  laporan_organisasi:  'data/laporan-organisasi.json'
};
```

Dan ubah `buildDataScriptsTag()` — sebelumnya file .js langsung ditempel apa
adanya di dalam `<script>`, sekarang isinya JSON (mis. `{"USERS":[...],
"ROLE_INFO":{...}}`), jadi perlu dibungkus `Object.assign(window, ...)` supaya
key-key di dalamnya otomatis jadi variabel global (USERS, ROLE_INFO, dst),
persis seperti sebelumnya:

```js
function buildDataScriptsTag() {
  const cache = CacheService.getScriptCache();
  const cached = cache.get(CACHE_KEY);
  if (cached) return cached;

  let html = '';
  for (const varName in GITHUB_DATA_FILES) {
    const path = GITHUB_DATA_FILES[varName];
    const content = fetchGithubFile_(path); // teks JSON, mis. {"USERS":[...]}
    html += '<script>Object.assign(window, ' + content + ');</script>\n';
  }

  try {
    cache.put(CACHE_KEY, html, CACHE_TTL_SECONDS);
  } catch (err) {
    // lewati cache kalau > 100KB, aplikasi tetap jalan
  }
  return html;
}
```

Tidak ada perubahan lain di code.gs (fungsi lampiran, org-extra, dsb tetap
sama — `data/org-extra/*.json` memang sudah JSON sejak awal).

## 2. index.html — SISWA_LIST langsung dari JSON

Sebelumnya SISWA_RAW berupa teks berformat "NISN@Nama@Kelas" dipisah simbol
🚟 lalu di-parse jadi SISWA_LIST. Sekarang `data/siswa.json` sudah langsung
berisi `SISWA_LIST` (array objek), jadi blok parsing lama:

```js
let SISWA_LIST = [];
if(typeof SISWA_RAW !== "undefined"){
  SISWA_LIST = SISWA_RAW.split("🚟")...
}
```

diganti jadi:

```js
const SISWA_LIST = Array.isArray(window.SISWA_LIST) ? window.SISWA_LIST : [];
```

Dan di `checkDataLoaded()`, baris:

```js
"SISWA_RAW (data_siswa)": typeof SISWA_RAW !== "undefined",
```

diganti jadi:

```js
"SISWA_LIST (data_siswa)": typeof SISWA_LIST !== "undefined",
```

Selain dua titik ini, seluruh kode lain (form, tabel, org-extra, lampiran)
tidak perlu diubah — semua sudah mengonsumsi lewat nama variabel yang sama
(DATA_GURU_BK, DATA_KESISWAAN, ORGANISASI_LIST, dst), hanya sumbernya saja
yang sekarang JSON.

## Struktur file yang dibuat

- `data/users.json` → `USERS`, `ROLE_INFO`
- `data/siswa.json` → `SISWA_LIST`
- `data/guru-bk.json` → `DATA_GURU_BK`
- `data/wakasek-kesiswaan.json` → `DATA_KESISWAAN`
- `data/kurikulum.json` → `DATA_KURIKULUM`
- `data/humas.json` → `DATA_HUMAS`
- `data/sarpras.json` → `DATA_SARPRAS`
- `data/tata-usaha.json` → `DATA_TATA_USAHA`
- `data/osis.json`, `pramuka.json`, `pmr.json`, `paskibra.json` → `DATA_OSIS`, dst (hanya `pembina`, karena data anggota/kegiatan/dll organisasi memang disimpan terpisah)
- `data/laporan-organisasi.json` → `ORGANISASI_LIST`
- `data/org-extra/osis.json`, `pramuka.json`, `pmr.json`, `paskibra.json`, `wakasek-kesiswaan.json` → contoh isi awal file yang otomatis dibuat/dibaca oleh `getOrgExtraData_()` (anggota, prokja, kegiatan, keuangan, lpj, ekstrakurikuler, pelanggaran)
