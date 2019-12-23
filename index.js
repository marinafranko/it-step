import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ContactList from "./components/contactlist/contactlist";
import NotFound from "./components/NotFound/NotFound";
import MainMenu from "./components/MainMenu/MainMenu";
import AddNewContact from "./components/AddNewContact/AddNewContact";

class App extends React.Component {
    state = {
        List: [
            {
                id: 1,
                name: "Rihanna",
                decription: "Robyn Rihanna Fenty is a Barbadian singer, songwriter, fashion designer, actress and businesswoman, who has been recognized for embracing various musical styles and reinventing her image throughout her career.",
                avatar: 32,
                gender: "women",
                facebook: "https://www.facebook.com/rihanna/",
                instagram: "https://www.instagram.com/badgalriri/?hl=uk",
                twitter: "https://twitter.com/rihanna",
                btnStar: true
            },
            {
                id: 2,
                name: "Beyonce",
                decription: "Beyoncé Giselle Knowles-Carter is an American singer, songwriter, and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as the lead singer of Destiny's Child, one of the best-selling girl groups in history.",
                avatar: 22,
                gender: "women",
                facebook: "https://www.facebook.com/beyonce/",
                instagram: "https://www.instagram.com/beyonce/?hl=uk",
                twitter: "https://twitter.com/beyonce",
                btnStar: true
            }, {
                id: 3,
                name: "Eminem",
                decription: "Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, is an American rapper, songwriter, record producer, record executive, film producer, and actor. He is consistently cited as one of the greatest and most influential rappers of all time. ",
                avatar: 32,
                gender: "men",
                facebook: "https://www.facebook.com/eminem/",
                instagram: "https://www.instagram.com/eminem/?hl=uk",
                twitter: "https://twitter.com/eminem",
                btnStar: false
            }, {
                id: 4,
                name: "Katy Perry",
                decription: "Katheryn Elizabeth Hudson (born October 25, 1984), known professionally as Katy Perry, is an American singer, songwriter and television personality. After singing in church during her childhood, she pursued a career in gospel music as a teenager.",
                avatar: 82,
                gender: "women",
                facebook: "https://www.facebook.com/katyperry/",
                instagram: "https://www.instagram.com/katyperry/?hl=uk",
                twitter: "https://twitter.com/katyperry",
                btnStar: false
            }, {
                id: 5,
                name: "Justin Timberlake",
                decription: "Justin Randall Timberlake (born January 31, 1981), occasionally known by his initials, JT, is an American singer, songwriter, actor, dancer, and record producer. Raised in Tennessee, he appeared on the television shows Star Search and The All-New Mickey Mouse Club as a child.",
                avatar: 12,
                gender: "men",
                facebook: "https://www.facebook.com/justintimberlake/",
                instagram: "https://www.instagram.com/justintimberlake/?hl=uk",
                twitter: "witter.com/jtimberlake",
                btnStar: true
            }
        ]
    }

    onEditContact = (name, description, avatar) => {
        console.log("Name", name);
        console.log("Desc", description);
        console.log("Avatar", avatar)
    }
    onStarClick = (id) => {
        const index = this.state.List.findIndex(elem => elem.id === id);
        const newFavorite = this.state.List.slice();
        newFavorite[index].btnStar = !newFavorite[index].btnStar;
        this.setState(() => {
            return {
                btnStar: !this.newFavorite
            };
        });
    }

    onDelete = (id) => {
        const index = this.state.List.findIndex(elem => elem.id === id);
        console.log("index =>", index);

        let newArr = [];
        let counter = 0;
        for (let i = 0; i < this.state.List.length; i++) {
            if (i !== index) {
                newArr[counter] = this.state.List[i];
                counter++;
            }
        }
        this.setState(() => {
            return {
                List: newArr
            }
        })

    }
    render() {
        return (
            <div className="container bootstrap snippet" >

                <Router>
                    <MainMenu></MainMenu>
                    <Switch>
                        <Route path="/" exact render={() =>
                            <ContactList ContactList={this.state.List} onStarClick={this.onStarClick} onDelete={this.onDelete} />
                        }></Route>
                        <Route path="/add" exact component={() => <AddNewContact onEditContact={this.onEditContact} />}></Route>
                        <Route path="*" exact component={NotFound}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

