import React, {Component} from 'react'
import Title from './Title'
import Wall from './Wall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'



class Main extends Component {
    constructor() {
        super()


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
                <Route path="/AddPhoto" render = {({history}) => (

                 <AddPhoto onAddPhoto={(addedPost) => {
                   this.addPhoto(addedPost)
                   history.push('/')
                }}/>
                )}/>
                </div>
        )
                     
    }
}

   


export default Main