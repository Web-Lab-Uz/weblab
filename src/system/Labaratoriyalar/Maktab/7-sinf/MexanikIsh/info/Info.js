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
                    <CardTitle tag="h1" className="infoheader"><b> Mavzu: </b> Jismni ko`tarishda va uni shu masofaga gorizontal ko'chirishda bajarilgan ishni hisoblash.</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted"><br /><span>Ishning maqsadi:</span> Jism vertikal va gorizontal yo‘l bo‘ylab ko‘chirilganda bajarilgan ishni mustaqil ravishda hisoblash.
                        <br /><br /> <span>Kerakli jihozlar:</span> Laboratoriya tribometri, o‘quv dinamometri, santimetrli bo‘limlarga ega bo‘lgan o‘lchov tasmasi, 2 dona ikkita ilmoqli 100 g massali yuk, brusok, chizg‘ich.</CardSubtitle>
                    <br /> <CardImg top width="100%" src='https://firebasestorage.googleapis.com/v0/b/web-lab-b1a15.appspot.com/o/7-sinf%2Fmexanikish%2Fimage%2FinfoImage.png?alt=media&token=4d5b1acf-17db-4ec1-af25-9cd74961c704' alt="Bu yerda tajriba qurilmasi namunasi bor." />
                    <CardText tag="h4"><br /> <span className="text-center d-block">Ishni bajarish tartibi:</span>
                        <br /> 1. Jihozlardan 130-rasmda ko‘rsatilgan qurilmani yig‘ing.
                        <br /> 2. Dinamometr yordamida brusok og‘irligini o‘lchang. So‘ngra brusokni yuqoriga tekis harakatlantirib, oldindan tasma yordamida o‘lchangan tribometr chizg‘ichi balandligiga ko‘taring. Bajarilgan ishning kattaligini quyidagi formula bilan hisoblang: <br />A = F<sub>og'</sub> * h.
                        <br /> 3. Tajribani uch marta takrorlang. Har tajribada brusokka 0,81 N; 1,81 N; 2,81 N yuklar osing va bu bajarilgan ish og‘irlik kuchini yengish uchun sarf bo‘lganini qayd qiling.
                        <br /> 4. Topilgan natijalarni jadvalga yozing.
                        <br /> 5. Chizg‘ichni stolga qo‘yib, dinamometr yordamida brusokni chizg‘ich bo‘ylab birinchi holdagi masofaga bir tekis ko‘chiring. Bunda hosil bo‘lgan tortishish kuchini dinamometr ko‘rsatishi F<sub>t</sub> dan aniqlang.
                        <br /> 6. Ishni yana tortishish kuchi va yo‘lga ko‘ra hisoblang: A = F<sub>t</sub> s. Diqqatingizni bu ish og‘irlik kuchini emas, balki ishqalanish kuchini yengishda bajarilganligiga qarating. So‘ngra brusokka 0,81 N; 1,81 N; 2,81 N yuklarni osib, tajribani uch marta takrorlang va har safar tortish kuchi bajargan ishni hisoblang. Topilgan natijalarni jadvalga yozing.
                        <br /> So‘ngra brusokka 1 N, 2 N, 3 N yuklarni ortib (130-rasm), tajribani yana 2–3 marta takrorlang va har safar tortish kuchining bajargan ishini hisoblang.
                        <br /> Olingan natijalarni taqqoslab, hamma vaqt yukni yuqoriga ko‘tarishda bajarilgan ish uni shunday masofaga gorizontal yo‘l bo‘ylab ko‘chirishda bajarilgan ishdan kattaligini yoki kichikligini aniqlang.
                        <br /> <br />
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>m, kg</th>
                                    <th>h, m</th>
                                    <th>F<sub>og'</sub>, N</th>
                                    <th>s, m</th>
                                    <th>F<sub>t</sub>, N</th>
                                    <th>A<sub>h</sub>, J</th>
                                    <th>A<sub>tek</sub>, J</th>
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
                    <Button className="text-white infobutton" color="secondary"><Link className="infolink" to="/mexanikish">Labaratoriyaga qaytish</Link></Button>
                </CardBody>
            </Card>
        </>
    )
}
