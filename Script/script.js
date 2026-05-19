const locations = [
  {
    id: 1,
    name: "Kebun Raya Bogor",
    category: "Destinasi",
    loc: "Bogor Tengah",
    desc: "Kebun botani tertua di Asia Tenggara dengan ribuan koleksi tanaman tropis dan subtropis. Didirikan pada tahun 1817 oleh Caspar Georg Carl Reinwardt.",
    img: "https://i.pinimg.com/1200x/aa/0f/88/aa0f8882788f4da454c391d8985cd0f2.jpg",
    maps: "https://maps.app.goo.gl/YwBez7JTUizt69Lt7",
    alamat:
      "Jl. Otto Iskandardinata No.13, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122",
  },
  {
    id: 2,
    name: "Soto Kuning Pak Yusup",
    category: "Kuliner",
    loc: "Suryakencana",
    desc: "Soto kuning legendaris dengan kuah santan gurih dan daging sapi pilihan. Sudah berdiri sejak puluhan tahun dan menjadi ikon kuliner Bogor.",
    img: "https://i.pinimg.com/736x/4c/82/be/4c82be3ff977d77ac74a412928a4a3b9.jpg",
    maps: "https://maps.app.goo.gl/ppF7L3h42gUMNKDo8",
    alamat:
      "Jl. Suryakencana No.260 G, RT.01/RW.05, Gudang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16142",
  },
  {
    id: 3,
    name: "Bogor Street Festival",
    category: "Event",
    loc: "Suryakencana",
    desc: "Perayaan budaya Cap Go Meh tahunan yang menampilkan keberagaman tradisi Tionghoa dan budaya lokal Bogor.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Cap_Go_Meh_2006_%D8%AB%D8%AF%D8%A7%D8%AF.jpg/640px-Cap_Go_Meh_2006_%D8%AB%D8%AF%D8%A7%D8%AF.jpg",
    maps: "https://maps.google.com/?q=-6.6040,106.7958",
    alamat: "Jl. Suryakencana, Bogor Tengah",
  },
  {
    id: 4,
    name: "Doclang Pak Odik",
    category: "Kuliner",
    loc: "Pasir Kuda",
    desc: "Sarapan khas Bogor: lontong daun patat dengan bumbu kacang kental, tahu, dan telur. Wajib dicoba saat ke Bogor!",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Doclang.jpg/640px-Doclang.jpg",
    maps: "https://maps.google.com/?q=-6.5889,106.7764",
    alamat: "Jl. Pasir Kuda, Bogor Barat",
  },
  {
    id: 5,
    name: "Curug Bidadari",
    category: "Destinasi",
    loc: "Sentul",
    desc: "Air terjun cantik dengan kolam pemandian alami yang luas, sangat cocok untuk wisata keluarga di akhir pekan.",
    img: "https://i.pinimg.com/736x/21/3d/1f/213d1f6b2b2a68d8de0d95be0e8631f5.jpg",
    maps: "https://maps.app.goo.gl/wASQfpszT5kjPmiUA",
    alamat:
      "Jl. Sentul Paradise Park, Bojong Koneng, Kec. Babakan Madang, Kabupaten Bogor, Jawa Barat 16810",
  },
  {
    id: 6,
    name: "Update Jalur Wisata Puncak",
    category: "Berita",
    loc: "Cisarua",
    desc: "Info terbaru sistem satu arah dan ganjil genap jalur Puncak setiap akhir pekan dan hari libur nasional.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Puncak_Pass.jpg/640px-Puncak_Pass.jpg",
    maps: "https://maps.google.com/?q=-6.6994,106.9858",
    alamat: "Puncak Pass, Cisarua, Kabupaten Bogor",
    link: "https://www.pikiran-rakyat.com/jawa-barat/pr-016782568/sistem-ganjil-genap-dan-satu-arah-di-jalur-puncak-bogor-berlaku-mulai-hari-ini",
    tanggal: "19 Mei 2026",
  },
  {
    id: 7,
    name: "Istana Bogor",
    category: "Destinasi",
    loc: "Bogor Tengah",
    desc: "Istana kepresidenan bersejarah peninggalan era kolonial Belanda yang dikelilingi oleh taman Kebun Raya Bogor yang asri.",
    img: "https://i.pinimg.com/736x/ec/15/ed/ec15ed86970bacd8e0ed497ae69baba4.jpg",
    maps: "https://maps.app.goo.gl/NYkfzz6TQkhyZGCy9",
    alamat:
      "Jl. Ir. H. Juanda, RT.04/RW.01, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122",
  },
  {
    id: 8,
    name: "Taman Safari Indonesia",
    category: "Destinasi",
    loc: "Cisarua",
    desc: "Kebun binatang terbuka terbesar di Indonesia dengan koleksi ratusan spesies satwa dari seluruh dunia.",
    img: "https://i.pinimg.com/1200x/63/fd/77/63fd77902721b97d02c03fa6ecaf9cf0.jpg",
    maps: "https://maps.app.goo.gl/pYTNheGyyp6RGFz78",
    alamat:
      "Jalan Kapten Harun Kabir No.724, Cibeureum, Kec. Cisarua, Kabupaten Bogor, Jawa Barat 16750",
  },
  {
    id: 9,
    name: "Tugu Kujang",
    category: "Destinasi",
    loc: "Bogor Tengah",
    desc: "Monumen ikonik Kota Bogor setinggi 25 meter berbentuk senjata tradisional khas Sunda, menjadi landmark kota.",
    img: "https://i.pinimg.com/736x/f4/7d/24/f47d245bfb62d430b788de3f342da91a.jpg",
    maps: "https://maps.app.goo.gl/tzTFNBwPZG8aiGR56",
    alamat:
      "Jl. Raya Pajajaran, RT.04/RW.02, Tegallega, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16143",
  },
  {
    id: 10,
    name: "Laksa Bogor",
    category: "Kuliner",
    loc: "Bogor Tengah",
    desc: "Kuliner legendaris khas Bogor berupa mie kuning dengan kuah oncom dan bumbu rempah yang unik dan gurih.",
    img: "https://i.pinimg.com/1200x/50/6b/fa/506bfa6fdbc40de5ceaea477e656261f.jpg",
    maps: "https://maps.app.goo.gl/3B4iJL9JnhJ1NPEU6",
    alamat:
      "9RQ3+QQ4, Jl. Suryakencana Gg. Aut, RT.01/RW.05, Gudang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16131",
  },
  {
    id: 11,
    name: "Roti Unyil Venus",
    category: "Kuliner",
    loc: "Bogor Timur",
    desc: "Roti mungil legendaris khas Bogor dengan berbagai pilihan rasa manis dan gurih. Sangat populer sebagai oleh-oleh khas Kota Hujan.",
    img: "https://i.pinimg.com/1200x/7a/1e/56/7a1e5686917967e4679a265c7871096e.jpg",
    maps: "https://maps.app.goo.gl/xxAbwHYu4TugDW6e6",
    alamat:
      "Ruko, Jl. V Point Jl. Raya Pajajaran No.1 Blok JA, RT.03/RW.01, Sukasari, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16142",
  },
  {
    id: 12,
    name: "Kue Lapis Bogor Sangkuriang",
    category: "Kuliner",
    loc: "Bogor Tengah",
    desc: "Kue lapis dengan tekstur lembut dan rasa yang khas, menjadi salah satu oleh-oleh wajib saat berkunjung ke Bogor.",
    img: "https://i.pinimg.com/736x/4c/a0/15/4ca015bf4f6ecc98f6370d85a2ac2d08.jpg",
    maps: "https://maps.app.goo.gl/SH2za48hUCTEzn7cA",
    alamat:
      "Jl. Raya Pajajaran No.77B, RT.04/RW.05, Tegallega, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16142",
  },
];

