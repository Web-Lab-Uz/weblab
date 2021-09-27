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
                    <CardTitle tag="h1" className="infoheader"><b> Mavzu: </b> Tekis tezlanuvchan harakatlanayotgan jism tezlanishini aniqlash.</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2 text-muted"><br /><span>Ishning maqsadi:</span> Qiya novdan dumalab tushayotgan sharchaning bosib o'tgan yo'li va harakat vaqtini o`lchash orqali tekis tezlanuvchan harakatlanayotgan jism tezlanishini aniqlashni o`rganish.
                        <br /><br /> <span>Kerakli jihozlar:</span> metall nov, po'lat sharcha, shtativ, metall silindr, o`lchov tasmasi, sekundomer.</CardSubtitle>
                    <br /> <CardImg top width="100%" src='https://firebasestorage.googleapis.com/v0/b/web-lab-b1a15.appspot.com/o/namuna.png?alt=media&token=6b88148c-3762-4465-9767-c13a82ae77ec' alt="Bu yerda tajriba qurilmasi namunasi bor." />
                    <CardText tag="h4"><br /> <span className="text-center d-block">Ishni bajarish tartibi:</span>
                        <br /> 1. Rasmda ko`rsatilgandek, metall novni shtativga o'rnating, metall silindrni novning qui uchiga joylashtiring.
                        <br /> 2. Novning yuqori uchidan qoyib yuborilgan sharcha novning qui uchidagi silindrga borib urilgunga qadar o'tgan vaqtni sekundomer yordamida o`lchang.
                        <br /> 3. Tajribani 3 marta takrorlang. Har gal sharchaning vaqti t<sub>1</sub>, t<sub>2</sub>, t<sub>3</sub> ni o`lchang. Natijalarni jadvalga yozib boring.
                        <br /> 4. O'lchov tasmasi yordamida sharchaning bosib o`tgan s yo`lini hisoblang.
                        <br /> 5. Tekis tezlanuvchan harakatda jismning bosib o`tgan yo`l s=at<sup>2</sup>/2 formuladan tezlanish formulasi a=2s/t<sup>2</sup> bo`ladi. Tajribada o`lchangan har bir s yo`lni va har bir t<sub>1</sub>, t<sub>2</sub>, t
                        <sub>3</sub> vaqtni birma-bir tezlanish formulasiga qoyib, a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub> tezlanishlarni hisoblang.
                        <br /> 6. a<sub>o`rt</sub>=(a<sub>1</sub>+a<sub>2</sub>+a<sub>3</sub>)/3 formula yordamida o`rtacha tezlanishini hisoblang. Olingan bu qiymat qiya novdan dumalab tushayotgan sharchaning tezlanishini ifodalaydi.
                        <br /> 7. Ushbu tajribani novning qiyaligi uch xil bo'lgan holat uchun bajaring.
                        <br /> 8. &#916;a<sub>n</sub>=|a<sub>o`rt</sub>-a<sub>n</sub>| formuladan absolut xatolik topiladi.
                        <br /> 9. &#916;a<sub>o`rt</sub>=(&#916;a<sub>1</sub>+&#916;a<sub>2</sub>+&#916;a<sub>3</sub>)/3 formuladan o`rtacha absolut xatolikni hisoblang.
                        <br /> 10. &#949;=(&#916;a<sub>o`rt</sub>/a<sub>o`rt</sub>)*100% formuladan nisbiy xatolikni toping.
                        <br /> 11. Natijalarni tahlil qiling va hulosa chiqaring.
                        <br /> <br />
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>s, m</th>
                                    <th>t<sub>1</sub>, s</th>
                                    <th>t<sub>2</sub>, s</th>
                                    <th>t<sub>3</sub>, s</th>
                                    <th>a<sub>1</sub>, m/s<sup>2</sup></th>
                                    <th>a<sub>2</sub>, m/s<sup>2</sup></th>
                                    <th>a<sub>3</sub>, m/s<sup>2</sup></th>
                                    <th>a<sub>o`rt</sub>, m/s<sup>2</sup></th>
                                    <th>&#916;a<sub>o`rt</sub>, m/s<sup>2</sup></th>
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
                                </tr>
                            </tbody>
                        </Table>
                    </CardText>
                    <Button className="text-white infobutton" color="secondary"><Link className="infolink" to="/tekistezlanuvchanharakat">Labaratoriyaga qaytish</Link></Button>
                </CardBody>
            </Card>
        </>
    )
}
