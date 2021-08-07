function film (){
    return new Promise ((Tittle, False) => {
        let nonton = prompt ('Masukan judul film?')
        if (nonton == Tittle){
            setTimeout(() => {
                Tittle (`The avengers`)
            }, 2000)
        } else {
            False('Maaf tidak menerima selain marvel!')
        }
    })
}
async function panggilFilm (){
    try {
        let tayang = await film()
        console.log(tayang);
    } catch (eror){
        console.error(eror);
    }
} 
panggilFilm()