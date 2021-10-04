import { Link } from 'react-router-dom';
import { TouchAppTwoTone, VideoLabelTwoTone } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, CardHeader, Col, Container, Row } from 'reactstrap';
import database from '../../firebase/datalabs';


const LabsBody = () => {

    // 6Sinf
    const [sinf6, setSinf6] = useState([])

    // 7Sinf
    const [sinf7, setSinf7] = useState([])

    // 8Sinf
    const [sinf8, setSinf8] = useState([])

    // 9Sinf
    const [sinf9, setSinf9] = useState([])

    // 10Sinf
    const [sinf10, setSinf10] = useState([])

    // 11Sinf
    const [sinf11, setSinf11] = useState([])

    // Malumotlar omboridan chaqirish
    useEffect(() => {
        database.collection("6Sinf").onSnapshot((snapshot) =>
            setSinf6(snapshot.docs.map((doc) => doc.data()))
        )
        database.collection("7Sinf").onSnapshot((snapshot) =>
            setSinf7(snapshot.docs.map((doc) => doc.data()))
        )
        database.collection("8Sinf").onSnapshot((snapshot) =>
            setSinf8(snapshot.docs.map((doc) => doc.data()))
        )
        database.collection("9Sinf").onSnapshot((snapshot) =>
            setSinf9(snapshot.docs.map((doc) => doc.data()))
        )
        database.collection("10Sinf").onSnapshot((snapshot) =>
            setSinf10(snapshot.docs.map((doc) => doc.data()))
        )
        database.collection("11Sinf").onSnapshot((snapshot) =>
            setSinf11(snapshot.docs.map((doc) => doc.data()))
        )
    }, [])

    // menyuni ishlatish kodi
    const [sinf6Klassi, setSinf6Klassi] = useState(" ")
    const [sinf7Klassi, setSinf7Klassi] = useState("d-none")
    const [sinf8Klassi, setSinf8Klassi] = useState("d-none")
    const [sinf9Klassi, setSinf9Klassi] = useState("d-none")
    const [sinf10Klassi, setSinf10Klassi] = useState("d-none")
    const [sinf11Klassi, setSinf11Klassi] = useState("d-none")

    const [sinf6KlassiBtnColor, setSinf6KlassiBtnColor] = useState("success")
    const [sinf7KlassiBtnColor, setSinf7KlassiBtnColor] = useState("primary")
    const [sinf8KlassiBtnColor, setSinf8KlassiBtnColor] = useState("primary")
    const [sinf9KlassiBtnColor, setSinf9KlassiBtnColor] = useState("primary")
    const [sinf10KlassiBtnColor, setSinf10KlassiBtnColor] = useState("primary")
    const [sinf11KlassiBtnColor, setSinf11KlassiBtnColor] = useState("primary")

    function tugmalarFunksiyasiAll() {
        setSinf6Klassi("d-none")
        setSinf7Klassi("d-none")
        setSinf8Klassi("d-none")
        setSinf9Klassi("d-none")
        setSinf10Klassi("d-none")
        setSinf11Klassi("d-none")
        setSinf6KlassiBtnColor("primary")
        setSinf7KlassiBtnColor("primary")
        setSinf8KlassiBtnColor("primary")
        setSinf9KlassiBtnColor("primary")
        setSinf10KlassiBtnColor("primary")
        setSinf11KlassiBtnColor("primary")
    }

    function tugmalarFunksiyasi6Sinf() {
        tugmalarFunksiyasiAll()
        setSinf6Klassi(" ")
        setSinf6KlassiBtnColor("success")
    }
    function tugmalarFunksiyasi7Sinf() {
        tugmalarFunksiyasiAll()
        setSinf7Klassi(" ")
        setSinf7KlassiBtnColor("success")
    }
    function tugmalarFunksiyasi8Sinf() {
        tugmalarFunksiyasiAll()
        setSinf8Klassi(" ")
        setSinf8KlassiBtnColor("success")
    }
    function tugmalarFunksiyasi9Sinf() {
        tugmalarFunksiyasiAll()
        setSinf9Klassi(" ")
        setSinf9KlassiBtnColor("success")
    }
    function tugmalarFunksiyasi10Sinf() {
        tugmalarFunksiyasiAll()
        setSinf10Klassi(" ")
        setSinf10KlassiBtnColor("success")
    }
    function tugmalarFunksiyasi11Sinf() {
        tugmalarFunksiyasiAll()
        setSinf11Klassi(" ")
        setSinf11KlassiBtnColor("success")
    }


    return (
        <>
            <Container>
                <h1 className="font-monospace text-center mt-3 mb-2 text-info">Maktab Labaratoriyalari / Fizika</h1>
                <ButtonGroup>
                    <Button onClick={tugmalarFunksiyasi6Sinf} color={sinf6KlassiBtnColor}>6 Sinf</Button>
                    <Button onClick={tugmalarFunksiyasi7Sinf} color={sinf7KlassiBtnColor} className="mx-2">7 Sinf</Button>
                    <Button onClick={tugmalarFunksiyasi8Sinf} color={sinf8KlassiBtnColor}>8 Sinf</Button>
                    <Button onClick={tugmalarFunksiyasi9Sinf} color={sinf9KlassiBtnColor} className="mx-2">9 Sinf</Button>
                    <Button onClick={tugmalarFunksiyasi10Sinf} color={sinf10KlassiBtnColor}>10 Sinf</Button>
                    <Button onClick={tugmalarFunksiyasi11Sinf} color={sinf11KlassiBtnColor} className="mx-2">11 Sinf</Button>
                </ButtonGroup>
                <Row className={sinf6Klassi}>
                    {sinf6.map((Labs, index) => (
                        <Col md="12" key={index}>
                            <div className="labsCard">
                                <img src={Labs.labsImage} className="labsImage" />
                                <div className="labsInfo">
                                    <div className="labsBody">
                                        <h3 className="labsName">{Labs.labsName}</h3>
                                        <p className="labsDesc">{Labs.labsInfo}</p>
                                    </div>
                                    <div className="labsBtns">
                                        <Link to={Labs.labsLink} className="btns">
                                            Labaratoriya <TouchAppTwoTone />
                                        </Link>
                                        <Link to={Labs.malumotLink} className="btns">
                                            Ma'lumot <VideoLabelTwoTone />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className={sinf7Klassi}>
                    {sinf7.map((Labs, index) => (
                        <Col md="12" key={index}>
                            <div className="labsCard">
                                <img src={Labs.labsImage} className="labsImage" />
                                <div className="labsInfo">
                                    <div className="labsBody">
                                        <h3 className="labsName">{Labs.labsName}</h3>
                                        <p className="labsDesc">{Labs.labsInfo}</p>
                                    </div>
                                    <div className="labsBtns">
                                        <Link to={Labs.labsLink} className="btns">
                                            Labaratoriya <TouchAppTwoTone />
                                        </Link>
                                        <Link to={Labs.malumotLink} className="btns">
                                            Ma'lumot <VideoLabelTwoTone />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className={sinf8Klassi}>
                    {sinf8.map((Labs, index) => (
                        <Col md="12" key={index}>
                            <div className="labsCard">
                                <img src={Labs.labsImage} className="labsImage" />
                                <div className="labsInfo">
                                    <div className="labsBody">
                                        <h3 className="labsName">{Labs.labsName}</h3>
                                        <p className="labsDesc">{Labs.labsInfo}</p>
                                    </div>
                                    <div className="labsBtns">
                                        <Link to={Labs.labsLink} className="btns">
                                            Labaratoriya <TouchAppTwoTone />
                                        </Link>
                                        <Link to={Labs.malumotLink} className="btns">
                                            Ma'lumot <VideoLabelTwoTone />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className={sinf9Klassi}>
                    {sinf9.map((Labs, index) => (
                        <Col md="12" key={index}>
                            <div className="labsCard">
                                <img src={Labs.labsImage} className="labsImage" />
                                <div className="labsInfo">
                                    <div className="labsBody">
                                        <h3 className="labsName">{Labs.labsName}</h3>
                                        <p className="labsDesc">{Labs.labsInfo}</p>
                                    </div>
                                    <div className="labsBtns">
                                        <Link to={Labs.labsLink} className="btns">
                                            Labaratoriya <TouchAppTwoTone />
                                        </Link>
                                        <Link to={Labs.malumotLink} className="btns">
                                            Ma'lumot <VideoLabelTwoTone />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className={sinf10Klassi}>
                    {sinf10.map((Labs, index) => (
                        <Col md="12" key={index}>
                            <div className="labsCard">
                                <img src={Labs.labsImage} className="labsImage" />
                                <div className="labsInfo">
                                    <div className="labsBody">
                                        <h3 className="labsName">{Labs.labsName}</h3>
                                        <p className="labsDesc">{Labs.labsInfo}</p>
                                    </div>
                                    <div className="labsBtns">
                                        <Link to={Labs.labsLink} className="btns">
                                            Labaratoriya <TouchAppTwoTone />
                                        </Link>
                                        <Link to={Labs.malumotLink} className="btns">
                                            Ma'lumot <VideoLabelTwoTone />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className={sinf11Klassi}>
                    {sinf11.map((Labs, index) => (
                        <Col md="12" key={index}>
                            <div className="labsCard">
                                <img src={Labs.labsImage} className="labsImage" />
                                <div className="labsInfo">
                                    <div className="labsBody">
                                        <h3 className="labsName">{Labs.labsName}</h3>
                                        <p className="labsDesc">{Labs.labsInfo}</p>
                                    </div>
                                    <div className="labsBtns">
                                        <Link to={Labs.labsLink} className="btns">
                                            Labaratoriya <TouchAppTwoTone />
                                        </Link>
                                        <Link to={Labs.malumotLink} className="btns">
                                            Ma'lumot <VideoLabelTwoTone />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};


export default LabsBody;