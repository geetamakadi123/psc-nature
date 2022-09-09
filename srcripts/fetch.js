let searchImg = async (API, value) => {
    try {
        let res = await fetch(`https://api.unsplash.com/search/photos?query=${value}&per_page=28&client_id=${API}`);
        let data = await res.json();
        // console.log(data.results);
        return data;
    } catch (err) {
        console.log(err);

    }
}


// let append = (data, container) => {
//     data.forEach(({ alt_description, urls: { small } }) => {
        
//         let div = document.createElement("div");
//         let img = document.createElement("img");
//         img.setAttribute("class", "image")
//         // let d = document.createElement("div");
//         // d.setAttribute("class","name");
//         let h3 = document.createElement("h3");

//         img.src = small;
//         h3.innerText = alt_description;
//         // d.append(h4)
//         div.append(img,h3);
//         container.append(div);
         
//     })
   
// }

let append = (data)=> {
    let container=document.getElementById("container");

    container.innerHTML=null;

    data.forEach((el) => {
        let div=document.createElement("div");
        div.setAttribute("class", "image");
        let img = document.createElement("img");
        let h3 = document.createElement("h3");

        img.src =el.urls.small;
        h3.innerText = el.alt_description;

        div.append(img,h3);
        container.append(div);
    });
}



export { searchImg, append };