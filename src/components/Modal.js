import React from 'react'
import { connect } from 'react-redux';
import { setModal } from '../redux/actions';
const Modal = (props) => {
    const {
        setModal,
        modalImage
    } = props;
    return (
        <div onClick={() => setModal('')} id="myModal" className="modal" style={{ display: modalImage ? 'block' : 'none' }}>
            <span onClick={() => setModal('')} className="close">&times;</span>
            <img src={modalImage} alt={'modal'} className="modal-content" id="img01" />
        </div>
    )
}

const mapStateToProps = ({ modalImage }) => ({
    modalImage
});

export default connect(
    mapStateToProps,
    {
        setModal
    }
)(Modal);
