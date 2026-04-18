import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

function SocialLink({ href, label, icon }: { href: string; label: string; icon: IconProp }) {
    return (
        <a href={href} aria-label={label} className='w-6 h-6 text-primary dark:text-zinc-50 hover:opacity-80 transition-opacity' target='_blank'>
            <FontAwesomeIcon icon={icon} size={'sm'} />
        </a>
    );
}

export function Socials(): React.ReactNode {
    return (
        <div className="flex gap-2 md:flex-col">
            <SocialLink href="https://github.com/kwerie" label="GitHub" icon={faGithub} />
            <SocialLink href="https://www.linkedin.com/in/ricohermsen" label="LinkedIn" icon={faLinkedin} />
        </div>
    );
}
