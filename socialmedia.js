const menuitems=document.querySelectorAll('.menu-item')

const messagenotification=document.getElementById('message-notifications')
const messages=document.querySelector('.messages')


const theme=document.getElementById('theme')
const thememodal=document.querySelector('.customize-theme')

const fontsize=document.querySelectorAll('.choose-size span')

var root=document.querySelector(':root')

const colorpalette=document.querySelectorAll('.choose-color span')

const b1=document.querySelector('.bg-1')
const b2=document.querySelector('.bg-2')
const b3=document.querySelector('.bg-3')

const changeactiveitems=()=>{
    menuitems.forEach(item=>{
        item.classList.remove('active')
    })
}

menuitems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeactiveitems()
        item.classList.add('active')
        if(item.id!='notifications'){
            document.querySelector('.notifications-popup').style.display='none'
        }
        else{
            document.querySelector('.notifications-popup').style.display='block'
            document.querySelector('#notifications .notification-count').style.display='none'
        }
    })
})
messagenotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)'
    setTimeout(()=>{
        messages.style.boxShadow='none'
    },2000)
    document.querySelector('#message-notifications .notification-count').style.display='none'
})

const openthememodal=()=>{
    thememodal.style.display='grid';
}

const closethememodal=(e)=>{
  if(e.target.classList.contains('customize-theme')){
    thememodal.style.display='none';
  }
}

thememodal.addEventListener('click',closethememodal)
theme.addEventListener('click',openthememodal)


const removeactivespan=()=>{
    fontsize.forEach(item=>{
        item.classList.remove('active')
    })
}



fontsize.forEach(size=>{
    let fontSize;
    size.addEventListener('click',()=>{
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty('----sticky-top-left','5.4rem')
            root.style.setProperty('----sticky-top-right','5.4rem')
            removeactivespan()
            size.classList.add('active')
         }else if(size.classList.contains('font-size-2')){
             fontSize='13px';
             root.style.setProperty('----sticky-top-left','5.4rem')
             root.style.setProperty('----sticky-top-right','-7rem')
             removeactivespan()
             size.classList.add('active')
         }else if(size.classList.contains('font-size-3')){
             fontSize='16px';
             root.style.setProperty('----sticky-top-left','-2rem')
             root.style.setProperty('----sticky-top-right','-17rem')
             removeactivespan()
             size.classList.add('active')
         }else if(size.classList.contains('font-size-4')){
             fontSize='19px';
             root.style.setProperty('----sticky-top-left','-5rem')
             root.style.setProperty('----sticky-top-right','-25rem')
             removeactivespan()
             size.classList.add('active')
         }
         
          document.querySelector('html').style.fontSize=fontSize

    })

     
})

const removecoloractivespan=()=>{
    colorpalette.forEach(item=>{
        item.classList.remove('active')
    })
}

colorpalette.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        if(color.classList.contains('color-1')){
            primaryHue=252
            removecoloractivespan()
            color.classList.add('active')
            
         }else if(color.classList.contains('color-2')){
            primaryHue=52
            removecoloractivespan()
            color.classList.add('active')
            
         }else if(color.classList.contains('color-3')){
            primaryHue=352
            removecoloractivespan()
            color.classList.add('active')
         }else if(color.classList.contains('color-4')){
            primaryHue=152
            removecoloractivespan()
            color.classList.add('active')
         }
         else if(color.classList.contains('color-5')){
            primaryHue=202
            removecoloractivespan()
            color.classList.add('active')
         }

         root.style.setProperty('--primary-color-hue',primaryHue)
          

    })

     
})


let lightcolorlightness
let darkcolorlightness
let whitecolorlightness

const changebg=()=>{
    root.style.setProperty('--light-color-lightness',lightcolorlightness)
    root.style.setProperty('--white-color-lightness',whitecolorlightness)
    root.style.setProperty('--dark-color-lightness',darkcolorlightness)
}

b2.addEventListener('click',()=>{
    lightcolorlightness='15%'
    whitecolorlightness='20%'
    darkcolorlightness='95%'
    b2.classList.add('active')
    b1.classList.remove('active')
    b3.classList.remove('active')
    changebg()
})

b3.addEventListener('click',()=>{
    lightcolorlightness='0%'
    whitecolorlightness='10%'
    darkcolorlightness='95%'
    b3.classList.add('active')
    b1.classList.remove('active')
    b2.classList.remove('active')
    changebg()
})