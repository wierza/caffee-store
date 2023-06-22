import { settings, select, classNames } from './settings.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Product from './components/Product.js';

const app = {

  initData: function() {
    const thisApp=this;

    this.data = {};

    const url = settings.db.url + '/' + settings.db.products;
    
    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        thisApp.data.products = parsedResponse;
        thisApp.initProducts(); 
      });
  },

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.navLinks.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let PageMatchingHash  = thisApp.pages[0].id;
    
    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        PageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(PageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();
       
        const id = clickedElement.getAttribute('href').replace('#', '');
      
        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function(pageId){
    const thisApp = this;
  
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(classNames.nav.active, link.getAttribute ('href') == '#' + pageId);
    }
  },


  initProducts: function () {
    const thisApp = this;

    new Product(thisApp.data.products);
    
    console.log('thisApp.data.products', thisApp.data.products);
  },

  initHome: function(){
    const thisApp = this;
    const homeContainer = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeContainer);
  },


  initContact: function(){
    const thisApp = this;
    const contactContainer = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactContainer);
  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
    thisApp.initHome();
    thisApp.initContact();
  },
};

app.init();