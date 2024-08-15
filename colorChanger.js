const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(box){
    box.addEventListener('click',function(color){
        if(color.target.id === 'box1'){
            body.style.backgroundColor = '#7C00FE'
        }
        if(color.target.id === 'box2'){
            body.style.backgroundColor = '#F9E400'
        }
        if(color.target.id === 'box3'){
            body.style.backgroundColor = '#FFAF00'
        }
        if(color.target.id === 'box4'){
            body.style.backgroundColor = '#F5004F'
        }
        if(color.target.id === 'box5'){
            body.style.backgroundColor = '#A28B55'
        }
    })
})