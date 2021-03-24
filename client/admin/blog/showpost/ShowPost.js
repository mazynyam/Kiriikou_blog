import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import ToText from '../containers/utils/ToText'
import avtar from './../../../assets/images/avtar.jpg'
import Spinner from '../containers/Spinner/Spinner'

export default function ShowPost(props) {
    const [post, setPost] = useState(props)
    const [loading, setLoading] = useState(false)
    const [errmsg, setErrMsg] = useState()
    const [errcode, setErrCode] = useState()
    const history= useHistory()
    const pathname = history.location.pathname

    useEffect(()=>{
        setLoading(true)
        Axios.get('/api/users'+props.creator).then(data =>{
            setLoading(false)
            setPost({ ...props, user: data.profile})
        }).catch(e => {
            setLoading(false)
        })
    }, [props])
    
    return (
        <>
        {errcode ?
            <div className="container error container-short">
                <div className="mar-20">
                    <h5>Error Code - {errcode}</h5>
                    <h4>Error Message - {errmsg}</h4>
                </div>
            </div>
            : null}

        {loading ?
            <div className="container loading">
                <div className="mar-20">
                    <Spinner />
                </div>
            </div>
            : null}
        <div className="col-md-6 col-sm-6 col-xs-12 showblog mb-3">
            <div className="showblog_card card">
                <div className="showblog_card_image"
                    style={{ backgroundImage: `url(${props.imagePath})` }}>


                    <div className="show_auth_img">
                        {/* <Link to={"/post/"} style={{ backgroundImage: `url(${ avtar})` }}>By {post.user?.name}</Link> */}
                        <p>By Admin</p>
                    </div>
                </div>
                <div className="card-body">
                    <h5 className="card-title pt-3">
                        {pathname === "/mypost" ?
                            <Link
                                to={'/mypost/' + props._id}
                                className="title">
                                {props.title}
                            </Link> :

                            <Link
                                to={'/post/' + props._id}
                                className="title">
                                {props.title}
                            </Link>
                        }

                    </h5>

                    <p className="showblog_content">
                        {`${ToText(
                            props.content.substring(0, 80)
                        )}...`}<span> <b>Read More</b></span>
                    </p>
                </div>
            </div>
        </div>
    </>
    )
}
