import './watch.scss';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlinedIcon/>
                Home

            </div>

            <video className='video' autoPlay Progress controls 
            src="https://www.youtube.com/watch?v=xG80NYxTcX4">

            </video>
            {/* <iframe 
            className='video' autoPlay Progress controls 
            width="560" height="315" src="https://www.youtube.com/embed/xG80NYxTcX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
    );
}

export default Watch;
