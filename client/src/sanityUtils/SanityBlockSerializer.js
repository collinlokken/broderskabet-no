export const serializer = {
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