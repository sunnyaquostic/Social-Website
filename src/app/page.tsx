import Feed from "@/components/Feed"
import Share from "@/components/Share"
import Link from "next/link"

const Homepage = () => {
  return (
    <div className=''>
        <div className="pt-4 px-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
          <Link href="/" className="pb-3 flex items-center border-b-4 border-iconBlue">for you</Link>
          <Link href="/" className="pb-3 flex items-center">following</Link>
          <Link href="/" className="hidden pb-3 md:flex items-center">React</Link>
          <Link href="/" className="hidden pb-3 md:flex items-center">Javascript</Link>
          <Link href="/" className="hidden pb-3 md:flex items-center">Css</Link>
        </div>
        <Share />
        <Feed />
    </div>
  )
}

export default Homepage