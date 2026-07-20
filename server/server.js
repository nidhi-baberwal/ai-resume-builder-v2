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

app.post("/api/improve-resume", async(req, res) => {
  try{

    const resume = res.body;

    const prompt = `
    You are an expert resume Writer.

    Analyze the following resume and provide improvment suggestions.

    Resume:
    ${JSON.stringify(resume, null, 2)}

    Return only a JSON array of strings.

    Example:
    ["Add more achievements.",
    "Improve professional summary.",
    "Include more technical keywords." 
    ]
    `;

    const completion = await client.chat.completions.create({

      model: "gpt-4.1-mini",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

    });

    const text = completion.choices[0].message.content;

    res.json({
      suggestions: JSON.parse(text),
    });

  } catch(error){
    console.error(error);

    res.status(500).json({
      suggestions: [
        "Unable to generate suggestions."
      ],
    });
  }
});


app.listen(5000,()=>{
  console.log("Server running on port 5000");
});