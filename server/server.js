import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


app.get("/", (req,res)=>{
  res.send("Backend is running");
});


app.post("/api/summary", async(req,res)=>{

  try{

    const {skills, projects} = req.body;


    /* const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages:[
        {
          role:"system",
          content:"You are a professional resume writer."
        },
        {
          role:"user",
          content:`Create a professional resume summary using these skills:
          ${skills.join(", ")}

          Projects:
          ${JSON.stringify(projects)}
          `
        }
      ],
    }); */

    console.log("Received", skills, projects);

    res.json({
      summary:
        "Frontend developer with experience building responsive React applications using modern JavaScript, TypeScript, and REST APIs. Passionate about creating user-friendly web experiences and solving real-world problems."
    });
   

  }catch(error){

    console.log(error);

    res.status(500).json({
      message:"AI summary generation failed"
    });

  }

});


app.listen(5000,()=>{
  console.log("Server running on port 5000");
});