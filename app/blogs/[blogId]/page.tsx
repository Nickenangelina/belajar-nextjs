export default async function BlogsDetails({
    params,
}: {
    params: Promise<{ blogId: string}>;
}) {
    const blogId = (await params).blogId;
    return <h1>Details about product {blogId}</h1>;
}