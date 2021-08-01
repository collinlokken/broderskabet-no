import React from 'react'
import { ProfileCard } from '../utils/ProfileCard'
import { ThreePartTemplate, HomeImagePage } from './pages.styled'
import B_sort from '../../img/B_sort.png'
import Blestemester from '../../img/collegiet/Blestemester.jpeg'
import Ceremonimester from '../../img/collegiet/Ceremonimester.jpeg'
import Chronikeskriffuer from '../../img/collegiet/Chronikeskriffuer.jpeg'
import Novicekommandeur from '../../img/collegiet/Novicekommandeur.jpeg'
import Phinancephut from '../../img/collegiet/Phinancephut.jpeg'
import Troldquinden from '../../img/collegiet/Troldquinden.jpeg'
import Domina from '../../img/collegiet/Kopi_av_IMG_0235.jpeg'
import Vicedominus from '../../img/collegiet/Kopi_av_IMG_0245.jpeg'

export const Collegiet = () => {
    return (
        <ThreePartTemplate textWidth={25}>
            <div className="page-title">
                Collegiet
            </div>
            <div className="page-cards">
                <ProfileCard thumbnail={Domina}/>
                <ProfileCard thumbnail={Vicedominus}/>
                <ProfileCard thumbnail={Blestemester}/>
                <ProfileCard thumbnail={Ceremonimester}/>
                <ProfileCard thumbnail={Chronikeskriffuer}/>
                <ProfileCard thumbnail={Novicekommandeur}/>
                <ProfileCard thumbnail={Phinancephut}/>
                <ProfileCard thumbnail={Troldquinden}/>
            </div>
        </ThreePartTemplate>
    )
} 