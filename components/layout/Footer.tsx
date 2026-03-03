export default function Footer() {
    return (
        <footer className="border-t border-border py-10 relative z-10">
            <div className="container flex justify-between items-center flex-wrap gap-4">
                <div className="font-mono text-xs text-muted">
                    <span className="text-accent">©</span> 2026 祐川雅治 — Built with{' '}
                    <span className="text-fg">Next.js</span>
                </div>
                <div className="flex gap-6">
                    {[
                        { label: 'RemeMore', href: 'https://reme-more.com/plate/e30f6d05-4544-448f-a724-64c267f17be4' },
                        { label: 'GitHub',   href: 'https://github.com/masaBa-13' },
                        { label: 'TackMore', href: 'https://tackmore.jp' },
                    ].map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs text-muted transition-colors duration-200"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
