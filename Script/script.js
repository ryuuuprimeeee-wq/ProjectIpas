const locations = [
  {
    id: 1,
    name: "Kebun Raya Bogor",
    category: "Destinasi",
    loc: "Bogor Tengah",
    desc: "Kebun botani tertua di Asia Tenggara dengan ribuan koleksi tanaman.",
    img: "https://images.unsplash.com/photo-1596402184320-417e7178c2cd?q=80&w=400",
  },
  {
    id: 2,
    name: "Soto Kuning Pak Yusuf",
    category: "Kuliner",
    loc: "Suryakencana",
    desc: "Soto kuning legendaris dengan kuah santan gurih dan daging sapi pilihan.",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400",
  },
  {
    id: 3,
    name: "Bogor Street Festival",
    category: "Event",
    loc: "Suryakencana",
    desc: "Perayaan budaya Cap Go Meh yang menampilkan keberagaman tradisi.",
    img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400",
  },
  {
    id: 4,
    name: "Doclang Pak Odik",
    category: "Kuliner",
    loc: "Pasir Kuda",
    desc: "Sarapan khas Bogor: ketupat dengan bumbu kacang kental dan telur.",
    img: "https://images.unsplash.com/photo-1544124499-583bb62f6176?q=80&w=400",
  },
  {
    id: 5,
    name: "Curug Bidadari",
    category: "Destinasi",
    loc: "Sentul",
    desc: "Air terjun cantik dengan kolam pemandian luas, cocok untuk keluarga.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400",
  },
  {
    id: 6,
    name: "Update Jalur Wisata Puncak",
    category: "Berita",
    loc: "Cisarua",
    desc: "Info sistem satu arah dan ganjil genap jalur Puncak akhir pekan ini.",
    img: "https://images.unsplash.com/photo-1704381335394-ff574b5bc08b?q=80&w=400",
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
                    <div class="card">
                        <img src="${item.img}" alt="${item.name}" class="card-img">
                        <div class="card-info">
                            <div class="card-tag">${item.category}</div>
                            <h2>${item.name}</h2>
                            <p>${item.desc}</p>
                            <div class="card-footer">
                                <span class="card-loc">${item.loc}</span>
                                <a href="#" class="btn-detail">Lihat Detail →</a>
                            </div>
                        </div>
                    </div>
                `;
    grid.innerHTML += card;
  });

  container.appendChild(grid);
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
