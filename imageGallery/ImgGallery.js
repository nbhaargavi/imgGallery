let img = document.createElement('img');
function openImg(n){

    let selectImage = n;
    let image = selectImage.src;
    img.src = image;
    img.alt = "image";
    document.getElementById("selected_img").appendChild(img);
    document.getElementById("full_image").style.display = "block";

}

function closeImg(){
    document.getElementById("selected_img").removeChild(img);
    document.getElementById("full_image").style.display = "none";
}
