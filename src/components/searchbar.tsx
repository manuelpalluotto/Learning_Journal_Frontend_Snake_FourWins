import { CiSearch } from "react-icons/ci";

export default function Searchbar() {
    return(
        <div className='search'>
                    <input className='searchbar'></input>
                    <div className='mg-glass'><CiSearch /></div>
                </div>
    );
}