import React, {Component} from 'react'
import Axios from 'axios'
import ShowPost from './showpost/ShowPost'
import img1 from '../../assets/images/asset-1.png'
import Spinner from './containers/Spinner/Spinner'
import Grid from '@material-ui/core/Grid'

export class  Posts extends Component {
    constructor(props){
        super(props)

        this.state ={
            posts:[],
            users:[],
            isloading: false
        }
    }

    componentDidMount(){
        this.setState(pre =>({
            isloading: true
        }))
        Promise.all([
            Axios.get('/api/posts'),
            // Axios.get('/api/users')
        ]).then(data => {
            this.setState(pre=>({
                isloading:false
            }))
            this.setState({...this.state.posts, posts: data[0].data.posts});
            // this.setState({...this.state.users, users:data[1].data.profile})
        })
        .catch(e => {
            this.setState(pre => ({
                isloading: false
            }))
        })
    }

    render(){
        let isLoading
        if(this.state.isLoading){
            isLoading = <Spinner />
        }
        let fetchedPost
        // let allUsers
        if(this.state.posts){
            fetchedPost = this.state.posts.map((post, index)=>(
                <ShowPost key={index} {...post} {...index} />
            ))
        }
       return (
        <div>

        <div className="container hero" >
            <div className="row align-items-center text-center text-md-left" >
                <div className="col-lg-4 col-sm-12 col-md-12 col-xs-12" >
                    <p className="display-4" id="blogp">
                       Read more stories about E-commerce
            </p>
                    <p>
                        Visit our blog frequently to see what we have for you as our cherished customer !!
            </p>
                </div>
                <div className="col-lg-8 col-sm-12 col-md-12 col-xs-12" style={{marginTop:"32rem"}}>
                    <img src={img1} className="img-fluid" id="blogimg" alt="img" />
                </div>
            </div>


        </div>
        <div className="container hero py-5">
            <div className="row">
                <div className="col-md-8 col-xs-12">
                    <div className="row">
                        {fetchedPost}
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 col-xs-12 pl-4 mt-sm-4" style={{marginTop:"15rem", marginLeft:"690px", color:"#acd523", fontFamily:"Arial Black"}}>
                    <h3 className="mb-4" id="latepost"> Latest Posts</h3>
                    <hr></hr>
                    {fetchedPost}
                </div>
            </div>
        </div>

        <div className="container loading">
            {isLoading}
        </div>
    </div>
       )
    }
}

export default Posts
