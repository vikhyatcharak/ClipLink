import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"


export default async function Page({ params }) {
    const shortUrl = (await params).shortUrl

    const client = await clientPromise
    const db=await client.db("clipLink")
    const collection=await db.collection("url")

    const doc=await collection.findOne({shortUrl:shortUrl})
    if(doc){
        redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }

    return <div>My Post: {url}</div>
  }