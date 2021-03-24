import Axios from 'axios'
import React, {Component} from 'react'
import Spinner from '../containers/Spinner/Spinner'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import {TextField, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


export default class CreatePost extends Component {
    
    constructor(props){
        super(props)
       
        this.state = {
            Post:{
                id:'',
                title:'',
                content:'',
                image:'',
                created: ''
            },
            error:{
                message: '',
                code:''
            },
            isloading:false,
            haserror:false,
            errors:{
                title:'',
                content:'',
                image:''
            }
        }
        this.submitHandler = this.submitHandler.bind(this);
        // this.changeHandler = this.changeHandler.bind(this);

    }
    componentDidMount() {
        let path = this.props.match.path
        let postId = this.props.match.params.postId
        const storedData = JSON.parse(localStorage.getItem('jwt'));
        if(!storedData && path == '/create'){
            this.props.history.push('/new/blog')
        }
        if(path ==='/api/posts/:postId'){
            this.setState(pre =>({
                isloading: true
            }))
            Axios.get('/api/posts'+postId).then(data =>{
                let post = data.data
                this.setState({
                    isloading: false,
                    Post: {...this.state.Post, postId:post._id, title: post.title, content: post.content, image:post.image}
                });
            }).catch(e => {
                this.setState({
                    isloading: false,
                    error:{
                        ...this.state.error, message: e.response.data.message,
                        code: e.reponse.status
                    }
                });
            })
        }
        console.log(this.state)
    }
    imageHandler(id, value, isvalid){
        this.setState({ Post: { ...this.state.Post, [id]: value } }, () => {

        });
    }
    
    // changeHandler = (event) => {
    //     let nam = event.target?.name;
    //     let val = event.target?.value;
    //     let errors = this.state.errors;
    //     const { name, value } = event.target;
    //     switch (name) {

    //         case 'title':
    //             if (value.length > 0) {
    //                 errors.title =
    //                     value.length < 6
    //                         ? 'Title   must be 5 characters long!'
    //                         : '';
    //             }

    //             if (value.length === 0) {
    //                 errors.title =
    //                     value.length === 0
    //                         ? 'title is required!'
    //                         : '';
    //             }
    //             break;

    //         case 'content':
    //             if (value.length > 0) {
    //                 errors.content =
    //                     value.length < 20
    //                         ? 'Content  must be 20 characters long!'
    //                         : '';
    //             }

    //             if (value.length === 0) {
    //                 errors.content =
    //                     value.length === 0
    //                         ? 'Content is required!'
    //                         : '';
    //             }
    //             break;
    //         case 'imagePath':
    //             if (value.length === 0) {
    //                 errors.imagePath =
    //                     value.length === 0
    //                         ? 'Image is required!'
    //                         : '';
    //             }
    //             break;
    //         default:
    //             break;
    //     }

    //     this.setState({ ...errors, Post: { ...this.state.Post, [nam]: val } }, () => {

    //     });
    // }
    submitHandler(e){
       this.setState(pre => ({
           isloading: true
       })) 
       let path = this.props.match.path
       let postId = this.props.match.params.postId
       let date = new Date()
       e.preventDefault()
       let formData;
       if(typeof (this.state.Post.image) ==='object') {
           formData = new FormData()
           formData.append('postId', this.state.Post.postId)
           formData.append('title', this.state.Post.title)
           formData.append('content', this.state.Post.content)
           formData.append('image', this.state.Post.image)
           formData.append('postDate', date.toString());
       }
       else{
           formData = {
            "postId": this.state.Post.postId,
            'title': this.state.Post.title,
            'content': this.state.Post.content,
            'image': this.state.Post.image,
            'postDate': date.toString()
           }
       }
       if (path === "/posts/edit/:postId") {
        Axios.put("/posts/" + postId, formData).then(data => {
            this.setState(pre => ({
                isloading: false
            }))
            this.props.history.push('/')
        })
            .catch(e => {
                this.setState({
                    isloading: false,
                    error: {
                        ...this.state.error, message: e.response.data.message,
                        code: e.response.status
                    }
                });
            })
    }
    else {
        Axios.post("/api/posts", formData).then(data => {
            this.setState(pre => ({
                isloading: false
            }))
            this.props.history.push('/')
        })
            .catch(e => {
                this.setState({
                    isloading: false,
                    error: {
                        ...this.state.error, message: e.response.data.message,
                        code: e.response.status
                    }
                });
            })
    }
    this.setState({
        Post: { ...this.state.Post, title: '', content: '', imagePath: '' }
    });

    }
    render() {
        let isLoading 
        let iserror 
        const classes = useStyles()
         if(this.state.isloading){
             isLoading = (
                 <>
                    <div className="container loading">
                        <div className='mar-20'>
                            <Spinner />
                        </div>
                    </div>
                 </>
             )
         }
         if(this.state.error.code){
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
        return (
            <>
                {isLoading}
                {iserror}
                <div className="container container-short">
                <form onSubmit={this.submitHandler} className="pt-4">
                <h3 className="text-center mb-3">Create Post</h3>
                    <div className="form-group">
                        <label htmlFor="title">Title </label>
                        <input
                            type='title'
                            name='title'
                            value={this.state.Post.title}
                            className={"form-control " + (this.state.errors.title ? 'is-invalid' : '')}
                            placeholder="Enter the title"
                            required
                            // onChange={this.changeHandler}
                        />
                        
                <TextField type="text" id="title" name="title" label='Enter Title' className={classes.textField}
                            value={this.state.Post.title}
                            onChange={this.changeHandler}
                             required />

                        {this.state.errors.title.length > 0 &&
                            <div className="mt-1"><span className='error text-danger'>{this.state.errors.title}</span></div>}

                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description </label>
                        <textarea
                            type='text'
                            name='content'
                            rows="10"
                            value={this.state.Post.content}
                            className={"form-control " + (this.state.errors.content ? 'is-invalid' : '')}
                            placeholder="Enter the  description"
                            required="required"
                            onChange={this.changeHandler}
                        />

                        {this.state.errors.content.length > 0 &&
                            <div className="mt-1"><span className='error text-danger'>{this.state.errors.content}</span></div>}
                    </div>
                    <div className="form-group">
                        <input accept="image/*" onChange={this.imageHandler} className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <Button variant="contained" component="span">
                                Add Image
                                <FileUpload />
                            </Button>
                        </label>
                        <span className={classes.filename}>{values.image ? values.image.name : ''}</span><br/>
                        {this.state.errors.image.length > 0 &&
                            <div className="mt-1"><span className='error text-danger'>{this.state.errors.image}</span></div>}
                    </div>
                    <div className="form-group">
                        <button style={{ marginRight: '15px' }}
                            type='submit'
                            className="btn btn-primary"
                            disabled={this.state.Post.title && this.state.Post.content && this.state.Post.image
                                ? '' : 'disabled'}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

const useStyles = makeStyles(theme =>({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
      },
      bigAvatar: {
        width: 60,
        height: 60,
        margin: 'auto'
      },
      error: {
        verticalAlign: 'middle'
      },
      title: {
        marginTop: theme.spacing(2),
        color: "#acd523",
        fontFamily:"Arial Black",
        fontSize: '1em'
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
      },
      submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2),
        // backgroundColor:'#17293d',
        
        textDecorationColor:"white",
      '&:hover': {
          //  backgroundColor: fade('#17293d'),
           textDecorationColor:"#17293d",
           
           },
      },
      submitme:{
        margin: 'auto',
        marginBottom: theme.spacing(2),
        backgroundColor:'#17293d',
        '&:hover': {
          backgroundColor: fade('#17293d',1.0),
        },
        color:"white"
         },
      input: {
        display: 'none'
      },
      filename:{
        marginLeft:'10px'
      },
      cardpic:{
        backgroundColor:"#acd523",
        '&:hover': {
          backgroundColor:('#acd523'),
      }
    }
}))