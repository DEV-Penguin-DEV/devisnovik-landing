// Sandwich menu
const mainNavSandwich = document.querySelector('.main-header__mobile-menu-button');
const mainNav = document.querySelector('.main-header__mobile-menu-container');

export const MobileMenu = () => {
  if (mainNavSandwich) {
    mainNavSandwich.addEventListener('click', () => {
      if (!mainNav.classList.contains('main-header__mobile-menu-container--opened')) {
        mainNavSandwich.classList.remove('main-header__mobile-menu-button--closed-animation');
        mainNavSandwich.classList.add('main-header__mobile-menu-button--opened');
        mainNav.classList.remove('main-header__mobile-menu-container--closed');
        mainNav.classList.add('main-header__mobile-menu-container--opened');

      } else {
        mainNavSandwich.classList.remove('main-header__mobile-menu-button--opened');
        mainNavSandwich.classList.add('main-header__mobile-menu-button--closed-animation');

        mainNav.classList.add('main-header__mobile-menu-container--closed');
        mainNav.classList.remove('main-header__mobile-menu-container--opened');
      }
    });
  }
};
