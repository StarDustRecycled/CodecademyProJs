class Media
{
    constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings=[];
    }

    get title()
    {
        return this._title;
    }

    get isCheckedOut()
    {
        return this._isCheckedOut;
    }
    
    get ratings()
    {
        return this._ratings;
    }

    set isCheckedOut( nowisCheckedOut)
    {
        this._isCheckedOut = nowisCheckedOut
    }
    getAverageRating(){
        let ratingsSum = this.ratings.reduce((currentSum , ratings)=>currentSum + ratings,0 )/(this.ratings.length);
        return ratingsSum;
        //let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
       // return ratingsSum / this.ratings.length;
    }

    toggleCheckOutStatus(){
    //this._isCheckedOut = this._isCheckedOut ? 'False' : 'True'
    this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(ratings){
        this._ratings.push(ratings)
    }
}

class Book extends Media {
    constructor(author, title, pages){
     super(title);
      this._author = author;
      this._pages = pages;
    }
    
    
    //creating a getters for author and pages
    get author(){
      return this._author;
    }
    
    get pages(){
      return this._pages;
    }
  }
  
//creating a Movie class that extends Media/parent class
class Movie extends Media{
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  
  //creating a getters for director and runTime
  get director(){
    return this._director;
  }
  
  get runTime(){
    return this._runTime;
  }
}
 
//creating a Book instance with the following properties
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//calling .toggleCheckOutStatus() on the historyOfEverything instance
historyOfEverything.toggleCheckOutStatus();

//log the value
console.log(historyOfEverything.isCheckedOut);

//call .addRating
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();

//log the result
console.log(historyOfEverything.getAverageRating());


//creating a Movie instance with the following properties
const speed = new Movie('Jan de Bont', 'Speed', 116);

//Call .toggleCheckOutStatus() on the speed instance.
speed.toggleCheckOutStatus();

//log the value
console.log(speed.isCheckedOut);

//call .addRating
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();

//log the result
console.log(speed.getAverageRating());

console.log(historyOfEverything);
console.log(speed);

