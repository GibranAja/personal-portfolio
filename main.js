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
        gambar: "./assets/difia.png",
        link: "difia.kuadratdev.com"
    },
    {
        id: 2,
        nama: "Website E-Commerce Casing KostumCasing",
        deskripsi: "Website e-commerce untuk menjual casing handphone dengan fitur keranjang belanja dan pembayaran online yang mudah dipahami.",
        teknologi: ["Vue JS", "Firebase"],
        kategori: "web",
        gambar: "./assets/kostumcasing.png",
        link: "kostumcasing.kuadratdev.com"
    },
    {
        id: 3,
        nama: "News Admin Dashboard",
        deskripsi: "Adalah sebuah website admin untuk mengelola berita dengan fitur CRUD (Create, Read, Update, Delete) yang mudah digunakan. Serta fitur kelola seluruh konten konten yang akan ditampilkan.",
        teknologi: ["React JS", "MySQL", "Axios"],
        kategori: "web",
        gambar: "./assets/newsdashboard.png",
        link: "news-app.pplgsmkn1ciomas.my.id"
    },
    {
        id: 4,
        nama: "Website Blog Pribadi",
        deskripsi: "Website blog pribadi untuk berbagi artikel dan pengalaman dengan fitur kategori. Website ini sudah menggunakan dashboard admin tersendiri",
        teknologi: ["Vue JS", "Firebase", "Vuetify"],
        kategori: "web",
        gambar: "./assets/hnn.png",
        link: "hnn-newsportal.vercel.app"
    },
    {
        id: 5,
        nama: "Website Portfolio Personal",
        deskripsi: "Website portfolio responsive untuk menampilkan karya dan keterampilan pribadi.",
        teknologi: ["HTML", "Tailwind CSS", "JavaScript"],
        kategori: "web",
        gambar: "./assets/personal.png",
        link: "gibrancode.kuadratdev.com"
    },
    {
        id: 6,
        nama: "Aplikasi Portal Berita",
        deskripsi: "Aplikasi mobile untuk membaca berita dari berbagai sumber dengan fitur kategori. Aplikasi ini terintegrasi dengan API berita yang saya buat",
        teknologi: ["Kotlin", "XML", "Retrofit"],
        kategori: "mobile",
        gambar: "./assets/news-app.png",
        link: "github.com/GibranAja/NewsApps",
    },
    {
        id: 7,
        nama: "MOVI",
        deskripsi: "Merupakan aplikasi mobile untuk mencari film dan serial TV dengan fitur pencarian. Aplikasi ini terintegrasi dengan API TMDB dan dapat melihat trailer filmnya.",
        teknologi: ["Flutter", "Dart", "Riverpod"],
        kategori: "mobile",
        gambar: "./assets/movi.jpg",
        link: "github.com/GibranAja/fluttermovi",
    },
    {
        id: 8,
        nama: "POKEDEX",
        deskripsi: "Website Pokedex adalah aplikasi web yang memungkinkan pengguna untuk mencari informasi tentang Pokemon. Aplikasi ini menggunakan API PokeAPI untuk mendapatkan data Pokemon.",
        teknologi: ["Vue JS", "Vuetify", "Axios"],
        kategori: "web",
        gambar: "./assets/pokemon.png",
        link: "pokedex-iban.vercel.app",
    },
    {
        id: 9,
        nama: "RESTful API News Portal",
        deskripsi: "API backend untuk sistem portal berita dengan fitur authentication, CRUD artikel, dan Kategori Berita. API ini menggunakan JWT untuk keamanan dan MySQL sebagai database.",
        teknologi: ["Laravel", "MySQL", "JWT"],
        kategori: "api",
        gambar: "./assets/api.png",
        link: "https://news-api.pplgsmkn1ciomas.my.id/"
    },
    {
        id: 10,
        nama: "RESTful Api Order",
        deskripsi: "API backend untuk sistem order restoran dengan fitur authentication, CRUD product, CRUD Order dan Kelola Pengguna. API ini menggunakan MySQL sebagai database.",
        teknologi: ["Laravel", "MySQL"],
        kategori: "api",
        gambar: "./assets/api.png",
        link: "https://github.com/GibranAja/laravue"
    }
];

