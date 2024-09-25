import {  NextResponse } from "next/server";

export async function POST (request:any){
    try{
        const {code, vendorName, phone, email, vendorAddress, profileImageUrl, notes, isActive} = await request.json(); 
        const newVendor = {code, vendorName, phone, email, vendorAddress, profileImageUrl, notes, isActive} 
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