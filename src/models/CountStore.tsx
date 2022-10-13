import { signal } from "@preact/signals-react";

export class CountStore {
    count = signal(0);
    
    increment = ()=>{
        this.count.value = this.count.value + 1;
    }
}