import css from './Footer.module.css'
import imageFacebook from '../../utils/global/image/facebook.JPG'
import imageInstagram from '../../utils/global/image/instagram.JPG'

export default function Footer() {
    return (
        <footer className={css.containerFooter}>
            <section>
            </section>
            <section>
                <a href="https://www.facebook.com/" target="_blank"><img className={css.footerImage}
                                                                         src={imageFacebook}
                                                                         alt="facebook"/></a>
                <a href="https://www.instagram.com/" target="_blank"><img className={css.footerImage}
                                                                          src={imageInstagram}
                                                                          alt="instagram"/></a>
                <p data-testid='footertext'>Copyright © 2022 by Aram</p>
            </section>
            <section>
            </section>
        </footer>
    )
}