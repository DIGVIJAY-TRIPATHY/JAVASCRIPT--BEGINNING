class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password
    }

    addcourses(){
        console.log(`a new course was added by ${this.username}`);

        
    }
}

const chai=new Teacher('chai','chai@123','123');
chai.addcourses()
chai.logMe()

const masalachai=new user('masalachai')
masalachai.logMe()


console.log(chai===masalachai);
console.log(chai===Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof user);
