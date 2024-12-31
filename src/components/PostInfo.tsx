import Image from "./Image"
import Post from "./Post"

const PostInfo = () => {
    return (
        <div className="cursor-pointer w-3 h-4 relative">
            <Image path="icons/infoMore.svg" alt="" w={16} h={16} />
        </div>
    )
}

export default PostInfo