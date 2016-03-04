# storeshelf
[Heroku](http://storeshelf.herokuapp.com)

A multi-purpose store interface.

### Technologies
- Angular
- MongoDB
- Express
- Node.js
- Bourbon/Neat

### TODO
- Customizable Settings
- Add more customizable product creation options
- Implement updated inventory system
- Product/User Statistics using D3
- Update SKU generation
- Add order processing for store owners
- Media Queries for desktop resolutions
- Connect with Stripe
- Connect with SendGrid

### Concept
- Multi-purpose
- Highly customizable/reusability
- Easy to use
- No login barrier

### Challenges
Issues with the Yeoman Angular Fullstack generator were at large.  When using 
Jade and Gulp together the package will allow the user to run the server locally 
but when the user tries to run off of dist, the entire thing blows up.  No good 
when trying to push to heroku.

Another issue was that when editing a jade file, the auto rebuild feature of the 
package did not execute which meant restarting the server every time I wanted 
to change a view.

Issues came out of the box, seeing as the jade implementation for the generator seemed hacked in.

Solution was to debug the gulpfile and add jade file processing when executing 
the gulp build.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Ruby](https://www.ruby-lang.org) and then `gem install sass`
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
