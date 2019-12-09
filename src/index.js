import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Search from "./components/search/search";
import ContactList from "./components/contactlist/contactlist";


const App = () => {

    const List = [
        {
            name: "Rihanna", 
            decription: "Robyn Rihanna Fenty is a Barbadian singer, songwriter, fashion designer, actress and businesswoman, who has been recognized for embracing various musical styles and reinventing her image throughout her career.",
            avatar: "https://specials-images.forbesimg.com/imageserve/5ceec355142c500008f42068/1920x0.jpg?cropX1=32&cropX2=1982&cropY1=257&cropY2=2207",
            facebook:"https://www.facebook.com/rihanna/",
            instagram:"https://www.instagram.com/badgalriri/?hl=uk",
            twitter: "https://twitter.com/rihanna"
        },
        {
            name: "Beyonce", 
            decription: "Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as the lead singer of Destiny's Child, one of the best-selling girl groups in history.", 
            avatar: "https://www.biography.com/.image/t_share/MTU0MTU0MTc3NzkzMTA3MzU1/beyonce-attends-tidal-x-1015-on-october-15-2016-in-new-york-city-photo-by-theo-wargogetty-images-for-tidal-sqaure.jpg",
            facebook:"https://www.facebook.com/beyonce/",
            instagram:"https://www.instagram.com/beyonce/?hl=uk",
            twitter: "https://twitter.com/beyonce"
        },{
            name:"Eminem",
            decription:"Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, is an American rapper, songwriter, record producer, record executive, film producer, and actor. He is consistently cited as one of the greatest and most influential rappers of all time. ",
            avatar:"http://www.spletnik.ru/img/__post/5a/5a8c8fdc9f110496f53fa1855eda28a0_248.jpg",
            facebook:"https://www.facebook.com/eminem/",
            instagram:"https://www.instagram.com/eminem/?hl=uk",
            twitter: "https://twitter.com/eminem"
        },{
            name:"Katy Perry",
            decription:"Katheryn Elizabeth Hudson (born October 25, 1984), known professionally as Katy Perry, is an American singer, songwriter and television personality. After singing in church during her childhood, she pursued a career in gospel music as a teenager.",
            avatar:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Katy_Perry_DNC_July_2016_%28cropped%29.jpg",
            facebook:"https://www.facebook.com/katyperry/",
            instagram:"https://www.instagram.com/katyperry/?hl=uk",
            twitter: "https://twitter.com/katyperry"
        },{
            name:"Justin Timberlake",
            decription:"Justin Randall Timberlake (born January 31, 1981), occasionally known by his initials, JT, is an American singer, songwriter, actor, dancer, and record producer. Raised in Tennessee, he appeared on the television shows Star Search and The All-New Mickey Mouse Club as a child.",
            avatar:"https://stuki-druki.com/aforizms/Justin-Timberlake-01.jpg",
            facebook:"https://www.facebook.com/justintimberlake/",
            instagram:"https://www.instagram.com/justintimberlake/?hl=uk",
            twitter: "witter.com/jtimberlake"
        }
        
    ]
    return (
        <div className="container bootstrap snippet">
            <Search />
            <ContactList ContactList={List} />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

