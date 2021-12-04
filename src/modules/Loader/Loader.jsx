import ContentLoader from "react-content-loader";

const Loader = () => {
    return <>
     <ContentLoader>
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="0" rx="4" ry="4" width="70" height="70"/>
        <rect x="160" y="0" rx="4" ry="4" width="70" height="70"/>
        <rect x="240" y="0" rx="4" ry="4" width="70" height="70"/>
      </ContentLoader>
    </>
}

export default Loader;