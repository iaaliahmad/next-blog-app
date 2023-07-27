import Intro from "@/components/Intro/Intro"
import FeaturedPosts from "@/components/FeatruedPosts/FeaturedPosts"

export default async function Home() {

  let posts = await fetch(`https://improperties.ae/wp-json/wp/v2/posts?_embed=true`, { cache: 'no-store' });
  posts = await posts.json();


  return (
    <>
      <Intro />
      <main>
        <FeaturedPosts posts={posts.slice(4, 8)} sliderPosts={posts.slice(0, 3)} />
      </main>
    </>
  )
}
