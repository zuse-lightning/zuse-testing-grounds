import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";
import PropTypes from "prop-types";

const LogoutModal = (props) => {
    const { logout } = props.auth;
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        logout();
        setOpen(false);
    };

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<span id="logout-btn">Log Out</span>}
        >
            <Modal.Header>Logout</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Are you sure you want to logout?</Header>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    content="Log Out"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={handleLogout}
                    negative
                />
            </Modal.Actions>
        </Modal>
    );
};

LogoutModal.propTypes = {
    auth: PropTypes.shape({
        logout: PropTypes.func.isRequired,
    }).isRequired,
};

export default LogoutModal;