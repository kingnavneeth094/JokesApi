import express from "express";
import axios from "axios";

const app = express();

app.use(express.static("public"));

const url1 = 'https://v2.jokeapi.dev/joke/Dark?type=single';

app.get("/", async (req, res) => {
    try {
      const result = await axios.get(url1);
      const dark = JSON.stringify(result.data.joke);
      res.render("index.ejs",{secret: dark});
    } catch{
      console.log("Error");
    }
  });

app.post("/sex",async(req,res)=>{
    try {
        const result = await axios.get('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=sexist&type=single');
        const dark = JSON.stringify(result.data.joke);
        res.render("index.ejs",{secret: dark});
      } catch{
        console.log("Error");
      }

})

app.post("/rel",async(req,res)=>{
    try {
        const result = await axios.get('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=religious&type=single');
        const dark = JSON.stringify(result.data.joke);
        res.render("index.ejs",{secret: dark});
      } catch{
        console.log("Error");
      }

})

app.post("/pol",async(req,res)=>{
    try {
        const result = await axios.get('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=political&type=single');
        const dark = JSON.stringify(result.data.joke);
        res.render("index.ejs",{secret: dark});
      } catch{
        console.log("Error");
      }

})

app.post("/ras",async(req,res)=>{
    try {
        const result = await axios.get('https://v2.jokeapi.dev/joke/Dark?blacklistFlags=racist&type=single');
        const dark = result.data.joke;
        res.render("index.ejs",{secret: dark});
      } catch{
        console.log("Error");
      }

})

app.listen(3000,()=>{
    console.log("Server running successfully ✅");
})