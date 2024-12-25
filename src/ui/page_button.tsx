const PageButton = ({
    isActive,
    pageNum,
    icon,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive: boolean;
    pageNum: number | string;
    icon?: JSX.Element;
}) => {
    return (
        <button className={`page-button ${isActive ? 'active' : ''}`} {...props}>
            {icon ? icon : pageNum}
        </button>
    )
}

export default PageButton