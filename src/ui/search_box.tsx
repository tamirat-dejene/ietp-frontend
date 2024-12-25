import { BiSearch } from "react-icons/bi"

type SearchBoxProps = {
    placeholder: string;
    background: string;
    stroke: string;
    searchQuery: string;
    setSearchQuery: (arg0: string) => void;
}

export const SearchBox = ({ placeholder, background, stroke, searchQuery, setSearchQuery }: SearchBoxProps) => {

    return (<div className="search_box" style={{ background: background, border: stroke }}>
        <BiSearch className="search_box-icon" />
        <input
            type="text"
            className="search_box-input"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>)
}