import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/*
     На мобильных браузерах в высоту вьюпорта вставляется адерсная строка, что мешает верстке
     https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    */
const mobileViewPortHeight = window.innerHeight * 0.01;
const viewPortPropName = 'pf-mobileViewPortHeight';

addCssProperty(viewPortPropName, mobileViewPortHeight);

// Чтобы не лагала верстка в мобильном браузере когда прячется адресная строка
window.addEventListener('resize', () => {
  addCssProperty(viewPortPropName, mobileViewPortHeight);
});

function addCssProperty(name: string, px: number) {
  document.documentElement.style.setProperty(`--${name}`, `${px}px`);
}
