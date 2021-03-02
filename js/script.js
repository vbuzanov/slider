
let slider = document.querySelector('.slider')
let window1 = document.querySelector('.window')
let thumbs = document.getElementById('thumbs')
let imgs = thumbs.children;
let buttons = document.querySelectorAll('.slider>span')

imgs[0].addEventListener('load',()=>{
    let imgW 
    let imgMR
    let imgML
    let imgWF = new Array(imgs.length)

    for (let i = 0; i < imgs.length; i++) {
        imgW = imgs[i].getBoundingClientRect().width
        imgMR = parseInt(getComputedStyle(imgs[i]).marginRight)
        imgML = parseInt(getComputedStyle(imgs[i]).marginLeft)
        imgWF[i] = imgW + imgMR + imgML
    }
 
    let imgsLength = imgs.length
    let pos = 0
    let count = 0
    buttons[count].style.color = 'rgb(212, 206, 206)';
    let interval = setInterval(moveImg, 3000);
    function moveImg(){
        buttons[count].style.color = 'gray';
        count++;
        pos -= imgWF[count]
        if(count>=imgsLength){
            count = 0
            pos = 0
            thumbs.style.left = 0 + 'px'
            buttons[count].style.color = 'rgb(212, 206, 206)';
        }
        thumbs.style.left = pos + 'px'
        buttons[count].style.color = 'rgb(212, 206, 206)';
    }

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener('mouseover', ()=>{
            imgs[i].style.transform = 'scale(1.1)';
            clearInterval(interval);
        })
        
        imgs[i].addEventListener('mouseout', ()=>{
            imgs[i].style.transform = '';
            interval = setInterval(moveImg, 3000);
        })
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', ()=>{
            clearInterval(interval);
            buttons[count].style.color = 'gray';
            count = i;
            pos = 0
            
            for (let j = 0; j < i; j++) {
                pos -= imgWF[j];
            }
        
            thumbs.style.left = pos + 'px'
            buttons[count].style.color = 'rgb(212, 206, 206)';
            interval = setInterval(moveImg, 3000);
        })
    }
})