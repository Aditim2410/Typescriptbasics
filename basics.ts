class demo {

    username:string;
    password:string;
    constructor()
    {
console.log("hi");
    }

    getUsername()
    {

        return this.getUsername;//username
    }

    setUsername()
    {
        this.username="hello";
    }

   

    
}
let d=new demo;
d.setUsername();
console.log(d.getUsername());

