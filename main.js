const btnSwitch = document.querySelector('#btnSwitch');
const html = document.querySelector('html');
console.log(html);

btnSwitch.addEventListener('click', function(){
    html.classList.toggle('dark')
    if(html.classList[0] === 'dark'){
        btnSwitch.classList.remove('after:left-0');
        btnSwitch.classList.add('dark:after:right-0');
    }else{
        btnSwitch.classList.add('after:left-0');
        btnSwitch.classList.remove('dark:after:right-0');
    }
})