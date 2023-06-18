export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    productWidget: '#template-products-widget',
    contactWidget: '#template-contact-widget',
  },
  containerOf: {
    pages: '#pages',
    home: '.page-home',
    products: '.page-products',
    contact: '.page-contact',
  },
  navLinks: {
    links: '.navbar a',
  },
  home: {
    productsHome: '.home-products',
  },
  products: {
    
  },
  contact: {
    submitBtn: '#submit-btn',
    input: {
      name: '#name',
      title: '#title',
      message: '#message',
    }
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
  productWidget: Handlebars.compile(document.querySelector(select.templateOf.productWidget).innerHTML),
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