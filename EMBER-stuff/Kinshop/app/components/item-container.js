import Component from '@glimmer/component';
import {tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemContainerComponent extends Component {
    // getting data passed down from index through parameter as an argument, use 'args' to get arguments
    image = this.args.product.colors[0].image;
    









    // tracked is use to ensure variables update on front-end automatically
    // @tracked number= 0;

    // //action is used for functions linked to event lisrteners
    // @action
    // addNumber() {
    //     this.number+=1;
    // }

}
