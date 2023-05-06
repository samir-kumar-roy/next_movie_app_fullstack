import dbConnect from '@/utils/dbconnection';
import Contact from '@/models/contact';
import {NextResponse} from 'next/server';
export async function POST(req,res){
    try{
        const body = JSON.stringify(req.body);
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
