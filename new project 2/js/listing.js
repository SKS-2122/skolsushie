const input = document.querySelector('#file-input');
const hide = document.getElementById('label-fileinput');
const preview = document.querySelector('.preview-images');
const btn1 = document.getElementById('file-input');
const box1= document.querySelector('.box-1');
const box2= document.querySelector('.box-2');
const box3= document.querySelector('.box-3');
const hide_box1= document.getElementById('next-box');
const hide_box2= document.getElementById('next-box-2');
const hide_box3= document.getElementById('next-box-3');
const backtobox2= document.getElementById('icon-back-3');
const backtobox1= document.getElementById('icon-back-2');
const backtobox0= document.getElementById('icon-back');

gotobox2 = function(){
    box3.classList.add("hidden");
    box2.classList.remove("hidden");
}
backtobox2.onclick = gotobox2;

gotobox1 = function(){
    box2.classList.add("hidden");
    box1.classList.remove("hidden");
}

backtobox1.onclick=gotobox1;





hidebox1 = function(){
    box1.classList.add("hidden");
    box2.classList.remove("hidden");
}
hide_box1.onclick=hidebox1;
hidebox2 = function(){
    box2.classList.add("hidden");
    box3.classList.remove("hidden");
}
hide_box2.onclick=hidebox2;

input.addEventListener('change', () => {
    const files = input.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (!file.type.match('image.*')) {
            
            continue;
        }

        const reader = new FileReader();

        reader.addEventListener('load', () => {
            const image = new Image();
            image.src = reader.result;

            preview.appendChild(image);
        });

        reader.readAsDataURL(file);


    }
});
hidetext = function(){
    hide.classList.add("hidden");
}
btn1.onclick=hidetext;


