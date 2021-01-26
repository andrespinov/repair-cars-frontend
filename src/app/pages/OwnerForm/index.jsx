import useSetState from 'app/hooks/useSetState';
import useOwners from 'app/hooks/useOwners';
import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import {useHistory, useParams} from 'react-router-dom';
import {createOwner, updateOwner} from 'services/owners';

import ConfirmationDialog from '../../components/ConfirmationDialog'

import Form from './components/Form'

const OwnerForm = () => {
  const history = useHistory();
  const params = useParams();
  const [owners] = useOwners();
  const [updateStatus, setUpdateStatus] = useSetState();

  const isEditMode = !!params.id;
  const ownerToEdit = isEditMode
    ? owners.data?.find((owner) => owner._id === params.id)
    : null;

  const {user} = useSelector((state) => state.authReducer);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  
  const onRedirect = () => {
    history.push('/owners');
  }

  const onCreate = (owner) => {
    setUpdateStatus({ fetching: true });
    createOwner({...owner, author: user}).then((response) => {
      if (response.ok) {
        setUpdateStatus({
          fetching: false,
          data: response.data,
          error: null
        })
        onRedirect();
      }
    }).catch(error => {
      setUpdateStatus({ error: error, fetching: false, data: null })
    })
  };

  const onUpdate = (owner) => {
    setUpdateStatus({ fetching: true });
    updateOwner(owner).then((response) => {
      if (response.ok) {
        setUpdateStatus({
          fetching: false,
          data: response.data,
          error: null
        })
        onRedirect();
      }
    }).catch(error => {
      setUpdateStatus({ error: error, fetching: false, data: null })
    })
  };

  return (
    <div>
      <Form
        owner={ownerToEdit}
        saveLoading={updateStatus.fetching}
        onSubmit={isEditMode ? onUpdate : onCreate}
        error={updateStatus.error}
        handleCancel={onRedirect}
      />
    </div>
  );
};

export default OwnerForm
