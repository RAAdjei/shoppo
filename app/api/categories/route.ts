import { NextResponse } from "next/server";

export async function POST (request:any){
    try{
        const {title, slug, imageUrl, desription, isActive} = await request.json(); 
        const newCategory = {title, slug, imageUrl, desription, isActive} 
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create category",
            error
        },{status:500})
    }

}