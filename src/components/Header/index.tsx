import styles from './styles.module.scss';

interface ILink {
  href: string;
  text: string;
}

interface HeadProps {
  links: ILink[];
}

export const Header: React.FC<HeadProps> = ({ links }) => {
  return (
    <header className={styles.headStyled}>
      {links.map(link => {
        return (
          <a href={link.href} key={link.text}>
            {link.text}
          </a>
        );
      })}
    </header>
  );
};
