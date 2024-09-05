import { NextResponse } from "next/server";

export async function POST (request:any){
    try{
        const {title, slug, imageUrl, description}=await request.json();
        const newProduct = {title, slug, imageUrl, description}
        console.log(newProduct); 
        return NextResponse.json(newProduct)
    } catch (error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create product",
            error
        },{status:500})
    }

}