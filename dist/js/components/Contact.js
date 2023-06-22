import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Contact {
  constructor(element) {
    const thisContact = this;

    thisContact.render(element);
  }

  render(element){
    const thisContact = this;
        
    const generatedHTML = templates.contactWidget();
    const generatedDom = utils.createDOMFromHTML(generatedHTML);
    const contactWrapper = document.querySelector(select.containerOf.contact);

    contactWrapper.appendChild(generatedDom);

    thisContact.dom = {
      wrapper: element,
      submitBtn: element.querySelector(select.contact.submitBtn),
    };

    thisContact.dom.inputs = {
      name: element.querySelector(select.contact.input.name),
      title: element.querySelector(select.contact.input.title),
      message: element.querySelector(select.contact.input.message),
    };
  }  
}

export default Contact;