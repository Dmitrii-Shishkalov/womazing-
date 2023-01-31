import React from "react"
import ContentLoader from "react-content-loader"

export const Breadcumbs = (props) => (
    <ContentLoader
        speed={2}
        width={1100}
        height={125}
        viewBox="0 0 1100 125"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="6" y="1" rx="0" ry="0" width="479" height="65" />
        <rect x="3" y="92" rx="0" ry="0" width="418" height="27" />
    </ContentLoader>

)
