/**
 * Portfolio Siswa SMK - main.js
 * File untuk menangani seluruh fungsionalitas interaktif pada portfolio
 */

// ===== DATA PROYEK & SERTIFIKAT =====
// Data proyek dalam bentuk array of objects
const projects = [
    {
        id: 1,
        nama: "Website E-Commerce Difia",
        deskripsi: "Aplikasi e-commerce untuk menjual produk tas UMKM dengan fitur keranjang belanja dan pembayaran online yang mudah dipahami pengguna.",
        teknologi: ["Vue JS", "Firebase"],
        kategori: "web",
        gambar: "./assets/1.png",
        link: "difia.kuadratdev.com"
    },
    {
        id: 2,
        nama: "Sistem Informasi Perpustakaan",
        deskripsi: "Sistem perpustakaan digital yang memudahkan pengelolaan peminjaman buku, denda, dan inventaris koleksi perpustakaan.",
        teknologi: ["PHP", "MySQL", "Bootstrap", "jQuery"],
        kategori: "web",
        gambar: "/api/placeholder/640/480",
        link: "#"
    },
    {
        id: 3,
        nama: "Aplikasi Presensi Berbasis QR",
        deskripsi: "Aplikasi mobile untuk mencatat kehadiran siswa dengan memindai kode QR yang digenerate secara dinamis.",
        teknologi: ["Java", "Android Studio", "Firebase", "QR API"],
        kategori: "mobile",
        gambar: "/api/placeholder/640/480",
        link: "#"
    },
    {
        id: 4,
        nama: "Permainan Edukasi Matematika",
        deskripsi: "Game edukasi untuk membantu siswa SD belajar matematika dasar dengan cara yang menyenangkan.",
        teknologi: ["Unity", "C#", "Adobe Illustrator"],
        kategori: "desktop",
        gambar: "/api/placeholder/640/480",
        link: "#"
    },
    {
        id: 5,
        nama: "Website Portfolio Personal",
        deskripsi: "Website portfolio responsive untuk menampilkan karya dan keterampilan pribadi.",
        teknologi: ["HTML", "Tailwind CSS", "JavaScript"],
        kategori: "web",
        gambar: "/api/placeholder/640/480",
        link: "#"
    },
    {
        id: 6,
        nama: "Aplikasi Pengelola Tugas",
        deskripsi: "Aplikasi desktop untuk mengelola jadwal dan tugas-tugas penting dengan notifikasi.",
        teknologi: ["JavaFX", "SQLite"],
        kategori: "desktop",
        gambar: "/api/placeholder/640/480",
        link: "#"
    }
];

// Data sertifikat dalam bentuk array of objects
const certificates = [
    {
        id: 1,
        nama: "Sertifikasi Junior Web Developer",
        penerbit: "Badan Nasional Sertifikasi Profesi (BNSP)",
        tahun: "2024",
        gambar: "/api/placeholder/320/180",
        deskripsi: "Sertifikasi kompetensi profesi untuk junior web developer yang diakui secara nasional."
    },
    {
        id: 2,
        nama: "Front-End Web Development",
        penerbit: "Dicoding Indonesia",
        tahun: "2023",
        gambar: "/api/placeholder/320/180",
        deskripsi: "Kursus pengembangan web front-end dengan fokus pada HTML, CSS, dan JavaScript."
    },
    {
        id: 3,
        nama: "Database Design & Programming with MySQL",
        penerbit: "Oracle Academy",
        tahun: "2023",
        gambar: "/api/placeholder/320/180",
        deskripsi: "Pelatihan desain database dan pemrograman menggunakan MySQL."
    },
    {
        id: 4,
        nama: "UI/UX Design Fundamentals",
        penerbit: "Google Digital Garage",
        tahun: "2024",
        gambar: "/api/placeholder/320/180",
        deskripsi: "Kursus dasar-dasar desain antarmuka pengguna dan pengalaman pengguna."
    }
];

// ===== UTILITY FUNCTIONS =====

/**
 * Fungsi untuk memuat tampilan proyek sesuai filter
 * @param {string} filter - Kategori filter (all, web, mobile, desktop)
 */
