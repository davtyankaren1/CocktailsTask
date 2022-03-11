import React from 'react';
import Modal from "react-modal";

interface Imodal {
    children: any,
    onClose: () => void,
    isOpen: boolean
}

const Modalo: React.FC<Imodal> = ({children, onClose, isOpen}) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false} style={{
            overlay: {
                position: 'fixed',
                top: 160,
                left: 100,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.01)',
                width: '500px',
                height: '740px'
            },
            content: {
                position: 'absolute',
                left: '40px',
                right: '40px',
                bottom: '40px',
                border: '1px solid #ccc',
                background: 'rgba(255, 255, 255, 0.45)',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
            }
        }}>
            <button onClick={onClose} className='closer'>X</button>
            {children}
        </Modal>
    );
};

export default Modalo;