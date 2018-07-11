import Component from '@ember/component';

export default Component.extend({

    totalcartcount:0,
    init() {
        console.log('counter-box instantiated');
        this._super(...arguments);
    },
    actions:{
        totalCartCount() {
            this.set('totalcartcount',this.get('totalcartcount')+1);
            console.log("total card");
            console.log(this.totalcartcount);
            this.get('onAction')(this.totalcartcount);
        }
    }
});
