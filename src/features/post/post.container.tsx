import { connect } from "react-redux"
import { getPosts } from "../../store/post.duck"
import Post from "./post.component"
import requireAuth from "../../components/requireAuth"

const mapStateToProps = (state: any) => ({
  posts: state.post.posts
})

const mapDispatchToProps = (dispatch: any) => ({
  getPosts: () => dispatch(getPosts())
})

export default requireAuth(connect(mapStateToProps, mapDispatchToProps)(Post));