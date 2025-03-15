import clientPromise from "@/lib/mongodb"
export async function POST(request) {

    const body=await request.json()

    const client = await clientPromise
    const db=await client.db("clipLink")
    const collection=await db.collection("url")

    //check if shortUrl already exists
    const shUrl=await collection.findOne({shortUrl:body.shortUrl})
    if(shUrl){
        return Response.json({success:false, error:true, message: 'shortUrl already exists for another website' })
    }
    //check if url already exists 
    const Url=await collection.findOne({url:body.url})
    if(Url){
        return Response.json({success:false, error:true, message: 'Url already has a short-url' })
    }

    //create new entry in db if shortUrl does not exist
    await collection.insertOne({
        url: body.url,
        shortUrl: body.shortUrl
    })

    return Response.json({success:true, error:false, message: 'url generated successfully' })
  }

  export async function GET() {

      const client = await clientPromise
      const db = client.db("clipLink")
      const collection = db.collection("url")
  
      const urls = await collection.find({}).toArray();
  
      return new Response(JSON.stringify(urls), {headers: { "Content-Type": "application/json" }})
  }