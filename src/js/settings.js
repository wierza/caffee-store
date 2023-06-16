export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    productsWidget: '#template-products-widget',
    contactWidget: '#template-contact-widget',
  },
  containerOf: {
    pages: '#pages',
    home: '.page-home',
    products: '.page-products',
    contact: '.page-contact',
  },
  nav: {
    links: '.navbar-links a',
    contact: '#contact-nav',
  },
  home: {
    title: '.home-title'
  },
  products: {
    title: '.products-title'
  },
  contact: {
    title: '.contact-title'
  },
};
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates ={
  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
  productsWidget: Handlebars.compile(document.querySelector(select.templateOf.productsWidget).innerHTML),
  contactWidget: Handlebars.compile(document.querySelector(select.templateOf.contactWidget).innerHTML),
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
};