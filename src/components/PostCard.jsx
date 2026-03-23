import React from 'react'

const PostCard = ({ post }) => {
    const { author, role, time, content, tags, image, avatar } = post
    return (
        <div className='bg-card rounded-xl border border-border overflow-hidden'>
            
            <div className='p-4'>
                {/* author row */}
                <div className='flex items-center gap-3'>

                    {/* avatar */}
                    <div className='w-10 h-10 rounded-full bg-primary/20 flex  items-center text-gbtext font-bold flex-shrink-2'>
                    {avatar}
                    </div>
                </div>

                {/* name role time */}
                <div>
                    <p className='text-gbtext font-semibold text-sm'>{author}</p>
                    <p className='text-gbtext text-sm mt-3 leading-relaxed'>
                        {content}
                    </p>
                    <p className='text-gbtext/40 text-xs'>{role} • {time}</p>
                </div>

                {/* tags */}
                <div className='flex items-center gap-2 mt-3'>
                    {tags.map((tag) => (
                        <span
                        key={tag}
                        className='bg-secondary/30 text-gbtext/70 text-xs px-2 py-0.5 rounded-full'>
                            {tag}
                        </span>
                    ))}
                </div>

            </div>
            {/* image */}
            {image && (
                <img 
                src={image} 
                alt="post image" 
                className='w-full h-48 object-cover'
                />
            )}

        </div>
    )
}

export default PostCard