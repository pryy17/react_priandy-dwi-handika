# graphQL
GraphQL adalah bahasa kueri untuk API Anda, dan runtime sisi server untuk mengeksekusi kueri menggunakan sistem tipe yang Anda tetapkan untuk data Anda. GraphQL tidak terikat ke database atau mesin penyimpanan tertentu dan sebaliknya didukung oleh kode dan data Anda yang ada.
Layanan GraphQL dibuat dengan mendefinisikan jenis dan bidang pada jenis tersebut, kemudian menyediakan fungsi untuk setiap bidang pada setiap jenis

**graphql core feature **

 - query
query GraphQL digunakan untuk membaca atau mengambil nilai sementara mutasi digunakan untuk menulis atau memposting nilai. Dalam kedua kasus tersebut, operasinya adalah string sederhana yang dapat diurai dan ditanggapi oleh server GraphQL dengan data dalam format tertentu. Format respons populer yang biasanya digunakan untuk aplikasi seluler dan web adalah JSON.
 - mutation
 Mutasi memungkinkan Anda untuk memodifikasi data sisi server, dan juga mengembalikan objek berdasarkan operasi yang dilakukan. Ini dapat digunakan untuk menyisipkan, memperbarui, atau menghapus data. Dgraph secara otomatis menghasilkan mutasi GraphQL untuk setiap jenis yang Anda tentukan dalam skema Anda.
 - subscribtion
 fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat peristiwa tertentu terjadi. Langganan biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien langganannya.

**Hasura**
Hasura.io (gratis dan open source) adalah GraphQL yang digabungkan dengan PosgreSQL. Sehingga, untuk membuat API tidak perlu lagi banyak setup dan banyak kode. Cukup menggunakan Hasura.io, kita sudah bisa delivery API menggukana GraphQL. Yang diperlukan pertama kali adalah membuat basisdata yang bagus.