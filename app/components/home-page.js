import Component from '@ember/component';

export default Component.extend({
    init() {
        console.log('counter-box instantiated');
        this._super(...arguments);
    },
    totalcount:1,
    actions:{
        totalcounter(){
            console.log("homepager"+this.get('totalcount'));
            this.set('totalcount',this.get('totalcount')+1);
            console.log("homepager"+this.get('totalcount'));
        }
    },
});
