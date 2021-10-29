let generate_btn=document.querySelector(".generate_btn");
generate_btn.addEventListener("click",fetchPics);

function fetchPics(){
    let catsImgDiv = document.querySelector(".catsImgDiv")
    catsImgDiv.innerHTML='';
    fetch("https://api.thecatapi.com/v1/images/search") .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
        let catsImgUrl=data[0].url;
        let catImgEl = document.createElement("img")
        catImgEl.setAttribute('src',`${catsImgUrl}`)
        catImgEl.classList.add("showcase")
        let catsImgDiv = document.querySelector(".catsImgDiv")
        catsImgDiv.appendChild(catImgEl);
    })
    .catch (err=>console.log(err))
}