import React, { useState } from "react";
import { Button, Header, Modal, Icon } from "semantic-ui-react";

const DeleteReviewModal = (props) => {

    const { handleDelete } = props;
    const [open, setOpen] = useState(false);

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <Button id="review-delete-btn" icon>
                    <Icon name="x" />
                </Button>
            }
        >
            <Modal.Header>Delete Review</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Are you sure you want to delete this review?</Header>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button
                    content="Delete"
                    labelPosition='right'
                    icon='x'
                    onClick={handleDelete}
                    negative
                />
            </Modal.Actions>
        </Modal>
    );
};

export default DeleteReviewModal;