import { Box, Typography } from "@mui/material"
import { useEffect } from "react"

type PostProps = {
  posts: Record<string, any>[]
  getPosts: () => void
}

const Post = ({ posts, getPosts }: PostProps) => {
  // useEffect(() => {
  //   getPosts();
  // }, []);

  return <>
    <Box>
      <Typography><b>List Posts</b></Typography>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        {
          posts.map(post => (<Box key={post.id}>
            <Typography>Id: {post.id}</Typography>
            <Typography>Title: {post.title}</Typography>
            <Typography>Body: {post?.body}</Typography>
            <Typography>UserId: {post.userId}</Typography>
          </Box>))
        }
      </Box>
    </Box>
  </>
}

export default Post;