import React, { useContext } from 'react';
import { Forsidebilde } from 'Images';
import PortableText from '@sanity/block-content-to-react'
import { serializer } from '../../sanityUtils/SanityBlockSerializer';
import { ThreePartTemplate } from './pages.styled'
import { SanityContext } from '../../sanityUtils/SanityContext';
import { PageNotFound } from "./PageNotFound";
import {
    useParams
} from "react-router-dom";

export const Undergruppe = (props) => {
    let { id } = useParams();
    const context = useContext(SanityContext).filter(document => document._type == "undergruppe").filter(doc => doc.id == id)
    
    if(context.length == 0) {
        return <PageNotFound />;
    }

    const data = context[0]

    return (
        <ThreePartTemplate textWidth={36}> {/* Needs three children */} 
            <div className="page-title">
                {data.undergruppenavn}
            </div>
            <div className="page-text">
                <PortableText 
                    blocks={data.beskrivelse}
                    serializers={serializer}
                    />
            </div>
            <div className="page-content">
                <img src={Forsidebilde} alt=""/>
            </div>
        </ThreePartTemplate>
    );
}