// Data sertifikat dalam bentuk array of objects
const certificates = [
    {
        id: 1,
        nama: "AWS Cloud Practitioner Essentials",
        penerbit: "Dicoding Indonesia",
        tahun: "2023",
        gambar: "./assets/pdf/AWS Cloud Practitioner Essentials.pdf", // Will use PDF thumbnail
        link: "./assets/pdf/AWS Cloud Practitioner Essentials.pdf",
        deskripsi: "Kursus fundamental tentang layanan cloud AWS dan arsitektur cloud."
    },
    {
        id: 2,
        nama: "Belajar Dasar Pemrograman Javascript",
        penerbit: "Dicoding Indonesia",
        tahun: "2023",
        gambar: "./assets/pdf/Belajar Dasar Pemrograman Javascript.pdf",
        link: "./assets/pdf/Belajar Dasar Pemrograman Javascript.pdf",
        deskripsi: "Pelatihan dasar-dasar bahasa pemrograman JavaScript untuk pengembangan web."
    },
    {
        id: 3,
        nama: "CSS Magician Series 2024",
        penerbit: "Alkamedia",
        tahun: "2024",
        gambar: "./assets/pdf/Certificate CSS Magician Series 2024 Muhamad Gibran Ar_Raffi.pdf",
        link: "./assets/pdf/Certificate CSS Magician Series 2024 Muhamad Gibran Ar_Raffi.pdf",
        deskripsi: "Sertifikat pelatihan teknik CSS tingkat lanjut untuk desain web modern."
    },
    {
        id: 4,
        nama: "Front End - CSS Pre Processor",
        penerbit: "Dicoding Indonesia",
        tahun: "2023",
        gambar: "./assets/pdf/Front End - CSS Pre Processor.pdf",
        link: "./assets/pdf/Front End - CSS Pre Processor.pdf",
        deskripsi: "Pelatihan penggunaan CSS preprocessor seperti SASS dan LESS untuk pengembangan web."
    },
    {
        id: 5,
        nama: "Game Jam - January 2024",
        penerbit: "CIB",
        tahun: "2024",
        gambar: "./assets/pdf/Game Jam - January 2024.pdf",
        link: "./assets/pdf/Game Jam - January 2024.pdf",
        deskripsi: "Sertifikat partisipasi dalam Game Jam, kompetisi pembuatan game dalam waktu terbatas."
    },
    {
        id: 6,
        nama: "Level Up Aplikasi Android dengan Machine Learning",
        penerbit: "Dicoding Indonesia",
        tahun: "2024",
        gambar: "./assets/pdf/Level Up Aplikasi Android-mu Dengan Sentuhan Machine Learning.pdf",
        link: "./assets/pdf/Level Up Aplikasi Android-mu Dengan Sentuhan Machine Learning.pdf",
        deskripsi: "Sertifikasi integrasi machine learning dalam aplikasi Android."
    },
    {
        id: 7,
        nama: "Logika Pemrograman",
        penerbit: "Coding Academy",
        tahun: "2023",
        gambar: "./assets/pdf/Logika Pemrograman.pdf",
        link: "./assets/pdf/Logika Pemrograman.pdf",
        deskripsi: "Sertifikat penguasaan dasar-dasar logika pemrograman dan algoritma."
    },
    {
        id: 8,
        nama: "Memulai Pemrograman dengan Python",
        penerbit: "Dicoding Indonesia",
        tahun: "2024",
        gambar: "./assets/pdf/Memulai Pemrograman dengan Python.pdf",
        link: "./assets/pdf/Memulai Pemrograman dengan Python.pdf",
        deskripsi: "Sertifikat pemrograman menggunakan bahasa Python ."
    },
    {
        id: 9,
        nama: "Menyala Firebase! Update On The Air Model On-Model dengan Firebase ML",
        penerbit: "Dicoding Indonesia",
        tahun: "2024",
        gambar: "./assets/pdf/Menyala Firebase! Update On The Air Model On-Model dengan Firabase ML.pdf",
        link: "./assets/pdf/Menyala Firebase! Update On The Air Model On-Model dengan Firabase ML.pdf",
        deskripsi: "Sertifikat pembelajaran Firebase untuk Android yang akan diintegrasikan menggunakan penerapan Machine Learning."
    },
    {
        id: 10,
        nama: "Pengembang Software",
        penerbit: "Dicoding Indonesia",
        tahun: "2023",
        gambar: "./assets/pdf/Pengembang Software.pdf",
        link: "./assets/pdf/Pengembang Software.pdf",
        deskripsi: "Sertifikat pembelajaran untuk menjadi Pengembang Software pemula."
    },
    {
        id: 11,
        nama: "Sertifikat Kominfo",
        penerbit: "Kominfo",
        tahun: "2024",
        gambar: "./assets/pdf/Sertifikat Kominfo.pdf",
        link: "./assets/pdf/Sertifikat Kominfo.pdf",
        deskripsi: "Sertifikat literasi digital yang diterbitkan oleh Kominfo untuk siswa yang ikut berpartisipasi."
    },
    {
        id: 12,
        nama: "Visualisasi Data",
        penerbit: "Dicoding Indonesia",
        tahun: "2023",
        gambar: "./assets/pdf/Visualisasi Data.pdf",
        link: "./assets/pdf/Visualisasi Data.pdf",
        deskripsi: "Sertifikat pembelajaran visualisasi data dan mengenali apa saja jenis jenis data yang dapat divisualisasikan"
    }
];

