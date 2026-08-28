import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") ;
  try {
    const response = await fetch(`https://api.deezer.com/search?q=encodeURI(${query})&limit=20`);
    const data = await response.json();
    const track = data.data[0]; 
    return NextResponse.json({
         success:true, 
         source: "deezer",
         track:{
            id: track.id,
            title : track.title,
            name: track.artist.name,
            image: track.album.cover_medium,
            preview: track.preview,
            duration: track.duration,
            album: track.album.title,
         } ,
  })
    ;
    
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
  
}