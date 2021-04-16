//holds variables displayed on the page

import Controller from '@ember/controller';

export default class CartController extends Controller {

//METHOD2===============================================
//calculate and update controlLer from route ===========
//if using this method delete the other subtotal  varibale below, which is now commnted out
get subtotal(){ 
    
    return this.model.reduce((acc, item)=>{
           // return acc + item.price;
           return 0;
        }, 0);
};

get tax(){ 
    
   // return 0.09 * this.subtotal;
   return 0;
};

get total(){ 
    
   // return this.subtotal + this.tax;
   return 0;
};


//subtotal = 0; use these variables if u set controler from route
// tax = 0;
// total = 0;
}
