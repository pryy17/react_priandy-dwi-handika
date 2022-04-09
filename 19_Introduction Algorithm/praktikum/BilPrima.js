const apakahPrima = (bilangan) => {
    let faktor = 0;
    for(let i=1; i <= bilangan; i++) {
        if(bilangan%i == 0){
            faktor++
        }
    }

    if(faktor == 2){
        console.log("prima")
    }else{
        console.log("bukan prima")
    }
}

apakahPrima(2);
apakahPrima(3);
apakahPrima(4);
