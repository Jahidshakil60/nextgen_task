'use client'
import Image from 'next/image'
import React, { lazy } from 'react'

const SharedImage = ({
    src="",
    alt="",
    quality = 100,
    height,
    fill= true,
    width,
    loading = 'lazy',
    className="",
    style,
    onClick = () => {},
}) => {
    const isFill =  width  && height ? true : false
       
    // console.log("* isFill", isFill, height, width)
    return (
        <>
            {isFill ? (
                <Image
                    src={src}
                    alt={alt}
                    height={height}
                    width={width}
                    loading={loading}
                    quality={quality}
                    className={className}
                    style={style}
                    onClick={onClick}
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    loading={loading}
                    quality={quality}
                    fill={true}
                    className={className}
                    style={style}
                    onClick={onClick}
                />
            )}

            {/* {
                isFill ? console.log("* fill-false"): console.log("* fill-true")
            } */}
        </>
    )
}

export default SharedImage