"use client"

import Image from "@/components/Image"
import { useRouter } from "next/navigation"

const PostModal =  () => {
    const router = useRouter()

    const closeModal = () => {
        router.back();
    };

    return (
        <div className="absolute w-screen h-screen top-2 left-0 z-20 bg-[#293139a6] flex justify-center">
            <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
                {/* top */}
                <div className="flex items-center justify-between">
                    <div className="cursor-pointer" onClick={closeModal}>X</div>
                    <div className="text-iconBlue font-bold">Draft</div>
                </div>

                {/* center */}
                <div className="py-8 flex gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image path="general/avatar.png" alt="sunny empire" w={100} h={100} tr={true} />
                    </div>
                    <input className="flex-1 bg-transparent  outline-none text-xl" type="text" placeholder="what is happening?!"  />
                </div>

                {/* bott9m */}
                <div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray">
                    <div className="flex gap-4 flex-wrap">
                        <Image path="icons/image.svg" alt="" w={20} h={20} classname="cursor-pointer" />
                        <Image path="icons/gif.svg" alt="" w={20} h={20} classname="cursor-pointer" />
                        <Image path="icons/poll.svg" alt="" w={20} h={20} classname="cursor-pointer" />
                        <Image path="icons/emoji.svg" alt="" w={20} h={20} classname="cursor-pointer" />
                        <Image path="icons/schedule.svg" alt="" w={20} h={20} classname="cursor-pointer" />
                        <Image path="icons/location.svg" alt="" w={20} h={20} classname="cursor-pointer" />
                    </div>
                    <button className="py-2 px-4 text-black bg-white rounded-full font-bold">Post</button>
                </div>
            </div>
        </div>
    )
}

export default PostModal