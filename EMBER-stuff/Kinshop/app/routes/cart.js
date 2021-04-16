import Route from '@ember/routing/route';

export default class CartRoute extends Route {
    
    //sample data
    model() {
        const items = [{ price: 10}, { price: 15}];
        return items;
    }



// //METHOD1===============================================
// //calculate and update controler from route ============
//     setupController(controller, model) {
//         super.setupController(controller, model);
        
//         // calculate  subtotal
//         const subtotal = model.reduce((acc, item)=>{
//             return acc + item.price;
//         },0);
        
//         //set value inside of controller
//         controller.set('subtotal', subtotal);

//     }
}
