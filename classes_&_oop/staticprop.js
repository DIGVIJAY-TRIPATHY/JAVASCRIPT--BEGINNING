class user{
    constructor(username){
     this.username=username
    }

    logMe(){
        console.log(`username ${this.username}`);   
    }

    static createId(){
        return `123`
    }
}

const rudra=new user("rudra")
// console.log(rudra.createId());


class Teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

const iqoo=new Teacher("iqoo","iqoo@.com")

iqoo.logMe()
console.log(iqoo.createId()); //this will show error because of static



