# React Hook

Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.memungkinkan Anda untuk “mengaitkan” state dan fitur-fitur lifecycle React dari function component. Hooks tidak dapat berfungsi didalam kelas.

- Hooks Dasar

  1. useState
  2. useEffect
  3. useContext

- Hooks Tambahan
  1. useReducer
  2. useCallback
  3. useMemo
  4. useRef
  5. useImperativeHandle
  6. useLayoutEffect
  7. useDebugValue

## Implementasi useState & useEffect di Component

- **useState()** adalah sebuah Hook, dan akan mengembalikan nilai dari state (pada contoh diatas: name) dan fungsi yang bisa kita gunakan untuk mengubah nilai tersebut (setName). Fungsi setName disini mirip dengan cara kerja this.setState.
- **useEffect()** Effect Hook memungkinkan kita melakukan efek samping (side effects) di dalam function component componentDidMount, componentDidUpdate, dan componentWillUnmount ≈ useEffect, Ada dua jenis : Butuh pembersihan dan tidak butuh pembersihan,Effect Hook, **useEffect** , menambahkan kemampuan untuk melakukan “efek samping” dari sebuah function component. Hook ini memiliki **fungsi** yang sama dengan componentDidMount , componentDidUpdate , dan componentWillUnmount pada kelas React, tetapi disatukan menjadi satu API.

## Custom Hooks

Membuat Hook Kita sendiri memungkinkan Kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.sebuah mekanisme untuk menggunakan kembali logika stateful (seperti mengatur subscription dan mengingat nilai saat ini), tetapi setiap waktu Anda menggunakan **hook** kustom, semua state dan efek itu sepenuhnya terisolasi.
