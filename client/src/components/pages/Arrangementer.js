import React from "react"
import { useQuery } from 'react-query';
import { sanity, imageUrlBuilder } from '../../sanity';
import PortableText from '@sanity/block-content-to-react'

import { ThreePartTemplate, HomeImagePage, StyledEvent } from './pages.styled';
import { Forsidebilde } from 'Images'
import test_data from './test_data.json'


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
    const query = `*[ _type == 'arrangement' ] { tittel, dato, sted, beskrivelse}`;
    /**const { data: arrangementer } = useQuery('arrangementer', () => sanity.fetch(query));
    if(!arrangementer) {
        return <h1>Loading…</h1>;
    }
    **/
    let deserializedDate = (new Date(test_data.dato));
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
                        <span>{test_data.tittel}</span>
                    </div>
                    <div className="event-date">
                        <span>{dateString}</span>
                    </div>
                    <div className="event-location">
                        <span>{test_data.sted}</span>
                    </div>
                    <div className="event-beskrivelse">
                        <PortableText 
                            blocks={test_data.beskrivelse}
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