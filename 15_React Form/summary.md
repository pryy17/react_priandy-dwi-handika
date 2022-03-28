# React Form

**Form** merupakan salah satu bentuk halaman web yang digunakan untuk menerima masukan dari pengguna, untuk selanjutnya masukan dari pengguna tersebut diolah menggunakan bahasa pemrograman web, baik secara server side scripting. Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya.Dalam react akan ada banyak hal kita pelajari dari Form. Seperti bagaimana menghandle inputan? Bagaimana memvalidasi inputan dsb.

-**jenis type form**
text (default), button, color, checkbox ,date, date time-local, email, file, hidden dll

## controlled component

Pada HTML, elemen form seperti `<input>`, `<textarea>`, dan `<select>` biasanya menyimpan _state_ mereka sendiri dan memperbaruinya berdasarkan masukan dari pengguna. Di React, _state_ yang dapat berubah seperti ini biasanya disimpan pada properti dari komponen, dan hanya akan diubah menggunakan [`setState()`]. yaitu Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukan pengguna selanjutnya.Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai ”controlled component“. contoh: Kita bisa memasukkan array ke atribut value, yang memungkinkan kita memilih beberapa opsi dalam tag select

## uncontrolled component

Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM. Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component.

## controlled component vs uncontrolled component

dengan uncontrolled component, kita harus 'menarik' nilai dari field saat kita membutuhkannya. Ini bisa terjadi ketika formulir di submit.Itu adalah cara paling sederhana untuk mengimplementasikan input formulir. Tentu saja ada kasus yang valid untuk menggunakannya: dalam form sederhana dan saat belajar React.Namun, uncontrolled input tidak powerful.

sedangkan controlled component, Sebuah controlled input menerima nilai saat ini sebagai prop, serta callback untuk mengubah nilai tersebut. Kita bisa mengatakan ini adalah cara yang lebih "React way" untuk pendekatan ini (yang tidak berarti harus selalu menggunakannya).Tetapi nilai input ini harus ada di state yang disimpan di suatu tempat. Biasanya, komponen yang merender input (alias form component) menyimpannya di state-nya. Tentu saja, itu bisa dalam state komponen lain, atau bahkan di penyimpanan state terpisah (separate state store), seperti Redux .
