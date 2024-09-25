import { NextResponse } from "next/server";
import db from '@/lib/db';

export async function GET(request:any, {params: {id}}: any){
    try{
        const user = await db.user.findUnique({
            where: {
                id, role: "USER"
            },
        });
        return NextResponse.json(user);
    }catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch user",
            error,
        },{status:500})
    }
}