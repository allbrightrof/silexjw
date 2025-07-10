import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareInstagram,
  faSquareFacebook,
  faSquareXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';






const Footer = () => {
  return (
    <div className='mt-5 bg-[#fbf7eb] flex flex-col md:flex-row justify-around W-full p-10 md:p-1'>
      <div className=" md:pt-20 md:pb-20 md:pl-2 md:pr-10 ">
        <div>
          <img src="./Group.png"></img>
          <article className='max-w-sm'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sit, incidunt porro. Modi nesciunt tenetur quo dicta id
            accusantium dignissimos harum.</article>
          <div className="flex gap-4">
            <FontAwesomeIcon icon={faSquareInstagram} size="2x" className='text-[#e5e5e5]' />
            <FontAwesomeIcon icon={faSquareFacebook} size="2x" className='text-[#e5e5e5]' />
            <FontAwesomeIcon icon={faLinkedin} size="2x" className='text-[#e5e5e5]' />  {/* Not square */}
            <FontAwesomeIcon icon={faSquareXTwitter} size="2x" className='text-[#e5e5e5]' />
          </div>

        </div>
        <div>
          <h3>Subscibe To Our Newsletter</h3>
          <div className="md:flex relative w-[300px] h-[45px]">
            <input
              type="text"
              placeholder="Email"
              className="w-full flex  h-full pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm bg-[#f5f5f5]"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
            </span>
          </div>
        </div>
      </div>
      <div className='grid grid-flow-col grid-rows-3 gap-4 pt-5 md:grid-flow-col md:grid-rows-2 md:pt-15'>
          <ul>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Home
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Rings
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Services Now
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Join
            </li>
          </ul>
          <ul>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Airport Towing
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Cities
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Vip Exchanges
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Premium Tow
            </li>
          </ul>
          <ul>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Home
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> About Us
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Services
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Contact Us
            </li>
          </ul>
          <ul>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" />Rings
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Sunglases
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Bracelets
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Pendants
            </li>
          </ul>
          <ul>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Pre Order
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Legal
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> peal
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Wrist Watches
            </li>
          </ul>
          <ul>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" />Legal
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Customer care
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> 24/7 support
            </li>
            <li><FontAwesomeIcon icon={faCaretRight} size="lg" /> Warrant protection
            </li>
          </ul>
        </div>
      </div>

  )
}

export default Footer;