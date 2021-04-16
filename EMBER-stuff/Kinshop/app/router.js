import EmberRouter from '@ember/routing/router';
import config from 'ember-tutorial/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  //dynamic routing - you have to modify code in routes>item.js aswell to specify the model
  this.route('item', { path: '/item/:item_id'});

  //404 page
  this.route('not-found');

  //you can change path name in browser to make it more readable
  this.route('cart', { path: 'shopping-cart'});
});
