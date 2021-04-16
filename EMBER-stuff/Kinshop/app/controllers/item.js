import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemController extends Controller {

   

    // tracked is use to ensure variables update on front-end automatically
    //WARNINGN: this value is only assigned once, better to send it from the router js
    @tracked color= this.model.colors[0].color;  // use this keyword to access data from routes js files
    
    @tracked isZoomed = false;
  
    //use get function when u r gonna peform an operation on the variable that ur getting from the routes js
    get image(){
        return this.model.colors.find(({ color }) => color === this.color).image;
    }

    

    //action is used for functions linked to event lisrteners
    @action
    onChangeColor(newColor) {
        this.color = newColor;
        //this.image = `beats-solo-${newColor}.png`
    }

    @action
    toggleZoom(){
        this.isZoomed = !this.isZoomed;
    }
}

