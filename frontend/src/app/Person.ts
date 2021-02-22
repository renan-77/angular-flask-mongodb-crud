import {Sex} from './Sex';
import {Address} from './Address';

export class Person{
    constructor(public name: string, public sex: Sex, public address: Address[]) {
    }
}
