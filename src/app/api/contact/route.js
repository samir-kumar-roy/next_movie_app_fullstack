import dbConnect from '@/utils/dbconnection';
import Contact from '@/models/contact';
import {NextResponse} from 'next/server';
export async function post(req,res){
    try{
        const body = await req.json();
        console.log("testinggggg.........",body);
        await dbConnect();
        await Contact.create(body);

        return NextResponse.json({
            message:"Message sent successfully"
        },{status: 200});
    }catch(e){
        console.log(e);
        return NextResponse.json({
            message:"Something went wrong !"
        },{status: 500});
    }
}
