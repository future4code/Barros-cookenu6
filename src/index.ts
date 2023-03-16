
import {app} from "./app";
import { userRouter } from "./router/userRouter"

import { recipeRouter } from './router/RecipeRouter';
import { Response, Request } from 'express';



app.use("/signup", userRouter)

app.get("/ping", (req: Request, res: Response)=> {
    res.send("pong")
})
app.post("/signup", userRouter) // cadastro pt 1
app.post("/login", userRouter) // login pt2
app.get("/all", userRouter) // checar usuarios pt3
app.post("/recipe", recipeRouter) // criar recita pt 4