function loadProjects(filter = 'all') {
    const projectsContainer = document.getElementById('projects-container');
    
    // Kosongkan container sebelum memuat proyek-proyek baru
    projectsContainer.innerHTML = '';
    
    // Filter proyek sesuai kategori
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.kategori === filter);
    
    // Tampilkan pesan jika tidak ada proyek untuk kategori tertentu
    if (filteredProjects.length === 0) {
        projectsContainer.innerHTML = `
            <div class="col-span-full text-center py-8">
                <p>Tidak ada proyek dengan kategori ini.</p>
            </div>
        `;
        return;
    }
    
    // Loop melalui proyek-proyek yang telah difilter
    filteredProjects.forEach(project => {
        // Buat elemen proyek
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card bg-neutral-DEFAULT dark:bg-neutral-dark overflow-hidden group relative';
        
        // Buat daftar teknologi
        const teknologiHTML = project.teknologi.map(tech => 
            `<span class="inline-block bg-primary text-neutral-light text-xs px-2 py-1 mr-1 mb-1">${tech}</span>`
        ).join('');
        
        // Isi konten proyek
        projectElement.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <img src="${project.gambar}" alt="${project.nama}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div class="p-4">
                <h3 class="font-display font-bold text-xl mb-2">${project.nama}</h3>
                <p class="text-sm mb-3">${project.deskripsi}</p>
                <div class="mb-3 flex flex-wrap">
                    ${teknologiHTML}
                </div>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="inline-block bg-primary hover:bg-primary-dark text-neutral-light px-4 py-2 text-sm font-medium transition-colors duration-300">
                    LIHAT DETAIL
                </a>
            </div>
        `;
        
        // Tambahkan elemen proyek ke container
        projectsContainer.appendChild(projectElement);
    });
}

/**
 * Fungsi untuk memuat sertifikat
 */
function loadCertificates() {
    const certificatesContainer = document.getElementById('certificates-container');
    
    // Kosongkan container sebelum memuat sertifikat-sertifikat
    certificatesContainer.innerHTML = '';
    
    // Loop untuk membuat elemen sertifikat
    certificates.forEach(certificate => {
        const certificateElement = document.createElement('div');
        certificateElement.className = 'certificate-card bg-neutral-DEFAULT dark:bg-neutral-dark overflow-hidden flex';
        
        certificateElement.innerHTML = `
            <div class="flex-shrink-0 w-1/3">
                <img src="${certificate.gambar}" alt="${certificate.nama}" class="w-full h-full object-cover">
            </div>
            <div class="p-4 flex-grow">
                <h3 class="font-display font-bold text-lg mb-1">${certificate.nama}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">${certificate.penerbit} | ${certificate.tahun}</p>
                <p class="text-sm mt-2">${certificate.deskripsi}</p>
                <a href="#" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 text-primary hover:text-primary-dark font-medium text-sm transition-colors duration-300">
                    LIHAT SERTIFIKAT
                </a>
            </div>
        `;
        
        certificatesContainer.appendChild(certificateElement);
    });
}

/**
 * Fungsi untuk mengatur mode gelap/terang
 */
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleCircle = document.getElementById('theme-toggle-circle');
    const htmlElement = document.documentElement;
    
    // Periksa preferensi tema yang tersimpan
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
    
    // Toggle tema saat tombol ditekan
    themeToggle.addEventListener('click', () => {
        const isDark = htmlElement.classList.toggle('dark');
        
        // Simpan preferensi tema ke localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

/**
 * Fungsi untuk mengatur navigasi mobile
 */
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Tutup menu mobile saat link diklik
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

/**
 * Fungsi untuk mengatur navigasi aktif berdasarkan scroll
 */
function setupNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Fungsi untuk mengubah link aktif berdasarkan posisi scroll
    const changeActiveLink = () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };
    
    // Update link aktif saat halaman di-scroll
    window.addEventListener('scroll', changeActiveLink);
    
    // Update link aktif saat halaman dimuat
    window.addEventListener('load', changeActiveLink);
    
    // Tambahkan smooth scroll untuk link navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Fungsi untuk mengatur indikator scroll pada navbar
 */
function setupScrollIndicator() {
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    window.addEventListener('scroll', () => {
        const windowScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (windowScroll / windowHeight) * 100;
        
        scrollIndicator.style.width = `${scrollPercentage}%`;
    });
}

/**
 * Fungsi untuk mengatur tombol kembali ke atas
 */
function setupBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('opacity-100', 'visible');
            backToTopButton.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopButton.classList.add('opacity-0', 'invisible');
            backToTopButton.classList.remove('opacity-100', 'visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Fungsi untuk mengatur filter proyek
 */
function setupProjectFilter() {
    const filterButtons = document.querySelectorAll('.project-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas active dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-primary', 'text-neutral-light'));
            filterButtons.forEach(btn => {
                if (!btn.classList.contains('active')) {
                    btn.classList.add('border-2', 'border-primary');
                }
            });
            
            // Tandai tombol yang diklik sebagai aktif
            button.classList.add('active', 'bg-primary', 'text-neutral-light');
            button.classList.remove('border-2', 'border-primary');
            
            // Muat proyek sesuai filter
            const filter = button.getAttribute('data-filter');
            loadProjects(filter);
        });
    });
}

/**
 * Fungsi untuk menangani form kontak
 */
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Dapatkan nilai dari form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validasi form sederhana
        if (!name || !email || !subject || !message) {
            alert('Silakan isi semua kolom formulir.');
            return;
        }
        
        // Simulasi pengiriman form (ganti dengan kode pengiriman form asli)
        alert(`Terima kasih ${name}! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.`);
        
        // Reset form
        contactForm.reset();
    });
}

/**
 * Fungsi untuk animasi loading
 * FIXED: Perbaikan untuk mengatasi loading overlay yang tidak hilang
 */
function setupLoadingScreen() {
    const loadingOverlay = document.getElementById('loading-overlay');

    // Pastikan overlay loading dapat dihapus meskipun event window.load tidak terpicu
    // dengan menambahkan timeout langsung
    setTimeout(() => {
        if (loadingOverlay) {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 300);
        }
    }, 1000);
    
    // Tetap gunakan event listener asli sebagai cadangan
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (loadingOverlay) {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 300);
            }
        }, 500); // Mengurangi waktu delay
    });
}

/**
 * Fungsi untuk animasi pada scroll
 */
function setupScrollAnimations() {
    // Tambahkan class untuk elemen yang akan dianimasi
    const animatedElements = document.querySelectorAll('section');
    
    const fadeInOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Jalankan saat halaman dimuat dan saat di-scroll
    window.addEventListener('load', fadeInOnScroll);
    window.addEventListener('scroll', fadeInOnScroll);
}

/**
 * Inisialisasi semua fungsi saat DOM telah dimuat
 */
document.addEventListener('DOMContentLoaded', () => {
    // Panggil setupLoadingScreen lebih dulu untuk mengatasi masalah loading
    setupLoadingScreen();
    
    // Setup tema
    setupThemeToggle();
    
    // Setup navigasi
    setupMobileMenu();
    setupNavigation();
    setupScrollIndicator();
    setupBackToTop();
    
    // Muat data dinamis
    loadProjects('all');
    loadCertificates();
    
    // Setup fungsionalitas tambahan
    setupProjectFilter();
    setupContactForm();
    setupScrollAnimations();
    
    // Tambahkan kelas CSS untuk tampilan aktif pada link navigasi beranda secara default
    document.querySelector('.nav-link[href="#hero"]').classList.add('active');
    
    // Tambahkan kelas CSS untuk tampilan aktif pada tombol filter "Semua" secara default
    document.querySelector('.project-filter[data-filter="all"]').classList.add('active');
});

/**
 * Tambahkan style inline untuk link aktif pada navigasi
 */
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .nav-link.active {
            background-color: var(--primary-color, #3A56D4);
            color: var(--neutral-light, #F8F9FA);
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease-in-out forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0.5;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
`);