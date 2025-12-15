const user={
    _email: 'h@hchf.com',
    _password: 'abd',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}


const digvijay = Object.create(user)

console.log(digvijay.email);
