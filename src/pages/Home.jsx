import PostCard from '../components/PostCard'
import { dummyPosts, topPosts } from '../utils/dummyPosts'
import { savePosts, loadPosts } from '../utils/localStorage'
import { useState } from 'react'

const Home = () => {
  const [posts, setPosts] = useState(loadPosts() || dummyPosts)
  
  const [postText, setPostText] = useState('')
  const [postImage, setPostImage] = useState('')
  const [postCategory, setPostCategory] = useState('General')

  const [trending] = useState(topPosts)

  const handlePost = () => {
      //if kuch nahi likha luch matt karo
      if (!postText.trim()) return

      //new post object
      const newPost = {
        id: Date.now(),
        author: 'Alex Rivers',
        role: 'BLOGGER',
        time: 'Just now',
        avatar: 'A',
        content: postText,
        image: postImage || null,
        tags: [postCategory],
      }

      //use state upadate - old posts with new posts 
      const updatedPosts = [newPost, ...posts]
      setPosts(updatedPosts)  // state update
      savePosts(updatedPosts) // local storage update

      //clear input fields
      setPostText('')
      setPostImage('')
      setPostCategory('General')

  }

  return (
    <div className="bg-bg min-h-screen">

      {/* main container */}
      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* 3 column grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* left column - 3 parts out of 12 - 25% */}
          <div className="col-span-3 space-y-4">

            {/* profile card */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="h-16 bg-primary" />

              {/* avatar + info */}
              <div className="px-4 pb-4">

                {/* avatar - banner ke upar */}
                <div className="w-14 h-14 rounded-full bg-accent border-2 border-card -mt-7 flex items-center justify-center text-gbtext font-bold text-lg">
                  A
                </div>

                {/* name + bio */}
                <h3 className="text-gbtext font-semibold mt-2">Alex Rivers</h3>
                <p className="text-gbtext/60 text-xs mt-0.5">
                  Digital Curator & Tech Enthusiast
                </p>

                {/* divider */}
                <div className="border-t border-border mt-3 pt-3">

                  {/* stats */}
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gbtext/50 text-xs">POSTS</p>
                      <p className="text-gbtext font-semibold text-sm">128</p>
                    </div>
                    <div>
                      <p className="text-gbtext/50 text-xs">FOLLOWERS</p>
                      <p className="text-gbtext font-semibold text-sm">542</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* communities card */}
            <div className="bg-card rounded-xl border border-border p-4">
              <p className="text-gbtext/50 text-xs font-semibold tracking-wide mb-3">
                YOUR RECENT COMMUNITIES
              </p>
              <div className="space-y-2">
                <p className="text-gbtext/70 text-sm hover:text-primary cursor-pointer">
                  # DesignEditorial
                </p>
                <p className="text-gbtext/70 text-sm hover:text-primary cursor-pointer">
                  # ProductVision
                </p>
              </div>
            </div>

          </div>
          {/* left column end */}

          {/* center column - 6 parts out of 12 - 50% */}
          <div className="col-span-6 space-y-4">

            {/* create post box */}
            <div className="bg-card rounded-xl border border-border p-4">

              {/* top row - avatar + textarea */}
              <div className="flex gap-3">

                {/* avatar */}
                <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-gbtext font-bold text-sm flex-shrink-0">
                  A
                </div>

                {/* textarea */}
                <textarea
                  placeholder="Share your latest insight..."
                  className="w-full bg-bg rounded-lg p-3 text-gbtext text-sm resize-none outline-none border border-border focus:border-primary transition-colors"
                  rows={3}
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                />

              </div>

              {/* bottom row - image url + category */}
              <div className="flex gap-2 mt-3">
                <input
                  type="text"
                  placeholder="Image URL (optional)"
                  className="flex-1 bg-bg border border-border rounded-lg px-3 py-2 text-sm text-gbtext outline-none focus:border-primary transition-colors"
                  value={postImage}
                  onChange={(e) => setPostImage(e.target.value)}
                />
                <select
                  className="bg-bg border border-border rounded-lg px-3 py-2 text-sm text-gbtext outline-none"
                  value={postCategory}
                  onChange={(e) => setPostCategory(e.target.value)}
                >
                  <option>General</option>
                  <option>Tech</option>
                  <option>Design</option>
                  <option>Career</option>
                </select>
              </div>

              {/* action row - media, tags, post button */}
              <div className="flex items-center justify-between mt-3">

                {/* left - media + tags */}
                <div className="flex gap-4">
                  <button className="text-gbtext/50 text-sm hover:text-primary flex items-center gap-1">
                    <span>📷</span> Media
                  </button>
                  <button className="text-gbtext/50 text-sm hover:text-primary flex items-center gap-1">
                    <span>#</span> Tags
                  </button>
                </div>

                {/* right - post button */}
                <button onClick={handlePost}
                className="bg-primary text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Post
                </button>

              </div>
            </div>
            {/* create post box end */}

            {/* posts feed - map se har post ka card banega */}
            <div className="space-y-4">
              {posts.map((post) => (
                // ✅ FIX — samplePost nahi, post likhna hai
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            {/* posts feed end */}

          </div>
          {/* center column end */}

          {/* right column - 3 parts out of 12 - 25% */}
          <div className="col-span-3 space-y-4">

            {/* trending topics */}
            <div className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-gbtext text-sm">📈</span>
                <h4 className="text-gbtext font-semibold text-sm">
                  Trending Topics
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['#NextJS15', '#UIUX', '#TailwindCSS', '#CareerPath', '#RemoteWork'].map((tag) => (
                  <span
                    key={tag}
                    className="bg-bg border border-border text-gbtext/70 text-xs px-3 py-1 rounded-full hover:border-primary hover:text-primary cursor-pointer transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* trending topics end */}

            {/* top posts today */}
            <div className="bg-card rounded-xl border border-border p-4">
              <h4 className="text-gbtext font-semibold text-sm mb-3">
                Top Posts Today
              </h4>
              <div className="space-y-3">
                {trending.map((post) => (
                  <div key={post.id} className='flex gap-3 cursor-pointer group'>
                    {/* number */}
                    <span className='text-primary font-bold text-sm w-5 flex-shrink-0'>
                      {post.num}
                    </span>

                    {/* content */}
                    <div>
                      <p className='text-gbtext text-xs font-medium leading-snug group-hover:text-primary transition-colors'>
                        {post.title}
                      </p>
                      <p className="text-gbtext/50 text-xs mt-0.5"> 
                        {post.readers} readers • {post.readTime}
                      </p>
                    </div>

                  </div>
                ))}
                
              </div>
              <button className="w-full mt-4 border border-border text-gbtext/60 text-xs py-2 rounded-lg hover:border-primary hover:text-primary transition-colors">
                View More
              </button>
            </div>
            {/* top posts today end */}

          </div>
          {/* right column end */}

        </div>
        {/* 3 column grid end */}

      </div>
      {/* main container end */}

    </div>
  )
}

export default Home
