'use client';

import { useApp } from '@/contexts/AppContext';

const MAIL = 'tackmoreinc@gmail.com';

const socialLinks = [
    { name: 'Website', url: 'https://tackmore.jp' },
    { name: 'GitHub', url: 'https://github.com/masaBa-13' },
    { name: 'X / Twitter', url: 'https://x.com/masa_tkinc' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/%E9%9B%85%E6%B2%BB-%E7%A5%90%E5%B7%9D-3ab18039a/' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/1ZKJv4gs5s/?mibextid=wwXIfr' },
];

export default function Contact() {
    const { t } = useApp();

    return (
        <section id="contact" className="sec">
            <div className="container">
                <div className="sec-grid">
                    <h2 className="sec-h">{t.nav.contact}</h2>
                    <div className="sec-body">
                <a className="mail" href={`mailto:${MAIL}`}>
                    <span className="mail-label">Email</span>
                    <span className="mail-addr">{MAIL}</span>
                </a>
                <div className="links">
                    {socialLinks.map((link) => (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                            <span>{link.name}</span>
                            <span aria-hidden="true">↗</span>
                        </a>
                    ))}
                </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
