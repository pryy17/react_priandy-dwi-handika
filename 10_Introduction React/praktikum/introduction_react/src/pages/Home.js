import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className="home-background">
    <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="alterra">
                        <Link to="/"><img className="logo-atas" src={"asset/img/logo-ALTA@2x.png"}/></Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                     <div className="container"> 
                        <div className="row align-items-center navig">
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><Link to="/" className="aktif">Home</Link></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><Link to="/About">ABOUT</Link></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                            <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><Link to="/Form">CONTACT</Link></div> 
                        </div>
                </div> 
                </div>    
            </div>
        </div> 
    </header>
    
        <div class="container h-100">
            <div class="row align-items-center isi-home">
                <div class="col-lg-4 col-md-12 col-sm-12  col-12">
                    <img id="foto-profil" src={"asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"} />
                </div>
                <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="main-p">
                        <p class="sapaan">Hi, my name is </p>
                        <p class="nama">Anne Sullivan</p>
                        <p class="hobi">I build things for the web</p>
                        <p class="tombol"><Link to="/About">Get In Touch</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
