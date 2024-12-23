import { BiSearch } from "react-icons/bi"

export const SearchBox = ({ placeholder, background, stroke }: { placeholder: string; background: string, stroke: string }) => {
    return (<div className="search_box" style={{ background: background, border: stroke }}>
        <BiSearch className="search_box-icon" />
        <input type="text" className="search_box-input" placeholder={placeholder} />
    </div>)
}