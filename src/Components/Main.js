import React, {Component} from 'react'
import Title from './Title'
import Wall from './Wall'


const posts = [{
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
}]


class Main extends Component {
    render() {
        return  <div>
                <Title title={'photoSHARE'}/>
                <Wall posts={posts}/>
                </div>           
    }
}

export default Main