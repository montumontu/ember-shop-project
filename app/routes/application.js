import Route from '@ember/routing/route';

export default Route.extend({

    carttotal:78,
    model() {
        let products = [{name:'Cheeery',price:10,image:'cheery'}, {name:'Banana',price:10,image:'Bananas'}, {name:'Apple',price:80,image:'Apple'}];
        return products;
    },


});
