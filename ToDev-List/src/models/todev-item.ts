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
        Object.keys(this).forEach(key => {
            if (values.hasOwnProperty(key))
                this[key] = values[key];
        });
    }
}
