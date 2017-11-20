export class ToDevItem {
    $key: string;
    type: string;
    title: string;
    description: string;
    reminder: Date;    
    startDate: Date;
    endDate: Date;
    complete: boolean = false;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}