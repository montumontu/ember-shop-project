import Route from '@ember/routing/route';

export default Route.extend({
    totalcount:0,
    action:{
        totalcount(){
            this.set(this.totalcount,this.totalcount+1);
        }
    }
});
