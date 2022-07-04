

window.addEventListener('load',function(){

    const pullDownButton = document.getElementById("lists")
    console.log(pullDownButton)
})

window.addEventListener('mouseover',function(){

    const pullDownButton =document.getElementById("lists")

    pullDownButton.addEventListener('mouseover',function(){

        pullDownButton.setAttribute("style","background-color:blue;")
 })
})

window.addEventListener('mouseout',function(){

    const pullDownButton =document.getElementById("lists")

    pullDownButton.addEventListener('mouseout',function(){
        pullDownButton.removeAttribute("style","background-color:red;")
    })


})

window.addEventListener('click',function(){

    const pullDownButton =document.getElementById("lists")

    pullDownButton.addEventListener('click',function(){
        pullDownButton.setAttribute('style',"background-color:green;")
    })
})
