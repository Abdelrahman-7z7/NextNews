//archive and latest are the parallel routes to the archive routes since it was specialized with @ at the beginning of the file
export default function ArchiveLayout ({archive, latest}){
    return (
        <div>
            <h1>News Archive</h1>
            <section id="archive-filter">
                {archive}
            </section>
            <section id="archive-latest">
                {latest}
            </section>
        </div>
    )
}