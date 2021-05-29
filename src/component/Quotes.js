import React from 'react';
import randomico from '../img/shuffle.png'

const Quotes = ({random,setRandom}) => {
    const quoteList = [
        "Never spend your money before tou have earned it -Thomas Jefferson",
        `It's good to have money can but,but it's good,too,to check up
        once in awhile and make sure that you haven't lost the things
        that money can't buy - George Lorimer`,
        `There us gigantic difference between earning a great deal
        of money and being rich - Marlene Dietrich`,
        `Money-is usually attracted,not persued - Jim Rhon`,
        `If we command our wealth, we shall be rich and free.
        if our wealth command us,we are poor indeed - Edmund Burke`,
        `A Simple fact that is hard to learn is that the time to save
        money is when you have some- Joe Moore`,
        `Don't tell me where your priorities are. show me where you
        spend your money and i'll tell you what they are - James W.Frick`,
        `If you would be wealthy, think of saving as well as getting 
        -Benjamin Franklin`,
        `Many folks think they aren’t good at earning money, 
        when what they don’t know is how to use it — Frank A. Clark`,
        `Many people take no care of their money till they come nearly to the end of it, 
        and others do just the same with their time.” —Johann Wolfgang von Goethe`,
        `Money is only a tool. It will take you wherever you wish, 
        but it will not replace you as the driver.” —Ayn Rand`,
        `Money is a terrible master but an excellent servant.” —P.T. Barnum`,
        `It’s not how much money you make, but how much money you keep,
        how hard it works for you, and how many generations you keep it for.”
        —Robert Kiyosaki`,
        `A wise person should have money in their head, but not in their heart.” 
        —Jonathan Swift`,
        `The quickest way to double your money is to fold it 
        in half and put it in your back pocket.” —Will Rogers`,
        `Money is a guarantee that we may have what we want in the future. 
        Though we need nothing at the moment it insures the possibility
         of satisfying a new desire when it arises.” —Aristotle`,
    ]

    return (
        <div>
            <div className="quote-cont">
                <p>{quoteList[random]}</p>
                <img src={randomico} onClick={() => setRandom(Math.floor(Math.random() * 14))}/>
            </div>
        </div>
    )
}

export default Quotes
