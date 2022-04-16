# Apollo - Client

Apollo Client adalah perpustakaan manajemen status komprehensif untuk JavaScript yang memungkinkan Anda mengelola data lokal dan jarak jauh dengan GraphQL. Gunakan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI Anda secara otomatis.

Apollo Client membantu Anda menyusun kode dengan cara yang ekonomis, dapat diprediksi, dan deklaratif yang konsisten dengan praktik pengembangan modern. Pustaka inti @apollo/client menyediakan integrasi bawaan dengan React, dan komunitas Apollo yang lebih besar memelihara integrasi untuk lapisan tampilan populer
lainnya.

**Install on react**

- Create new React JS project
  npx create-react-app react-graphql
- Install GraphQL and apollo client
  yarn add graphql @apollo/client
- Don’t forget to commit changes to track progress

**fitur dalam apollo client**.

- Pengambilan data deklaratif: Tulis kueri dan terima data tanpa melacak status pemuatan secara manual.
- Pengalaman pengembang yang luar biasa: Nikmati alat yang bermanfaat untuk TypeScript, Chrome / Firefox devtools, dan VS Code.
- Didesain untuk React modern: Manfaatkan fitur React terbaru, seperti hook.
- Dapat diadopsi secara bertahap: Jatuhkan Apollo ke aplikasi JavaScript apa pun dan gabungkan fitur demi fitur
- Kompatibel secara universal: Gunakan pengaturan build apa pun dan GraphQL API apa pun.
- Berbasis komunitas: Berbagi pengetahuan dengan ribuan pengembang di komunitas GraphQL.

**Apollo Client Next JS Setup**

- Go to src folder
- Create apollo-client.js file inside src folder
- Create apolloClient and export
- Setting apollo provider, in index.js import ApolloProvider, and apollo-client

**query with apollo client**

- Impor gql dan useQuery lalu tulis kueri Anda, atau Anda dapat menyalin dari konsol hasura.
- Dapatkan data awal dengan melakukan kueri di server, panggil useQuery di atas kode Anda
  data: Objek yang berisi hasil kueri GraphQL Anda setelah selesai
  kesalahan: Jika kueri menghasilkan satu atau lebih kesalahan, objek ini berisi serangkaian kesalahan
  loading: Jika benar, kueri masih dalam penerbangan dan hasilnya belum dikembalikan.
- Konsumsi data dalam kode jsx Anda, perhatikan bahwa dalam data permintaan pertama adalah nol jadi perlu menggunakan rantai opsional untuk menghindari kesalahan

**Mutation with Apollo Client**

- Mutation Insert Data with Apollo Client
- Mutation Update Data with Apollo Client
- Mutation Delete Data with Apollo Client

**Subcribtion with Apollo Client**
