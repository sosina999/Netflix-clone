import "./featured.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="catagory">
          <span> {type === "movie" ? "Movies" : "TV Series"}</span>
          
          <select name="genre" id="genre">
            <option> Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantacy">Fantacy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.unsplash.com/photo-1682686581498-5e85c7228119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />

      <div className="info">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/10d7e8b1-9fe1-4c41-aeb7-331f4fb188aa/desxzmc-7d5eaf94-1c8f-4d62-b30d-9b1e11b85730.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwZDdlOGIxLTlmZTEtNGM0MS1hZWI3LTMzMWY0ZmIxODhhYVwvZGVzeHptYy03ZDVlYWY5NC0xYzhmLTRkNjItYjMwZC05YjFlMTFiODU3MzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qcwhybt16b55ItWstB_DgMBztpSJuo9kWOpzlxrDLvU"
          alt=""
        />

        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At harum,
          mollitia aspernatur iusto culpa dolorum soluta, nam, eaque animi
          excepturi voluptatem debitis dolorem temporibus cupiditate natus
          possimus ipsa perspiciatis obcaecati?
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
