import { NextResponse } from "next/server";
import db from '@/lib/db'

export async function POST (request:any){
    try{
        const {title, slug, imageUrl, desription, isActive} = await request.json(); 
        const exisitingCategory = await db.category.findUnique({
            where: {
                slug,
            },
        });
        if (exisitingCategory){
            return NextResponse.json({
                message: "Category already exists",
            },{status:409})
        }
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

export async function GET(request:any){
    try{
        const categories = await db.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(categories);
    }catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch categories",
            error,
        },{status:500})
    }
}