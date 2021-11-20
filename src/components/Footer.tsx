import React from "react";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper bg-blue-900">
      <div className="footer-items ">
        <p className="text-white">
          Red Ciudadana de Monitoreo de la Calidad del Aire
        </p>
        <p className="text-white">MoCaALTAMA</p>
        <div className="w-full flex justify-around ">
          <AiFillInstagram size="32" color="#fff" />
          <AiFillYoutube size="32" color="#fff" />
          <AiFillTwitterCircle size="32" color="#fff" />
          <AiFillFacebook size="32" color="#fff" />
        </div>
        <p className="text-white">Copyright © 2021 MoCaALTAMA</p>
      </div>
    </div>
  );
};

export default Footer;
