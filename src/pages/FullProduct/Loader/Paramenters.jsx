import React from "react"
import ContentLoader from "react-content-loader"
export const Paramenters = (props) => (
    <ContentLoader 
    speed={2}
    width={330}
    height={280}
    viewBox="0 0 330 280"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-3" y="4" rx="0" ry="0" width="431" height="60" /> 
    <rect x="-4" y="76" rx="0" ry="0" width="210" height="19" /> 
    <rect x="-4" y="128" rx="0" ry="0" width="40" height="40" /> 
    <rect x="48" y="128" rx="0" ry="0" width="40" height="40" /> 
    <rect x="96" y="128" rx="0" ry="0" width="40" height="40" /> 
    <rect x="154" y="128" rx="0" ry="0" width="40" height="40" /> 
    <rect x="74" y="185" rx="0" ry="0" width="268" height="68" /> 
    <rect x="-4" y="185" rx="0" ry="0" width="68" height="68" />
  </ContentLoader>
)

