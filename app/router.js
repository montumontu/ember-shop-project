import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  
  this.route('shop/products', { path: 'shop/products' });
  this.route('shop', function() {
    this.route('products');
  });
});

export default Router;
