/* =========================================================
   data/kurikulum.js
   Data khusus untuk dashboard Wakasek Kurikulum.
   ========================================================= */

const DATA_KURIKULUM = {
  ringkasan: {
    totalMapel: 16,
    guruAktif: 42,
    rataCapaianKurikulum: "78%",
    ujianTerdekat: "PTS Ganjil - 15 Sep 2026"
  },
  jadwalUjian: [
    { nama: "Penilaian Tengah Semester (PTS) Ganjil", kelas: "X, XI, XII", tanggal: "15 - 20 Sep 2026", status: "Persiapan" },
    { nama: "Ujian Praktik Kejuruan", kelas: "XII", tanggal: "22 - 26 Sep 2026", status: "Persiapan" },
    { nama: "Penilaian Akhir Semester (PAS) Ganjil", kelas: "X, XI, XII", tanggal: "01 - 10 Des 2026", status: "Direncanakan" },
    { nama: "Try Out Ujian Sekolah", kelas: "XII", tanggal: "12 Jan 2027", status: "Direncanakan" }
  ],
  capaianKurikulum: [
    { mapel: "Matematika", kelas: "XI", targetBab: 8, tercapai: 6, persentase: "75%" },
    { mapel: "Bahasa Indonesia", kelas: "X", targetBab: 6, tercapai: 5, persentase: "83%" },
    { mapel: "Fisika", kelas: "XII", targetBab: 7, tercapai: 5, persentase: "71%" },
    { mapel: "Bahasa Inggris", kelas: "XI", targetBab: 6, tercapai: 5, persentase: "83%" },
    { mapel: "Kimia", kelas: "XII", targetBab: 7, tercapai: 4, persentase: "57%" }
  ],
  mataPelajaran: [
    { nama: "Matematika Wajib", rumpun: "MIPA", jamPerMinggu: 4 },
    { nama: "Bahasa Indonesia", rumpun: "Umum", jamPerMinggu: 4 },
    { nama: "Bahasa Inggris", rumpun: "Umum", jamPerMinggu: 3 },
    { nama: "Fisika", rumpun: "MIPA", jamPerMinggu: 4 },
    { nama: "Kimia", rumpun: "MIPA", jamPerMinggu: 4 },
    { nama: "Ekonomi", rumpun: "IPS", jamPerMinggu: 3 },
    { nama: "Sosiologi", rumpun: "IPS", jamPerMinggu: 3 },
    { nama: "Pendidikan Agama", rumpun: "Umum", jamPerMinggu: 3 }
  ]
};