// ===== UTILITY FUNCTIONS =====

/**
 * Helper function to ensure URLs have http/https prefix
 * @param {string} url - URL to format
 * @returns {string} Properly formatted URL
 */
function formatUrl(url) {
    // Skip formatting for anchor links
    if (url === '#') return url;
    
    // Check if the URL already starts with http:// or https://
    if (url.startsWith('http://') || url.startsWith('https://')) {
        return url;
    }
    
    // Otherwise, add https:// prefix
    return 'https://' + url;
}

/**
 * Fungsi untuk memuat tampilan proyek sesuai filter
 * @param {string} filter - Kategori filter (all, web, mobile, desktop)
 * @param {number} limit - Batas jumlah proyek yang ditampilkan (null untuk semua)
 */
function loadProjects(filter = 'all', limit = 6) {
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
    
    // Tentukan proyek yang akan ditampilkan (semua atau sebagian)
    const projectsToShow = limit ? filteredProjects.slice(0, limit) : filteredProjects;
    
    // Loop melalui proyek-proyek yang telah difilter
    projectsToShow.forEach(project => {
        // Buat elemen proyek
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card bg-neutral-DEFAULT dark:bg-neutral-dark overflow-hidden group relative';
        
        // Buat daftar teknologi
        const teknologiHTML = project.teknologi.map(tech => 
            `<span class="inline-block bg-primary text-neutral-light text-xs px-2 py-1 mr-1 mb-1">${tech}</span>`
        ).join('');
        
        // Format URL with http prefix
        const formattedUrl = formatUrl(project.link);
        
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
                <a href="${formattedUrl}" target="_blank" rel="noopener noreferrer" class="inline-block bg-primary hover:bg-primary-dark text-neutral-light px-4 py-2 text-sm font-medium transition-colors duration-300">
                    LIHAT DETAIL
                </a>
            </div>
        `;
        
        // Tambahkan elemen proyek ke container
        projectsContainer.appendChild(projectElement);
    });
    
    // Tambahkan tombol "Tampilkan lebih banyak" jika jumlah proyek melebihi limit
    if (filteredProjects.length > 6) {
        const showMoreContainer = document.createElement('div');
        showMoreContainer.className = 'col-span-full flex justify-center mt-8';
        
        const showMoreButton = document.createElement('button');
        showMoreButton.id = 'show-more-button';
        showMoreButton.className = 'border-2 border-primary hover:text-primary dark:text-neutral-light px-6 py-2 text-center font-medium transition-colors duration-300';
        
        // Set teks tombol berdasarkan status
        showMoreButton.textContent = limit ? 'Tampilkan lebih banyak' : 'Tampilkan lebih sedikit';
        
        showMoreButton.addEventListener('click', () => {
            // Toggle antara menampilkan semua proyek atau hanya 6
            loadProjects(filter, limit ? null : 6);
        });
        
        showMoreContainer.appendChild(showMoreButton);
        projectsContainer.appendChild(showMoreContainer);
    }
}

/**
 * Fungsi untuk memuat sertifikat
 * @param {number} limit - Batas jumlah sertifikat yang ditampilkan (null untuk semua)
 */
function loadCertificates(limit = 4) {
    const certificatesContainer = document.getElementById('certificates-container');
    
    // Kosongkan container sebelum memuat sertifikat-sertifikat
    certificatesContainer.innerHTML = '';
    
    // Tentukan sertifikat yang akan ditampilkan (semua atau sebagian)
    const certificatesToShow = limit ? certificates.slice(0, limit) : certificates;
    
    // Loop untuk membuat elemen sertifikat
    certificatesToShow.forEach(certificate => {
        const certificateElement = document.createElement('div');
        certificateElement.className = 'certificate-card bg-neutral-DEFAULT dark:bg-neutral-dark overflow-hidden flex';
        
        // Format URL
        const formattedUrl = formatUrl(certificate.link);
        
        certificateElement.innerHTML = `
            <div class="flex-shrink-0 w-1/3 bg-gray-200 dark:bg-gray-700 relative">
                <div class="pdf-thumbnail h-full w-full" data-pdf="${certificate.gambar}">
                    <div class="flex items-center justify-center h-full text-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="p-4 flex-grow">
                <h3 class="font-display font-bold text-lg mb-1">${certificate.nama}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">${certificate.penerbit} | ${certificate.tahun}</p>
                <p class="text-sm mt-2">${certificate.deskripsi}</p>
                <a href="${certificate.link}" target="_blank" rel="noopener noreferrer" class="inline-block mt-2 text-primary hover:text-primary-dark font-medium text-sm transition-colors duration-300">
                    LIHAT SERTIFIKAT
                </a>
            </div>
        `;
        
        certificatesContainer.appendChild(certificateElement);
    });
    
    // Add "Show more" / "Show less" button if certificates exceed the limit
    if (certificates.length > 4) {
        const showMoreContainer = document.createElement('div');
        showMoreContainer.className = 'col-span-full flex justify-center mt-8';
        
        const showMoreButton = document.createElement('button');
        showMoreButton.id = 'show-more-certificates';
        showMoreButton.className = 'border-2 border-primary hover:text-primary dark:text-neutral-light px-6 py-2 text-center font-medium transition-colors duration-300';
        
        // Set button text based on state
        showMoreButton.textContent = limit ? 'Tampilkan lebih banyak' : 'Tampilkan lebih sedikit';
        
        showMoreButton.addEventListener('click', () => {
            // Toggle between showing all certificates or just 4
            loadCertificates(limit ? null : 4);
        });
        
        showMoreContainer.appendChild(showMoreButton);
        certificatesContainer.appendChild(showMoreContainer);
    }
    
    // Generate PDF thumbnails (optional if browser supports)
    generatePDFThumbnails();
}

/**
 * Function to generate PDF thumbnails using PDF.js
 */
function generatePDFThumbnails() {
    // Check if PDF.js is loaded
    if (typeof pdfjsLib === 'undefined') {
        console.log('PDF.js not loaded yet, adding script...');
        // Add PDF.js script if not already loaded
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js';
        script.integrity = 'sha512-ml/QKfG3+eVh/FbSS3XB3B+Rw7xvHQ9eXj2fYGvfjpbmLJN1AvEQlT/05qMvFCjQQEMP/G/xMPZmsOtYFLlSA==';
        script.crossOrigin = 'anonymous';
        script.referrerPolicy = 'no-referrer';
        
        script.onload = function() {
            console.log('PDF.js loaded successfully');
            // Initialize PDF.js worker
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
            
            // Wait a bit for worker to initialize before creating thumbnails
            setTimeout(createPDFThumbnails, 500);
        };
        
        document.head.appendChild(script);
        return;
    } else {
        console.log('PDF.js already loaded, creating thumbnails directly');
        createPDFThumbnails();
    }
}

/**
 * Create actual PDF thumbnails using PDF.js
 */
function createPDFThumbnails() {
    console.log('Starting to create PDF thumbnails');
    const thumbnailElements = document.querySelectorAll('.pdf-thumbnail');
    console.log(`Found ${thumbnailElements.length} thumbnail elements`);
    
    if (thumbnailElements.length === 0) {
        console.warn('No PDF thumbnail elements found in the DOM');
        return;
    }
    
    thumbnailElements.forEach(el => {
        const pdfPath = el.dataset.pdf;
        const container = el.querySelector('div');
        
        if (!container) {
            console.error('Container div not found in thumbnail element', el);
            return;
        }
        
        console.log(`Processing PDF: ${pdfPath}`);
        
        // Clear previous content
        container.innerHTML = '';
        
        // Create loading spinner
        const loadingSpinner = document.createElement('div');
        loadingSpinner.className = 'flex items-center justify-center h-full w-full';
        loadingSpinner.innerHTML = `
            <div class="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
        `;
        container.appendChild(loadingSpinner);
        
        // Load the PDF
        pdfjsLib.getDocument(pdfPath).promise
            .then(function(pdf) {
                console.log(`PDF loaded: ${pdfPath}, pages: ${pdf.numPages}`);
                // Get the first page
                return pdf.getPage(1);
            })
            .then(function(page) {
                console.log(`Page loaded for: ${pdfPath}`);
                // Remove loading spinner
                container.innerHTML = '';
                
                // Create a canvas for the PDF page
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                container.appendChild(canvas);
                
                // Set scale for the PDF viewport
                const viewport = page.getViewport({ scale: 0.5 });
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                
                // Render the PDF page on the canvas
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                
                return page.render(renderContext).promise.then(function() {
                    console.log(`Render complete for: ${pdfPath}`);
                    // Style the canvas
                    canvas.style.width = '100%';
                    canvas.style.height = '100%';
                    canvas.style.objectFit = 'contain';
                    
                    // Add filename as a caption
                    const filename = pdfPath.split('/').pop();
                    const caption = document.createElement('div');
                    caption.className = 'text-xs px-2 pb-1 text-center truncate absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white';
                    caption.textContent = filename;
                    el.appendChild(caption);
                });
            })
            .catch(function(error) {
                // Show error and fallback to icon if PDF can't be loaded
                console.error(`Error loading PDF ${pdfPath}:`, error);
                container.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full text-center p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span class="text-xs mt-2">Tidak dapat memuat PDF</span>
                    </div>
                `;
                
                // Add filename as a caption
                const filename = pdfPath.split('/').pop();
                const caption = document.createElement('div');
                caption.className = 'text-xs px-2 pb-1 text-center truncate absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white';
                caption.textContent = filename;
                el.appendChild(caption);
            });
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
            
            // Muat proyek sesuai filter (dengan limit default 6)
            const filter = button.getAttribute('data-filter');
            loadProjects(filter, 6);
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
    loadCertificates(4); // Initially show only 4 certificates
    
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