import React from 'react'
import Reveal from 'react-reveal/Reveal';
import { Link } from 'react-router-dom';
import { Table, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Home from '../../../../weblab/home/Home';
import './style.scss';



export default function Info() {
    return (
        <>
            <Reveal effect="animNav" duration="750">
                <Home />
            </Reveal>
            <Card className="tekistezlanuvchanharakatinfo">
                <CardBody className="infoBody">
                    <CardTitle tag="h1" className="infoheader"><b> Mavzu: </b> Jismning kinetik energiyasining uning tezligi va massasiga bog`liqligini aniqlash.</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted"><br /><span>Ishning maqsadi:</span> Turli massali sharlar tezligini o‘zgartirib, kinetik energiya ishqalanish kuchini yengishini kuzatish yordamida energiyaga oid bilimlarini mustahkamlash.
                        <br /><br /> <span>Kerakli jihozlar:</span> turli massali 2 ta po‘lat sharcha, metall nov, brusok, o‘lchov tasmasi, sekundomer, shtativ.</CardSubtitle>
                    <br /> <CardImg top width="100%" src='https://firebasestorage.googleapis.com/v0/b/web-lab-b1a15.appspot.com/o/7-sinf%2Fkinetikenergiya%2Fimage%2FinfoImage.png?alt=media&token=7945db9d-5efb-4e18-8780-c9012d8f5a82' alt="Bu yerda tajriba qurilmasi namunasi bor." />
                    <CardText tag="h4"><br /> <span className="text-center d-block">Ishni bajarish tartibi:</span>
                        <br /> 1. 137-rasmda ko‘rsatilganidek shtativ yordamida novni qiya holatda o‘rnating. Novning pastki uchiga brusokni tirab qo‘ying.
                        <br /> 2. Novning o‘rta qismiga kichik massali sharchani qo‘ying va uni qo‘yib yuborib, nov bo‘ylab qanday dumalashi, yog‘och brusokka kelib urilishi, ishqalanish kuchini yengishi va brusokni ma’lum masofaga siljitishini kuzatib boring.
                        <br /> 3. Brusok siljib qolgan masofa Δl ni o‘lchang.
                        <br /> 4. Sharchani novning yuqori uchidan qo‘yib yuborib, tajribani takrorlang.
                        <br /> 5. Katta massali sharchani novning o‘rta qismidan qo‘yib yuboring va brusokning siljishini yana qayta o‘lchang.
                        <br /> 6. 1-laboratoriya ishidagi kabi masofa va vaqtni o‘lchab, sharcha olgan tezlanishni toping. Tezlanish va vaqt ko‘rsatkichlaridan foydalanib, sharchaning brusokka urilish vaqtidagi tezligini aniqlang va E<sub>k</sub>=mv<sup>2</sup>/2  = formuladan kinetik energiyani toping.
                        <br /> 7. Brusokning surilishida bajarilgan ish va kinetik energiya orasidagi bog‘lanish natijalarini tahlil qiling va xulosa chiqaring.
                        <br /> <br />
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>m<sub>sh</sub>, g</th>
                                    <th>m<sub>b</sub>, g</th>
                                    <th>s, sm</th>
                                    <th>t, s</th>
                                    <th><i>l</i>, sm</th>
                                    <th> E<sub>k</sub>, J</th>
                                    <th>A, J</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardText>
                    <Button className="text-white infobutton" color="secondary"><Link className="infolink" to="/kinetikenergiya">Labaratoriyaga qaytish</Link></Button>
                </CardBody>
            </Card>
        </>
    )
}
