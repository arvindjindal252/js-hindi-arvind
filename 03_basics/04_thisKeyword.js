const user={
    username: "Arvind",
    price: 999,

    WelcomeMsg: function(){
        console.log(this.username,"Welcome to my website");
    }
}
user.WelcomeMsg();
user.username="Abhinav";
user.WelcomeMsg();

// the benefit of the this function is it will refer to the current context 


