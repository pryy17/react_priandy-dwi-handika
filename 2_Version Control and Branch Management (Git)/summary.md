# summary git

**versioning** adalah mengatur versi dari source code program

### konsep version control system

1. single user
2. centralized
3. distributed

### GIT

merupakan salah satu VCS yang populer di gunakan para developer untuk mengembangkan software bersama - sama

# setting GIT

**git init** untuk membuat repository pada file lokal yang nantinya ada folder.
**git clone** untuk membuat Salinan repository lokal.
**git config** pengaturan yang mengatur semua aspek tentang bagaimana tampak dan bekerja.

# saving changes GIT

**the staging area**

1. working directory
2. staging area
3. repository

**git status** untuk mengetahui status dari repository lokal.
**git add** menambahkan file baru pada repository yang dipilih.
**git commit** untuk menyimpan perubahan yang dilakukan, tetapi tidak ada perubahan pada remote repository.
**git diff** memberitahu kita secara mendetail apa saja perubahan yang terjadi di antara dua titik referensi Git.
**git stash** berperan untuk menyimpan semua progress yang sudah kamu lakukan sejak commit terakhir tanpa membuat sebuah commit untuk state itu sendiri.

**gitignore** file yang berisi daftar file apa yang tidak di kirim ke repository.

# inspecting repository

**git log** kita bisa melihat perubahan apa saja yang terjadi di sebuah repo.
**git checkout** sebagai perintah untuk mengecek kondisi file di setiap commit. Selain itu juga, perintah ini digunakan untuk berpindah dan membuat cabang.
**git reset** akan mengembalikan file ke kondisi sebelumnya, kemudian menghapus catatan sejarah commit beikutnya.

# syncing

**Git push** untuk mengirimkan perubahan file setelah di **commit** ke remote repository.
**git pull** dan **git fetch** adalah dua perintah untuk mengambil commit terbaru dari remote repository.

# branches

**git branch** Perintah untuk membuat cabang, kemudian diikuti dengan nama cabangnya. Maka akan membuat cabang sesuai nama yang di berikan.
**git merge** untuk membuat branch yang bercabang menjadi satu kembali atau dengan kata lain mengintegrasikan kembali branch tersebut menjadi satu.

**Pull request** adalah suatu permintaan untuk menggabungkan kode yang kita modifikasi dengan repositori utama atau repositori lain.
