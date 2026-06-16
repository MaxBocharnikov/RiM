import './Footer.css';

const AUTHOR = 'Max Bocharnikov';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <h3 className='author'>Made with love by {AUTHOR}</h3>
      </div>
    </footer>
  );
};
