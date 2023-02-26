import { useEffect, useState } from 'react'

function Test() {
    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState(false)
    useEffect(() => {
        console.log('Component ilk render olundugunda')
        return () => {
            console.log('Component Destroyed')
        }
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => {
          return  res.json()
        }).then(data => {
            setPost(data)
        })
    }, [postId])
    return (
        <div>
            Test component<br /><hr />
            <h2>{postId}</h2>
            {post && JSON.stringify(post)}<br/>
            <button className='border-[1px]' onClick={() => setPostId(postId => postId + 1)}>Artir</button>
        </div>
    )
}
export default Test