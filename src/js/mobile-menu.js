// Sandwich menu
const mainNavSandwich = document.querySelector('.main-header__mobile-menu-button');
const mainNav = document.querySelector('.main-menu');

export const MobileMenu = () => {
  if (mainNavSandwich) {
    mainNavSandwich.addEventListener('click', () => {
      if (!mainNav.classList.contains('main-menu--opened')) {
        mainNavSandwich.classList.remove('main-header__mobile-menu-button--closed-animation');
        mainNavSandwich.classList.add('main-header__mobile-menu-button--opened');

        mainNav.classList.add('main-menu--opened');
      } else {
        mainNavSandwich.classList.remove('main-header__mobile-menu-button--opened');
        mainNavSandwich.classList.add('main-header__mobile-menu-button--closed-animation');

        mainNav.classList.remove('main-menu--opened');
      }
    });
  }
};
