import SimpleAccordion from './Accordion'
import ButtonHeader from './ButtonHeader'
import './RightSideBar.css'
import PlusIcon from '../assets/Plus.svg';

export default function RightSideBar() {
    return (
        <div className="right-sidebar">
            <div className='upper-sidebar'>
                <div className="right-sidebar-header">
                    <h3>Historique des vues</h3>
                </div>
                <div className="right-sidebar-body">
                    <SimpleAccordion />
                </div>
            </div>
            <div className='right-sidebar-footer'>
                <button className='right-sidebar-footer__button'>
                    <img src={PlusIcon}></img>
                </button>
            </div>
        </div>
    )
}