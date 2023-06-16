import { templates, select } from '../settings.js';

class Home {
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
  }

  render(element){
    const thisHome = this;
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    const generatedHTML = templates.homeWidget();
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.title = thisHome.dom.wrapper.querySelector(select.home.title);
    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);
  }
}





export default Home;