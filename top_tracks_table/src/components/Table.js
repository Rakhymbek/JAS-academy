

export function Table({tracks}) {
    return (
        <table>
            <thead>
                <tr>
                    <td></td>
                    <th>Песня</th>
                    <th>Артист</th>
                    <th>Альбом</th>
                </tr>
            </thead>
            <tbody>
                {tracks.map((track, index) => (
                    <tr key={index}>
                        <td className="img_cell"><img src={track.image[0]['#text']} alt='poster'></img></td>
                        <td className="track_name">{track.name}</td>
                        <td className="artist_name">{track.artist.name}</td>
                        <td className="album">Album</td>
                        <td><a className="shazam_btn" target='_blank' rel="noreferrer noopener" href={track.url}>Shazam</a></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
    
}