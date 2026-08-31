/** Shared SEO metadata for build-time HTML shells and runtime document head. */

export const SITE_URL = 'https://oceanspace.co.id'
export const SITE_NAME = 'Ocean Space'
export const OG_IMAGE = `${SITE_URL}/images/og-image.png`
export const DEFAULT_OG_IMAGE_ALT = 'Ocean Space — ekosistem bisnis nasional'

const NAV_LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/distribusi', label: 'HP Distribusi' },
  { href: '/retail', label: 'Retail' },
  { href: '/sub-retail', label: 'Sub Retail' },
  { href: '/lifestyle', label: 'Lifestyle' },
  { href: '/career', label: 'Karier' },
  { href: '/contact', label: 'Kontak' },
  { href: '/privacy', label: 'Kebijakan Privasi' },
  { href: '/subprocessors', label: 'Sub-processor / DPA' },
]

/**
 * @typedef {object} PageSeo
 * @property {string} path
 * @property {string} title
 * @property {string} description
 * @property {string} h1
 * @property {string} body
 * @property {boolean} [noindex]
 * @property {string} [canonicalPath]
 */

const SHARED_CLOSING = `Ringkasan di tiap halaman menjelaskan peran unit, saluran komunikasi, serta prinsip kerja. Konten ini membantu crawler maupun pengunjung memahami struktur situs sebelum membuka formulir atau aset dinamis. Fokusnya tetap pada kejelasan operasional, bukan slogan kosong.

Buka Tentang bila ingin budaya kerja, Karier bila ingin bergabung, serta Kontak bagi Head Office beserta jaringan wilayah. Kebijakan Privasi bersama daftar Sub-processor / DPA uraikan pengelolaan data pribadi. Sitemap membantu navigasi mesin pencari. Tautan di navigasi utama memudahkan perpindahan antar unit bisnis. Brand atau mitra wilayah sebaiknya menyiapkan konteks kebutuhan agar respons tim korporat lebih tepat.

Dokumen publik ini disusun agar pembaca memperoleh konteks cukup sebelum mengambil keputusan kemitraan, lamaran, atau permintaan layanan. Ocean Space menjaga konsistensi pesan di seluruh kanal publik. Halaman unit bisnis, profil grup, hingga dokumen legal saling merujuk supaya pembaca menemukan langkah berikutnya tanpa tersesat. Bila informasi di situs berbeda dari kondisi lapangan, hubungi Head Office agar koreksi dapat ditindaklanjuti.`

