window.onload = () => {
  // nav bar switch
  (() => {
    const navItems = document.querySelectorAll('nav ul li a');
    let activeIndex = 0;
    navItems.forEach((item, index) => {
      const classList = [...item.classList];
      if (classList.find(ite => ite === 'active')) {
        activeIndex = index;
      }
      item.addEventListener('click', () => {
        if (index === activeIndex) {
          return false;
        }
        navItems[activeIndex].classList.remove('active');
        item.classList.add('active');
        activeIndex = index;
        console.log('newactiveIndex', activeIndex);
      });
    });
  })();

  // hots change body backgroundImage
  (() => {
    const hots = document.querySelectorAll('main .hots img');
    console.log(hots);

    hots.forEach(item => {
      item.addEventListener('click', () => {
        console.log(item.src);
      });
    });
  })();
};
