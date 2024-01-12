import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div>
      <Link href='/'>
        <Image
          src='https://bytegrad.com/course-assets/react-nextjs/evento.png'
          alt='EVENTO logo'
          width={53}
          height={12}
        />
      </Link>
    </div>
  );
}
