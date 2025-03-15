"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const page = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message)
        {if(result.success==true){
          setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        }}
        setUrl("")
        setShortUrl("")
        console.log(result)
      })
      .catch((error) => console.error(error));
  }


  return (
    <>
      <div className="bg-amber-600 w-[65vw] m-4 mt-12 p-5 py-8 mx-auto rounded-3xl">
        <div className='flex flex-col gap-2 justify-center'>

          <label htmlFor="url">URL</label>
          <input required onChange={e => { setUrl(e.target.value) }} value={url} name='url' type="text" placeholder='write the url' className='p-1 px-3 ml-1 mb-2 border-2 rounded-xl border-amber-900' />
          <label htmlFor="shortUrl">Short-URL</label>
          <input required onChange={e => { setShortUrl(e.target.value) }} value={shortUrl} name='shortUrl' type="text" placeholder='write the preferred url' className='p-1 px-3 ml-1 mb-2 border-2 rounded-xl border-amber-900' />
          <button disabled={!url || !shortUrl} onClick={generate} className="cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 py-2.5 text-center mb-2 dark:focus:ring-yellow-900 disabled:bg-yellow-300">Generate</button>

        </div>
        {generated && <>
            <h2 className='mt-1 font-bold text-lg'>Your Link</h2> <code><Link className='m-1' target='_blank' href={generated}>{generated}</Link>
          </code></>}
      </div>
    </>
  )
}

export default page
