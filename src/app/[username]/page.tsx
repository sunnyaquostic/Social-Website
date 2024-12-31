import Feed from "@/components/Feed"
import Image from "@/components/Image"
import Link from "next/link"

const UserPage = () => {
    return (
        <div>
            {/* profile title */}
            <div className="flex items-center gap-8 backdrop-blur-md p-4 z-10 bg-[#00000084">
                <Link href="/">
                    <Image path="icons/back.svg" alt="text" w={24} h={24} />
                </Link>
                <h1>Sunny Dev</h1>
            </div>

            <div>
                {/* cover and avatar */}
                <div className="relative w-full">
                    {/* cover */}
                    <div className="w-full aspect-[3/1] relative">
                        <Image path="general/cover.jpg" alt="" w={600} h={200} tr={true} />
                    </div>
                    {/* avatar */}
                    <div className="w-1/6 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2" >
                        <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
                    </div>

                </div>
                <div className="flex w-full items-center justify-end gap-2 p-2">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/more.svg" alt="more" w={20} h={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/explore.svg" alt="more" w={20} h={20} />
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Image path="icons/message.svg" alt="more" w={20} h={20} />
                    </div>
                    <button className="py-2 px-4 bg-white text-black font-bold rounded-full">Follow</button>
                </div>
                {/* user info */}
                <div className="p-4 flex flex-col gap-2">
                    {/* username & handle */}
                    <div className="">
                        <h1 className="text-2xl font-bold">Sunny Dev</h1>
                        <span className="text-textGray text-sm">@sunnyempire</span>
                    </div>
                    <p>Sunny Empire Youtube Channel</p>
                    {/* job & location & date */}
                    <div className="flex gap-4 text-textGray text-[15px]">
                        <div className="flex items-center gap-2">
                            <Image path="icons/userLocation.svg" alt="location" w={20} h={20} />
                            <span className="">Nigeria</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image path="icons/date.svg" alt="date" w={20} h={20} />
                            <span className="">Joined March 2022</span>
                        </div>
                    </div>

                    {/* following and followers */}
                    <div className="flex gap-4">
                        <div className=" flex items-center gap-2">
                            <span className="font-bold">1000</span>
                            <span className="text-textGray text-[15px]">followers</span>
                        </div>

                        <div className=" flex items-center gap-2">
                            <span className="font-bold">1000</span>
                            <span className="text-textGray text-[15px]">followings</span>
                        </div>
                    </div>
                </div>
            </div>
            <Feed />
        </div>
    )
}

export default UserPage