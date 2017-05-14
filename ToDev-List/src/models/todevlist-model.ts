export class ToDevListModel {
 
    title: string = '';
    complete: boolean = false;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}