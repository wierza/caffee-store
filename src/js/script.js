import { settings, select, classNames } from './settings.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Products from './components/Products.js';
const app = {

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

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
        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');
        /* run thisApp.activatePage eith that id */
        thisApp.activatePage(id);

        /*change URL hash */
        window.location.hash = '#/' + id;

      });
    }
    
  },

  activatePage: function(pageId){
    const thisApp = this;
    /*add class 'active' to maching page, remove from non-maching*/
    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /*add class 'active' to maching link, remove from non-maching*/
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute ('href') == '#' + pageId);
    }

  },

  initData: function() {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        
      });
  },

  initHome: function(){
    const thisApp = this;
    const homeContainer = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeContainer, thisApp.data);
  },

  initProducts: function(){
    const thisApp = this;
    const productsContainer = document.querySelector(select.containerOf.products);
    thisApp.products = new Products(productsContainer, thisApp.data);
  },

  initContact: function(){
    const thisApp = this;
    const contactContainer = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactContainer, thisApp.data);
  },

  init: function() {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    thisApp.initHome();
    thisApp.initProducts();
    thisApp.initContact();
  },
};

app.init();