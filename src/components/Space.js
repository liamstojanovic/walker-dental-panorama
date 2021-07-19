import React, { Component } from 'react'
import ReactPannellum, { getConfig } from "react-pannellum"

// I think props need to be passed down from App.js to here
// PannellumJson needs to be rewritten to abide to pannellum syntax
export class Space extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            pannellumJson : [
                {
                    title: "Parking lot and Building",
                    panorama: 'https://f002.backblazeb2.com/file/cw3-public/walker/img/IMG_1539.jpg',
                    autoLoad: true, 
                },
                {
                    title: "Lobby",
                    panorama: 'https://f002.backblazeb2.com/file/cw3-public/walker/img/IMG_1535.jpg',
                    autoLoad: true,
                },
                {
                    title: "Patient Rooms",
                    panorama: 'https://f002.backblazeb2.com/file/cw3-public/walker/img/IMG_1522.jpg',
                    autoLoad: true
                }
            ],
            spaceId: 0,
        }
        

    }

    click () {
        console.log(getConfig)
    }

    render() {
        const pannellumEmbed = this.state.pannellumJson.map((element, index) => {
            return (
            <ReactPannellum
                id={String(index)}
                sceneId={element.title}
                imageSource={element.panorama}
                config={{
                    autoLoad: true,
                }}
            />
            )
        })
        console.log(pannellumEmbed)
        return (
            // <div id="panorama">
            //     <ReactPannellum
            //         id="1"
            //         sceneId="Parking lot and Building"
            //         imageSource="https://f002.backblazeb2.com/file/cw3-public/walker/img/IMG_1539.jpg"
            //     />
            // </div>
            <div id="panorama">
                {pannellumEmbed[this.props.currentSpace]}
            </div>
        )
    }
}

export default Space
