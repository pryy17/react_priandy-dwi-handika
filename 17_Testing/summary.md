# Testing

Testing adalah proses memverifikasi. bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah .ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita. proses yang dibuat sedemikian rupa untuk mengindentifikasikan ketidaksesuaian hasil sebuah sistem informasi dengan hasil yang diharapkan.

- manfaat testing :
  testing memiliki manfaat sebagai berikut:
  - Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
  - Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.
- kategori testing secara umum terbagi menjadi 2 : rendering component trees dan menjalankan aplikasi lengkap

- rekomendasi Tools :
  - **Jest** Test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browser, seringkali cukup baik mengetes komponen pada React
  - **React Testing Library** Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesibilitas

## React Testing Library

- Render dan Debug
  Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.
  React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.
  React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL.

## Testing Custom Hooks

Untuk mengetes custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen.
menggunakan library React-Hook-Testing-Library -
