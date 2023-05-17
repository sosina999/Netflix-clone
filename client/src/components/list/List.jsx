
import { useRef, useState } from 'react';
import Lists from '../lists/Lists';
import './list.scss';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

const List = () => {
  const [isMoved, setIsMove] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);


   const listRef = useRef();

  const handleClick = (direction) =>{
    setIsMove(true)
    let distance = listRef.current.getBoundingClientRect().x -50 
    if(direction === 'left' && slideNumber > 0 ){
      setSlideNumber(slideNumber-1)
      listRef.current.style.transform = `translateX(${225 + distance}px)`       
    }

    if(direction === 'right' && slideNumber < 5){
      setSlideNumber(slideNumber+1)
      listRef.current.style.transform = `translateX(${-225 + distance}px)`       
    }
    console.log(direction)
  }

    return (
        <div className='list'>
          <span className="listTitle">Continue to Watch</span>

          <div className="wrapper">
            <ArrowBackIosOutlinedIcon 
                     className='sliderArrow left' 
                     onClick={()=> handleClick("left")} 
                     style={{direction : !isMoved && 'none'}}/>

            <div className="container" ref={listRef}>
                 <Lists index ={0}/>  
                 <Lists index ={1}/>  
                 <Lists index ={2}/>  
                 <Lists index ={3}/>  
                 <Lists index ={4}/>  
                 <Lists index ={5}/>  
                 <Lists index ={6}/>  
                 <Lists index ={7}/>  
                 <Lists index ={8}/>  
                 <Lists index ={9}/>  
            </div>

            <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=> handleClick("right")} />

          </div>
        </div>
    );
}

export default List;
