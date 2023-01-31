import React from "react"
import ContentLoader from "react-content-loader"
const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={368}
        height={546}
        viewBox="0 0 368 546"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="11" y="-14" rx="5" ry="5" width="350" height="461" />
        <rect x="80" y="465" rx="6" ry="6" width="193" height="27" />
        <rect x="115" y="502" rx="2" ry="2" width="125" height="22" />
    </ContentLoader>
)
export default Skeleton;