/** @type {Record<string, PageSeo>} */
export const PAGE_SEO = {
  '/': {
    path: '/',
    title: 'Ocean Space | Bertumbuh dengan Integritas',
    description:
      'Ocean Space mengelola distribusi, retail, sub retail, dan lifestyle dengan tata kelola jelas serta budaya JUJUR di jaringan nasional.',
    h1: 'Ocean Space menjalankan empat unit bisnis dengan tata kelola dan eksekusi yang jelas.',
    body: `Ocean Space adalah grup perusahaan yang menaungi penyaluran perangkat, toko handphone dan aksesoris, jaringan sub retail teknologi rumah tangga, serta unit lifestyle. Empat lini ini beroperasi dengan satu standar operasi untuk kemitraan, ekspansi, dan keputusan sehari-hari di berbagai wilayah Indonesia.

Tim menumbuhkan jaringan melalui 16 titik aktif. Budaya JUJUR menjadi dasar setiap keputusan: terbuka kepada mitra, unggul dalam eksekusi lapangan, serta konsisten dalam tata kelola. Pendekatan ini menjaga kualitas layanan ketika skala operasional bertambah tanpa mengorbankan kejelasan peran antar unit.

Unit HP Distribusi berfokus menjadi penyalur yang dapat dipercaya brand dan mitra. Unit Retail menghadirkan pengalaman belanja perangkat dan aksesoris yang menekankan pelayanan. Unit Sub Retail memperkuat ekosistem ritel teknologi rumah tangga. Unit Lifestyle melengkapi layanan terpadu agar pelanggan mendapat pengalaman yang lebih utuh.

Struktur informasi di situs ini dibuat agar partner, kandidat, dan publik menemukan konteks bisnis dengan cepat. Setiap halaman unit menjelaskan visi, misi, dan langkah berikutnya. Halaman beranda merangkum kerangka kerja untuk tim dan mitra, operasi skala nasional, serta budaya kerja yang menegaskan integritas.

Bagi calon mitra distribusi, pengelola toko, atau pihak yang ingin kolaborasi lifestyle, saluran komunikasi utama dimulai dari Head Office. Untuk rekrutmen, halaman karier menampilkan posisi terbuka bila tersedia. Untuk pertanyaan lokasi depo atau klaster wilayah, direktori kontak memetakan titik operasional.

Ocean Space memilih pertumbuhan yang terukur: ekspansi mengikuti kapasitas tata kelola, bukan sekadar volume transaksi. Standar operasi yang sama diterapkan di empat unit agar keputusan lokal tetap selaras dengan arah grup. Mitra diharapkan melihat konsistensi proses, bukan janji yang berbeda di setiap kanal.

${SHARED_CLOSING}`,
  },
  '/about': {
    path: '/about',
    title: 'Tentang Ocean Space | Integritas dan Disiplin Eksekusi',
    description:
      'Profil Ocean Space: integritas, disiplin eksekusi, dan ekosistem distribusi hingga lifestyle dalam satu tata kelola nasional.',
    h1: 'Ocean Space tumbuh lewat integritas dan disiplin eksekusi.',
    body: `Ocean Space menaungi penyaluran perangkat, retail, sub retail, dan lifestyle dalam satu ekosistem operasional nasional. Grup dibangun dengan prinsip integritas, disiplin eksekusi, dan standar operasi yang sama di setiap unit. Tujuannya sederhana: keputusan cepat yang tetap dapat diaudit dan dijelaskan kepada mitra.

Cara kerja grup menekankan kejelasan peran. Tim pusat menetapkan kerangka, sementara unit bisnis mengeksekusi di lapangan dengan indikator yang terukur. Ekosistem mencakup mitra penyaluran, jaringan toko, sub retail teknologi rumah tangga, dan layanan lifestyle yang saling mendukung tanpa mengaburkan tanggung jawab masing-masing.

Budaya JUJUR menjadi kerangka untuk tim dan mitra. Setiap unit menjaga kualitas layanan sambil bergerak dalam satu arah strategis. Ocean Space juga terhubung dengan merek dan jaringan terkait seperti Complete Selular dan Unboxing sebagai bagian dari peta ekosistem yang lebih luas.

Disiplin eksekusi berarti janji operasional ditindaklanjuti dengan proses, bukan slogan. Mitra diharapkan melihat ritme pelaporan, eskalasi isu, dan keputusan stok atau layanan yang konsisten. Integritas berarti informasi yang disampaikan kepada pelanggan dan partner dapat diverifikasi melalui praktik di lapangan.

Bagi kandidat, halaman Tentang memberi konteks sebelum melamar. Bagi partner, halaman ini menjelaskan mengapa empat unit dikelola bersama. Bagi publik, halaman ini merangkum bagaimana grup ingin tumbuh: lewat tata kelola, bukan sekadar ekspansi agresif tanpa fondasi.

${SHARED_CLOSING}`,
  },
  '/distribusi': {
    path: '/distribusi',
    title: 'HP Distribusi Ocean Space | Penyalur Perangkat Terpercaya',
    description:
      'Unit HP Distribusi Ocean Space menyalurkan perangkat dengan jaringan nasional, mitra brand, dan standar layanan yang konsisten.',
    h1: 'Menjadi perusahaan distribusi terpercaya.',
    body: `Unit bisnis HP Distribusi Ocean Space berfokus menjadi penyalur perangkat yang dapat dipercaya di Indonesia. Tim menumbuhkan brand dengan keterbukaan, kinerja lapangan yang unggul, dan jaringan penyaluran yang andal dari pusat hingga wilayah.

Visi dan misi unit mencakup perluasan jangkauan produk, kemitraan jangka panjang dengan merek, serta standar layanan yang konsisten di seluruh wilayah. Lima misi operasional menekankan kualitas eksekusi, kepercayaan mitra, dan pertumbuhan yang berkelanjutan tanpa mengorbankan tata kelola.

Penyaluran menjadi fondasi ekosistem Ocean Space: menyalurkan produk ke retail dan sub retail dengan proses yang jelas. Partner dan brand dapat menghubungi tim korporat untuk peluang kolaborasi nasional, evaluasi kapasitas wilayah, serta penyelarasan program pemasaran yang mendukung ketersediaan produk.

Keunggulan yang diutamakan bukan hanya volume, melainkan ketepatan stok, komunikasi status pengiriman, dan kemampuan menindaklanjuti isu lapangan. Mitra brand membutuhkan prediktabilitas; mitra toko membutuhkan ketersediaan. Unit ini menempatkan keduanya dalam satu kerangka operasi.

Di dalam grup, HP Distribusi berkoordinasi dengan retail dan sub retail agar permintaan pasar terbaca lebih awal. Informasi dari toko dan depo membantu keputusan alokasi. Pendekatan ini mengurangi gesekan antar unit dan memperkuat pengalaman pelanggan di ujung rantai.

${SHARED_CLOSING}`,
  },
  '/retail': {
    path: '/retail',
    title: 'Retail Handphone & Aksesoris | Ocean Space',
    description:
      'Unit Retail Ocean Space menghadirkan belanja handphone dan aksesoris dengan pelayanan unggul serta pertumbuhan yang berkelanjutan.',
    h1: 'Menjadi retail handphone dan aksesoris yang paling dipercaya pelanggan.',
    body: `Unit toko Ocean Space menghadirkan pengalaman belanja handphone beserta aksesoris yang berorientasi pada kepercayaan pelanggan. Keterbukaan informasi produk dan pelayanan unggul menjadi dasar pertumbuhan yang berkelanjutan di jaringan toko.

Visi unit adalah menjadi saluran penjualan yang paling dipercaya, dengan misi yang mencakup kualitas produk, layanan purna jual, dan ekspansi toko yang terukur. Tim toko bekerja dalam kerangka grup Ocean Space bersama penyaluran dan sub retail agar stok serta program layanan selaras.

Pelanggan dan mitra dapat menghubungi Head Office atau jaringan operasional melalui halaman kontak untuk informasi toko, kemitraan, dan layanan di toko. Setiap interaksi di toko diharapkan mencerminkan budaya JUJUR: jelas, tepat, dan dapat ditindaklanjuti jika ada kendala.

Kepercayaan pelanggan dibangun lewat konsistensi. Harga, ketersediaan, dan penjelasan spesifikasi harus dapat dijelaskan oleh tim di lapangan. Unit retail juga menjaga hubungan dengan brand agar program promosi tidak mengorbankan pengalaman layanan jangka panjang.

Dalam ekosistem Ocean Space, retail menjadi wajah langsung kepada konsumen. Masukan dari toko diteruskan ke penyaluran dan unit lain agar perbaikan bersifat sistemik, bukan hanya lokal di satu cabang.

${SHARED_CLOSING}`,
  },
  '/sub-retail': {
    path: '/sub-retail',
    title: 'Sub Retail Teknologi Rumah Tangga | Ocean Space',
    description:
      'Unit Sub Retail Ocean Space membangun ekosistem penjualan serta layanan teknologi rumah tangga yang dipercaya mitra beserta pelanggan.',
    h1: 'Menjadi ekosistem ritel serta layanan teknologi rumah tangga yang paling dipercaya.',
    body: `Unit Sub Retail Ocean Space membangun ekosistem ritel serta layanan teknologi rumah tangga yang paling dipercaya. Fokusnya adalah keterbukaan, kinerja unggul, beserta pertumbuhan berkelanjutan di jaringan titik penjualan yang melengkapi toko modern maupun kanal terkait.

Visi beserta misi mencakup perluasan layanan, kemitraan dengan merek teknologi rumah tangga, serta standar operasional yang selaras dengan grup Ocean Space. Unit ini melengkapi penyaluran beserta retail dalam rantai nilai yang lebih luas, termasuk kebutuhan perangkat yang dekat dengan rumah tangga.

Kunjungi juga Complete Selular beserta saluran grup lainnya untuk memahami jaringan titik penjualan terkait. Hubungi tim korporat untuk peluang kemitraan beserta ekspansi wilayah. Koordinasi dengan unit lain memastikan program brand, ketersediaan, beserta layanan tidak berjalan terpisah-pisah.

Sub retail membutuhkan ketepatan assortmen serta kemampuan menjelaskan manfaat produk kepada pelanggan. Tim dilatih untuk menjaga standar yang sama meskipun titik penjualan tersebar. Hal ini penting agar reputasi merek beserta reputasi grup tetap terjaga.

Dengan tata kelola yang jelas, unit ini menjadi jembatan antara skala distribusi beserta kebutuhan konsumen di segmen teknologi rumah tangga. Pertumbuhan diukur dari kualitas layanan beserta keberlanjutan mitra, bukan hanya pembukaan titik baru.

${SHARED_CLOSING}`,
  },
  '/lifestyle': {
    path: '/lifestyle',
    title: 'Lifestyle & Layanan Terpadu | Ocean Space',
    description:
      'Unit Lifestyle Ocean Space menghadirkan layanan terpadu dengan pengalaman berkualitas, kepercayaan mitra, dan kinerja lapangan unggul.',
    h1: 'Menjalankan unit lifestyle dan layanan terpadu.',
    body: `Unit Lifestyle Ocean Space menjalankan layanan terpadu yang memberi pengalaman berkualitas kepada pelanggan. Tim tumbuh lewat kepercayaan, kinerja unggul, dan standar operasi yang sama dengan unit bisnis lainnya di dalam grup.

Visi unit menekankan layanan yang relevan dengan kebutuhan gaya hidup modern, sementara misi operasional menjaga kualitas, konsistensi, dan kolaborasi lintas unit. Lifestyle melengkapi ekosistem penyaluran, retail, dan sub retail agar penawaran Ocean Space tidak berhenti pada perangkat saja.

Untuk kolaborasi, kemitraan, atau pertanyaan layanan, hubungi tim korporat melalui halaman kontak atau pelajari lebih lanjut di halaman Tentang. Setiap program lifestyle diharapkan dapat dijelaskan secara jelas kepada mitra dan pelanggan, termasuk lingkup layanan serta saluran eskalasi.

Pengalaman berkualitas berarti proses yang mulus dari informasi awal hingga penyelesaian layanan. Unit ini menjaga dokumentasi operasional agar tim di lapangan tidak bergantung pada pengetahuan informal semata. Pendekatan tersebut mendukung skala tanpa menurunkan standar.

Dalam kerangka grup, lifestyle menjadi ruang inovasi layanan yang tetap terikat pada budaya JUJUR. Ide baru diuji terhadap kemampuan eksekusi dan dampak terhadap mitra yang sudah berjalan, sehingga pertumbuhan tetap terkendali.

${SHARED_CLOSING}`,
  },
  '/career': {
    path: '/career',
    title: 'Karier di Ocean Space | Bergabung dengan Tim',
    description:
      'Lowongan dan budaya kerja Ocean Space untuk talenta yang ingin bertindak cepat dengan standar jelas di empat unit bisnis.',
    h1: 'Tempat talenta terbaik bertindak cepat dan nyata.',
    body: `Karier di Ocean Space terbuka bagi talenta yang ingin bekerja dengan standar jelas dan budaya tegas di empat unit bisnis: penyaluran perangkat, retail, sub retail, dan lifestyle. Kami mencari orang yang bertindak cepat, jujur, dan fokus pada hasil nyata di lapangan maupun di fungsi pendukung.

Halaman karier menampilkan lowongan terbuka ketika tersedia, beserta informasi budaya kerja JUJUR. Proses lamaran diarahkan ke formulir apply untuk posisi yang dipilih. Jika belum ada posisi aktif, kandidat tetap dapat menyampaikan minat melalui kontak korporat agar tim rekrutmen memiliki catatan minat yang relevan.

Bergabung dengan Ocean Space berarti bergabung dengan jaringan operasional nasional, tata kelola yang rapi, dan tim yang menekankan integritas serta eksekusi. Pelajari budaya di halaman Tentang sebelum melamar agar ekspektasi peran selaras dengan cara grup bekerja sehari-hari.

Di dalam proses seleksi, kami menilai kemampuan menjelaskan keputusan, kolaborasi lintas fungsi, dan ketepatan eksekusi. Empat unit bisnis memberi ruang karier yang beragam, namun semuanya terikat pada standar operasi yang sama. Hal itu memudahkan rotasi pengetahuan dan menjaga kualitas layanan.

Data pelamar diproses sesuai Kebijakan Privasi dan daftar Sub-processor / DPA. Gunakan saluran resmi di situs ini untuk lamaran agar informasi tidak tersebar di kanal yang tidak terkontrol.

${SHARED_CLOSING}`,
  },
  '/career-apply': {
    path: '/career-apply',
    title: 'Formulir Lamaran Karier | Ocean Space',
    description:
      'Kirim lamaran ke posisi terbuka Ocean Space melalui formulir resmi yang terhubung dengan proses rekrutmen grup.',
    h1: 'Formulir lamaran Ocean Space',
    body: `Halaman ini digunakan untuk mengirim lamaran ke posisi terbuka di Ocean Space. Pilih lowongan dari halaman karier terlebih dahulu, lalu lengkapi formulir dengan data yang akurat agar tim rekrutmen dapat menilai kesesuaian peran dengan cepat.

Proses rekrutmen mengikuti standar grup untuk empat unit bisnis. Data pelamar diproses sesuai kebijakan privasi Ocean Space dan dapat melibatkan sub-processor rekrutmen terkait grup. Jika Anda belum memilih posisi, kembali ke halaman karier untuk melihat lowongan yang tersedia, atau hubungi tim korporat untuk bantuan.

Pastikan dokumen pendukung lengkap dan informasi kontak dapat dihubungi. Lamaran yang tidak lengkap memperlambat proses. Gunakan hanya saluran resmi di situs ini agar status lamaran tercatat pada sistem yang benar.

Setelah mengirim, pantau email dan nomor yang Anda cantumkan. Tim dapat menghubungi untuk klarifikasi atau tahapan berikutnya. Jika posisi sudah ditutup, pertimbangkan untuk menyampaikan minat umum melalui kontak korporat.

${SHARED_CLOSING}`,
    noindex: true,
    canonicalPath: '/career',
  },
  '/contact': {
    path: '/contact',
    title: 'Kontak Ocean Space | Head Office & Jaringan Wilayah',
    description:
      'Hubungi Ocean Space lewat Head Office di Jakarta untuk rekrutmen, kemitraan, dan komunikasi utama menuju jaringan wilayah.',
    h1: 'Mulai dari Head Office, lalu lanjut ke wilayah yang relevan.',
    body: `Hubungi Ocean Space melalui Head Office untuk rekrutmen dan komunikasi utama. Untuk kebutuhan lapangan, gunakan direktori jaringan operasional berdasarkan wilayah Jawa, Jabodetabek, Sumatera, dan klaster lainnya agar pertanyaan sampai ke titik yang tepat.

Head Office berlokasi di kawasan Pantai Indah Kapuk, Jakarta Utara, serta memiliki titik operasional di Cirebon dan wilayah lain. Direktori lokasi mencakup depo dan kantor di berbagai kota untuk mendukung penyaluran, retail, sub retail, dan lifestyle. Pemetaan ini membantu mitra dan kandidat menghindari eskalasi yang salah saluran.

Gunakan halaman ini untuk menemukan alamat yang relevan, lalu hubungi tim yang sesuai. Untuk pertanyaan umum, kemitraan, atau karier, mulai dari Head Office agar komunikasi terarah dan cepat ditindaklanjuti. Untuk isu operasional lokal, gunakan titik wilayah yang tertera pada direktori.

Kejelasan saluran kontak adalah bagian dari tata kelola. Ocean Space ingin mitra dan publik tahu ke mana harus bertanya tanpa bergantung pada hubungan informal. Setiap lokasi yang dipublikasikan diharapkan mencerminkan titik yang benar-benar aktif.

Jika Anda mencari informasi legal terkait data pribadi, lihat Kebijakan Privasi dan halaman Sub-processor / DPA. Jika Anda mencari peluang kerja, mulai dari halaman karier sebelum mengirim formulir.

${SHARED_CLOSING}`,
  },
  '/privacy': {
    path: '/privacy',
    title: 'Kebijakan Privasi | Ocean Space',
    description:
      'Kebijakan privasi Ocean Space: pengumpulan, penggunaan, penyimpanan, dan perlindungan data pengunjung serta pelamar karier.',
    h1: 'Kebijakan Privasi Ocean Space',
    body: `Ocean Space menghormati privasi pengunjung situs, mitra, dan pelamar karier. Kebijakan ini menjelaskan jenis data yang dapat dikumpulkan, tujuan penggunaannya, serta hak Anda terkait data pribadi. Versi terbaru selalu dipublikasikan di halaman ini.

Data yang diproses dapat mencakup identitas dan kontak yang Anda kirim melalui formulir, data teknis kunjungan situs, serta dokumen lamaran. Kami menggunakan data untuk merespons pertanyaan, memproses rekrutmen, meningkatkan layanan, dan memenuhi kewajiban hukum yang berlaku.

Sub-pemroses yang membantu operasional tercantum pada halaman Sub-processor / DPA, termasuk penyedia hosting situs dan API rekrutmen terkait grup Complete Selular. Kami berupaya membatasi akses hanya kepada pihak yang memerlukannya untuk layanan tersebut.

Anda dapat meminta akses, koreksi, atau penghapusan data pribadi dengan menghubungi Head Office melalui halaman kontak. Cantumkan konteks permintaan agar penanganan lebih cepat. Kebijakan ini dapat diperbarui ketika praktik operasional atau mitra pemrosesan berubah.

Keamanan data menjadi bagian dari tata kelola grup. Meskipun tidak ada sistem yang bebas risiko, Ocean Space menerapkan kontrol akses dan saluran resmi agar informasi tidak dikirim melalui kanal yang tidak terdokumentasi.

${SHARED_CLOSING}`,
  },
  '/subprocessors': {
    path: '/subprocessors',
    title: 'Daftar Sub-processor dan DPA | Ocean Space',
    description:
      'Daftar sub-processor dan ringkasan data-processing (DPA) Ocean Space untuk hosting situs serta proses rekrutmen karier resmi.',
    h1: 'Sub-processor dan Data Processing Agreement (DPA)',
    body: `Halaman ini adalah pengungkapan sub-processor / data-processing (DPA) Ocean Space. Kami mencantumkan pihak ketiga yang dapat memproses data pribadi terkait situs korporat dan proses rekrutmen, beserta tujuan penggunaannya.

Hosting dan penyajian situs: infrastruktur web yang menayangkan oceanspace.co.id, termasuk penyimpanan aset statis dan pengiriman halaman. Tujuan: menyediakan situs yang aman dan tersedia bagi pengunjung, mitra, serta kandidat.

API rekrutmen terkait grup: layanan di cesa.completeselular.com yang mendukung daftar lowongan dan pengiriman lamaran. Tujuan: memproses data pelamar untuk seleksi dan komunikasi rekrutmen. Data yang dikirim melalui formulir lamaran dapat diteruskan ke layanan ini.

Saluran komunikasi publik: tautan ke LinkedIn dan Instagram digunakan untuk informasi perusahaan dan karier. Interaksi di platform tersebut mengikuti kebijakan privasi masing-masing platform.

Ocean Space meninjau daftar ini ketika mitra pemrosesan berubah. Untuk pertanyaan Data Processing Agreement atau permintaan terkait data pribadi, hubungi Head Office melalui halaman kontak dan rujuk kebijakan privasi. Halaman ini dilengkapi tautan ke Kebijakan Privasi agar konteks hukum dan operasional mudah ditemukan.

Mitra bisnis yang melakukan tinjauan keamanan dapat menggunakan halaman ini sebagai titik awal daftar sub-processor. Jika Anda membutuhkan klarifikasi lokasi pemrosesan atau ruang lingkup, sampaikan permintaan resmi agar tim dapat menindaklanjuti secara terdokumentasi.

${SHARED_CLOSING}`,
  },
}

