// npm i prisma 
// npx prisma init
// npx prisma generate
// npx prisma migrate dev-- to create a table using model provided ..i.e. create database
// npx prisma studio
// prisma relationaldb ke saath kaam krta h
// hme mongodb me nhi krni pdti files downl but here bcz: 
// prisma is an orm-Object relational mapper 
// as we store data in form of table but we have it in json in object form soorm is used to cnvert obj to table
// obj-->orm-->row of table 
// npx prisma init -- taaki kuch files vgera download ho jaye

// const express=require('express');

// schemas--> models
// models-->client(read,delete update krenge iske through and vha hr model ka schema hota tha ..pr yha sirf ek client hota h)

// schema.prisma vali file me jo model h usme @unique means unique hona chahiye..?means ki optional h ye field


// MVC(Model View Controller) architecture is followed

import express from 'express';
import { PrismaClient } from '@prisma/client'
import userRouter from "./routers/userRouter.js";
import cors from 'cors';

const prisma = new PrismaClient()
const app=express();
app.use(cors());
app.use(express.json());

app.use('/users',userRouter);

// async function main(){
//    await prisma.user.create({
//         data:{
//             name:"Sanjoli",
//             email:"sanjoli@gmail.com",
//         }
//     })
// }

// main();

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})
