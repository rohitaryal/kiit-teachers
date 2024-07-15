import { useState } from "react";
import "../style/Search.css";

const Search = () => {
    const sections = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55
    ]

    const [filter, setFilter] = useState(0);
    console.log("HI");

    return <div className="search-container">
        <input type="text" placeholder="Search Here" onChange={(e) => setFilter(e.target.value)} />
        <select name="section" id="section">
            {
                sections.map(section => {
                    return <option key={crypto.randomUUID()}>CSE-{section}</option>;
                })
            }
        </select>
    </div>
}

export default Search;