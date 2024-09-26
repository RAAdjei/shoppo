import { NextResponse } from "next/server"
import db from '@/lib/db';
import bcrypt from 'bcrypt'

export async function POST(request:any) {
    try{
        //extract the credentials
        const { name, email, password, vendorAddress, products, role } = await request.json()
        // check if the user alreadly exists in the db
        const exisitingVendor = await db.user.findUnique({
            where:{
                email,
            }
        });
        if(exisitingVendor){
            return NextResponse.json({
                data: null,
                message:"User Already exists",
            }, {status:409});
        }
        // Encrypt password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.user.create({
            data:{
                name, 
                email, 
                password: hashedPassword,
                vendorAddress,
                products,
                role,
            },
        });
        console.log(newUser);
        return NextResponse.json({
            data: newUser,
            message: "User Created Successfully",
        },{ status: 201});

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error,
            message:"Server Error: Something went wrong",
        }, {
            status:500
        });
    }
}

export async function GET(request:any){
    try{
        const users = await db.user.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(users);
    }catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch users",
            error,
        },{status:500})
    }
}