export default async function SiswaKelas({
    params,
}: {
    params: Promise<{siswaId: string, kelasId: string}>
}) {
    const {siswaId, kelasId} = await params
    return (
        <h1>kelas {kelasId} siswa {siswaId}</h1>
    )
}