const searchIcon = document.querySelector('.searchicon');
const searchTray = document.querySelector('.minor-nav');
const navbar = document.querySelector('.nav');
const hoverBackground = document.querySelectorAll('.logo');



searchIcon.addEventListener('click', () =>{
    
    if (!searchTray.classList.contains('minor-navv')){
        searchTray.classList.add('minor-navv');
        // navbar.style.backgroundColor = 'white';
        navbar.classList.add('navv');
        hoverBackground.forEach(logo =>{
            // logo.style.color ='black'
            logo.classList.add('loggo')
        })
        searchIcon.innerHTML = '<i class="fa-solid fa-xmark cancel"></i>';

    }
    else{
        searchTray.classList.remove('minor-navv');
        // navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove('navv');
        hoverBackground.forEach(logo =>{
            // logo.style.color ='white'
            logo.classList.remove('loggo')
        })
        searchIcon.innerHTML = '<i class="fa-solid fa-magnifying-glass logo"></i>'
    }

})
