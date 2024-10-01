import { db } from '@/db'
import { posts as postsTable } from '@/db/schema/posts'

export default async function Home() {
  const posts = await db.select().from(postsTable)

  console.log(posts)

  // ...
}