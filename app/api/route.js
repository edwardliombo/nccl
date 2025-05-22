import { NextResponse } from "next/server";

export async function GET(){
    const fetchData = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=5',{
        headers:{
            'Content-Type':'application/json',
            'Authorization':'563492ad6f917000010000014684f2a7a5b54591b372e0477477f93e'
        }
    })
    const res = await fetchData.json();
    const dat = await res.photos;
    return NextResponse.json(dat)

}