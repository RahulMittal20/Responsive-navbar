const navigation = document.querySelector('.navigation');
const menuItems = document.querySelectorAll('.menu li a');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    navigation.classList.add('scrolled');
  });

  item.addEventListener('mouseout', () => {
    if (window.scrollY <= 100) {
      navigation.classList.remove('scrolled');
    }
  });
});