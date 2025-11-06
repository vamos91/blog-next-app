const ReadComment = async ({ params }: {params: {commentId: string, slug: string}}) => {
    const {commentId, slug} = await params
    return (
        <div>
            ici on affiche le commentaire {commentId} du produit {slug}
        </div>
    );
};

export default ReadComment;