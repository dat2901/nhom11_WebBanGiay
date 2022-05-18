const addressbtn = document.querySelector('#address-from')
const addressclose = document.querySelector('#address-close')
const rightnext = document.querySelector('.fa-angle-right')
let index = 0
const imgnumber = document.querySelectorAll('.slider-container-left-top img')
const rightback = document.querySelector('.fa-angle-left')
console.log(imgnumber.length)
addressbtn.addEventListener("click",function()
{
    document.querySelector('.address-from').style.display ="flex"
})

addressclose.addEventListener("click",function()
{
    document.querySelector('.address-from').style.display ="none"
})

rightnext.addEventListener("click",function()
{
    index = index+1
    if ( index>imgnumber.length-1)
    {
        index=0
    }
    document.querySelector(".slider-container-left-top").style.right = index * 100+"%"
})

rightback.addEventListener("click",function()
{
    index = index-1
    if ( index<=0)
    {
        index=imgnumber.length
    }
    document.querySelector(".slider-container-left-top").style.right =  index * 100+"%"
})
//Silde animeision//
const imgnumberli = document.querySelectorAll('.slider-container-left-bottom li')
imgnumberli.forEach(function(image,index)
{
    image.addEventListener("click",function()
    {
        removeactive()
        document.querySelector(".slider-container-left-top").style.right = index * 100+"%"
        image.classList.add("active")
    })
})
function removeactive()
{
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//slider//
function imgauto()
{
    index = index + 1
    if ( index>imgnumber.length-1)
    {
        index=0
    }
    removeactive()
    document.querySelector(".slider-container-left-top").style.right = index * 100+"%" 
    imgnumberli[index].classList.add("active")
}
setInterval (imgauto,4000)
//slider23//
const imgnumbertwo = document.querySelectorAll('.Slider-product-one-containe-items')
const rightnextslider = document.querySelector('.fa-angle-right-two')
rightnextslider.addEventListener("click",function()
{
    index = index+1
    if ( index>imgnumbertwo.length-1)
    {
        index=0
    }
    document.querySelector(".Slider-product-one-containe-items-conten").style.right = index * 100+"%"
})
const rightbackslider = document.querySelector('.fa-angle-left-two')
rightbackslider.addEventListener("click",function()
{
    index = index-1
    if ( index<=0)
    {
        index=imgnumbertwo.length-1
    }
    document.querySelector(".Slider-product-one-containe-items-conten").style.right =  index * 100+"%"
})