/** @type {Record<string, PageSeo>} */
export const PAGE_SEO_EN = {
  '/': {
    path: '/',
    title: 'Ocean Space | Growing with Integrity',
    description:
      'Ocean Space manages distribution, retail, sub-retail, and lifestyle with clear governance and JUJUR culture across Indonesia.',
    h1: 'Ocean Space operates four business units with clear governance and disciplined execution.',
  },
  '/about': {
    path: '/about',
    title: 'About Ocean Space | Integrity and Execution Discipline',
    description:
      'Ocean Space profile: integrity, disciplined execution, and an integrated ecosystem spanning distribution to lifestyle under unified governance.',
    h1: 'Ocean Space grows through integrity and execution discipline.',
  },
  '/distribusi': {
    path: '/distribusi',
    title: 'Phone Distribution | Ocean Space',
    description:
      'Ocean Space Phone Distribution unit distributes devices with a nationwide logistics network, brand partners, and consistent service SLAs.',
    h1: 'Becoming a trusted national distribution company.',
  },
  '/retail': {
    path: '/retail',
    title: 'Retail Mobile Phones & Accessories | Ocean Space',
    description:
      'Ocean Space Retail unit delivers retail mobile phone and accessory stores with superior customer service and sustainable growth.',
    h1: 'Becoming the most trusted phone and accessory retailer.',
  },
  '/sub-retail': {
    path: '/sub-retail',
    title: 'Sub-Retail Household Tech | Ocean Space',
    description:
      'Ocean Space Sub-Retail unit builds a trusted smart household technology and retail services ecosystem for partners and consumers.',
    h1: 'Becoming the most trusted household technology retail and services ecosystem.',
  },
  '/lifestyle': {
    path: '/lifestyle',
    title: 'Lifestyle & Integrated Services | Ocean Space',
    description:
      'Ocean Space Lifestyle unit provides integrated hospitality and consumer services, brand trust, and operational excellence.',
    h1: 'Managing lifestyle ventures and integrated consumer services.',
  },
  '/career': {
    path: '/career',
    title: 'Careers | Ocean Space',
    description:
      'Explore official career opportunities and open positions at Ocean Space across four business units.',
    h1: 'Join Ocean Space and grow with integrity.',
  },
  '/career-apply': {
    path: '/career-apply',
    title: 'Job Application | Ocean Space',
    description:
      'Submit your application for open positions in the Ocean Space ecosystem.',
    h1: 'Ocean Space Job Application',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Ocean Space | Corporate & Regional Network',
    description:
      'Connect with Ocean Space: Head Office in Jakarta (PIK) & Cirebon, and regional operational depots across Indonesia.',
    h1: 'Contact the Ocean Space team.',
  },
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy | Ocean Space',
    description:
      'Ocean Space privacy policy: collection, use, storage, and protection of visitor and candidate personal data.',
    h1: 'Ocean Space Privacy Policy',
  },
  '/subprocessors': {
    path: '/subprocessors',
    title: 'Sub-processors & DPA | Ocean Space',
    description:
      'Ocean Space sub-processors disclosure and Data Processing Agreement (DPA) summary for site hosting and recruitment.',
    h1: 'Sub-processors & Data Processing Agreement (DPA)',
  },
}

