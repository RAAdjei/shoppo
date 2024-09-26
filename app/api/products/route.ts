import { NextResponse } from "next/server";
import db from '@/lib/db';



// id            String    @id @default(auto()) @map("_id") @db.ObjectId
// title         String    
// slug          String    @unique
// description   String?
// imageUrl      String?
// barcode       String?
// isActive      Boolean
// productPrice  Float
// tags          String[]
 

// category   Category  @relation(fields: [categoryId], references: [id])
// categoryId String @db.ObjectId

// user   User @relation(fields: [userId], references: [id])
// userId String  @db.ObjectId 

export async function POST (request:any){
    try{
        const {title, slug, userId, categoryId, imageUrl, desription, isActive, productPrice, barcode, tags} = await request.json(); 
        // const productData = await request.json(); 
        const exisitingProduct = await db.product.findUnique({
            where: {
                slug,
            },
        });
        if (exisitingProduct){
            return NextResponse.json({
                message: "Product already exists",
            },{status:409});
        }
        const newProduct = await db.product.create({
            data:{
                title, 
                slug, 
                imageUrl, 
                userId,
                categoryId,
                desription, 
                isActive, 
                productPrice: parseFloat(productPrice), 
                barcode, 
                tags
            }
        });
        console.log(newProduct)
        return NextResponse.json(newProduct)
    } catch (error){
        console.log(error)
        return NextResponse.json({
            message: "Failed to create product",
            error
        },{status:500})
    }

}

export async function GET(request:any){
    try{
        const products = await db.product.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(products);
    }catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch products",
            error,
        },{status:500})
    }
}










// export async function POST (request:any){
//     try{
//         const productData = await request.json();
//         // const existingProduct = await db.product.fingUnique({})
 
//         console.log(productData); 
//         return NextResponse.json(productData)
//     } catch (error){
//         console.log(error)
//         return NextResponse.json({
//             message: "Failed to create product",
//             error
//         },{status:500})
//     }

// }