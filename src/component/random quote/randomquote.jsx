import React, { useState } from 'react'
import './randomquote.css' 
import twitter_icon from '../assets/twitter.png'
import reload_icon from '../assets/reload.png'
const RandomQuote = () => {
  
  let quotes=[];

  async function loadQuotes(){
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }
    const [quote,setQuote] = useState({
      text: "Difficulties increase the nearer we get to the goal.",
      author:"Johann Wolfgang von Gothe",
    });

    const random = () => {
      const select = quotes[Math.floor(Math.random()*quotes.length)];
      setQuote(select);
    }
    const twitter = ()=>{
      window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }

    loadQuotes();
    return (
    <div className='Container'>
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className='author'>- {quote.author.split(',')[0]}</div>
          <div className='icons'>
             <img src={reload_icon} onClick={()=>{random()}} alt=" " style={{height:50, width:50}}/>
             <img src={twitter_icon} onClick={()=>{twitter()}} alt="" style={{height:50, width:50}} />
            </div>      
        </div>
      </div>
    </div>
  )
}
export default RandomQuote