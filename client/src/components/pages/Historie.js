import React from 'react';
import { ThreePartTemplate, HomeImagePage } from './pages.styled'
import Forsidebilde from '../../img/Forsidebilde.png'


export const Historie = () => {
    return (
        <ThreePartTemplate> {/* Needs three children */}
            <div className="page-title">
                Historie
            </div>
            <div className="page-text">
                <p>
                    Den Tekniske Høiskole i Trondhjem ble stiftet i 1910 med arkitektavdelingen som en av syv fagavdelinger.
                    Arkitektavdelingen bestod av studenter med iver og lyst og det ble diskutert i gangene. Bygningsingeniøravdelingen
                    hadde stiftet en studenterforening, H.M. Aarhønen, tidligere samme år, og dette skulle gi noen ideer til
                    arkitektavdelingen om å starte en egen linjeforening. Alf Bugge, en av de første medlemmer sier det slik i en
                    artikkel for Under Dusken, «Her samledes man da en kveld for at konstituere foreningen og vedta love. Formaalet
                    skulde være ‘under selskabelig samvær at dyrke faginteresser.’»
                </p>
                <p>
                    <b>OPPSTARTEN</b> 1. desember 1913 stiftet de Arkitektstudentenes forening. Johan Ellefsen, Gudalf Blakstad,
                    Finn Bryn, Ole Øvergaard og Alf Bugge skal ha vært blant stifterne og de første 15 medlemmer. Tidlig etablerte
                    de De ti bud som fastslo at foreningen skulle ledes av en formann, senere titulert dominus, og fire styremedlemmer.
                    Et møte skulle holdes hver tredje uke, med en påfølgende utgave av «Achantusbladet». Etter modell av en munkeorden,
                    beskyttet av den ærverdige Sanctus Arnoldus, byttet Arkitektstudentenes forening senere navn til Sct.
                    Arnoldi Broderskab.
                </p>
                <p>
                    <b>IMMATRIKULERING</b> Etter harde prøvelser skulle «de uverdige novicer», de nye arkitektstudentene, ha sin
                    immatrikulering. Det ble rullet ut en lang løper med Broderskabets historie gjennom Hovedbygget. Ledet av
                    gong-gongen og en hodeskalle på en fiolett hodepute går nå en prosesjon av Dominus med barret i fiolett silke
                    og kappe, brødre i munkekapper og luer av fiolett, gull og svart, professorer og noviser. Prosesjonen blir
                    avsluttet i aulaen med Høychorets sang rungende utover. «Da skrider det hele Broderskab anført av Dominus,
                    Ceremoniarius, øvrige embedsmenn og doktores i fulle pontifikalier ledsaget av musikanter, ljusbærere og bollemester
                    med svevende i høidelig procesjon gjennom de dunkle haller mens Høychoret avsjunger sine høitidelige og stemningsfulle
                    hymner.»
                </p>
                <p>
                    <b>MØTENE</b> Det var høy møteaktivitet i Broderskabet. Møtene hadde foredragsholdere og diskusjoner både i de seriøse og
                    mindre seriøse hjørner av faget. Disse begivenheter hadde en tendens til å dra ut helt til «Aftenen bleuf Nat och Natteri
                    bleuf Dag.»3 Broderskabet var en uformell del av den akademiske hverdagen og ga rammer til felles sosiale sammenkomster
                    og faglige diskusjoner. De fikk rykte på seg for å være et lystig lag og foreningen ble avvist ved mange av byens utesteder.
                    Det var «festmøter i gamle Hotell d’Angleterre og dypt ned i Regina-kjellerens mektige katakombeaktige hvelvrom.»
                </p>
                <p>
                    <b>I TRADISJON TRO</b> Det var flere høytider for Broderskabet utover året. Den 1. desember ble det holdt feiring av
                    foreningen. «På St. Arnoldi Dag, hvilket er den Dag på hvilken Broderskabet er fundert, skulle Brødrene item Søstrene
                    glæde sig med hindanden ved Mad och Dricke til Dagens wærdige Ihukommelse.»5 Så utover våren, når snøen var blitt både
                    hard og passe råtten var det tid for de lystige studenter å spenne trefliser på beina og teste sine kunster over hoppkantet.
                    Det var klart for det årlige skirenn. Etter at snøen hadde smeltet vekk og beinbruddene grodd igjen kom sommeren hvor det var
                    på tide å ta avskjed med de utlærte brødre og søstre. I den forbindelse ble Begrædelsesfesten arrangert ved endt eksamen.
                    Det kunne rapporteres at «Begge referat viste at broderskapets fester fremdeles er præget av den samme aand som er
                    foreningens navn værdig.»
                </p>
                <p>
                    <b>OPPHØYET</b> Broderskapet ble rikt på ritualer og tradisjoner, hvor noen objekter fikk en viktig plass. En av disse var
                    Laundaren, «en tospanns stasvogn, bygd ved Emmanuel Nielsen vognmagerværksted i København i 1870 […] Den var et flott syn,
                    vognblå med burgunderrødt på hjul og understell, og forgylte kalesjestrebere og andre detaljer.»7 Denne ble brukt ved bryllup
                    og ved henting av gjesteforelesere. For de som krevde en spesiell fortjeneste ble det opprettet Den Doriske Søljeorden,
                    «den høieste av alt opphøiet.» I sammenheng med at den første doktorgradspromosjonen ved nth ble holdt i 1935 opprettet også
                    Broderskabet «doktores». Robert Bjørka fra 41-kullet på Arkitekt husker det slik, «Det gikk an å ta doktorgrad i Broderskapet
                    for proffene. De måtte holde en forelesning som skulle godkjennes. Utgangspunktet skulle være alvorlig, men forelesningen selv
                    skulle være tøv. Helge Thiis, domkirkearkitekten, han holdt et foredrag om domkirken, om vestfronten – og vi holdt på å le oss i hjel.»
                </p>
                <p>
                    <b>SLIK FORTSETTER DET</b> Videre opp gjennom årene skulle Broderskabet bli en viktig del av arkitektstudentenes tilværelse,
                    spesielt under krigen ble de et samlingspunkt for så vel studenter som professorer og byens arkitekter. Tradisjoner ble holdt
                    i hevd og styrket, linjeforeningsspråket ble enda mer uforståelig, diskusjonene ble villere og festene varte enda litt lenger.
                </p>
            </div>
            <HomeImagePage>
                <img src={Forsidebilde} alt="sketch of boy and girl"/>
            </HomeImagePage>
        </ThreePartTemplate>
    );
};
