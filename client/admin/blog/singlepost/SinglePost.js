import React, { Component } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom'
import Spinner from '../containers/Spinner/Spinner'
import Modal from '../containers/Modal/Modal'
export default class SinglePost extends Component {
    constructor(props) {
        super(props)
            this.state = { 
                singlePost:{},
                error:{
                    message: '',
                    code :''
                },
                isloading:false,
                show:false
            }
       
    }
    showModal(){
        this.setState({show: true})
    }
    hideModal(){
        this.setState({show: false})
    }
    componentDidMount(){
        this.setState(pre => ({
            isloading: true
        }))
        let postId = this.props.match.params.postId
        Axios.get('/api/posts/' + postId).then(res => {
            this.setState({ ...this.state.singlePost, singlePost: res.data, isloading: false });
            return Axios.get("/api/users/" + res.data.creator)
        }).then(data => {
            this.setState({ ...this.state.singlePost, user: data.data.profile, isloading: false });
        }).catch(e => {
                this.setState({
                    isloading: false,
                    error: {
                        ...this.state.error, message: e.response.data.message,
                        code: e.response.status
                    }
                });
            })
    }
    deletePost(id){
        this.setState(pre => ({
            isloading: true
        }))
       Axios.delete("/api/posts/"+id).then(data=>{
        this.setState(pre => ({
            isloading: false
        }))
        this.props.history.push('/mypost')
       })
       .catch(e=>{
        this.setState({
            isloading: false,
            error: {
                ...this.state.error, message: e.response.data.message,
                code: e.response.status
            }
        });
       })
    }
    render() {
        let isLoading
        let iserror

        if (this.state.isloading) {
            isLoading = (
                <>
                    <div className="container loading">
                        <div className="mar-20">
                            <Spinner />
                        </div>
                    </div>
                </>
            )
        }

        if (this.state.error.code) {
            iserror = (
                <>
                    <div className="container error container-short">
                        <div className="mar-20">
                            <h5>Error Code - {this.state.error.code}</h5>
                            <h4>Error Message - {this.state.error.message}</h4>
                        </div>
                    </div>
                </>
            )
        }

        let post
        let post1 = this.state.singlePost
       
        if (this.state.singlePost) {

            post = (<>
                <h2>{post1.title}</h2>
                <div className="SingleBlog_avatar">
                    {/* <Link to={"/public/" + user?.username} rel="noopener noreferrer" >
                        <img src={user?.imagePath ? user.imagePath : avtar} alt="img" width="75" height="75" />
                    </Link> */}

                    {/* <Link to={"/public/" + user?.username} rel="noopener noreferrer" >
                        <p>{user?.username}</p>
                    </Link> */}
                    <p>{post1.postDate.toString()}</p>
                </div>
                <div className="singlePost_content pt-3">
                    <img src={post1.imagePath} className="img-fluid" alt="prof" />
                    <div className="text pt-3">
                        <p>{post1.content}</p>
                    </div>
                </div>
            </>
            )
        }
        return (<>
            {isLoading}
            {iserror}
            <div className="container py-4 SingleBlog ">
                <div className="row">
                    {this.props.match.path === "/mypost/:id" &&
                        <div className="col-md-3 col-xs-12 ">
                            <div className="list-group">
                                <Link to={"/edit/" + post1._id} className="list-group-item list-group-item-action">Edit</Link>
                                <button type="button"  onClick={this.showModal} className="list-group-item list-group-item-action">Delete</button>
                            </div>
                        </div>}
                    <div className="col-md-9 col-xs-12 main">
                        <Modal show={this.state.show} handleClose={this.hideModal}>
                            <div className="modal-header">
                            <h2>{post1.title}</h2>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.hideModal}>&times;</button>
                                
                            </div>
                            <div className="modal-body">
                                Confirm delete
                           </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={()=>this.deletePost(post1._id)}>Delete </button>
                                <button type="button" className="btn btn-outline-dark" onClick={this.hideModal} data-dismiss="modal">Close</button>
                            </div>
                        </Modal>
                        {post}
                    </div>
                </div>
            </div>
        </>
        )
    }
}
