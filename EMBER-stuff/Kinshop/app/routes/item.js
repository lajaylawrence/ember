import Route from '@ember/routing/route';
import { products } from '../data/database'; //imprts products array from other js file

export default class ItemRoute extends Route {
    //specification for dynamic endpoints ================
    model(params) { // gets item id from URL
        const { item_id} = params;

        //getting item details, find function makes u find item in a aray based on the key given and returns the object with that property
         const product = products.find(({ id }) => id === item_id ); 
         
        return product;
    }
    //===============================================


    //send value to controller
    setupController(controller, model){
        super.setupController(controller, model)
        controller.color = model.colors[0].color;
    }
}
