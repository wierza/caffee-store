import { templates } from '../settings.js';

class Products{
  constructor(element){
    const thisProducts = this;
    thisProducts.render(element);
  }
  render(element) {
    const thisProducts = this;
    thisProducts.dom = {};
    thisProducts.dom.wrapper = element;
    const generatedHTML = templates.productsWidget();
    thisProducts.dom.wrapper.innerHTML = generatedHTML;
  }
}












export default Products;