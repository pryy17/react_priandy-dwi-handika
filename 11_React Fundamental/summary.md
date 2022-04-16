# Fundamental React

- apa itu JSX.
  sintaksis ini adalah sebuah sintaksis ekstensi untuk JavaScript. Kami sarankan menggunakannya dengan React untuk mendeskripsikan bagimana antarmuka pengguna seharusnya terlihat. JSX mungkin akan mengingatkan Anda dengan sebuah bahasa _templat_, bedanya adalah JSX telah dilengkapi dengan kekuatan penuh dari JavaScript.

- React Component.
  Jika kita membuat aplikasi dengan **react** kita pasti selalu menggunakan **component**. **Component** adalah potongan kode kecil yang dapat di gunakan kembali (reusable) yang bertujuan agar user interface terpisah menjadi bagian-bagian kecil dan di satukan dan di render menjadi sebuah kode HTML . component pada react terbagi menjadi 2, function dan class.

- Component Composite and props
  **Props** adalah argumen yang diteruskan ke komponen **React**. **Props** diteruskan ke komponen melalui atribut HTML. Kemudian apa yang bisa di passing atau dikirim dalam **props**? Yang bisa dikirim dalam **props** bisa berupa data, variables, state function dan bahkan sebuah kelas. komposisi komponen terbagi dua yaitu, kontainmen dan spesialisasi

- react lifecycle
  Component — component di react js akan melewati tiga fase hidup, yaitu : 1. **Mounting** 2. **Updating** 3. **Unmounting**
  Pada setiap fase, components akan mengeksekusi fungsi atau method yang berbeda-beda. Fungsi — fungsi ini yang kemudian di sebut sebagai lifecycle methods.life cycle method yang umum di pakai, - render() - componentDidMount() - componentDidUpdate() - componentWillUnmount()

- Render Bersyarat
  pada react kita dapat membuat komponen berbeda yang mencakup prilaku yang di butuhkan. lalu, kita dapat merender hanya beberapa bagian saja berdasarkan state dari aplikasi anda.

  - if
  - iniline if dengan operator &&
  - inline if-else dengan condition operator
  - mencegah komponen untuk rendering

- structur directory
  pengelompokan berdasarkan fitur atau rute, pengelompokan berdasarkan jenis file, pengelompokan berdasarkan component
- styling inline
  terdapat 3 jenis styling pada react : classes dan CSS, atribut style, modul CSS
