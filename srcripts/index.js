// Link:- `https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=S5vipoDldwtWUoR_LDssbl87_oNMWUcI34hH_EUV03k`
// console.log("hii");
//  access key = "S5vipoDldwtWUoR_LDssbl87_oNMWUcI34hH_EUV03k" 
//  secret key = "Az1LJ2WFbo7yzJEpZwrdqQcLj3nSdLhZU1a8g5vT3B0" 

const API = "dDh-O6duEH9-Et2s6M7319d-cVn34x9cFEOdr5obvg8";

import navbar from "../component/navbar.js";

let n = document.getElementById("navbar");
n.innerHTML = navbar();

import { searchImg, append } from "./fetch.js";


let search = (e) => {
    if (e.key == "Enter") {
        let value = document.getElementById("query").value;
        searchImg(API, value).then((data) => {
            // console.log(data.results);
            let container = document.getElementById("container");
            container.innerHTML = null;
            append(data.results, container);
        });

    }
};
document.getElementById("query").addEventListener("keydown", search);

let categories = document.getElementById("categories").children;

// console.log(categories);



function cSearch(){
    // console.log(this.id);
    searchImg(API, this.id).then((data) => {
        // console.log(data);
        let container = document.getElementById("container");
        container.innerHTML = null;
        append(data.results, container);
    });
}

for(let el of categories){
    el.addEventListener("click", cSearch)
} 

// let searchImg = async () => {
//     let query = document.getElementById("query").value;
//     try{
//         let res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=20&client_id=S5vipoDldwtWUoR_LDssbl87_oNMWUcI34hH_EUV03k`);
//         let data = await res.json();
//         console.log(data);

//     }catch(err){
//         console.log(err);

//     }
// }