import React from "react"
import {
    FooterContainer,
    Logo,
    ContactInfo,
    PolicyLink,
    WhatsappButton,
    WhatsappLine,
    InstagramLink,
    LegalInfo
} from "./style"
import logo from '../assets/mainLogo.jpg'
import wppIcon from '../assets/wpp.png'
import instagramIcon from '../assets/instagram.png';




export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Logo src={logo} alt="Tributos Contabilidade" />

            <ContactInfo>
                <p>tributos.contabilidadee@gmail.com</p>
                <p><WhatsappLine><img src={wppIcon} alt="WhatsApp" /> +55 (84) 2010-7912</WhatsappLine></p>
                <p><WhatsappLine><img src={wppIcon} alt="WhatsApp" /> +55 (84) 99922-8736</WhatsappLine></p>
                <p><WhatsappLine><img src={wppIcon} alt="WhatsApp" /> +55 (84) 99655-7905</WhatsappLine></p>
            </ContactInfo>


            <LegalInfo>
                <PolicyLink href="#">Política de Privacidade</PolicyLink>
                <InstagramLink
                    href="https://www.instagram.com/sua_pagina"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={instagramIcon} alt="Instagram" />
                </InstagramLink>
            </LegalInfo>


            

            <WhatsappButton
                href="https://wa.me/5511918919358"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={wppIcon} alt="WhatsApp" />
            </WhatsappButton>

        </FooterContainer>
    );
};
