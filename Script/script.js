const locations = [
  {
    id: 1,
    name: "Kebun Raya Bogor",
    category: "Destinasi",
    loc: "Bogor Tengah",
    desc: "Kebun botani tertua di Asia Tenggara dengan ribuan koleksi tanaman tropis dan subtropis. Didirikan pada tahun 1817 oleh Caspar Georg Carl Reinwardt.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Kebun_Raya_Bogor_24.jpg/640px-Kebun_Raya_Bogor_24.jpg",
    maps: "https://maps.google.com/?q=-6.5971,106.7990",
    alamat: "Jl. Ir. H. Juanda No.13, Paledang, Bogor Tengah",
  },
  {
    id: 2,
    name: "Soto Kuning Pak Yusuf",
    category: "Kuliner",
    loc: "Suryakencana",
    desc: "Soto kuning legendaris dengan kuah santan gurih dan daging sapi pilihan. Sudah berdiri sejak puluhan tahun dan menjadi ikon kuliner Bogor.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Soto_kuning.jpg/640px-Soto_kuning.jpg",
    maps: "https://maps.google.com/?q=-6.6044,106.7955",
    alamat: "Jl. Suryakencana, Babakan Pasar, Bogor Tengah",
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
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Curug_Bidadari_Sentul_Paradise_Park.jpg/640px-Curug_Bidadari_Sentul_Paradise_Park.jpg",
    maps: "https://maps.google.com/?q=-6.5867,106.8497",
    alamat: "Sentul Paradise Park, Bojong Koneng, Babakan Madang",
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
  },
  {
    id: 7,
    name: "Istana Bogor",
    category: "Destinasi",
    loc: "Bogor Tengah",
    desc: "Istana kepresidenan bersejarah peninggalan era kolonial Belanda yang dikelilingi oleh taman Kebun Raya Bogor yang asri.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Istana_Bogor_%28Bogor_Palace%29%2C_Indonesia.jpg/640px-Istana_Bogor_%28Bogor_Palace%29%2C_Indonesia.jpg",
    maps: "https://maps.google.com/?q=-6.6011,106.8005",
    alamat: "Jl. Ir. H. Juanda No.1, Paledang, Bogor Tengah",
  },
  {
    id: 8,
    name: "Taman Safari Indonesia",
    category: "Destinasi",
    loc: "Cisarua",
    desc: "Kebun binatang terbuka terbesar di Indonesia dengan koleksi ratusan spesies satwa dari seluruh dunia.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Taman_Safari.jpg/640px-Taman_Safari.jpg",
    maps: "https://maps.google.com/?q=-6.7197,106.9512",
    alamat: "Jl. Kapten Harun Kabir No.724, Cisarua",
  },
  {
    id: 9,
    name: "Tugu Kujang",
    category: "Destinasi",
    loc: "Bogor Tengah",
    desc: "Monumen ikonik Kota Bogor setinggi 25 meter berbentuk senjata tradisional khas Sunda, menjadi landmark kota.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Tugu_Kujang.jpg/640px-Tugu_Kujang.jpg",
    maps: "https://maps.google.com/?q=-6.5956,106.8065",
    alamat: "Jl. Pajajaran, Baranangsiang, Bogor Timur",
  },
  {
    id: 10,
    name: "Laksa Bogor",
    category: "Kuliner",
    loc: "Bogor Tengah",
    desc: "Kuliner legendaris khas Bogor berupa mie kuning dengan kuah oncom dan bumbu rempah yang unik dan gurih.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Laksa_Bogor.jpg/640px-Laksa_Bogor.jpg",
    maps: "https://maps.google.com/?q=-6.5958,106.7901",
    alamat: "Jl. Surya Kencana, Bogor Tengah",
  },
  {
    id: 11,
    name: "Roti Unyil Venus",
    category: "Kuliner",
    loc: "Bogor Timur",
    desc: "Roti mungil legendaris khas Bogor dengan berbagai pilihan rasa manis dan gurih. Sangat populer sebagai oleh-oleh khas Kota Hujan.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Roti_unyil.JPG/640px-Roti_unyil.JPG",
    maps: "https://maps.google.com/?q=-6.6156,106.8125",
    alamat: "Ruko V-Point, Jl. Pajajaran No. 1, Bogor Timur",
  },
  {
    id: 12,
    name: "Kue Lapis Bogor Sangkuriang",
    category: "Kuliner",
    loc: "Bogor Selatan",
    desc: "Kue lapis dengan tekstur lembut dan rasa yang khas, menjadi salah satu oleh-oleh wajib saat berkunjung ke Bogor.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kue_lapis_bogor.jpg/640px-Kue_lapis_bogor.jpg",
    maps: "https://maps.google.com/?q=-6.6452,106.8000",
    alamat: "Jl. Bogor Raya, Bogor Selatan",
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
    const card = `
      <div class="card" onclick="openDetail(${item.id})">
        <img src="${item.img}" alt="${item.name}" class="card-img">
        <div class="card-info">
          <div class="card-tag">${item.category}</div>
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
        <div class="modal-tag">${item.category}</div>
      </div>
      <div class="modal-body">
        <h2 class="modal-title">${item.name}</h2>
        <div class="modal-location">
          <span class="modal-loc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
          <div>
            <strong>${item.loc}</strong>
            <p>${item.alamat}</p>
          </div>
        </div>
        <p class="modal-desc">${item.desc}</p>
        <a href="${item.maps}" target="_blank" rel="noopener noreferrer" class="btn-maps">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
          Buka di Google Maps
          <svg class="maps-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </a>
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

  renderCards(filtered);
}

function handleSearch() {
  handleFilter();
}
