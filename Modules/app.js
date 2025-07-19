const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('test',()=>{
    console.log("Events being Listened through .on and through .emit it is triggered");
});
eventEmitter.emit('test');
class Person extends EventEmitter
{
    constructor(name,age,gender){
        super();
        this._name = name;
        this._age =age;
        this._gender =gender;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;

    }
    get gender(){
        return this._gender;
    }
}
let pupil = new Person("yashasvi", 23,"Female");
pupil.on('personInfo',()=>{
    console.log("Name of the person is ",pupil.name );
    console.log("Age of the person is ",pupil.age );
    console.log("Gender of the person is ",pupil.gender );
    
});
pupil.emit('personInfo');