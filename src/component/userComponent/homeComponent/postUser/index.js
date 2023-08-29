import { useEffect, useState } from 'react';
import './style.css'
import PostApis from '../../../../api/postApi';
const PostUser = () => {
    const [listPost, setListPost] = useState([]);
    const fetchPost = async (config = {}) => {
        try {
            const response = await PostApis.GetAll(config);
            setListPost(response.data);
        }
        catch (err) {

        }
    };
    useEffect(() => {
        fetchPost();
    }, []);
    const baseUrl = "http://localhost:52379"
    return (
        <>
            <div class="container-Post" >
                {listPost.map(item=>
                <div class="navbar-post">
                    <div class="container-image">
                        <img src={baseUrl +item.images} alt={item.images} />
                    </div>
                    <div class="navbar-post-content">
                        <div class="button-post">
                            <button>Pet knowledge</button>
                        </div>
                        <div class="content-post-title">
                            {item.name}
                        </div>
                        <p class="content-post-context">
                            {item.content}
                        </p>
                    </div>
                </div>
                )}
            </div >
        </>
    )
}
export default PostUser;
