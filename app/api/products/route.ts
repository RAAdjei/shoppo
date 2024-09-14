import { NextResponse } from "next/server";

export async function POST (request:any){
    try{
        const productData = await request.json();
        // const existingProduct = await db.product.fingUnique({})
 
        console.log(productData); 
        return NextResponse.json(productData)
    } catch (error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create product",
            error
        },{status:500})
    }

}