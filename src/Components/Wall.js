import React, {Component} from 'react';
import Photo from './Photo'


// kommer loopa genom arrayen på main, skapar ny compinstance.
class Wall extends Component {
    render() {
        return <div className="photoGrid">
                    {this.props.posts.map((post, index) => <Photo key= {index} post={post}/>)} 
               </div>
    }
}

export default Wall