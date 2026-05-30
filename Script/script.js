const locations = [
  {
    id: 1,
    name: "Kebun Raya Bogor",
    category: "Destinasi",
    catDisplay: "Destinasi Alam",
    rating: "4.7",
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
    catDisplay: "Kuliner Legendaris",
    rating: "4.4",
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
    catDisplay: "Event Spesial",
    rating: "4.8",
    loc: "Suryakencana",
    desc: "Perayaan budaya Cap Go Meh tahunan yang menampilkan keberagaman tradisi Tionghoa dan budaya lokal Bogor.",
    img: "https://i.pinimg.com/736x/28/bb/4b/28bb4bf398d9f560690113cd8255a196.jpg",
    maps: "https://maps.google.com/?q=-6.6040,106.7958",
    alamat: "Jl. Suryakencana, Bogor Tengah",
  },
  {
    id: 4,
    name: "Doclang Pak Odik",
    category: "Kuliner",
    catDisplay: "Kuliner Legendaris",
    rating: "4.6",
    loc: "Bogor Barat",
    desc: "Sarapan khas Bogor: lontong daun patat dengan bumbu kacang kental, tahu, dan telur. Wajib dicoba saat ke Bogor!",
    img: "https://i1-c.pinimg.com/1200x/fb/e9/23/fbe923523bf4a84ead39aa4bab917def.jpg",
    maps: "https://maps.app.goo.gl/giMzFhF1iM8FrgxAA",
    alamat:
      "Jl. Pasir Kuda No.23, RT.01/RW.03, Pasir Jaya, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16119",
  },
  {
    id: 5,
    name: "Curug Bidadari",
    category: "Destinasi",
    catDisplay: "Destinasi Alam",
    rating: "3.6",
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
    catDisplay: "Info Terkini",
    rating: "4.0",
    loc: "Cisarua",
    desc: "Info terbaru sistem satu arah dan ganjil genap jalur Puncak setiap akhir pekan dan hari libur nasional.",
    img: "https://i.ibb.co.com/rKhq4KH3/Screenshot-2026-05-26-083653.png",
    maps: "https://maps.app.goo.gl/SivNR4GpboVFoojc9",
    alamat: "Puncak Pass, Cisarua, Kabupaten Bogor",
    link: "https://auto2000.co.id/berita-dan-tips/jadwal-buka-tutup-puncak",
    tanggal: "18 Ags 2025",
  },
  {
    id: 7,
    name: "Istana Bogor",
    category: "Destinasi",
    catDisplay: "Destinasi Sejarah",
    rating: "4.5",
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
    catDisplay: "Rekreasi Keluarga",
    rating: "4.7",
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
    catDisplay: "Landmark Kota",
    rating: "4.7",
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
    catDisplay: "Kuliner Legendaris",
    rating: "4.6",
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
    catDisplay: "Oleh-oleh Khas",
    rating: "4.6",
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
    catDisplay: "Oleh-oleh Khas",
    rating: "4.9",
    loc: "Bogor Tengah",
    desc: "Kue lapis dengan tekstur lembut dan rasa yang khas, menjadi salah satu oleh-oleh wajib saat berkunjung ke Bogor.",
    img: "https://i.pinimg.com/736x/4c/a0/15/4ca015bf4f6ecc98f6370d85a2ac2d08.jpg",
    maps: "https://maps.app.goo.gl/SH2za48hUCTEzn7cA",
    alamat:
      "Jl. Raya Pajajaran No.77B, RT.04/RW.05, Tegallega, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16142",
  },
  {
    id: 13,
    name: "cimory Riverside",
    category: "Destinasi",
    catDisplay: "Rekreasi Keluarga",
    rating: "4.6",
    loc: "Cisarua",
    desc: "Taman rekreasi keluarga dengan pemandangan alam yang indah dan berbagai fasilitas untuk menikmati waktu bersama keluarga.",
    img: "https://i1-c.pinimg.com/1200x/d8/43/76/d843760fa89644e0141cb9ce6c5f6a01.jpg",
    maps: "https://maps.app.goo.gl/ixkgWFiZPyhCwXb16",
    alamat:
      "Jl. Raya Puncak - Gadog KM.77 No.435, Leuwimalang, Kec. Cisarua, Kabupaten Bogor, Jawa Barat 16770",
  },
  {
    id: 14,
    name: "Cungkring Pak Jum'at",
    category: "Kuliner",
    catDisplay: "Kuliner Legendaris",
    rating: "4.1",
    loc: "Suryakencana",
    desc: "Cungkring legendaris dengan kuah kaldu yang kaya rasa, berisi kikil, paru, dan jeroan sapi lainnya. Sudah ada sejak puluhan tahun lalu.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHMdkPLG4Mee9TBHSvbzhi4fR4M7XHVK9sxVsbglaOXitoj-nSXcKX5lFn-H4413iZ8ZKwAmtMqlZRI1pQacm0_h06tj8iYiNldoKfTOQev6kuXnNFsfjlsS_zJ3KQCsQf74Ig467PeIyc=s1360-w1360-h1020-rw",
    maps: "https://maps.app.goo.gl/WTknKcE2Wh11vrg4A",
    alamat:
      "Jl. Suryakencana No.285, RT.04/RW.02, Babakan Ps., Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16123",
  },
  {
    id: 15,
    name: "Museum Zoologi Bogor",
    category: "Destinasi",
    catDisplay: "Destinasi Sejarah",
    rating: "4.5",
    loc: "Kota Bogor",
    desc: "Museum Zoologi Bogor Museum yang menyimpan ribuan koleksi spesimen hewan, fosil, dan kerangka satwa dari berbagai daerah di Indonesia. Didirikan pada tahun 1894 oleh J.C. Koningsberger dan menjadi salah satu museum zoologi terbesar serta terlengkap di Asia Tenggara.⭐ Daya tarik: Kerangka paus raksasa dan koleksi satwa yang lengkap.",
    img: "https://asset.kompas.com/crops/JghSYnzXqYUtyLM7LpHqWK7pQIw=/0x119:1600x1185/750x500/data/photo/2023/02/19/63f1cb459a925.jpeg",
    maps: "https://maps.app.goo.gl/udG3dsUaF926VKBD6",
    alamat:
      "Jl. Ir. H. Juanda No.9, RT.04/RW.02, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122",
  },
  {
    id: 16,
    name: "Goa Agung Garunggang",
    category: "Destinasi",
    catDisplay: "Destinasi Alam",
    rating: "4.6",
    loc: "Karang Tengah",
    desc: "Goa Agung Garunggang merupakan salah satu hidden gem di Bogor yang belum terlalu ramai wisatawan. Tempat ini terkenal dengan tebing batu alami, lorong goa yang estetik, dan suasana alam yang masih asri. Banyak pengunjung datang untuk berfoto, trekking ringan, dan menikmati suasana tenang jauh dari keramaian kota. Lokasinya berada di daerah Sentul sehingga cocok untuk healing atau short trip bareng teman dan keluarga",
    img: "https://i.ibb.co.com/vCF49R6b/Whats-App-Image-2026-05-26-at-11-20-15.jpg",
    maps: "https://maps.app.goo.gl/tYDgb7wYTtMJ7K9PA",
    alamat:
      "Jl. Ptp Terusan, Karang Tengah, Kec. Babakan Madang, Kabupaten Bogor, Jawa Barat 16810",
  },
  {
    id: 17,
    name: "Museum Nasional Sejarah Alam Indonesia",
    category: "Destinasi",
    catDisplay: "Destinasi Sejarah",
    rating: "4.6",
    loc: "Bogor Tengah",
    desc: "Museum modern dan edukatif yang menyajikan sejarah alami nusantara serta keterkaitan budaya masyarakat Indonesia dalam memanfaatkan keanekaragaman hayati dan tanaman (etnobotani).",
    img: "https://www.tempatwisata.pro/users_media/3219/Harga%20Tiket%20Masuk_5.jpg",
    maps: "https://maps.app.goo.gl/7VoyAQUcdv5Um1Ja9",
    alamat:
      "Pusat Penelitian Biologi – LIPI, Jl. Ir. H. Juanda No.22 - 24, RT.02/RW.08, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122",
  },
  {
    id: 18,
    name: "JungleLand Adventure Theme Park",
    category: "Destinasi",
    catDisplay: "Rekreasi Keluarga",
    rating: "4.4",
    loc: "Karang Tengah",
    desc: "Taman bermain adventure yang menawarkan berbagai wahana dan aktivitas seru untuk keluarga.",
    img: "https://i.pinimg.com/736x/ee/a6/cf/eea6cf6af8e4ac3d4438addb35ff0805.jpg",
    maps: "https://maps.app.goo.gl/Rcrad35TASXUcj559",
    alamat:
      "Kawasan Sentul Nirwana, Jl. Jungle Land No.1, Karang Tengah, Kec. Babakan Madang, Kabupaten Bogor, Jawa Barat 16810",
  },
  {
    id: 19,
    name: "Asinan Bogor",
    category: "Kuliner",
    catDisplay: "Kuliner Legendaris",
    rating: "4.5",
    loc: "sukasari",
    desc: "Makanan khas Bogor yang terbuat dari berbagai macam buah atau sayuran segar yang disiram kuah cuka pedas manis. Rasanya yang segar dan unik menjadikan asinan sebagai oleh-oleh favorit dari Kota Bogor. ",
    img: "https://www.dapurkobe.co.id/wp-content/uploads/asinan-bogor.jpg",
    maps: "https://maps.app.goo.gl/ruqSyjekvtS8TVoEA",
    alamat:
      "Jl. Siliwangi No.27C, RT.02/RW.02, Sukasari, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16142",
  },
  {
    id: 20,
    name: "Soto Bogor Pa' Salam",
    category: "Kuliner",
    catDisplay: "Kuliner Legendaris",
    rating: "4.6",
    loc: "Sukasari",
    desc: "Soto Bogor Pa’ Salam termasuk salah satu kuliner legendaris sekaligus hidden gem di Bogor yang sering direkomendasikan warga lokal. Tempatnya sederhana, tetapi rasa kuah sotonya gurih dan khas dengan campuran daging, risol bihun, serta sambal yang bikin nagih. Lokasinya tidak terlalu mencolok sehingga banyak wisatawan belum mengetahui tempat ini. Cocok untuk kamu yang ingin mencoba suasana kuliner Bogor yang lebih autentik dan tidak terlalu ramai",
    img: "https://i.ibb.co.com/W4c1Tp09/Whats-App-Image-2026-05-26-at-11-21-52.jpg",
    maps: "https://maps.app.goo.gl/gu1BiaKsYP7bgo7n8",
    alamat:
      "Jalan Siliwangi No.298 Sukasari Bogor Tengah, RT.01/RW.07, Sukasari, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16131",
  },
  {
    id: 21,
    name: "Asinan Jagung Bakar Pak Sabur",
    category: "Kuliner",
    catDisplay: "Kuliner Legendaris",
    rating: "3.7",
    loc: "Suryakencana",
    desc: " Kuliner legendaris sejak 1968 yang menyajikan keunikan jagung manis bakar pipil disiram kuah cuka cabai yang asam pedas segar, lengkap dengan kerupuk mi kuning.",
    img: "https://lh5.googleusercontent.com/proxy/pzC6yC7BFRdMCEXBAyFxdYi_0kGcUOJn6tWyNq0AKaiOeLWasWMOwNZjWdEHr8yj6rgUbDwnHad8h0wS17VNff4AMArTDOsZnB0kezHycTsiLebBiyV1so6tMjOXWx3J8s6f6mxl98fnZI4OMH3G6Oq5SYBVl_WEb_OIVaAlvnD8SBaKcp45IJaRAes",
    maps: "https://maps.app.goo.gl/hGbSngqH3LTyRYUP9",
    alamat:
      "Jl. Suryakencana No.289, RT.04/RW.02, Babakan Ps., Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16123",
  },
  {
    id: 22,
    name: "kluwih sunda authentic",
    category: "Kuliner",
    catDisplay: "Kuliner Legendaris",
    rating: "4.4",
    loc: "baranangsiang",
    desc: " Restoran santai yang menyajikan hidangan tradisional khas Sunda dengan ruang terang dan teras, sangat cocok untuk makan tengah atau botram.",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/da/48/a6/kluwih-sunda-authentic.jpg?w=1400&h=800&s=1",
    maps: "https://maps.google.com/?cid=11965950319380810554",
    alamat:
      "Jl. Bina Marga No.12, RT.04/RW.11, Baranangsiang, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16143",
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
  const btn = document.getElementById("hamburgerBtn");
  const isOpen = sidebar.classList.contains("open");
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
  const btn = document.getElementById("hamburgerBtn");
  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
  if (btn) btn.classList.remove("open");
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
    const displayRating = item.rating ? item.rating : "4.5";
    const displayCat = item.catDisplay ? item.catDisplay : item.category;

    const showRating = item.category !== "Event" && item.category !== "Berita";
    const ratingHtml = showRating
      ? `<span class="tag-rating"><svg width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${displayRating}</span>`
      : "";

    const card = `
      <div class="card" onclick="openDetail(${item.id})">
        <div class="card-img-wrapper">
          <img src="${item.img}" alt="${item.name}" class="card-img" onerror="this.onerror=null; this.src='https://placehold.co/600x400/e2e8f0/64748b?text=Gambar+Tidak+Tersedia';">
          <div class="card-tags">
            <span class="${tagClass}">${displayCat}</span>
            ${ratingHtml}
          </div>
        </div>
        <div class="card-info">
          <h2>${item.name}</h2>
          <span class="card-loc"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> ${item.loc}</span>
          <p>${item.desc.substring(0, 85)}...</p>
          <div class="card-footer">
            <span class="btn-detail-text">Lihat Detail &rarr;</span>
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
        <img src="${item.img}" alt="${item.name}" class="modal-img" onerror="this.onerror=null; this.src='https://placehold.co/600x400/e2e8f0/64748b?text=Gambar+Tidak+Tersedia';">
        <div class="modal-tag modal-tag-${item.category.toLowerCase()}">${item.category}</div>
      </div>
      <div class="modal-body">
        ${
          item.category === "Berita" && item.tanggal
            ? `<div class="modal-date"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg> Dipublikasikan: ${item.tanggal}</div>`
            : ""
        }
        <h2 class="modal-title">${item.name}</h2>
        <div class="modal-location">
          <span class="modal-loc-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
          <div>
            <strong>${item.loc}</strong>
            <p>${item.alamat}</p>
          </div>
        </div>
        <p class="modal-desc">${item.desc}</p>
        ${
          item.category === "Berita"
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

  const catLabel =
    currentCategory === "Semua" ? "Semua Kategori" : currentCategory;
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
