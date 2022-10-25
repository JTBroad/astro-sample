import { makeAutoObservable } from 'mobx';

export class CountStore {
    count = 0;

    constructor(){
        makeAutoObservable(this);
    }
    
    increment = ()=>{
        this.count++;
    }
}