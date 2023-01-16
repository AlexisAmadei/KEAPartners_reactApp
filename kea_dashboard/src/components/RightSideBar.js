import SimpleAccordion from './Accordion'
import './RightSideBar.css'
import PlusIcon from '../assets/Plus.svg';
import miniature from '../assets/miniature.jpg';
import Eye from '../assets/red-eye.svg';
import { margin } from '@mui/system';
import Dropdown from './Dropdown';

export default function RightSideBar() {
    return (
        <div className="right-sidebar">
            <div className='upper-sidebar'>
                <div className="right-sidebar-header">
                    <h3>Historique des vues</h3>
                </div>
                <div className="right-sidebar-body">
                    <SimpleAccordion className='accordion'
                        title="2020"
                        src={miniature}
                    />
                    <SimpleAccordion
                        title="2021"
                        src={miniature}
                    />
                    <SimpleAccordion
                        title="2022"
                        src={miniature}
                    />
                </div>
            </div>
            <div className='right-sidebar-footer'>
                <button className='right-sidebar-footer__button1'>
                    <img src={Eye} alt="" /><p style={{ fontSize:"12px",margin:"0"}}>VUE COMPARATIVE</p>
                </button>
                <button className='right-sidebar-footer__button2'>
                    <img src={PlusIcon} alt=""></img>
                </button>
                <Dropdown />

            </div>
        </div>
    )
}