# global state management

jika kita ingin membuat beberapa halaman yang menggunakan state yang sama dan sinkron (Jika terjadi perubahan state di halaman A maka halaman B juga harus berubah) pada react native, ada baiknya kita menggunakan satu sumber data yang sama untuk meyakinkan bahwa data yang diambil akan selalu sama.

## REDUX

Redux adalah library yang membantu kita dalam menangani **_state global_** (State yang sama yang dipakai di beberapa halaman / komponen).Redux tidak hanya membantu kita untuk memudahkan manajemen state antar halaman, tapi juga antara komponen induk(parent) dengan anaknya(child) begitu juga sebaliknya.
**kapan harus menggunakan redux?**

1.  Banyak state yang perlu ditaruh di banyak tempat
2.  State pada app sering berubah
3.  Logic untuk mengubah state kompleks
4.  Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5.  Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

- redux library dan tools yaitu : React-Redux, Redux Toolkit, Redux DevTools Extension,
- komponen penting redux yaitu : 1. action, Digunakan untuk memberikan informasi dari aplikasi ke store 2. reducer, Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru 3. store, Objek sentral yang menyimpan state pada aplikasi

- memakai dan mengubah state dengan hooks dan connect.

**redux thunk** adalah redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action, Untuk menghandle side effect logic seperti logic synchronous kompleks yang perlu mengakses store dan juga logic async seperti request data
**redux persist** adalah satu dari sekian banyak library dari keluarga redux yang berguna untuk menyimpan state anda dan secara otomatis akan ber-rehidrasi ketika aplikasi kembali dijalankan.

## data fetching

**Fetch** merupakan (API) atau fungsi dasar untuk meminta sumber daya melalui jaringan, Secara dasar berhubungan dengan request & response (permintaan/tanggapan) yang dapat digunakan hampir di semua jenis browser.
Cara - cara untuk fetching data di react :

1.  Fetch API
2.  Axios
3.  React Query Librar
