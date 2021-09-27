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
                    <CardTitle tag="h1" className="infoheader"><b> Mavzu: </b> Sirpanish ishqalanish koeffitsiyentini aniqlash.</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted"><br /><span>Ishning maqsadi:</span> Yog‘och chizg‘ich ustida sirpanayotgan taxtachaning ishqalanish koeffitsiyentini aniqlash yordamida sirpanish ishqalanishga oid bilimlarini mustahkamlash.
                        <br /><br /> <span>Kerakli jihozlar:</span> uzun yog‘och chizg‘ich, ilgakli taxtacha, dinamometr, tarozi, tarozi toshlari.</CardSubtitle>
                    {/* <br /> <CardImg top width="100%" src='https://firebasestorage.googleapis.com/v0/b/web-lab-b1a15.appspot.com/o/namuna.png?alt=media&token=6b88148c-3762-4465-9767-c13a82ae77ec' alt="Bu yerda tajriba qurilmasi namunasi bor." /> */}
                    <CardText tag="h4"><br /> <span className="text-center d-block">Ishni bajarish tartibi:</span>
                        <br /> 1. Tarozida taxtachaning massasini o‘lchang va jadvalga yozing.
                        <br /> 2. P = mg formuladan foydalanib, taxtachaning og‘irligini toping.
                        <br /> 3. Taxtachaga dinamometrni ilib, uni chizg‘ich bo‘ylab tekis sirpantiring va dinamometrning ko‘rsatishini F<sub>i(s)</sub> sirpanish ishqalanish kuchiga teng deb olib, uni jadvalga yozing.
                        <br /> 4. µ=F<sub>i(s)</sub>/mg formuladan foydalanib, sirpanish ishqalanish koeffitsiyentini hisoblang.
                        <br /> 5. Taxtacha ustiga avval m<sub>1</sub> massali, so‘ngra m<sub>2</sub> massali tarozi toshlarini qo‘yib, tajribani takrorlang. Ular uchun ham sirpanish ishqalanish kuchini toping. Natijalarni jadvalga yozing.
                        <br /> 6. µ<sub>o`rt</sub>=(µ<sub>1</sub>+µ<sub>2</sub>+µ<sub>3</sub>)/3 formuladan foydalanib, sirpanish ishqalanish koeffitsiyentining o‘rtacha qiymatini hisoblang va natijani jadvalga yozing.
                        <br /> 7. Absolut va nisbiy xatoliklarni toping.
                        <br /> 8. Labaratoriya ishi natijalarni tahlil qiling va hulosa chiqaring.
                        <br /> <br />
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>m, kg</th>
                                    <th>P, N</th>
                                    <th>F<sub>i(s)</sub>, N</th>
                                    <th>µ</th>
                                    <th>µ<sub>o`rt</sub></th>
                                    <th>&#916;µ<sub>o`rt</sub></th>
                                    <th>&#949;, %</th>
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
                    <Button className="text-white infobutton" color="secondary"><Link className="infolink" to="/ishqalanishkoeffitsienti">Labaratoriyaga qaytish</Link></Button>
                </CardBody>
            </Card>
        </>
    )
}
