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
            <Card className="prujinabikrligiinfo">
                <CardBody className="infoBody">
                    <CardTitle tag="h1" className="infoheader"><b> Mavzu: </b> Tekis tezlanuvchan harakatlanayotgan jism tezlanishini aniqlash.</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted"><br /><span>Ishning maqsadi:</span> Eng oddiy dinamometr prujinasining bikirligini aniqlash orqali jismlarning deformatsiyasi va bikirligi haqida tasavvurlarni kengaytirish, elastiklik kuchi haqida olingan nazariy bilimlarni mustahkamlash.
                        <br /><br /> <span>Kerakli jihozlar:</span> shtativ, eng oddiy dinamometr, yuklar to‘plami, millimetrli qog‘oz.</CardSubtitle>
                    <br /> <CardImg top width="100%" src='https://firebasestorage.googleapis.com/v0/b/web-lab-b1a15.appspot.com/o/7-sinf%2Fprujinabikrligi%2Fimage%2Fprujinabikrligi.png?alt=media&token=ca26bb6b-83fb-4d55-a3d5-ba0c47f6b31e' alt="Bu yerda tajriba qurilmasi namunasi bor." />
                    <CardText tag="h4"><br /> <span className="text-center d-block">Ishni bajarish tartibi:</span>
                        <br /> 1. Prujinadan dinamometr yasash uchun shkalasiga millimetrli qog‘oz yopishtiring.
                        <br /> 2. Dinamometrni shtativga rasmda ko‘rsatilganidek mahkamlang.
                        <br /> 3. Dinamometr ko‘rsatkichining boshlang‘ich vaziyatini shkaladagi millimetrli qog‘ozga belgilang.
                        <br /> 4. Dinamometr ilgagiga m<sub>1</sub> massali yukni iling, uning ta’sirida prujinaning Δl<sub>1</sub> uzayishini o‘lchang va natijani jadvalga yozing.
                        <br /> 5. Massalari m<sub>2</sub> va m<sub>3</sub> bo‘lgan yuk uchun ham prujinaning Δl<sub>2</sub>, Δl<sub>3</sub> cho‘zilishlarini o‘lchang va natijalarni jadvalga yozing.
                        <br /> 6. Dinamometrga osilgan har bir yuk uchun prujinaga ta’sir etgan tashqi kuchlarni F<sub>t</sub> = mg formula bo‘yicha hisoblang va natijalarni jadvalga yozing.
                        <br /> 7.  Har bir o‘lchangan ∆l<sub>1</sub>, ∆l<sub>2</sub>, ∆l<sub>3</sub> va hisoblangan F<sub>t1</sub>, F<sub>t2</sub>, F<sub>t3</sub> natijalarni k = F<sub>t</sub> /∆l formulaga qo‘yib, k<sub>1</sub>, k<sub>2</sub>, k<sub>2</sub> prujinalar bikirligini hisoblang va natijalarni jadvalga yozing.
                        <br /> 8. k<sub>o`rt</sub>= ( k<sub>1</sub>+ k<sub>2</sub>+ k<sub>3</sub>)/3 formula bo‘yicha prujina bikirligining o‘rtacha qiymatini hisoblang va natijani jadvalga yozing.
                        <br /> 9. &#916;k<sub>n</sub>=|k<sub>o`rt</sub>-k<sub>n</sub>| formuladan absolut xatolik topiladi.
                        <br /> 10. &#916;k<sub>o`rt</sub>=(&#916;k<sub>1</sub>+&#916;k<sub>2</sub>+&#916;k<sub>3</sub>)/3 formuladan o`rtacha absolut xatolikni hisoblang.
                        <br /> 11. &#949;=(&#916;k<sub>o`rt</sub>/k<sub>o`rt</sub>)*100% formuladan nisbiy xatolikni toping.
                        <br /> 12. Natijalarni tahlil qiling va xulosa chiqaring.
                        <br /> <br />
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>m, kg</th>
                                    <th>F, N</th>
                                    <th>l<sub>1</sub>, sm</th>
                                    <th>l<sub>2</sub>, sm</th>
                                    <th>l<sub>3</sub>, sm</th>
                                    <th>k<sub>1</sub>, N/m</th>
                                    <th>k<sub>2</sub>, N/m</th>
                                    <th>k<sub>3</sub>, N/m</th>
                                    <th>k<sub>o`rt</sub>, N/m</th>
                                    <th>&#916;k<sub>o`rt</sub>, N/m</th>
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
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardText>
                    <Button className="text-white infobutton" color="secondary"><Link className="infolink" to="/prujinabikrligi">Labaratoriyaga qaytish</Link></Button>
                </CardBody>
            </Card>
        </>
    )
}
