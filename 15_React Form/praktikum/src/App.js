import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const baseData = {
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: "",
    kelas: "",
    harapan: "",
  };

  const pattern = {
    nama: /^[a-zA-Z ]*$/,
    noHandphone: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
  };

  const suratKesungguhan = useRef(null);
  const [data, setData] = useState(baseData);
  const [errorMassage, setErrorMassage] = useState({
    nama: "",
    email: "",
    noHandphone: "",
    kelas: "",
    suratKesungguhan: "",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });

    // validate nama
    if (name === "nama") {
      if (!pattern.nama.test(value)) {
        setErrorMassage({
          nama: "nama hanya berupa alphabet",
        });
      } else {
        setErrorMassage({
          nama: "",
        });
      }
    }

    // validate noHandphone
    if (name === "noHandphone") {
      if (!pattern.noHandphone.test(value)) {
        setErrorMassage({
          ...errorMassage,
          noHandphone:
            "no handphone harus berupa angka dan kurang dari 14 karakter",
        });
      } else {
        setErrorMassage({
          ...errorMassage,
          noHandphone: "",
        });
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrorMassage = {
      nama: "",
      email: "",
      noHandphone: "",
      pendidikan: "",
      kelas: "",
      suratKesungguhan: "",
    };
    if (data.nama === "") {
      newErrorMassage.nama = "nama tidak boleh kosong";
    }else if(!pattern.nama.test(data.nama)) {
      newErrorMassage.nama = "nama hanya berupa alphabet"
    }

    if (data.email === "") {
      newErrorMassage.email = "email tidak boleh kosong"; 
    }

    if (data.noHandphone === "") {
      newErrorMassage.noHandphone = "nomor handphone tidak boleh kosong"; 
    }else if(!pattern.noHandphone.test(data.noHandphone)) {
      newErrorMassage.noHandphone = "no handphone harus berupa angka dan kurang dari 14 karakter"
    }

    if (data.pendidikan === "") {
      newErrorMassage.pendidikan = "pendidikan tidak boleh kosong"; 
    }

    if (data.kelas === "") {
      newErrorMassage.kelas = "kelas harus di pilih"; 
    }

    if (suratKesungguhan.current.value === "") {
      newErrorMassage.suratKesungguhan = "surat kesungguhan tidak boleh kosong"
      
    }
    setErrorMassage(newErrorMassage);

    if(errorMassage.email === "" && errorMassage.nama === "" && errorMassage.noHandphone === "" && errorMassage.kelas === "" && errorMassage.pendidikan === "" && errorMassage.suratKesungguhan === "") {
      alert("data kamu berhasil di simpan");
      setData({
        nama: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        harapan: "",
      });
    }
    
  };

  const handleReset = () => {
    setData({
      nama: "",
      email: "",
      noHandphone: "",
      pendidikan: "",
      kelas: "",
      harapan: "",
    })
  }
  
  return (
    <div className="App" style={{ textAlign: "left" }}>
      <form onSubmit={handleSubmit}>
        <label className="row">
          <div className="col">
            Nama Lengkap : <br />
            <input
              type="text"
              name="nama"
              value={data.nama}
              onChange={handleChange}
            />
            <p className="errorMassage">{errorMassage.nama}</p>
          </div>
          <div className="col">
            Email : <br />
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <p className="errorMassage">{errorMassage.email}</p>
          </div>
          <div className="col">
            No Handphone: <br />
            <input
              type="text"
              name="noHandphone"
              value={data.noHandphone}
              onChange={handleChange}
              maxLength="14"
              minLength="9"
            />
            <p className="errorMassage">{errorMassage.noHandphone}</p>
          </div>
          <div className="col">
            Latar Belakang Pendidikan : <br />
            <input
              type="radio"
              name="pendidikan"
              value="IT"
              onChange={handleChange}
              checked={data.pendidikan === "IT"}
              style={{ width: "auto", height: "auto" }}
            />{" "}
            IT
            <input
              type="radio"
              name="pendidikan"
              value="nonIT"
              onChange={handleChange}
              checked={data.pendidikan === "nonIT"}
              style={{ width: "auto", height: "auto" }}
            />
            Non IT
            <p className="errorMassage">{errorMassage.pendidikan}</p>
          </div>
          <div className="col">
            Kelas Coding Yang Di Pilih : <br />
            <select name="kelas" value={data.kelas} onChange={handleChange}>
              <option value="">Pilih Salah Satu Program</option>
              <option value="backend">Coding Backend with Golang</option>
              <option value="frontend">Coding Frontend with ReactJS</option>
              <option value="fullstack">Fullstack Developer</option>
            </select>
            <p className="errorMassage">{errorMassage.kelas}</p>
          </div>

          <div className="col">
            Foto Surat Kesungguhan :<br />
            <input
              type="file"
              ref={suratKesungguhan}
              style={{ width: "auto", height: "auto" }}
            />
            <p className="errorMassage">{errorMassage.suratKesungguhan}</p>
          </div>

          <div className="col">
            Harapan Untuk Coding Bootcamp ini: <br />
            <textarea
              value={data.harapan}
              name="harapan"
              onChange={handleChange}
              style={{ width: "100%", height: "5em" }}
            />
          </div>
        </label>
        <button>SUBMIT</button>
      </form>
        <button onClick={()=>{handleReset()}}>RESET</button>
    </div>
  );
}

export default App;