export function getPageSeo(pathname, lang = 'id') {
  const normalized =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.replace(/\/+$/, '')
      : pathname || '/'

  if (lang && lang.startsWith('en')) {
    const enPage = PAGE_SEO_EN[normalized] || PAGE_SEO_EN['/']
    const basePage = PAGE_SEO[normalized] || PAGE_SEO['/']
    return { ...basePage, ...enPage }
  }

  return PAGE_SEO[normalized] || PAGE_SEO['/']
}

export function absoluteUrl(path) {
  if (!path || path === '/') return `${SITE_URL}/`
  const normalized = (path.startsWith('/') ? path : `/${path}`).replace(/\/+$/, '')
  return `${SITE_URL}${normalized}`
}

export function buildJsonLd(page) {
  const url = absoluteUrl(page.canonicalPath || page.path)
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-color.png`,
    sameAs: [
      'https://www.linkedin.com/company/ocean-space-group/',
      'https://www.instagram.com/oceanspace.career/',
    ],
  }

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }

  return [organization, webPage]
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Build crawlable HTML for #root (replaced by React after hydrate/render). */
export function buildCrawlableRoot(page) {
  const nav = NAV_LINKS.map(
    (link) => `<a href="${link.href}">${escapeHtml(link.label)}</a>`,
  ).join(' · ')
  const paragraphs = page.body
    .trim()
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p.trim())}</p>`)
    .join('\n')

  return `
<a href="#main-content">Langsung ke konten utama</a>
<header>
  <p><strong>${escapeHtml(SITE_NAME)}</strong></p>
  <nav aria-label="Navigasi utama">${nav}</nav>
</header>
<main id="main-content">
  <h1>${escapeHtml(page.h1)}</h1>
  ${paragraphs}
  <nav aria-label="Tautan terkait">
    <p>${nav}</p>
  </nav>
</main>
<footer>
  <p>&copy; ${new Date().getFullYear()} ${escapeHtml(SITE_NAME)}. <a href="/privacy">Kebijakan Privasi</a> · <a href="/subprocessors">Sub-processor / DPA</a> · <a href="/sitemap.xml">Sitemap</a></p>
</footer>`.trim()
}

export function buildHeadTags(page) {
  const canonicalPath = page.canonicalPath || page.path
  const canonical = absoluteUrl(canonicalPath)
  const robots = page.noindex ? 'noindex, follow' : 'index, follow'
  const jsonLd = buildJsonLd(page)
    .map(
      (block) =>
        `<script type="application/ld+json">${JSON.stringify(block)}</script>`,
    )
    .join('\n    ')

  return `
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="robots" content="${robots}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:alt" content="${escapeHtml(DEFAULT_OG_IMAGE_ALT)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    ${jsonLd}`.trim()
}

export { NAV_LINKS }
