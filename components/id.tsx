import { playlists } from "@/app/data/playlists"

export default async function PlaylistPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const playlist = playlists.find(
    (playlist) => playlist.id === id
  )

  if (!playlist) {
    return <div>Playlist not found</div>
  }

  return (
    <div className="text-white">
      <h1>{playlist.title}</h1>
      <p>{playlist.desc}</p>
    </div>
  )
}