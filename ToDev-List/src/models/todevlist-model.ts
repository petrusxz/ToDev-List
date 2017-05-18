export class ToDevListModel {
 
    title: string = '';
    description: string = '';
    startDate: string = '';
    endDate: string = '';
    complete: boolean = false;
    
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}