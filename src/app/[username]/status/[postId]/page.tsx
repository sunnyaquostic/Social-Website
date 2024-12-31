import Comment from "@/components/Comments"
import Image from "@/components/Image"
import Post from "@/components/Post"
import Link from "next/link"

const StatusPage = () => {
    return (
        <div>
            <div className="flex items-center gap-8 backdrop-blur-md p-4 z-10 bg-[#00000084]">
                <Link href="/">
                    <Image path="icons/back.svg" alt="text" w={24} h={24} />
                </Link>
                <h1>Post</h1>
            </div>
            <Post type="status"/>
            <Comment />
        </div>
    )
}

export default StatusPage