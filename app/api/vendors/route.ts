import { NextResponse } from "next/server";

// code
// : 
// "SHPP-DC-202409\n    1418\n    4435\n    102"
// email
// : 
// "adjeidhero@yahoo.com"
// isActive
// : 
// true
// name
// : 
// "debbie corner"
// notes
// : 
// "ffgfgfgfggg"
// phone
// : 
// "0552398810"
// vendorAddress
// : 
// "ffdfgfffgfs ddsfsf"
// vendorName
// : 
// "debbie corner"

export async function POST (request:any){
    try{
        const {code, vendorName, phone, email, vendorAddress, notes, isActive} = await request.json(); 
        const newVendor = {code, vendorName, phone, email, vendorAddress, notes, isActive} 
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