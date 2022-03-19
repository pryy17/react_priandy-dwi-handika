# React Router

1. **apa itu router ?**
   Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA(single page aplication)
   **apa itu single page apliaction?** merupakan salah satu jenis aplikasi website di mana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam apliaksi tersebut

2. menggunakan url parameter pada react
   Parameter URL adalah cara untuk meneruskan informasi tentang klik melalui URL-nya. Anda dapat memasukkan paramater URL ke dalam URL sehingga URL melacak informasi tentang klik. Parameter URL terdiri dari kunci dan nilai yang dipisahkan menggunakan tanda sama dengan (=) dan digabungkan dengan ampersand (&). Parameter URL. adalah suatu parameter yang nilainya ditetapkan .secara dinamis. di URL halaman.

3. Hook Routing React

   - useHistory
     useHistory memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi.
   - useParams
     useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari <Route> saat ini.
   - useRouteMatch
     useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti <Route>. Ini sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar-benar merender <Route>.
