import Route from '@ember/routing/route';
import { products } from '../data/database'; //imprts products array from other js file

export default class IndexRoute extends Route {

  model(){
      return products;
  }

}
