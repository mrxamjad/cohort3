const express= require("express")

const app=express()

app.use(express.json())


let users=[]

app.get("/",(req,res)=>{

    // res.json({
    //     message:"Welcome to the login system"
    // })

    res.sendFile(__dirname+"/public/index.html")
    
})


//Sing up

app.post("/signup",(req,res)=>{
    const username=req.body.username
    const usepass=req.body.password

    const user={username,usepass}
    users.append(user)
    res.json({
        message:"User created successfully "
    })
    
})

//Sign in
app.post("/signin",(req,res)=>{

    console.log(req.body.username)
    console.log(req.body.password)

    const username= req.body.username
    const password=req.body.password

    const user={ username, password}

    for(let i=0; i<users.length; i++){
        if( users[i]==user){
            res.send("You have successfully login")
            return
        }

    }

    res.send("You account doesn't exist")

    
})



app.listen(3000)
