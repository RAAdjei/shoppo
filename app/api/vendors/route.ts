import {  NextResponse } from "next/server";
import db from '@/lib/db';

export async function POST (request:any){
    try{
        const {code, name, phone, email, vendorAddress, profileImageUrl, notes, products, location,  isActive} = await request.json(); 
        const newVendor = {code, name, phone, email, vendorAddress, profileImageUrl, notes, products, location, isActive} 
        console.log(newVendor)
        return NextResponse.json(newVendor)
    } catch (error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create vendor",
            error,
        },{status:500})
    }

}

export async function GET(request:any){
    try{
        const profiles = await db.vendorProfile.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(profiles);
    }catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch profiles",
            error,
        },{status:500})
    }
}




// import { NextResponse } from "next/server";

// export async function POST (request:any){
//     try{
//         const {code, vendorName, phone, email, vendorAddress, profileImageUrl, notes, isActive} = await request.json(); 
//         const newVendor = {code, vendorName, phone, email, vendorAddress, profileImageUrl, notes, isActive} 
//         console.log(newVendor)
//         return NextResponse.json(newVendor)
//     } catch (error){
//         console.log(error)
//         return NextResponse.json({
//             message: "Failed to create vendor",
//             error,
//         },{status:500})
//     }

// }