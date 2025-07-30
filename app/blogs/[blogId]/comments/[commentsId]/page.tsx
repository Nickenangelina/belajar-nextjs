export default async function BlogsComments({
    params,
}: {
    params: Promise<{blogId: string, commentsId: string}>
}) {
    const {blogId, commentsId} = await params
    return (
        <h1>comments {commentsId} for blog {blogId}</h1>
    )
}