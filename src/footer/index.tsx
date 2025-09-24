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
import logo from '../assets/mainLogo.webp'
import wppIcon from '../assets/wpp.webp'
import instagramIcon from '../assets/instagram.webp'




export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Logo src={logo} alt="Tributos Contabilidade" />
            <ContactInfo>
                <p>tributoscontabilidade.net.br</p>
                <p><WhatsappLine><img src={wppIcon} alt="WhatsApp" /> +55 (84) 2010-7912</WhatsappLine></p>
                <p><WhatsappLine><img src={wppIcon} alt="WhatsApp" /> +55 (84) 99922-8736</WhatsappLine></p>
                <p><WhatsappLine><img src={wppIcon} alt="WhatsApp" /> +55 (84) 99655-7905</WhatsappLine></p>
            </ContactInfo>
            <LegalInfo>
                <PolicyLink href="#">Política de Privacidade</PolicyLink>
                <InstagramLink
                    href="https://www.instagram.com/tributoscontabilidade_?igsh=N3Zoc284aHAzNmtu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={instagramIcon} alt="Instagram" />
                </InstagramLink>
            </LegalInfo>
            <WhatsappButton
                href="https://wa.me/558420107912"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={wppIcon} alt="WhatsApp" />
            </WhatsappButton>
        </FooterContainer>
    )
}
