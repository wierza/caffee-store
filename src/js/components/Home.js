import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(){
    const thisHome = this;
    thisHome.render();
  }

  render(){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();
    const generatedDom = utils.createDOMFromHTML(generatedHTML);
    const homeWrapper = document.querySelector(select.containerOf.home);

    homeWrapper.appendChild(generatedDom);

    thisHome.dom = {};
  }
}

export default Home;