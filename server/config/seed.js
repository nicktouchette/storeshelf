/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Product from '../api/product/product.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Product.find({}).removeAsync()
  .then(() => {
    Product.createAsync({
      name: 'Heady Topper',
      category: 'IPA',
      price: 5.00,
      quantity: 23,
      sku: '12345',
      image: 'http://cdn.beeradvocate.com/im/beers/16814.jpg',
      description: '"An American Double IPA" 75 IBU 8.0% abv',
      attribute: [{
        name: "Size",
        values: [{
          value: '1 pint',
          price: 0,
          quantity: 23,
          subsku: '01'
        }]
      }]
    }, {
      name: 'Pliny The Elder',
      category: 'IPA',
      price: 6.00,
      quantity: 16,
      sku: '12346',
      image: 'http://cdn.beeradvocate.com/im/beers/7971.jpg',
      description: 'A double IPA by Russian River Brewing Company. 8% ABV',
      attribute: [{
        name: "Size",
        values: [{
          value: '12 oz',
          price: 0,
          quantity: 16,
          subsku: '01'
        }]
      }]
    }, {
      name: 'Trappist Westvleteren 12',
      category: 'Belgian',
      price: 8.00,
      quantity: 11,
      sku: '12347',
      image: 'http://cdn.beeradvocate.com/im/beers/1545.jpg',
      description: 'Brewed by monks in belgium!',
      attribute: [{
        name: "Size",
        values: [{
          value: '330ml',
          price: 0,
          quantity: 11,
          subsku: '01'
        }]
      }]
    }, {
      name: 'Founders KBS',
      category: 'Stout',
      price: 3.00,
      quantity: 23,
      sku: '12348',
      image: 'http://cdn.beeradvocate.com/im/beers/19960.jpg',
      description: 'This stout is brewed with a hint of coffee and vanilla then aged in oak bourbon barrels for over a year. Note, this is NOT simply barrel-aged Breakfast Stout. It is an entirely different beer. Now labeled as "KBS."',
      attribute: [{
        name: "Size",
        values: [{
          value: '12oz',
          price: 0,
          quantity: 23,
          subsku: '01'
        }]
      }]
    }, {
      name: 'Zombie Dust',
      category: 'IPA',
      price: 5.00,
      quantity: 54,
      sku: '12349',
      image: 'http://cdn.beeradvocate.com/im/beers/64228.jpg',
      description: 'This intensely hopped and gushing undead Pale Ale will be one’s only respite after the zombie apocalypse. Created with our marvelous friends in the comic industry.',
      attribute: [{
        name: "Size",
        values: [{
          value: '12oz',
          price: 0,
          quantity: 54,
          subsku: '01'
        }]
      }]
    }, {
      name: 'Awesome T-shirt',
      category: 'Clothing',
      price: 5.00,
      quantity: 30,
      sku: '12350',
      image: 'http://i.ebayimg.com/images/i/161344798048-0-1/s-l1000.jpg',
      description: 'Have an awesome t-shirt to go with your great beer!',
      attribute: [{
        name: "Size",
        values: [{
          value: 'S',
          price: 0,
          quantity: 10,
          subsku: '01'
        },{
          value: 'M',
          price: 0,
          quantity: 10,
          subsku: '01'
        },{
          value: 'L',
          price: 0,
          quantity: 10,
          subsku: '01'
        }]
      }]
    }, {
      name: 'Bullion',
      category: 'Rich',
      price: 7000,
      quantity: 23,
      sku: '12351',
      image: 'http://gold.vegas/wp-content/uploads/2015/05/gold-bullion.jpg',
      description: 'Invest in some metal.',
      attribute: [{
        name: "Size",
        values: [{
          value: 'Silver',
          price: 0,
          quantity: 10,
          subsku: '01'
        },{
          value: 'Gold',
          price: 493000,
          quantity: 10,
          subsku: '01'
        },{
          value: 'Platinum',
          price: 360000,
          quantity: 10,
          subsku: '01'
        }]
      }]
    })
    .then(() => {
      console.log('finished populating products');
    });
  });
