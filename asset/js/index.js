// Hamburger Menu
const navigation = document.querySelector('.link-menu');
const checkbox = document.querySelector('#check');
const menuList = document.querySelector('.menu');
checkbox.addEventListener('click', function() {
    navigation.classList.toggle('show');
     menuList.classList.toggle('fix');
})

// Icon Scroll
const scrollTop = document.querySelector('.scroll');
window.addEventListener('scroll', function() {
    scrollTop.classList.toggle('scroll', window.scrollY > 700);
});

// Loading
const loading = document.querySelector('.loading');
window.addEventListener('load', function() {
    loading.style.display = "none";
})