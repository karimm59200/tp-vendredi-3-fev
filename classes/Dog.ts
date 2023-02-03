export default class Dog{
    private static _count: number = 0
    private _id: number;
    private _breed: string;
    private _name: string;
    private _image: string;
    private _age: number;
   
    
  
    constructor(breed: string, name: string, image:string, age: number) {
      this._id = ++Dog._count
      this._breed = breed
      this._name= name
      this._image= image
      this._age= age
     
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get breed() {
        return this._breed;
    }
    set breed(value) {
        this._breed= value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}

