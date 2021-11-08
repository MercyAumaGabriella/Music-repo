const sponsor1 = document.getElementById("sponsorDetails_1");
const sponsor2 = document.getElementById("sponsorDetails_2");

const Image1 = document.getElementById("img_1");
const Image2 = document.getElementById("img_2");

Image1.onclick = function showMore_1(){

    if(sponsor1.style.display !== 'none'){
        sponsor1.style.display = 'none';
    } else {
        sponsor1.style.display = 'block';
    }
    
}

Image2.onclick = function showMore_2(){

    if(sponsor2.style.display !== 'none'){
        sponsor2.style.display = 'none';
    } else {
        sponsor2.style.display = 'block';
    }
}