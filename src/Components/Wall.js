import React from 'react';
import Photo from './Photo'
// kommer loopa genom arrayen på main, skapar ny compinstance.
function Wall(props) {
    return <div className="photoGrid">
    {props.posts.map((post, index) => <Photo key= {index} post={post}/>)} 
</div>
}


export default Wall