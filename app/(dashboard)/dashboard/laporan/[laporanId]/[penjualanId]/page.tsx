export default async function LaporanPenjualan({
    params,
}: {
    params: Promise<{laporanId: string, penjualanId: string}>
}) {
    const {laporanId, penjualanId} = await params
    return (
        <h1>Penjualan {penjualanId} for laporan {laporanId}</h1>
    )
}