let currentCategory = "Semua";

function openApp() {
  document.getElementById("landing-page").style.display = "none";
  document.getElementById("main-app").style.display = "flex";
  renderCards(locations);
}

function closeApp() {
  document.getElementById("landing-page").style.display = "flex";
  document.getElementById("main-app").style.display = "none";
  closeSidebar();
}

// Scroll halus ke section kategori di landing page
function scrollToCategories() {
  const section = document.getElementById("categoriesSection");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ===== HAMBURGER MENU =====
function toggleSidebar() {
  const sidebar = document.getElementById("mainSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const btn     = document.getElementById("hamburgerBtn");
  const isOpen  = sidebar.classList.contains("open");
  if (isOpen) {
    closeSidebar();
  } else {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    btn.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("mainSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const btn     = document.getElementById("hamburgerBtn");
  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
  if (btn)     btn.classList.remove("open");
  document.body.style.overflow = "";
}

function renderCards(data) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML =
      '<div class="empty-state">Data tidak ditemukan...</div>';
    return;
  }

  const grid = document.createElement("div");
  grid.className = "grid";

  data.forEach((item) => {
    const tagClass = `card-tag tag-${item.category.toLowerCase()}`;
    const tanggalHtml = item.category === 'Berita' && item.tanggal
      ? `<span class="card-date"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg> ${item.tanggal}</span>`
      : '';
    const card = `
      <div class="card" onclick="openDetail(${item.id})">
        <img src="${item.img}" alt="${item.name}" class="card-img">
        <div class="card-info">
          <div class="${tagClass}">${item.category}</div>
          ${tanggalHtml}
          <h2>${item.name}</h2>
          <p>${item.desc}</p>
          <div class="card-footer">
            <span class="card-loc"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> ${item.loc}</span>
            <button class="btn-detail" onclick="event.stopPropagation(); openDetail(${item.id})">Lihat Detail →</button>
          </div>
        </div>
      </div>`;
    grid.innerHTML += card;
  });

  container.appendChild(grid);
}

// Detail Modal
function openDetail(id) {
  const item = locations.find((loc) => loc.id === id);
  if (!item) return;

  // Remove existing modal if any
  const existing = document.getElementById("detailModal");
  if (existing) existing.remove();

  const modal = document.createElement("div");
  modal.id = "detailModal";
  modal.className = "modal-overlay";
  modal.innerHTML = `
    <div class="modal-card">
      <button class="modal-close" onclick="closeDetail()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      <div class="modal-img-container">
        <img src="${item.img}" alt="${item.name}" class="modal-img">
        <div class="modal-tag modal-tag-${item.category.toLowerCase()}">${item.category}</div>
      </div>
      <div class="modal-body">
        ${item.category === 'Berita' && item.tanggal
          ? `<div class="modal-date"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg> Dipublikasikan: ${item.tanggal}</div>`
          : ''}
        <h2 class="modal-title">${item.name}</h2>
        <div class="modal-location">
          <span class="modal-loc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
          <div>
            <strong>${item.loc}</strong>
            <p>${item.alamat}</p>
          </div>
        </div>
        <p class="modal-desc">${item.desc}</p>
        ${item.category === 'Berita'
      ? `<a href="${item.link || item.maps}" target="_blank" rel="noopener noreferrer" class="btn-maps btn-berita">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
              Baca Berita Selengkapnya
              <svg class="maps-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>`
      : `<a href="${item.maps}" target="_blank" rel="noopener noreferrer" class="btn-maps">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
              Buka di Google Maps
              <svg class="maps-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </a>`
    }
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Animate in
  requestAnimationFrame(() => {
    modal.classList.add("active");
  });

  // Close on overlay click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeDetail();
  });

  // Close on Escape key
  document.addEventListener("keydown", handleEscape);
}

