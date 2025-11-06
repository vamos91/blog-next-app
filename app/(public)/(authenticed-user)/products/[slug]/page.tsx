export default async function ReadProduct ({ params }: {params: {slug: string}}) {
    const {slug} =  await params
    console.log(slug)
    return (
        <div>
            ici on affiche un seul produit {slug}
        </div>
    );
};

