import './footer.css';

class FooterObject {
    title: string;
    links: string[];
    constructor(title: string, links: string[]) {
        this.title = title;
        this.links = links;
    }
}

const footerObjects: FooterObject[] = [
    new FooterObject('ABOUT', ['Contact Us', 'About Us', 'Careers', 'Flipkart Stories', 'Press', 'Flipkart Wholesale']),
    new FooterObject('HELP', ['Payments', 'Shipping', 'Cancellation & Returns', 'FAQ', 'Report Infringement']),
    new FooterObject('POLICY', ['Return Policy', 'Terms Of Use', 'Security', 'Privacy', 'Sitemap', 'EPR Compliance', 'Big Billion Days Sale Terms']),
    new FooterObject('SOCIAL', ['Facebook', 'Twitter', 'YouTube']),

]

function Footer() {
    return (
        <div className='Footer'>
            <div className='FooterLeft'>
                {footerObjects.map((footerObject) =>
                    <div className='FooterObject'>
                        <div className='FooterObjectTitle'>
                            {footerObject.title}
                        </div>
                        {footerObject.links.map((link) =>
                            <div className='FooterObjectLink'>
                                {link}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className='FooterRight'>
                <div>
                    <div className='FooterObjectTitle' > Mail us :</div>
                    <p>
                        Flipkart Internet Private Limited, <br />

                        Buildings Alyssa, Begonia &<br />

                        Clove Embassy Tech Village,<br />

                        Outer Ring Road, Devarabeesanahalli Village,<br />

                        Bengaluru, 560103,<br />

                        Karnataka, India
                    </p>
                </div>
                <div>
                    <div className='FooterObjectTitle' > Registered Office Address:</div>
                    <p>
                        Flipkart Internet Private Limited,<br /> Buildings Alyssa, Begonia &<br /> Clove Embassy Tech Village,<br /> Outer Ring Road, Devarabeesanahalli Village,<br /> Bengaluru, 560103,<br /> Karnataka, India<br /> CIN : U51109KA2012PTC066107<br /> Telephone: 1800 202 9898 </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;