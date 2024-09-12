import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from "../Button";

export const FavModal = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* <Button onClick={() => setShowModal(true)}>
                Custom Width Modal
            </Button> */}

            <Modal
                showModal={showModal}
                onHide={() => setShowModal(false)}
                dialogClassName="modal-50w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Success! 
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        This drink has been added to your favorites! 
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}



