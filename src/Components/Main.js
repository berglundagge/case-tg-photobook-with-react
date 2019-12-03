import React, {Component} from 'react'
import Title from './Title'
import Wall from './Wall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'



class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [
                {
                    id: "0",
                    description: "Man with banjo",
                    imageLink: "https://gratisography.com/fullsize/gratisography-63H.jpg"
                }, {
                    id: "1",
                    description: "Ukulele",
                    imageLink: "https://gratisography.com/fullsize/gratisography-420H.jpg"  
                },
                {
                    id: "2",
                    description: "Poker with dogs ",
                    imageLink: "https://gratisography.com/fullsize/gratisography-man-dogs-playing-cards.jpg"
                }
            ],

            
        }

        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved) {

        this.setState((state) => ({
            posts: state.posts.filter(post => post!==postRemoved)
        }))

    }


// OM vi hade behövt hämta urls från databas
    componentDidMount() {
 
    }

 
    // Render-method i och med det är flera komponenter, endast en komponent =  använd component
    render() {
        return  (<div>
            <Route exact path = "/" render ={() => (
                <div>
                <Title title={'photoSHARE'}/>
                <Wall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
            </div>
           
            )}/>
                <Route path="/AddPhoto" component = {AddPhoto}/>
                </div>
        )
                     
    }
}

   


export default Main