import SearchForm from '@/components/SearchForm';
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;
    const posts = [{
        _createdAt: new Date(),
        views: 55,
        author: {_id: 1, name: "Kelly"},
        _id: 1,
        description: "This is a description",
        image: "https://static9.depositphotos.com/1205137/1123/i/600/depositphotos_11237382-stock-photo-red-sunset.jpg",
        category: "nature",
        title: "Beauty of Sunset",
    }]
    return (
        <>
            <section className="pink_container">
                <h1 className="heading">Pitch Your Startup, <br/>
                    Connect With Entrepreneurs</h1>
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
                </p>
                <SearchForm query={query}/>
            </section>
            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Search results for ${query}` : 'All Startups'}
                </p>
                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? posts?.map((post: StarupCardType, index: number) => (
                        <StartupCard key={post?._id} post={post}/>
                    )) : <div>No startups found</div>}
                </ul>
            </section>
        </>
    );
}