# Apollo Client Mutation

mengirim pembaruan ke server GraphQL Anda dengan hook useMutation dan mempelajari cara memperbarui cache Apollo Client setelah menjalankan mutasi, dan cara melacak status loading dan error.

- **useMutation**
  Hook useMutation React adalah API utama untuk mengeksekusi mutation dalam aplikasi Apollo. Untuk menjalankan mutation, pertama-tama Anda memanggil useMutation dalam komponen React dan meneruskannya ke mutasi yang ingin Anda jalankan. Selain fungsi bermutasi, kait useMutation mengembalikan objek yang mewakili status eksekusi mutasi saat ini. Bidang objek ini (tercantum dalam Hasil) menyertakan boolean yang menunjukkan apakah fungsi mutasi telah dipanggil, dan apakah hasil mutasi sedang dimuat.

- **updating local data**
  Saat Anda menjalankan mutasi, Anda memodifikasi data back-end. Biasanya, Anda kemudian ingin memperbarui data cache lokal Anda untuk mencerminkan modifikasi back-end. Misalnya, jika Anda menjalankan mutasi untuk menambahkan item ke daftar tugas, Anda juga ingin item tersebut muncul di salinan daftar yang di-cache.
  Cara paling mudah untuk memperbarui data lokal Anda adalah dengan mengambil kembali kueri apa pun yang mungkin terpengaruh oleh mutasi. Namun, metode ini memerlukan permintaan jaringan tambahan.
  Jika mutasi Anda mengembalikan semua objek dan bidang yang dimodifikasi, Anda dapat memperbarui cache secara langsung tanpa membuat permintaan jaringan tindak lanjut. Namun, metode ini semakin rumit seiring dengan semakin kompleksnya mutasi Anda.
  Jika Anda baru memulai dengan Apollo Client, sebaiknya ambil ulang kueri untuk memperbarui data cache Anda. Setelah itu berfungsi, Anda dapat meningkatkan respons aplikasi dengan memperbarui cache secara langsung.

- **refetching after update**
  Fungsi pembaruan mencoba mereplikasi modifikasi back-end mutasi di cache lokal klien Anda. Modifikasi cache ini disiarkan ke semua kueri aktif yang terpengaruh, yang memperbarui UI Anda secara otomatis. Jika fungsi pembaruan melakukan ini dengan benar, pengguna Anda segera melihat data terbaru, tanpa perlu menunggu jaringan lain pulang pergi.Namun, fungsi pembaruan mungkin membuat replikasi ini salah dengan menetapkan nilai yang di-cache secara tidak benar. Anda dapat "memeriksa ulang" modifikasi fungsi pembaruan Anda dengan mengambil ulang kueri aktif yang terpengaruh. Untuk melakukannya, Anda terlebih dahulu menyediakan fungsi panggilan balik onQueryUpdated ke fungsi mutasi Anda:
