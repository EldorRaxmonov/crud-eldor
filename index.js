let express = require("express");
const userRouter = require("./routes/user.route");
let app = express();

let konsta = 8080;

app.use(express.json())

app.use("/user", userRouter)


app.listen(konsta, () => {
    console.log(`Server is working on port ${konsta}`);
})