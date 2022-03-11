class user { // Problem 1 - analysis ===============
    var id;
    var username;
    var password;
}

class userservice {
    user[] users = [];

    user[] getallusers() {
        return users;
    }

    user getuserbyid(userid) {
        return users.filter(userid);
    }
}

// berapa banyak kekurangan dalam penulisan kode tersebut?
    // ada 5

//  bagian mana saja terjadi kekurangan tersebut?
    // baris 1, penamaan class "user{}" seharusnya di awali huruf besar atau PascalCase contoh "User{}".
    // baris 7, penamaan class "userservice{}" seharusnya di awali huruf besar atau dengan PascalCase contoh "UserCase{}".
    // baris 10, penamaan function dan parameter sebaiknya menggunakan camelCase
    // baris 14 dan 15, penamaan function dan parameter sebaiknya menggunakan camelCase contoh getUserById(userId).

// tuliskan alasan dari setiap kekurangan tersebut
    // baris 1 dan 7 menggunakan penuh huruf kecil pada penamaan class, jarang di gunakan oleh programmer untuk menamai class, karna agak sulit membedakan class dengan function
    // baris 10,14,15, menggunakan penuh huruf kecil pada penamaan function dan parameter, membuat penamaan agak sulit di fahami karna harus menejermahkan spasi antar kata.


//=============== problem 2 - Rewrite ===================
// hasil Rewrite clean Code
class Kendaraan {
    var totalRoda = 0;
    var kecepatanPerjam = 0;
}

class Mobil extends Kendaraan {
    void berjalan() {
        tambahKecepatan(10);
    }

    tambahKecepatan(var kecepatanBaru) {
        kecepatanPerjam = kecepatanPerjam + kecepatanBaru;
    }
}

void main() {
    mobilCepat = new Mobil();
    mobilCepat.berjalan();
    mobilCepat.berjalan();
    mobilCepat.berjalan();

    mobilLamban = new mobil();
    mobilLamban.berjalan();
}
// hasil Rewrite