const PageButton = ({ isActive, pageNum, icon }: {
    isActive: boolean,
    pageNum: number | string,
    icon?: JSX.Element
}) => {
    return (<button className={`page-button ${isActive ? 'active' : ''}`}>{icon ? icon : pageNum}</button>)
}

export default PageButton