function handleEscape(e) {
  if (e.key === "Escape") closeDetail();
}

function closeDetail() {
  const modal = document.getElementById("detailModal");
  if (!modal) return;
  modal.classList.remove("active");
  setTimeout(() => modal.remove(), 300);
  document.removeEventListener("keydown", handleEscape);
}

function setCategory(cat, el) {
  currentCategory = cat;

  // Update active state in sidebar
  const buttons = document.querySelectorAll(".sidebar-menu button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  el.classList.add("active");

  // Tutup sidebar otomatis di mobile setelah pilih kategori
  if (window.innerWidth <= 768) {
    closeSidebar();
  }

  handleFilter();
}

function handleFilter() {
  const searchVal = document.getElementById("searchInput").value.toLowerCase();

  const filtered = locations.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchVal);
    const matchesCat =
      currentCategory === "Semua" || item.category === currentCategory;
    return matchesSearch && matchesCat;
  });

  // Update counter
  updateCounter(filtered.length, searchVal);

  renderCards(filtered);
}

function updateCounter(count, searchVal) {
  const counter = document.getElementById("filterCounter");
  if (!counter) return;

  const catLabel = currentCategory === "Semua" ? "Semua Kategori" : currentCategory;
  const searchLabel = searchVal ? ` · Pencarian: "${searchVal}"` : "";
  const resultWord = count === 1 ? "hasil" : "hasil";

  counter.innerHTML = `
    <span class="counter-num">${count}</span>
    <span class="counter-text">${resultWord} ditemukan</span>
    <span class="counter-divider">·</span>
    <span class="counter-cat">${catLabel}${searchLabel}</span>
  `;
  counter.classList.remove("counter-fade");
  void counter.offsetWidth; // trigger reflow untuk restart animasi
  counter.classList.add("counter-fade");
}

function handleSearch() {
  handleFilter();
}
