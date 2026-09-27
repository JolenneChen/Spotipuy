import { NextRequest, NextResponse } from "next/server";
interface DeezerItem {
  id: number;
  title: string;
  artist?: {
    name: string;
  };
  album?: {
    title: string;
    cover_medium: string;
  };
  preview?: string;
  duration?: number;
}
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query || !query.trim()) {

    return NextResponse.json({
      success: true,
      source: "deezer",
      data: [],
      track: [],

    });
  }



  try {
    const response = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(query)}&limit=20`);
    const data = await response.json();
    const tracks = (data.data || []).map((item: DeezerItem) => ({
      id: item.id,
      title: item.title,
      name: item.artist?.name || "",
      image: item.album?.cover_medium || "",
      preview: item.preview || "",
      duration: item.duration || 0,
      album: item.album?.title || "",
    }));
    return NextResponse.json({
      success: true,
      source: "deezer",
      data: tracks,
      track: tracks,
    })
      ;

  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }

}