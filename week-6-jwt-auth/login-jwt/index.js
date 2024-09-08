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
    users.push(user)
    res.json({
        message:"User created successfully"
    })
    
})

//Sign in
app.post("/signin",(res,req)=>{
    const username= req.body.username
    const password=req.body.password

    const user={ username, password}

    if ( users.includes(user)){

        res.send(" You have successfully login")
    }else{
        res.send("You accound does not exit")
    }
})



app.listen(3000)
