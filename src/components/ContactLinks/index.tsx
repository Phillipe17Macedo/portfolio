import Link from 'next/link';

import { Button } from '../Button';

import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import discordIcon from 'public/assets/discord.svg';
import * as S from './styles';
import Image from 'next/image';

export function ContactLinks() {
  return (
    <S.Container>
      <li>
        <Link
          href='https://github.com/cristian-sbardelotto'
          target='_blank'
        >
          <Button
            variant='dark'
            className='gray'
          >
            <Github size={22} /> Github
          </Button>
        </Link>
      </li>

      <li>
        <Link
          href='https://linkedin.com/in/cristian-k-sbardelotto/'
          target='_blank'
        >
          <Button
            variant='dark'
            className='light-blue'
          >
            <Linkedin size={22} /> LinkedIn
          </Button>
        </Link>
      </li>

      <li>
        <Link
          href='mailto:cristian.k.sbardelotto@gmail.com'
          target='_blank'
        >
          <Button
            variant='dark'
            className='red'
          >
            <Mail size={22} /> Email
          </Button>
        </Link>
      </li>

      <li>
        <Link
          href='https://api.whatsapp.com/send?phone=5551996380154'
          target='_blank'
        >
          <Button
            variant='dark'
            className='green'
          >
            <Phone size={22} /> WhatsApp
          </Button>
        </Link>
      </li>

      <li>
        <a
          download
          href='/documents/resume.pdf'
        >
          <Button
            variant='dark'
            className='white'
          >
            <FileText size={22} /> Download Resume
          </Button>
        </a>
      </li>

      <li>
        <Link
          href='https://discord.com/users/669660510093967371'
          target='_blank'
        >
          <Button
            variant='dark'
            className='dark-blue'
          >
            <Image
              src={discordIcon}
              alt='Discord Icon'
              width={22}
              height={22}
            />{' '}
            Discord
          </Button>
        </Link>
      </li>
    </S.Container>
  );
}
