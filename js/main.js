/* ClassWork + Додати до MyArray методи:
- some
- every
- map */
/*Version 1*/
function MyArray() {
    this.length = 0;
  }
  
  MyArray.prototype.push = function (...args) {
    for (const v of args) {
      this[this.length++] = v;
    }
    return this.length;
  }
  
  MyArray.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
  
  MyArray.prototype.filter = function (callback) {
    const myArray2 = new MyArray();
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            myArray2.push(this[i]);
        }
    }
    return myArray2;
  }
  MyArray.prototype.some = function(callback){
    for(let i = 0; i < this.length; i++){
      if(callback(this[i], i, this) ){
        return true;
      }
    }
    return false;
  }
  MyArray.prototype.every = function(callback){
    for(let i = 0; i< this.length; i++){
      if(!callback(this[i],  i, this)){
        return false;
      }
    }
    return true;
  }
  MyArray.prototype.map = function(callback){
    let mapResult = [];
    for (let i = 0; i < this.length; i++) {
      mapResult.push(callback(this[i], i, this));
    }
    return mapResult;
  }
  
const myArray = new MyArray();

myArray.push(11, 22, 33);

myArray.forEach((value, index, arr) => console.log(value, index, arr));

const newArr = myArray.filter((value) => value % 2 === 0); 
console.log(newArr);

const mapArr = myArray.map((value)=> value + 5);
console.log(`${mapArr} - map`);


/*На 12 балів:
Попереднє завдання + 
Переписати MyArray, використовуючи синтаксис класів.
Додати до MyArray методи:
- pop
- додати метод reduce (можно використати рекурсію)
 */

/*Class version */

class MyClassArray{
  constructor(){
    this.length = 0;
  }

  push(...args){
    for (const v of args) {
      this[this.length++] = v;
    }
    return this.length;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }


  filter(callback) {
    const myArray2 = new MyClassArray();
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            myArray2.push(this[i]);
        }
    }
    return myArray2;
  }

  some(callback){
    for(let i = 0; i < this.length; i++){
      if(callback(this[i], i, this) ){
        return true;
      }
    }
    return false;
  }

  every(callback){
    for(let i = 0; i< this.length; i++){
      if(!callback(this[i],  i, this)){
        return false;
      }
    }
    return true;
  }

  map(callback){
    let mapResult = new MyClassArray();
    for (let i = 0; i < this.length; i++) {
      mapResult.push(callback(this[i], i, this));
    }
    return mapResult;
  }

  pop(){
    const lastValue = this[this.length -1]
    delete this[--this.length];
    return lastValue;
  }

  reduce(callback, initial){
    let accum;
    let startIndex;
    if(initial !== undefined){
      accum = initial;
      startIndex = 0;
    }else{
      accum = this[0];
      startIndex = 1;
    }

    for(let i = startIndex; i < this.length; i++ ){
        accum = callback(accum, this[i], i, this);
    }
    return accum;
  }

}


const myArr1 = new MyClassArray();

myArr1.push(1,2,3,4,5,1,2,4,2,4,2)
console.log(myArr1);

const pop = myArr1.pop()
console.log(myArr1);
console.log(pop);
const poped2 = myArr1.pop()
console.log(myArr1);
console.log(poped2);

const testArr = new MyClassArray();
testArr.push(1,2,3,4,5);
const redArr = testArr.reduce((accum, currentValue)=> accum + currentValue);
console.log(redArr);
