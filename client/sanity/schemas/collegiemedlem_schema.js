const collegiemedlem = {
    title: 'Collegiemedlem',
    name: 'collegiemedlem',
    type: 'document',
    fields: [
        {
            title: 'ID',
            name: 'id',
            type: 'string',
            readOnly: true,
        },
        {
            title: 'Telefonnummer',
            name: 'telefon',
            type: 'string',
        },
        {
            title: 'Emailadresse',
            name: 'email',
            type: 'string',
        },
        {
            title: 'Tittel',
            name: 'tittel',
            type: 'string',
        },
        {
            title: 'Navn',
            name: 'navn',
            type: 'string',
        },
        {
            title: 'Beskrivelse',
            name: 'beskrivelse',
            type: 'string',
        },
        {
            title: 'Om medlemmet',
            name: 'tekst',
            type: 'text',
        },
    ],
}

export default collegiemedlem