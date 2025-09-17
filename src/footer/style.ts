import styled from "styled-components"

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 40px 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 200px;
    color: ${({ theme }) => theme.colors.tertiary};
    position: relative;
`
export const Logo = styled.img`
    width: 200px;
    height: auto;
    border-radius: 60%;
`
export const ContactInfo = styled.div`
    text-align: center;
    font-size: 14px;
    line-height: 1.6;

    svg {
        margin-right: 6px;
    }
`
export const PolicyLink = styled.a`
    color: white;
    text-decoration: underline;
    font-size: 14px;
`
export const SocialLinks = styled.div`
    display: flex;
    gap: 12px;

    a {
        color: white;
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.2);
        padding: 8px;
        border-radius: 8px;
        transition: background-color 0.3s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }
    }
`
export const WhatsappButton = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    font-size: 24px;
    padding: 12px;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #1ebe57;
    }
`
export const WhatsappLine = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;

    img {
        width: 16px;
        height: 16px;
    }
`
export const InstagramLink = styled.a`
  display: inline-block;
  margin-top: 10px;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`
export const LegalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`


