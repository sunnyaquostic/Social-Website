"use client"

import { IKImage } from "imagekitio-next"

type ImageType = {
    path: string,
    w?: number,
    h?: number,
    alt: string,
    classname?: string,
    tr?: boolean
}

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

const Image = ({
    path, w, h, alt, classname, tr
} : ImageType) => {
    return (
        <IKImage 
            urlEndpoint={urlEndpoint} 
            path={path} 
            width={w} 
            height={h} 
            alt={alt}  
            className={classname}
            lqip={{ active: true, quality: 20 }}
            {...(tr ? {transformation: [{ width: `${w}`, height: `${h}` }] } :  { width:w, height:h })}
        />
    )
}

export default Image