/* =========================================================
   X.3 SMAN 2 KARIMUN — DATA & INTERACTION
   Edit data di bagian ini agar mudah diperbarui.
   ========================================================= */

const students = [
  { name: "Hafidzul Furqan", age: 17, hobby: "Gaming & Badminton", quote: "Be better than yesterday.", image: "assets/images/student-01.png" },
  { name: "Aisyah Nur Rahma", age: 17, hobby: "Reading & Music", quote: "Keep growing, keep glowing.", image: "assets/images/student-02.svg" },
  { name: "Kirana Dewi", age: 17, hobby: "Writing & Photography", quote: "Small steps still move forward.", image: "assets/images/student-03.svg" },
  { name: "Joshua Tanuwijaya", age: 17, hobby: "Gaming & Sports", quote: "Enjoy the process.", image: "assets/images/student-04.svg" },
  { name: "Dinda Ayu Lestari", age: 17, hobby: "Cooking & Drawing", quote: "Make today count.", image: "assets/images/student-05.svg" },
  { name: "Nama Siswa 06", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-06.svg" },
  { name: "Nama Siswa 07", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-07.svg" },
  { name: "Nama Siswa 08", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-08.svg" },
  { name: "Nama Siswa 09", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-09.svg" },
  { name: "Nama Siswa 10", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-10.svg" },
  { name: "Nama Siswa 11", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-11.svg" },
  { name: "Nama Siswa 12", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-12.svg" },
  { name: "Nama Siswa 13", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-13.svg" },
  { name: "Nama Siswa 14", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-14.svg" },
  { name: "Nama Siswa 15", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-15.svg" },
  { name: "Nama Siswa 16", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-16.svg" },
  { name: "Nama Siswa 17", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-17.svg" },
  { name: "Nama Siswa 18", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-18.svg" },
  { name: "Nama Siswa 19", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-19.svg" },
  { name: "Nama Siswa 20", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-20.svg" },
  { name: "Nama Siswa 21", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-21.svg" },
  { name: "Nama Siswa 22", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-22.svg" },
  { name: "Nama Siswa 23", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-23.svg" },
  { name: "Nama Siswa 24", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-24.svg" },
  { name: "Nama Siswa 25", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-25.svg" },
  { name: "Nama Siswa 26", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-26.svg" },
  { name: "Nama Siswa 27", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-27.svg" },
  { name: "Nama Siswa 28", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-28.svg" },
  { name: "Nama Siswa 29", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-29.svg" },
  { name: "Nama Siswa 30", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-30.svg" },
  { name: "Nama Siswa 31", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-31.svg" },
  { name: "Nama Siswa 32", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-32.svg" },
  { name: "Nama Siswa 33", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-33.svg" },
  { name: "Nama Siswa 34", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-34.svg" },
  { name: "Nama Siswa 35", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-35.svg" },
  { name: "Nama Siswa 36", age: 17, hobby: "Hobby dapat diedit", quote: "Quote dapat diedit.", image: "assets/images/student-36.svg" }
];

const structure = [
  ["Ketua Kelas", "Hafidzul Furqan"],
  ["Wakil Ketua Kelas", "Aisyah Nur Rahma"],
  ["Sekretaris 1", "Kirana Dewi"],
  ["Sekretaris 2", "Joshua Tanuwijaya"],
  ["Bendahara", "Dinda Ayu Lestari"]
];

const schedule = {
  Senin: [
    ["07:00–08:30", "Matematika", "Guru Mata Pelajaran"],
    ["08:30–10:00", "Bahasa Indonesia", "Guru Mata Pelajaran"],
    ["10:15–11:45", "Biologi", "Guru Mata Pelajaran"],
    ["11:45–13:15", "Pendidikan Agama", "Guru Mata Pelajaran"]
  ],
  Selasa: [
    ["07:00–08:30", "Bahasa Inggris", "Guru Mata Pelajaran"],
    ["08:30–10:00", "Fisika", "Guru Mata Pelajaran"],
    ["10:15–11:45", "Sejarah", "Guru Mata Pelajaran"],
    ["11:45–13:15", "Informatika", "Guru Mata Pelajaran"]
  ],
  Rabu: [
    ["07:00–08:30", "Kimia", "Guru Mata Pelajaran"],
    ["08:30–10:00", "Matematika", "Guru Mata Pelajaran"],
    ["10:15–11:45", "Bahasa Indonesia", "Guru Mata Pelajaran"],
    ["11:45–13:15", "PJOK", "Guru Mata Pelajaran"]
  ],
  Kamis: [
    ["07:00–08:30", "Pendidikan Pancasila", "Guru Mata Pelajaran"],
    ["08:30–10:00", "Bahasa Inggris", "Guru Mata Pelajaran"],
    ["10:15–11:45", "Ekonomi", "Guru Mata Pelajaran"],
    ["11:45–13:15", "Seni Budaya", "Guru Mata Pelajaran"]
  ],
  Jumat: [
    ["07:00–08:00", "Projek / Literasi", "Guru Mata Pelajaran"],
    ["08:00–09:30", "Geografi", "Guru Mata Pelajaran"],
    ["09:45–11:15", "Sosiologi", "Guru Mata Pelajaran"],
    ["11:15–12:00", "Kegiatan Kelas", "Wali Kelas"]
  ]
};

const duties = {
  Senin: ["Hafidzul Furqan", "Aisyah Nur Rahma", "Nama Siswa 06", "Nama Siswa 07"],
  Selasa: ["Kirana Dewi", "Joshua Tanuwijaya", "Nama Siswa 08", "Nama Siswa 09"],
  Rabu: ["Dinda Ayu Lestari", "Nama Siswa 10", "Nama Siswa 11", "Nama Siswa 12"],
  Kamis: ["Nama Siswa 13", "Nama Siswa 14", "Nama Siswa 15", "Nama Siswa 16"],
  Jumat: ["Nama Siswa 17", "Nama Siswa 18", "Nama Siswa 19", "Nama Siswa 20"]
};

const gallery = [
  { title: "Class Memory 01", image: "assets/images/moment-01.png" },
  { title: "Class Memory 02", image: "assets/images/moment-02.svg" },
  { title: "Class Memory 03", image: "assets/images/moment-03.svg" },
  { title: "Class Memory 04", image: "assets/images/moment-04.svg" },
  { title: "Class Memory 05", image: "assets/images/moment-05.svg" },
  { title: "Class Memory 06", image: "assets/images/moment-06.svg" },
  { title: "Class Memory 07", image: "assets/images/moment-07.svg" },
  { title: "Class Memory 08", image: "assets/images/moment-08.svg" }
];

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

/* Structure */
$("#structureGrid").innerHTML = structure.map(([role, person]) => `
  <article class="structure-card reveal">
    <p class="role">${escapeHTML(role)}</p>
    <div class="person">${escapeHTML(person)}</div>
    <div class="rule"></div>
  </article>
`).join("");

/* Student cards */
function studentCard(student) {
  return `
    <article class="student-card">
      <img class="student-photo" src="${student.image}" alt="${escapeHTML(student.name)}" loading="lazy">
      <div class="student-info">
        <h3>${escapeHTML(student.name)}</h3>
        <div class="student-meta">Umur: ${escapeHTML(student.age)} tahun<br>Hobby: ${escapeHTML(student.hobby)}</div>
        <p class="student-quote">"${escapeHTML(student.quote)}"</p>
      </div>
    </article>
  `;
}

let highlightPage = 0;
const highlightPageSize = 4;

function renderHighlight(animate = false) {
  const box = $("#studentHighlight");
  if (animate) box.classList.add("is-changing");
  window.setTimeout(() => {
    const start = (highlightPage * highlightPageSize) % students.length;
    const selected = Array.from({length: highlightPageSize}, (_, i) => students[(start + i) % students.length]);
    box.innerHTML = selected.map(studentCard).join("");
    $("#studentHighlightDots").innerHTML = Array.from(
      { length: Math.ceil(students.length / highlightPageSize) },
      (_, i) => `<button class="dot ${i === highlightPage ? "active" : ""}" data-highlight="${i}" aria-label="Kelompok siswa ${i + 1}"></button>`
    ).join("");
    box.classList.remove("is-changing");
  }, animate ? 260 : 0);
}

$("#studentHighlightDots").addEventListener("click", e => {
  const button = e.target.closest("[data-highlight]");
  if (!button) return;
  highlightPage = Number(button.dataset.highlight);
  renderHighlight(true);
});

$("#studentHighlight").addEventListener("click", () => {});
renderHighlight();

const highlightTimer = window.setInterval(() => {
  highlightPage = (highlightPage + 1) % Math.ceil(students.length / highlightPageSize);
  renderHighlight(true);
}, 5000);

/* All students modal */
$("#allStudentsGrid").innerHTML = students.map(studentCard).join("");

/* Tabs — exactly one active tab */
function createTabs(container, onSelect, prefix) {
  container.innerHTML = days.map((day, index) => `
    <button class="tab ${index === 0 ? "active" : ""}" role="tab"
      aria-selected="${index === 0 ? "true" : "false"}"
      data-day="${day}" id="${prefix}-${day}">
      ${day.toUpperCase()}
    </button>
  `).join("");

  container.addEventListener("click", e => {
    const clickedTab = e.target.closest(".tab");
    if (!clickedTab) return;

    $$(".tab", container).forEach(tab => {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    });

    clickedTab.classList.add("active");
    clickedTab.setAttribute("aria-selected", "true");
    onSelect(clickedTab.dataset.day);
  });
}

function renderSchedule(day) {
  $("#scheduleContent").innerHTML = schedule[day].map(([time, subject, teacher]) => `
    <article class="schedule-item">
      <div class="schedule-time">${escapeHTML(time)}</div>
      <div>
        <div class="schedule-subject">${escapeHTML(subject)}</div>
        <div class="schedule-teacher">${escapeHTML(teacher)}</div>
      </div>
    </article>
  `).join("");
}

function renderDuty(day) {
  $("#dutyContent").innerHTML = duties[day].map(name =>
    `<span class="duty-tag">${escapeHTML(name)}</span>`
  ).join("");
}

createTabs($("#scheduleTabs"), renderSchedule, "schedule");
createTabs($("#dutyTabs"), renderDuty, "duty");
renderSchedule("Senin");
renderDuty("Senin");

/* Gallery */
let galleryIndex = 0;
let galleryTimer;
const track = $("#carouselTrack");

track.innerHTML = gallery.map((item, i) => `
  <article class="carousel-slide">
    <img src="${item.image}" alt="${escapeHTML(item.title)}" ${i === 0 ? "" : 'loading="lazy"'}>
    <div class="carousel-caption">${escapeHTML(item.title)}</div>
  </article>
`).join("");

function renderGalleryDots() {
  $("#galleryDots").innerHTML = gallery.map((item, i) =>
    `<button class="dot ${i === galleryIndex ? "active" : ""}" data-gallery="${i}" aria-label="Foto ${i + 1}"></button>`
  ).join("");
}

function goToGallery(index) {
  galleryIndex = (index + gallery.length) % gallery.length;
  track.style.transform = `translate3d(-${galleryIndex * 100}%, 0, 0)`;
  renderGalleryDots();
}
function nextGallery() { goToGallery(galleryIndex + 1); }
function prevGallery() { goToGallery(galleryIndex - 1); }
function startGalleryAuto() {
  window.clearInterval(galleryTimer);
  galleryTimer = window.setInterval(nextGallery, 4500);
}
goToGallery(0);
startGalleryAuto();

$("#galleryNext").addEventListener("click", () => { nextGallery(); startGalleryAuto(); });
$("#galleryPrev").addEventListener("click", () => { prevGallery(); startGalleryAuto(); });
$("#galleryDots").addEventListener("click", e => {
  const dot = e.target.closest("[data-gallery]");
  if (!dot) return;
  goToGallery(Number(dot.dataset.gallery));
  startGalleryAuto();
});

/* Swipe */
let touchStartX = 0;
let touchStartY = 0;
track.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });
track.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
    dx < 0 ? nextGallery() : prevGallery();
    startGalleryAuto();
  }
}, { passive: true });

/* Full gallery */
$("#allGalleryGrid").innerHTML = gallery.map((item, i) => `
  <button class="gallery-item" data-lightbox="${i}" aria-label="Buka ${escapeHTML(item.title)}">
    <img src="${item.image}" alt="${escapeHTML(item.title)}" loading="lazy">
  </button>
`).join("");

/* Modal helpers */
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!$$(".modal.open").length && !$("#lightbox").classList.contains("open")) document.body.classList.remove("modal-open");
}

$("#openStudents").addEventListener("click", () => openModal("studentsModal"));
$("#openMoments").addEventListener("click", () => openModal("momentsModal"));

$$(".close-modal").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.dataset.close));
});

$$(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal(modal.id);
  });
});

/* Lightbox */
function openLightbox(index) {
  const item = gallery[index];
  $("#lightboxImage").src = item.image;
  $("#lightboxImage").alt = item.title;
  $("#lightboxCaption").textContent = item.title;
  $("#lightbox").classList.add("open");
  $("#lightbox").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeLightbox() {
  $("#lightbox").classList.remove("open");
  $("#lightbox").setAttribute("aria-hidden", "true");
  $("#lightboxImage").src = "";
  if (!$$(".modal.open").length) document.body.classList.remove("modal-open");
}
$("#allGalleryGrid").addEventListener("click", e => {
  const item = e.target.closest("[data-lightbox]");
  if (item) openLightbox(Number(item.dataset.lightbox));
});
$("#lightboxClose").addEventListener("click", closeLightbox);
$("#lightbox").addEventListener("click", e => {
  if (e.target === $("#lightbox")) closeLightbox();
});

/* Escape closes dialogs */
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if ($("#lightbox").classList.contains("open")) closeLightbox();
  $$(".modal.open").forEach(modal => closeModal(modal.id));
});

/* Mobile nav active state */
const mobileLinks = $$(".mobile-nav a");
const sections = ["home", "students", "moments", "schedule"].map(id => document.getElementById(id));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    mobileLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

sections.forEach(section => observer.observe(section));

/* Pause gallery when tab/window is hidden */
document.addEventListener("visibilitychange", () => {
  if (document.hidden) window.clearInterval(galleryTimer);
  else startGalleryAuto();
});


// Reference-inspired landing page menu
(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".desktop-nav");
  if (!header || !toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Buka menu");
    });
  });

  document.addEventListener("click", e => {
    if (!header.contains(e.target)) {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Buka menu");
    }
  });
})();
