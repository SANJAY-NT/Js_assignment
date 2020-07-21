class User{
    constructor(name, age,email)
    {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }
    login()
    {
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout()
    {
        console.log(`${this.name} has logged out`);
        return this;
    }
    getDetails()
    {
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }
    addCoins()
    {
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role)
    {
        super(name,age,email);
        this.role = role;
    }

}

class Admin extends Moderator
{
   addCourse(user,course)
   {
       user.courses.push(course);
       console.log(user);
   }
   deletecourse(user)
   {
        users = users.filter(u =>{
            return u.course; 
        })
    }
}
let user1 = new User('Anand',25,'anand@gmail.com');
let user2 = new User('Anto',24,'anto@gmai.com');
let mod = new Moderator('Mohan',24,'mohan@gmail.com','Moderator');
let admin = new Admin('sam',25,'sam@gmail.com');
let users = [user1,user2,mod,admin];

users.forEach(element => {
    console.log(element);
});
user1.login()
user1.logout()

user1.addCoins();
user1.addCoins();
user1.addCoins();
user1.addCoins();
user1.addCoins();
user2.addCoins();
user2.addCoins();
user2.addCoins();


admin.addCourse(user1,'Javascript');
admin.addCourse(user2,'HTML5 and CSS3');

user1.login().addCoins().addCoins().getDetails().logout();

admin.deletecourse(user1);
console.log(users);