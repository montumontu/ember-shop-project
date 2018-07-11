import Component from '@ember/component';

export default Component.extend({

no_of_products:0,
actions: {
    cart()  { 
                this.set('no_of_products',this.get('no_of_products') + 1 );
                console.log(this.no_of_products);
                this.get('onAction')();
    },
}

});
