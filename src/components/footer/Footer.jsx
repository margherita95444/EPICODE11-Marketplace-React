import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp, BsFlower1 } from "react-icons/bs";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

       
    }

    render() {
        return (
            <footer className="py-5 text-center mt-5" >
                <BsFlower1 className="bi bi-flower3 logo me-2"/>
                <div className=" mt-4 pb-4">
                    <div className="text-center"> Australia Brasile Canada Cina Francia Germania Giappone India Messico Paesi/Regioni Bassi Polonia Emirati Arabi Uniti </div>
                    <div className="text-center"> Regno Unito Spagna Singapore Stati Uniti Turchia</div>
                </div>
                <div className="text-center pb-3">
                    <BsFacebook className="fs-2 "/>
                    <BsInstagram className="fs-2 ms-3" />
                    <BsTwitter className="fs-2 ms-3" />
                    <BsWhatsapp className="fs-2 ms-3" />
                </div>
        </footer>  
        )
    }
}