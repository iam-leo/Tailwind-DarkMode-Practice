const btnSwitch = document.querySelector('#btnSwitch');
const html = document.querySelector('html');
let theme = localStorage.getItem('theme');

//Recuperar dark mode si fue el ultimo utilizado o si el SO del dispositivo tiene dark mode habilitado
if(theme && theme === 'dark'){
    btnSwitch.classList.remove('after:left-0');
    btnSwitch.classList.add('dark:after:right-0');
    html.classList.add(theme);
}else if(!theme && window.matchMedia('(prefers-color-scheme: dark)').matches){
    btnSwitch.classList.remove('after:left-0');
    btnSwitch.classList.add('dark:after:right-0');
    html.classList.add('dark');
}

//Button switch
btnSwitch.addEventListener('click', function(){
    html.classList.toggle('dark')
    if(html.classList[0] === 'dark'){
        btnSwitch.classList.remove('after:left-0');
        btnSwitch.classList.add('dark:after:right-0');
        localStorage.setItem('theme', 'dark');
    }else{
        btnSwitch.classList.add('after:left-0');
        btnSwitch.classList.remove('dark:after:right-0');
        localStorage.setItem('theme', 'light');
    }
});