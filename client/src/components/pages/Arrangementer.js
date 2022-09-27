import React, { useContext } from "react"
import { imageUrlBuilder } from '../../sanity';
import PortableText from '@sanity/block-content-to-react'
import { SanityContext } from "../../sanityUtils/SanityContext";

import { ThreePartTemplate, HomeImagePage, StyledEvent } from './pages.styled';
import { Forsidebilde } from 'Images'


const urlFor = source =>
    imageUrlBuilder({projectId: "f9l4rugm", dataset: "production"}).image(source);

const serializer = {
    types: {
        mainImage: props =>
        <figure>
            <img src={urlFor(props.node.asset).width(600)} alt={props.node.alt}/>
            <figcaption>
                {props.node.caption}
            </figcaption>
        </figure>
    }
}

export const Arrangementer = () => {
    const context = useContext(SanityContext).filter(document => document._type == "arrangement")

    if(context.length == 0) {
        return <PageNotFound />;
    }

    const data = context[0]
    
    let deserializedDate = (new Date(data.dato));
    let timeString = deserializedDate.toTimeString().split(' ')[0].split(':')
    timeString = timeString[0].concat(':').concat(timeString[1])
    let dayString = `${deserializedDate.getDate()}/${deserializedDate.getMonth()+1}/${deserializedDate.getFullYear().toString().slice(-2)}`

    const dateString = `
        ${timeString} ${dayString}
    `
    return (
        <ThreePartTemplate>
            <div className="page-title">
                Arrangementer
            </div>
            <div>
                <StyledEvent>
                    <div className="event-title">
                        <span>{data.tittel}</span>
                    </div>
                    <div className="event-date">
                        <span>{dateString}</span>
                    </div>
                    <div className="event-location">
                        <span>{data.sted}</span>
                    </div>
                    <div className="event-beskrivelse">
                        <PortableText 
                            blocks={data.beskrivelse}
                            serializers={serializer}
                        />
                    </div>
                </StyledEvent>
                
            </div>
            <HomeImagePage>
                <img src={Forsidebilde} alt="sketch of boy and girl"/>
            </HomeImagePage>
        </ThreePartTemplate>
    )

}