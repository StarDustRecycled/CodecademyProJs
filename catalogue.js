class School
{
    constructor(name , level , numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents= numberOfStudents;
    }

    get name()
    {
        return this._name;
    }

    get level()
    {
        return this._level;

    }

    get numberOfStudents()
    {
        return this._numberOfStudents;
    }

    set numberOfStudents(noofstuds)
    {
        if(typeof noofstuds ==='number'){
        this._numberOfStudents.push(noofstuds);
        }
        else
        {
            console.log('Invalid input:numberOfStudents must be set to a Number')
        }
    }

    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`)
    }

    static pickSubstituteTeachers(substituteTeachers){
        const teach = Math.floor(Math.random() * substituteTeachers.length -1)
        return substituteTeachers[teach];
    }
}

class PrimarySchool extends School{
    constructor(name , pickupPolicy , numberOfStudents){
        super(name ,'primary' , numberOfStudents );
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }
}


class HighSchool extends School{
    constructor(name , numberOfStudents , sportsTeam){
        super(name ,'high', numberOfStudents);
        this._sportsTeam = sportsTeam
    }

    get sportsTeam(){
        return this._sportsTeam;
    }
}

console.log(HighSchool.sportsTeams);

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);


const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);