import React from "react"
import ContentLoader from "react-content-loader"

export const ImgPrLoader = (props) => (
    <ContentLoader
        speed={2}
        width={370}
        height={490}
        viewBox="0 0 370 490"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="11" y="5" rx="0" ry="0" width="350" height="478" />
    </ContentLoader>
)

