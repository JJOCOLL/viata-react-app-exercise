import React from 'react';
import {Button} from './Button';
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Subscript Now!
                </p>
                <p className='footer-subscription-text'>
                    Go Go Go!
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder=''
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>1</Link>
                        <Link to='/'>2</Link>
                        <Link to='/'>3</Link>
                        <Link to='/'>4</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>1</Link>
                        <Link to='/'>2</Link>
                        <Link to='/'>3</Link>
                        <Link to='/'>4</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Careers</h2>
                        <Link to='/'>1</Link>
                        <Link to='/'>2</Link>
                        <Link to='/'>3</Link>
                        <Link to='/'>4</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Privacy Pollcy</h2>
                        <Link to='/'>1</Link>
                        <Link to='/'>2</Link>
                        <Link to='/'>3</Link>
                        <Link to='/'>4</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Viata <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Viata C 2021
                    </small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_black'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                    </div>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_black'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                    </div>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_black'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                    </div>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_black'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                    </div>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link linkedin'
                            to='/'
                            target='_black'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
