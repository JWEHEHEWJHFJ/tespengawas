/**
 * app.js — logika aplikasi satu halaman (single-page app).
 * Menggabungkan: pemilihan akun, dashboard sekolah, pengawas,
 * organisasi ekskul, dan wakasek kesiswaan. Perpindahan tampilan
 * dilakukan dengan menampilkan/menyembunyikan elemen <section class="view">,
 * tanpa reload halaman.
 */

(function () {
  initDB();

  const toast = document.getElementById("toast");

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function showView(name) {
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    document.getElementById("view-" + name).classList.add("active");
  }

  /* ================= ROUTER ================= */

  function route() {
    const user = getCurrentUser();
    if (!user) {
      showView("picker");
      renderPicker();
      return;
    }
    showView(user.role);
    if (user.role === "sekolah") renderSekolah(user);
    if (user.role === "pengawas") renderPengawas(user);
    if (user.role === "ekskul") renderEkskul(user);
    if (user.role === "wakasek") renderWakasek(user);
  }

  function gantiAkun() {
    logout();
    route();
  }

  /* ================= VIEW: PILIH AKUN ================= */

  let selectedRole = "sekolah";
  const roleToggle = document.getElementById("roleToggle");
  const accountLabel = document.getElementById("accountLabel");
  const accountSelect = document.getElementById("accountSelect");
  const accountForm = document.getElementById("accountForm");

  const ROLE_LABEL = {
    sekolah: "Pilih Sekolah",
    pengawas: "Pilih Pengawas",
    ekskul: "Pilih Organisasi Ekstrakurikuler",
    wakasek: "Pilih Wakasek Kesiswaan"
  };

  function accountLabelFor(u) {
    if (u.role === "sekolah") return `${u.namaSekolah} (NPSN ${u.npsn})`;
    if (u.role === "pengawas") return `${u.namaPengawas} — ${u.wilayah}`;
    if (u.role === "ekskul") return `${u.namaEkskul} — ${u.namaSekolah}`;
    if (u.role === "wakasek") return `${u.namaWakasek} — ${u.namaSekolah}`;
    return u.username;
  }

  function renderPicker() {
    selectedRole = "sekolah";
    [...roleToggle.querySelectorAll("button")].forEach((b) =>
      b.classList.toggle("active", b.dataset.role === selectedRole)
    );
    renderAccountOptions();
  }

  function renderAccountOptions() {
    const db = readDB();
    const accounts = db.users.filter((u) => u.role === selectedRole);
    accountSelect.innerHTML = accounts
      .map((u) => `<option value="${u.username}">${accountLabelFor(u)}</option>`)
      .join("");
    accountLabel.textContent = ROLE_LABEL[selectedRole];
  }

  roleToggle.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-role]");
    if (!btn) return;
    selectedRole = btn.dataset.role;
    [...roleToggle.querySelectorAll("button")].forEach((b) =>
      b.classList.toggle("active", b === btn)
    );
    renderAccountOptions();
  });

  accountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = accountSelect.value;
    const user = loginAsUser(username);
    if (!user) return;
    route();
  });

  /* ================= VIEW: DASHBOARD SEKOLAH ================= */

  const sekolahStatRow = document.getElementById("sekolahStatRow");
  const sekolahLaporanList = document.getElementById("sekolahLaporanList");
  const sekolahFilterStatus = document.getElementById("sekolahFilterStatus");
  const sekolahForm = document.getElementById("sekolahForm");

  let sekolahFilter = "semua";

  function renderSekolah(user) {
    document.getElementById("sekolahSidebarNama").textContent = user.namaSekolah;
    document.getElementById("sekolahSidebarNpsn").textContent = `NPSN ${user.npsn} · ${user.jenjang}`;
    sekolahFilter = "semua";
    sekolahFilterStatus.value = "semua";
    sekolahForm.reset();
    renderSekolahList(user);
  }

  function renderSekolahList(user) {
    const all = getLaporanBySekolah(user.username);
    const total = all.length;
    const menunggu = all.filter((l) => l.status === "terkirim").length;
    const terverifikasi = all.filter((l) => l.status === "diverifikasi").length;
    sekolahStatRow.innerHTML = `
      <div class="stat-card"><div class="num">${total}</div><div class="label">Total Laporan Terkirim</div></div>
      <div class="stat-card"><div class="num">${menunggu}</div><div class="label">Menunggu Verifikasi</div></div>
      <div class="stat-card"><div class="num">${terverifikasi}</div><div class="label">Sudah Terverifikasi</div></div>
    `;

    const filtered = sekolahFilter === "semua" ? all : all.filter((l) => l.status === sekolahFilter);

    if (filtered.length === 0) {
      sekolahLaporanList.innerHTML = `<div class="empty-state">Belum ada laporan pada kategori ini. Gunakan formulir di atas untuk mengirim laporan baru.</div>`;
      return;
    }

    sekolahLaporanList.innerHTML = filtered
      .map((l) => {
        const lampiranHtml = l.lampiran ? `<div class="laporan-lampiran">📎 ${l.lampiran}</div>` : "";
        const catatanHtml = l.catatanPengawas
          ? `<div class="catatan-box"><div class="catatan-label">Catatan Pengawas · ${formatTanggal(l.tanggalVerifikasi)}</div>${l.catatanPengawas}</div>`
          : "";
        return `
          <article class="laporan-card status-${l.status}">
            <div class="laporan-top">
              <div>
                <div class="laporan-id">${l.id} · Dikirim ${formatTanggal(l.tanggalKirim)}</div>
                <h3>${l.jenis} — ${l.periode}</h3>
                <div class="laporan-meta">Ditujukan kepada pengawas pembina</div>
              </div>
              <div class="stamp status-${l.status}">${STATUS_LABEL[l.status]}</div>
            </div>
            <div class="laporan-isi">${l.isi}</div>
            ${lampiranHtml}
            ${catatanHtml}
          </article>
        `;
      })
      .join("");
  }

  sekolahFilterStatus.addEventListener("change", () => {
    sekolahFilter = sekolahFilterStatus.value;
    renderSekolahList(getCurrentUser());
  });

  sekolahForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user || user.role !== "sekolah") return;

    tambahLaporan({
      sekolahUsername: user.username,
      namaSekolah: user.namaSekolah,
      jenis: document.getElementById("sekolahJenis").value,
      periode: document.getElementById("sekolahPeriode").value.trim(),
      isi: document.getElementById("sekolahIsi").value.trim(),
      lampiran: document.getElementById("sekolahLampiran").value.trim(),
      tanggalKirim: new Date().toISOString().slice(0, 10)
    });

    sekolahForm.reset();
    showToast("Laporan berhasil dikirim ke pengawas.");
    renderSekolahList(user);
  });

  document.getElementById("sekolahLogoutBtn").addEventListener("click", gantiAkun);

  /* ================= VIEW: DASHBOARD PENGAWAS ================= */

  const pengawasStatRow = document.getElementById("pengawasStatRow");
  const pengawasLaporanList = document.getElementById("pengawasLaporanList");
  const pengawasFilterStatus = document.getElementById("pengawasFilterStatus");
  const pengawasFilterSekolah = document.getElementById("pengawasFilterSekolah");

  let pengawasStatusFilter = "semua";
  let pengawasSekolahFilter = "semua";

  function renderPengawas(user) {
    document.getElementById("pengawasSidebarNama").textContent = user.namaPengawas;
    document.getElementById("pengawasSidebarWilayah").textContent = user.wilayah;

    const sekolahBinaan = getSekolahBinaan(user.username);
    pengawasFilterSekolah.innerHTML =
      `<option value="semua">Semua Sekolah</option>` +
      sekolahBinaan.map((s) => `<option value="${s.username}">${s.namaSekolah}</option>`).join("");

    pengawasStatusFilter = "semua";
    pengawasSekolahFilter = "semua";
    pengawasFilterStatus.value = "semua";

    renderPengawasList(user);
  }

  function renderPengawasList(user) {
    const all = getLaporanByPengawas(user.username);
    const total = all.length;
    const menunggu = all.filter((l) => l.status === "terkirim").length;
    const revisi = all.filter((l) => l.status === "perlu_revisi").length;
    pengawasStatRow.innerHTML = `
      <div class="stat-card"><div class="num">${total}</div><div class="label">Total Laporan Masuk</div></div>
      <div class="stat-card"><div class="num">${menunggu}</div><div class="label">Belum Ditinjau</div></div>
      <div class="stat-card"><div class="num">${revisi}</div><div class="label">Menunggu Revisi Sekolah</div></div>
    `;

    let filtered = all;
    if (pengawasStatusFilter !== "semua") filtered = filtered.filter((l) => l.status === pengawasStatusFilter);
    if (pengawasSekolahFilter !== "semua") filtered = filtered.filter((l) => l.sekolahUsername === pengawasSekolahFilter);

    if (filtered.length === 0) {
      pengawasLaporanList.innerHTML = `<div class="empty-state">Tidak ada laporan yang cocok dengan filter saat ini.</div>`;
      return;
    }

    pengawasLaporanList.innerHTML = filtered
      .map((l) => {
        const lampiranHtml = l.lampiran ? `<div class="laporan-lampiran">📎 ${l.lampiran}</div>` : "";
        const catatanHtml = l.catatanPengawas
          ? `<div class="catatan-box"><div class="catatan-label">Catatan Anda · ${formatTanggal(l.tanggalVerifikasi)}</div>${l.catatanPengawas}</div>`
          : "";
        return `
          <article class="laporan-card status-${l.status}" data-id="${l.id}">
            <div class="laporan-top">
              <div>
                <div class="laporan-id">${l.id} · Dikirim ${formatTanggal(l.tanggalKirim)}</div>
                <h3>${l.jenis} — ${l.periode}</h3>
                <div class="laporan-meta">Dari <strong>${l.namaSekolah}</strong></div>
              </div>
              <div class="stamp status-${l.status}">${STATUS_LABEL[l.status]}</div>
            </div>
            <div class="laporan-isi">${l.isi}</div>
            ${lampiranHtml}
            ${catatanHtml}
            <div class="review-actions">
              <textarea placeholder="Tulis catatan untuk sekolah (opsional untuk verifikasi, disarankan untuk revisi)..."></textarea>
              <button class="btn btn-primary btn-sm" data-action="verifikasi">Verifikasi</button>
              <button class="btn btn-ghost btn-sm" data-action="revisi">Minta Revisi</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  pengawasLaporanList.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const card = btn.closest(".laporan-card");
    const id = card.dataset.id;
    const catatan = card.querySelector("textarea").value.trim();
    const status = btn.dataset.action === "verifikasi" ? "diverifikasi" : "perlu_revisi";

    if (status === "perlu_revisi" && !catatan) {
      showToast("Mohon tuliskan catatan agar sekolah tahu apa yang perlu diperbaiki.");
      return;
    }

    perbaruiStatusLaporan(id, status, catatan);
    showToast(status === "diverifikasi" ? "Laporan telah diverifikasi." : "Permintaan revisi terkirim ke sekolah.");
    renderPengawasList(getCurrentUser());
  });

  pengawasFilterStatus.addEventListener("change", () => {
    pengawasStatusFilter = pengawasFilterStatus.value;
    renderPengawasList(getCurrentUser());
  });

  pengawasFilterSekolah.addEventListener("change", () => {
    pengawasSekolahFilter = pengawasFilterSekolah.value;
    renderPengawasList(getCurrentUser());
  });

  document.getElementById("pengawasLogoutBtn").addEventListener("click", gantiAkun);

  /* ================= VIEW: DASHBOARD EKSTRAKURIKULER ================= */

  const ekskulStatRow = document.getElementById("ekskulStatRow");
  const ekskulLaporanList = document.getElementById("ekskulLaporanList");
  const ekskulFilterStatus = document.getElementById("ekskulFilterStatus");
  const ekskulForm = document.getElementById("ekskulForm");

  let ekskulFilter = "semua";

  function renderEkskul(user) {
    document.getElementById("ekskulSidebarNama").textContent = user.namaEkskul;
    document.getElementById("ekskulSidebarSekolah").textContent = `${user.namaSekolah} · Pembina: ${user.namaPembina}`;
    ekskulFilter = "semua";
    ekskulFilterStatus.value = "semua";
    ekskulForm.reset();
    renderEkskulList(user);
  }

  function renderEkskulList(user) {
    const all = getLaporanEkskulByEkskul(user.username);
    const total = all.length;
    const menunggu = all.filter((l) => l.status === "terkirim").length;
    const terverifikasi = all.filter((l) => l.status === "diverifikasi").length;
    ekskulStatRow.innerHTML = `
      <div class="stat-card"><div class="num">${total}</div><div class="label">Total Laporan Terkirim</div></div>
      <div class="stat-card"><div class="num">${menunggu}</div><div class="label">Menunggu Tinjauan</div></div>
      <div class="stat-card"><div class="num">${terverifikasi}</div><div class="label">Sudah Terverifikasi</div></div>
    `;

    const filtered = ekskulFilter === "semua" ? all : all.filter((l) => l.status === ekskulFilter);

    if (filtered.length === 0) {
      ekskulLaporanList.innerHTML = `<div class="empty-state">Belum ada laporan pada kategori ini. Gunakan formulir di atas untuk mengirim laporan baru.</div>`;
      return;
    }

    ekskulLaporanList.innerHTML = filtered
      .map((l) => {
        const lampiranHtml = l.lampiran ? `<div class="laporan-lampiran">📎 ${l.lampiran}</div>` : "";
        const catatanHtml = l.catatanWakasek
          ? `<div class="catatan-box"><div class="catatan-label">Catatan Wakasek Kesiswaan · ${formatTanggal(l.tanggalTinjau)}</div>${l.catatanWakasek}</div>`
          : "";
        return `
          <article class="laporan-card status-${l.status}">
            <div class="laporan-top">
              <div>
                <div class="laporan-id">${l.id} · Dikirim ${formatTanggal(l.tanggalKirim)}</div>
                <h3>${l.jenis} — ${l.periode}</h3>
                <div class="laporan-meta">Ditujukan kepada Wakasek Kesiswaan</div>
              </div>
              <div class="stamp status-${l.status}">${STATUS_LABEL[l.status]}</div>
            </div>
            <div class="laporan-isi">${l.isi}</div>
            ${lampiranHtml}
            ${catatanHtml}
          </article>
        `;
      })
      .join("");
  }

  ekskulFilterStatus.addEventListener("change", () => {
    ekskulFilter = ekskulFilterStatus.value;
    renderEkskulList(getCurrentUser());
  });

  ekskulForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user || user.role !== "ekskul") return;

    tambahLaporanEkskul({
      ekskulUsername: user.username,
      namaEkskul: user.namaEkskul,
      namaSekolah: user.namaSekolah,
      wakasekUsername: user.wakasekUsername,
      jenis: document.getElementById("ekskulJenis").value,
      periode: document.getElementById("ekskulPeriode").value.trim(),
      isi: document.getElementById("ekskulIsi").value.trim(),
      lampiran: document.getElementById("ekskulLampiran").value.trim(),
      tanggalKirim: new Date().toISOString().slice(0, 10)
    });

    ekskulForm.reset();
    showToast("Laporan berhasil dikirim ke Wakasek Kesiswaan.");
    renderEkskulList(user);
  });

  document.getElementById("ekskulLogoutBtn").addEventListener("click", gantiAkun);

  /* ================= VIEW: DASHBOARD WAKASEK KESISWAAN ================= */

  const wakasekStatRow = document.getElementById("wakasekStatRow");
  const wakasekLaporanList = document.getElementById("wakasekLaporanList");
  const wakasekFilterStatus = document.getElementById("wakasekFilterStatus");
  const wakasekFilterEkskul = document.getElementById("wakasekFilterEkskul");

  let wakasekStatusFilter = "semua";
  let wakasekEkskulFilter = "semua";

  function renderWakasek(user) {
    document.getElementById("wakasekSidebarNama").textContent = user.namaWakasek;
    document.getElementById("wakasekSidebarSekolah").textContent = user.namaSekolah;

    const ekskulBinaan = getEkskulBinaan(user.username);
    wakasekFilterEkskul.innerHTML =
      `<option value="semua">Semua Organisasi</option>` +
      ekskulBinaan.map((u) => `<option value="${u.username}">${u.namaEkskul}</option>`).join("");

    wakasekStatusFilter = "semua";
    wakasekEkskulFilter = "semua";
    wakasekFilterStatus.value = "semua";

    renderWakasekList(user);
  }

  function renderWakasekList(user) {
    const all = getLaporanEkskulByWakasek(user.username);
    const total = all.length;
    const menunggu = all.filter((l) => l.status === "terkirim").length;
    const revisi = all.filter((l) => l.status === "perlu_revisi").length;
    wakasekStatRow.innerHTML = `
      <div class="stat-card"><div class="num">${total}</div><div class="label">Total Laporan Masuk</div></div>
      <div class="stat-card"><div class="num">${menunggu}</div><div class="label">Belum Ditinjau</div></div>
      <div class="stat-card"><div class="num">${revisi}</div><div class="label">Menunggu Revisi Ekskul</div></div>
    `;

    let filtered = all;
    if (wakasekStatusFilter !== "semua") filtered = filtered.filter((l) => l.status === wakasekStatusFilter);
    if (wakasekEkskulFilter !== "semua") filtered = filtered.filter((l) => l.ekskulUsername === wakasekEkskulFilter);

    if (filtered.length === 0) {
      wakasekLaporanList.innerHTML = `<div class="empty-state">Tidak ada laporan yang cocok dengan filter saat ini.</div>`;
      return;
    }

    wakasekLaporanList.innerHTML = filtered
      .map((l) => {
        const lampiranHtml = l.lampiran ? `<div class="laporan-lampiran">📎 ${l.lampiran}</div>` : "";
        const catatanHtml = l.catatanWakasek
          ? `<div class="catatan-box"><div class="catatan-label">Catatan Anda · ${formatTanggal(l.tanggalTinjau)}</div>${l.catatanWakasek}</div>`
          : "";
        return `
          <article class="laporan-card status-${l.status}" data-id="${l.id}">
            <div class="laporan-top">
              <div>
                <div class="laporan-id">${l.id} · Dikirim ${formatTanggal(l.tanggalKirim)}</div>
                <h3>${l.jenis} — ${l.periode}</h3>
                <div class="laporan-meta">Dari <strong>${l.namaEkskul}</strong></div>
              </div>
              <div class="stamp status-${l.status}">${STATUS_LABEL[l.status]}</div>
            </div>
            <div class="laporan-isi">${l.isi}</div>
            ${lampiranHtml}
            ${catatanHtml}
            <div class="review-actions">
              <textarea placeholder="Tulis catatan untuk organisasi ekskul (opsional untuk verifikasi, disarankan untuk revisi)..."></textarea>
              <button class="btn btn-primary btn-sm" data-action="verifikasi">Verifikasi</button>
              <button class="btn btn-ghost btn-sm" data-action="revisi">Minta Revisi</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  wakasekLaporanList.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const card = btn.closest(".laporan-card");
    const id = card.dataset.id;
    const catatan = card.querySelector("textarea").value.trim();
    const status = btn.dataset.action === "verifikasi" ? "diverifikasi" : "perlu_revisi";

    if (status === "perlu_revisi" && !catatan) {
      showToast("Mohon tuliskan catatan agar organisasi ekskul tahu apa yang perlu diperbaiki.");
      return;
    }

    perbaruiStatusLaporanEkskul(id, status, catatan);
    showToast(status === "diverifikasi" ? "Laporan telah diverifikasi." : "Permintaan revisi terkirim ke organisasi ekskul.");
    renderWakasekList(getCurrentUser());
  });

  wakasekFilterStatus.addEventListener("change", () => {
    wakasekStatusFilter = wakasekFilterStatus.value;
    renderWakasekList(getCurrentUser());
  });

  wakasekFilterEkskul.addEventListener("change", () => {
    wakasekEkskulFilter = wakasekFilterEkskul.value;
    renderWakasekList(getCurrentUser());
  });

  document.getElementById("wakasekLogoutBtn").addEventListener("click", gantiAkun);

  /* ================= MULAI ================= */

  route();
})();
