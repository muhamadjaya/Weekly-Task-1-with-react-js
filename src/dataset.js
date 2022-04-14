const dataset = [
  {
    tabname: "Git",
    tabid: "nav-git-tab",
    tabtarget: "#nav-git",
    tabcontrol: "nav-git",
    targetid: "nav-git",
    labelledby: "nav-git-tab",
    title: "2 Version Control and Branch Management (Git)",
    summaries: [
      {
        title: "Pengertian dan jenis-jenis Versioning",
        description:
          "Versioning adalah melakukan pengaturan versi atau pelacakan setiap perubahan dari setiap code program. Adapun tujuan utamanya yaitu melakukan manajemen project serta tarcking terhadap perubahan yang terjadi pada code program, baik yang dilakukan oleh personal ataupun tim. Didalam membangun setiap project pasti ada sebuah perubahan dan koreksi, meskipun itu adalah sebuah project profesional dan besar.",
      },
      {
        title: "Pengertian Git dan macam-macam Git command",
        description:
          "Adapun version control yang paling populer hingga sekarang adalah GIT. GIT merupakan version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-sama. GIT sendiri bersifat terdistribusi, yaitu dapat diakses secara bersama sama. GIT dibuat oleh Linus Torvalds pada tahun 2005. Dalam GIT terdapat 3 buah area yaitu working tree, stagging area, dan history. Dari masing-masing area tersebut terdapat berbagai git command untuk melakukan berbagai tugas. Mulai dari git init untuk menyiapkan repository lokal untuk mengontrol berbagai perubahan, git status untuk mengetahui perubahan apa saja yang terjadi, git add untuk memindahkan dari working tree area ke stagging area, git commit untuk memindahkan dari stagging area ke histroy, dan masih banyak command lainnya yang dapat digunakan sesuai dengan kondisi yang terjadi.",
      },
      {
        title: "Manajemen Branch pada Git",
        description:
          "Dalam git dapat ditambahkan beberapa branch dengan tujuan membuat sebuah jalur baru tanpa mengganggu jalur utama, dalam hal ini dapat berlaku apabila dalam pengembangan code akan ditambahkan atau membuat eksperimen sebuah fitur baru. Pada praktiknya brach tersebut dapat dilakukan berbagai manajemen, mulai dari membuat branch baru dan menambahkan fitur lain hingga melakukan merge pada branch yang diinginkan.",
      },
    ],
    tasks: [
      {
        title:
          "Membuat repository baru di github dan melakukan manajemen branch",
        description:
          "Pada task ini, membuat sebuah repository baru dan membuat 3 buah branch tambahan selain dari branch master, dengan ketentuan menambahkan branch develop kemudian lakukan pengembangan fitur dengan menambahkan 2 buah branch baru, pada masing-masing branch tambahkan fitur lalu merge dengan branch develop.",
      },
    ],
    links: [
      {
        url: "https://github.com/muhamadjaya/tugas-section2-branch.git",
        name: "Version Control and Branch Management (Git)",
      },
    ],
    screenshots: [{ path: "./images/git/git.png" }],
  },
  {
    tabname: "Introduction UI/UX",
    tabid: "nav-uiux-tab",
    tabtarget: "#nav-uiux",
    tabcontrol: "nav-uiux",
    targetid: "nav-uiux",
    labelledby: "nav-uiux",
    title: "3 Introduction UI/UX",
    summaries: [
      {
        title: "User Experience (UX)",
        description:
          "User Experience (UX) adalah apapun yang pengguna rasakan ketika menggunakan produk yang kita buat. UX terdiri dari 6 bagian, diantaranya : Business Logic, Technology, Incteraction Logic, Design, Computer Communication, dan Business. Dan beberapa tahapan Yang bisa dilakukan ketika hendak mendesain sebuah User Experience, yaitu : empathize, define, ideate, prototype, dan validate.",
      },
      {
        title: "User Interface (UI)",
        description:
          "User Interface (UI) adalah tampilan yang user gunakan ketika berinteraksi dengan produk yang kita buat. Terdapat 4 buah Pilar pada UI, diantaranya: Consistency (menggunakan desain pola yang sama pada setiap halaman dan urutan pada situasi pada halamannya mirip), Keep the interface simple (menghilangkan elemen-elemen yang tidak diperlukan pada sebuah halaman dan gunakan bahasa yang jelas), Good Typography (harus diperhatikan typeface, yaitu pola huruf yang digunakan harus memiliki pola yang sama. Dan perhatikan juga mengenai ukuran, jenis, dan susunan dari text dengan tujuan supaya memudahkan untuk dibaca), dan Offer Informative Feedback (feedback yang diberikan kepada user harus berarti, relevan, dan jelas).",
      },
      {
        title: "Prototyping",
        description:
          "Prototype merupakan sebuah simulasi atau contoh sample yang menggambarkan final produk yang kita buat. Tujuannya yaitu untuk melakukan testing mengenai produk yang dibuat sebelum menghabiskan waktu dan uang yang dihabiskan untuk membuat produk yang dibuat. Tujuan lainnya yaitu mendapatkan feedback dari user, stakeholder, dan tim agar mereka dapat memberikan mengenai produk yang akan dibuat.",
      },
    ],
    tasks: [
      {
        title: "Mengidentifikasi desain website",
        description:
          "Pada task ini, mengidentifikasi 3 buah desain website serta menjelaskan UI/UX nya beserta color palette.",
      },
    ],
    links: [
      {
        url: "https://docs.google.com/document/d/195kR_m6vdOyUv4josiMmulSV7knx1VHaWX1utf5VQok/edit",
        name: "Introduction UI / UX",
      },
    ],
    screenshots: [
      { path: "./images/ui-ux/desain-1.png" },
      { path: "./images/ui-ux/desain-2.png" },
      { path: "./images/ui-ux/desain-3.png" },
    ],
  },
  {
    tabname: "Figma",
    tabid: "nav-figma-tab",
    tabtarget: "#nav-figma",
    tabcontrol: "nav-figma",
    targetid: "nav-figma",
    labelledby: "nav-figma-tab",
    title: "4 Figma",
    summaries: [
      {
        title: "Pengertian Figma",
        description:
          "Figma adalah editor grafik vektor dan alat prototyping dengan keutamaannya yang berbasis web, dengan fitur offline tambahan yang diaktifkan oleh aplikasi desktop untuk macOS dan Windows.",
      },
      {
        title: "Kelebihan dan Kekurangan Figma",
        description:
          "Kelebihan dari figma yaitu : bersifat gratis, dapat berjalan pada Mac dan PC, dapat mengimport file sketsa, dapat mengintegrasikan para developer yang terpisah, memiliki library untuk tim secara baik, dan dapat integrasi prototype secara maksimal.  Kekurangan dari figma yaitu : Harus terhubung dengan internet.",
      },
      {
        title: "Melakukan Desain dengan Figma",
        description:
          "Terdapat beberapa hal yang harus diperhatikan sebelum mendesain dengan figma, diantaranya : melakukan pengaturan pada frame baru atau disebut juga artboards, tetapkan grid dan layout columns sesuai dengan desain yang akan dibuat, perhatikan layer dan groups, pilih vector shapes yang sesuai, import gambar dan lakukan manipulasi sesuai keinginan, dan buat typography yang menarik.",
      },
    ],
    tasks: [
      {
        title:
          "Membuat desain UI/UX dan membuat prototype dari desain tersebut.",
        description:
          "Pada task ini, membuat sebuah desain UI/UX dari desain yang dipilih pada tugas sebelumnya menggunakan tools Figma dan membuat prototype dari desain tersebut.",
      },
    ],
    links: [
      {
        url: "https://www.figma.com/file/VIijqBWw0zykeNMN8QzGzh/task-figma-%5BMuhamad-Jaya%5D?node-id=2%3A2",
        name: "Figma",
      },
    ],
    screenshots: [{ path: "./images/figma/figma.png" }],
  },

  {
    tabname: "HTML",
    tabid: "nav-html-tab",
    tabtarget: "#nav-html",
    tabcontrol: "nav-html",
    targetid: "nav-html",
    labelledby: "nav-html-tab",
    title: "5 HTML",
    summaries: [
      {
        title: "Pengertian HTML",
        description:
          "HTML (Hypertext Markup Language) adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web.",
      },
      {
        title: "Fungsi dari HTML",
        description:
          "Terdapat beberapa fungsi dari HTML seperti : membuat struktur dari halaman website, mengatur tampilan dan isi dari halaman web, membuat tabel dengan tag HTML table, membuat form HTML, dan lain-lain.",
      },
      {
        title: "Macam-macam tag HTML dan fungsinya.",
        description:
          "Ada banyak sekali tag HTML yang dapat digunakan untuk merancang suatu website seperti : <div> </div> untuk membuat sebuah bagian dalam dokumen, <h1> hingga <h6> untuk membuat heading, <p> </p> untuk membuat paragraf, dan lainnya.",
      },
    ],
    tasks: [
      {
        title:
          "Membuat beberapa file HTML dengan nama index.html, form.html, dan welcome.html.",
        description:
          "Pada task ini, membuat 3 buah halaman web sederhana. Pada halaman index.html akan menampilkan halaman utama dan terdapat link untuk melakukan sign up untuk menuju ke halaman form.html, kemudian apabila telah mengisi form dan menekan tombol submit pada halaman form.html kemudian akan diarahkan menuju ke halaman welcome.html.",
      },
    ],
    links: [
      {
        url: "https://github.com/muhamadjaya/react_muhamad-jaya/tree/main/05_HTML/praktikum",
        name: "HTML",
      },
    ],
    screenshots: [
      { path: "./images/html/index.png" },
      { path: "./images/html/form.png" },
      { path: "./images/html/welcome.png" },
    ],
  },
  {
    tabname: "CSS",
    tabid: "nav-css-tab",
    tabtarget: "#nav-css",
    tabcontrol: "nav-css",
    targetid: "nav-css",
    labelledby: "nav-css-tab",
    title: "6 CSS",
    summaries: [
      {
        title: "Pengertian CSS serta fungsinya.",
        description:
          " CSS adalah kependekan dari Cascading Style Sheet. CSS adalah suatu kode pemrograman yang berfungsi untuk mendekorasi gaya tampilan halaman web supaya lebih menarik. Berikut merupakan beberapa fungsi dari CSS : dapat menghias halaman web. (Seperti mengatur color, size, font, background, width, height, dan lainnya), dapat mengatur posisi pada halaman web. (Misalnya mengatur float, align, display, position, dan lainnya), dan lain-lain.",
      },
      {
        title: "Menambahkan file CSS.",
        description:
          " Terdapat 3 cara untuk menambahkan file CSS ke dalam HTML, yaitu : External CSS, Internal CSS, dan Inline CSS.",
      },
      {
        title: "Penggunaan CSS Selector.",
        description:
          "CSS Selector adalah pola yang digunakan untuk memilih element, yang ingin di styling. Penanda HTML ke dalam CSS. Dapat menggunakan selector ID dan Class.  ID → (#) Setiap elemen hanya dapat memiliki satu tag id. Dalam satu halaman tidak boleh ada dua penamaan id yang berbeda.  Class → (.) Tag class dengan nama yang sama dapat dipakai berulang-ulang pada satu halaman. Satu elemen boleh memiliki lebih dari satu Class yang berbeda-beda.",
      },
    ],
    tasks: [
      {
        title:
          "Mengubah tampilan dari file 1.html dan membuat file 2.html kemudian mendesain file tersebut.",
        description:
          "Pada task ini diperintahkan untuk mengubah sebuah tampilan dari file 1.html menjadi tampilan yang sesuai dengan beberapa ketentuan yaitu menggunakan font-family: 'Slabo 27px', serif; dan font-size: 20px;. Serta, membuat tampilan website dengan menambahkan header dan konten yang responsif.",
      },
    ],
    links: [
      {
        url: "https://github.com/muhamadjaya/tugas-section6-css",
        name: "CSS",
      },
    ],
    screenshots: [
      { path: "./images/css/file1.png" },
      { path: "./images/css/file2.png" },
    ],
  },
  {
    tabname: "Bootstrap",
    tabid: "nav-bootstrap-tab",
    tabtarget: "#nav-bootstrap",
    tabcontrol: "nav-bootstrap",
    targetid: "nav-bootstrap",
    labelledby: "nav-bootstrap-tab",
    title: "7 Bootstrap",
    summaries: [
      {
        title: "Pengertian Bootstrap.",
        description:
          "Pengertian dari Bootstrap adalah sebuah framework CSS atau kerangka kerja CSS yang bersifat open source dan digunakan untuk membuat tampilan desain website supaya responsive dan mempercepat waktu pengerjaannya.",
      },
      {
        title: "Kelebihan Yang Dimiliki Bootstrap",
        description:
          "Terdapat beberapa kelebihan yang dimiliki bootstrap untuk membangun sebuah halaman website diantaranya : gratis, mudah dipelajari untuk pemula, cepat dalam membaangun website, dan mendukung tampilan yang responsive.",
      },
      {
        title: "Penggunaan Boostrap dalam Membuat Website.",
        description:
          " Sebelum memulai menggunakan Bootstrap terdapat hal-hal yang perlu diperhatikan : Untuk dapat menggunakan bootstrap, dapat langsung menuju website bootstrap dan unduh secara langsung di website resmi bootstrap.  Setelah mengunduh bootstrap, langkah selanjutnya adalah bisa dengan cara mempelajari example, ataupun mempelajari komponen-komponen yang ada pada bootstrap",
      },
    ],
    tasks: [
      {
        title: "Membuat Halaman Website Sederhana Menggunakan Bootstrap.",
        description:
          "Pada task ini diperintahkan untuk membuat sebuah tampilan website sederhana yang didalamnya terdapat header, body, dan footer menggunakan framework Bootstrap. Kemudian, website tersebut diatur supaya responsive diberbagai device.",
      },
    ],
    links: [
      {
        url: "https://github.com/muhamadjaya/tugas-section7-bootstrap",
        name: "Bootstrap",
      },
    ],
    screenshots: [{ path: "./images/bootstrap/bootstrap.png" }],
  },
  {
    tabname: "Javascript Refreshment",
    tabid: "nav-javascript-tab",
    tabtarget: "#nav-javascript",
    tabcontrol: "nav-javascript",
    targetid: "nav-javascript",
    labelledby: "nav-javascript-tab",
    title: "8 Javascript Refreshment",
    summaries: [
      {
        title: "Pengertian Javascript dan Alasan Untuk Mempelajarinya.",
        description:
          "Javascript adalah bahasa pemrograman yang high-level, scripting, untyped dan interpreted. Terdapat beberapa alasan untuk mempelajari javascript : javascript merupakan bahasa pemrograman tingkat tinggi, diciptakan supaya dapat berinteraksi dengan web browser, tidak berpengaruh pada tipe data, dan bahasanya fleksibel dan mudah untuk diuji.",
      },
      {
        title: "Declaration Declaration dan Scope pada Javascript.",
        description:
          "Declaration adalah proses pembuatan variabel untuk menyimpan data. Variabel ada 3 : var (umumnya, kita jarang memakai ini), let (digunakan saat membutuhkan nilai yang dapat diubah), dan const (digunakan saat membutuhkan nilai yang tidak bisa di reasign).  Saat mendeklarasikan variabel const, maka harus membri nilai pada variabel tersebut. Proses redeclaration hanya dapat dilakukan pada var, sedangkan let dan const tidak dapat dilakukan redeclaratio. Proses reassignment dapat dilakukan pada var dan let, sedangkan const tidak dapat dilakukan reassignment. Scooping adalah menentukan dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel.  Scoope terdiri dari 3 bagian : Global (dapat diakses oleh semua bagian kode), Function (hanya dapat diakses didalam area scope function itu sendiri), dan Block (hanya dapat diakses oleh bagian block tersebut)",
      },
      {
        title: "Function dan Class.",
        description:
          "Function di dalam javascript adalah sebuah objek. Karena memiliki properti dan method. Function digunakan untuk melakukan serangkaian komputasi / prosedur yang dapat digunakan berulang kali. Class adalah prototype dari suatu object yang akan dibuat.",
      },
    ],
    tasks: [
      {
        title: "Membuat kode program yang sesuai dengan ketentuan",
        description:
          "Mengambil index ke 2 di dalam array kemudian menampilkannya pada console. Mengubah kode sehingga menampilkan statement yang terdapat pada block if. Memanggil sebuah fungsi yang telah dideklarasikan. Mengubah kode sehingga menampilkan output yang sesuai ketentuan.",
      },
      {
        title: "Menjelaskan suatu kode program",
        description:
          "Menjelaskan kenapa block if tidak dapat tampil. Menjelaskan kenapa kode pada baris 26 dapat menyebabkan error. Menjelaskan jika kode pada baris 26 diberi komentar apakah baris 28 dapat dijalankan.",
      },
      {
        title: "Destructuring suatu kode program",
        description:
          "Melakukan destructuring pada sebuah variabel yang bertipe array.",
      },
      {
        title: "Mengkonversi value dari suatu variable",
        description:
          "Mengubah karakter yang terdapat pada nilai dari sebuah variabel.",
      },
      {
        title: "Mengambil dan mengalikan nilai array",
        description: "Melakukan perkalian pada setiap elemen array.",
      },
      {
        title: "Memanfaatkan built-in function javascript",
        description: "Membulatkan nilai pada sebuah array.",
      },
    ],
    links: [
      {
        url: "https://github.com/muhamadjaya/tugas-section8-javascript.git",
        name: "Javascript Refreshment",
      },
    ],
    screenshots: [
      { path: "./images/javascript/soalno1.png" },
      { path: "./images/javascript/soalno3to6.png" },
    ],
  },
  {
    tabname: "Clean Code",
    tabid: "nav-cleancode-tab",
    tabtarget: "#nav-cleancode",
    tabcontrol: "nav-cleancode",
    targetid: "nav-cleancode",
    labelledby: "nav-cleancode-tab",
    title: "9 Clean Code",
    summaries: [
      {
        title: "Pengertian Clean Code.",
        description:
          "Clean Code adalah istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer. Alasan kenapa clean code harus diterapkan : Work Collaboration, Feature Development, dan Faster Development.",
      },
      {
        title: "Karakteristik Clean Code.",
        description:
          "Terdapat beberapa karakteristik dari clean code, yaitu : mudah difahami, mudah dieja dan dicari, singkat namun mendeskripsikan konteks, konsisten, hindari penambahan konteks yang tidak perlu, komentar, good function, gunakan konvensi, dan formatting.",
      },
      {
        title: "Prinsip-Prinsip Clean Code.",
        description:
          "Beberapa prinsip yang diterapkan pada clean code, seperti : KISS (Keep It So Simple) yaitu, hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dan sebagainya. Dan DRY (Don't Repeat Yourself) yaitu, duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.",
      },
    ],
    tasks: [
      {
        title: "Melakukan Analysis dan Rewrite Code.",
        description:
          "Pada task ini, ditugaskan untuk menganalisis terhadap kesalahan penulisan yang terdapat pada suatu kode dan menulis ulang kode supaya lebih terbaca dan rapih.",
      },
    ],
    links: [
      {
        url: "https://github.com/muhamadjaya/tugas-section9-clean-code.git",
        name: "Clean Code",
      },
    ],
    screenshots: [
      { path: "./images/clean-code/analysis.png" },
      { path: "./images/clean-code/rewrite.png" },
    ],
  },
];

export default dataset;
