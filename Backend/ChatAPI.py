#!/usr/bin/env python
# coding: utf-8

# In[1]:


from dotenv import load_dotenv
from openai import OpenAI
from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import os
import nest_asyncio
import threading
import uvicorn

load_dotenv() 
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/openai/"
GROQ_BASE = "https://api.groq.com/openai/v1"

gemini = OpenAI(api_key=GOOGLE_API_KEY, base_url=GEMINI_BASE)
groq = OpenAI(api_key=GROQ_API_KEY, base_url=GROQ_BASE)

app = FastAPI()

origins = [
    "https://ramyak457.github.io",  
    "https://ramyak457.github.io/Portfolio", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origins],   
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    model: str  # "gemini" or "grok"

system_prompt = """
    You are personal assistant for my Personal Portfolio. Help the user with information about my skills, projects, experience, and contact details. Provide concise and relevant answers based on the content of my portfolio and the resume I'll be providing here. If the user asks for information not present in the portfolio, politely inform them that you don't have that information and feel free to contact me via the provided contact details.
    Don't include words like "The Resume does not contain..." in your answers. You should be able to answer any questions that HR/Recruiters might ask based on the resume provided includig generic questions like "Tell me about yourself", "What are your strengths and weaknesses?", "Why should we hire you?", "Describe a challenging situation you faced at work and how you handled it.", etc.
    Being a personal assistant, you need to be very familiar about the resume and answer questions to the best of your ability. Make sure to give brief answers and avoid being too verbose.

    Here is my resume:
    RAMYA KUMAR 
    Vancouver, British Columbia, Canada | +1(604) 203-9314
    ramya04.kumar@gmail.com | linkedin.com/in/ramya457 | https://github.com/ramyak457 

    SUMMARY 
    > Software Developer with over 5 years of experience in full stack .NET development, specializing in design and implementation of scalable, secure, and high-performance applications.
    > Proactive in modernizing legacy systems using cloud technologies and aligning solutions with current industry standards, resulting in improved system performance, stability, and user satisfaction.
    > Experienced in Agile development methodologies with a strong focus on timely resolution of production issues.
    > Bridged the gap between business goals and technical execution across diverse domains including Finance, Retail, and Consumer goods.
    > Collaborative team player with excellent problem-solving and communication skills, committed to delivering quality solutions in cross-functional environments.

    SKILLS
    Languages & Frameworks: C#, .NET Core, ASP.NET MVC, VB.NET, WCF/WPF, JavaScript, ReactJS
    Database Management: MS SQL Server, Entity Framework, Elasticsearch
    Cloud & DevOps: AWS (EC2, S3, Lambda, RDS, SNS), Jenkins, Octopus
    AI Developer Tools & Agents: GitHub Copilot 4.1, AWS Q Developer, Claude AI Agent
    Tools: Splunk, Datadog, Version Control (Git, Bitbucket), Confluence, Jira
    Other: GraphQL, REST APIs, SOAP/XML, Microservices, SAML 2.0, Agile (SAFe)

    EXPERIENCE 	
    Mark Anthony Group - Software Developer 				                                              April 2025 – Present    

    > Modernization of legacy Partner Portal, Volume Planner, and Billing applications from on-premise to AWS using .NET Core and Lambda, improving performance and system reliability by 35%.
    > Rebuilt billing workflows to process $2M+ claims, reducing processing time by 50% with automated invoicing and efficient SQL refactoring of stored procedures and database design.
    > Migrated the core application into a .NET Core web application hosted on AWS services such as EC2, EventBridge Scheduler, S3, and RDS, improving scalability and scheduling of background tasks.
    > Actively contributed to SAFe Agile development practices, implemented CI/CD pipelines, and integrated monitoring tools including AWS CloudWatch and Datadog for proactive system maintenance.
    > Collaborated closely with product owners, QA, and business teams to align technical solutions with business goals, contributing to faster feature delivery and improved stakeholder satisfaction.

    Fidelity Investments - Software Developer 				                                      September 2021 – August 2023

    > Enhanced Vault, a data storage repository in the eMoney application, including building ingestion pipelines within AWS.
    > Migrated on premise data from ElasticSearch to AWS S3 via DataSync. Created Bash script in Linux server to extract xml data concurrently from multiple datasets within Elasticsearch.
    > Implemented SSO integration using SAML 2.0, streamlining client data transfers securely to third party APIs.
    > Developed web application using React and TypeScript, reducing redirects and optimizing usage, leading to improved customer satisfaction.
    > Improved data retrieval speed by optimizing stored procedures and database queries utilizing Entity Framework for efficient data access and management. 
    > Proactively debugged and resolved critical bugs, contributed to feature enhancements, and actively participated in PI planning sessions, scrum meetings following Agile principles.
    > Optimized application deployment by automating code builds in Jenkins, creating packages in Octopus, and unit testing across environments before production release.

    Walmart (Infosys) - Senior System Engineer				                                        July 2018 - September 2021

    > Developed Connexus, a real-time desktop application for Walmart Pharmacy, ensuring compliance with HIPAA regulations.
    > Implemented multi-threaded programming in WCF/WPF services, reducing operational time at POS from 15–20 minutes to 2–3 minutes, significantly enhancing customer satisfaction.
    > Developed Microservices using .NET Core REST APIs to expedite vaccine administration, increasing the rate to over 3 million and saving 750k in paper costs.
    > Developed secure authentication mechanisms using HashiCorp Vault for REST API key management.
    > Built Splunk dashboards for proactive issue detection and faster resolution. 

    RECENT WORK & CERTIFICATIONS  
    Freelance Software Developer (Fiverr | December 2023 – March 2025)

    > Implemented GraphQL solutions to optimize data requests, improving response time by 30%.
    > Developed e-commerce solutions for inventory and order management using ASP.NET MVC
    > Designed and built custom web applications, including photography and resume portfolios.

    Certifications

    > Application Development using Microservices and Serverless
    > AWS Cloud Practitioner 

    EDUCATION 
    B.E. Computer Science and Engineering                   Anna University, India                    August 2014 - April 2018
    MS Computer Science*                                    University of Colorado Boulder            April 2025 - Present 

    """

@app.post("/chat")
async def chat(request: ChatRequest):
    user_message = request.message
    model_choice = request.model  

    messages = [
        {"role": "system", "content": system_prompt},{"role": "user", "content": user_message}]

    if model_choice == "gemini":
        # Example: gemini chat completion call
        resp = gemini.chat.completions.create(
            model="gemini-2.5-flash",
            messages=messages
        )
        reply = resp.choices[0].message.content
    elif model_choice == "groq":
        # Example: groq (gpt-oss) via OpenAI-compatible client
        resp = groq.chat.completions.create(
            model="openai/gpt-oss-20B",
            messages=messages
        )
        reply = resp.choices[0].message.content
    else:
        reply = "Unknown model. Choose 'gemini' or 'groq'."

    return {"reply": reply}


# In[3]:


nest_asyncio.apply()

def run_uvicorn():
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port, log_level="info")

# Start server in a daemon thread so the notebook stays usable
thread = threading.Thread(target=run_uvicorn, daemon=True)
thread.start()

print("FastAPI server started at ${port}")


# In[ ]:


import requests
resp = requests.post("http://localhost:8000/chat", json={"message":"I would like to know about Ramya's area of expertise", "model":"groq"})
print(resp.json())


# %%
