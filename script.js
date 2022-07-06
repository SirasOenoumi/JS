

window.addEventListener('load',function(){

    const pullDownButton = document.getElementById("lists")

})

window.addEventListener('mouseover',function(){

    const pullDownButton =document.getElementById("lists")


    pullDownButton.addEventListener('mouseover',function(){

        this.setAttribute("style","background-color:blue;")
 })
})

window.addEventListener('mouseout',function(){

    const pullDownButton =document.getElementById("lists")


    pullDownButton.addEventListener('mouseout',function(){
        this.removeAttribute("style","background-color:red;")
    })


})

window.addEventListener('click',function(){

    const pullDownButton = document.getElementById("lists")
    const pullDownParents = document.getElementById("pull-down")

    pullDownButton.addEventListener('click',function(){
       pullDownParents.setAttribute("style" , "display:block;")

    })


})
