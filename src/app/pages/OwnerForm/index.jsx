import useSetState from 'app/hooks/useSetState';
import useOwners from 'app/hooks/useOwners';
import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import {useHistory, useParams} from 'react-router-dom';
import {createOwner, updateOwner, deleteOwner} from 'services/owners';

import ConfirmationDialog from '../../components/ConfirmationDialog'

import Form from './components/Form'

const OwnerForm = () => {
  const history = useHistory();
  const params = useParams();
  const [owners] = useOwners();
  const [updateStatus, setUpdateStatus] = useSetState();
  const [deleteStatus, setDeleteStatus] = useSetState();

  const isEditMode = !!params.id;
  const ownerToEdit = isEditMode
    ? owners.data?.find((owner) => owner._id === params.id)
    : null;

  const {user} = useSelector((state) => state.authReducer);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const onCreate = (owner) => {
    setUpdateStatus({ fetching: true });
    createOwner({...owner, author: user}).then((response) => {
      if (response.ok) {
        setUpdateStatus({
          fetching: false,
          data: response.data,
          error: null
        })
        history.push('/owners');
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
        history.push('/owners');
      }
    }).catch(error => {
      setUpdateStatus({ error: error, fetching: false, data: null })
    })
  };

  const onDelete = () => {
    setDeleteStatus({ fetching: true });
    deleteOwner(ownerToEdit._id).then((response) => {
      if (response.ok) {
        setDeleteStatus({
          fetching: false,
          data: response.data,
          error: null
        })
      }
      setOpenConfirmDialog(false);
      history.goBack();
    }).catch(error => {
      setDeleteStatus({ error: error, fetching: false, data: null })
    })
  };

  return (
    <div>
      <Form
        owner={ownerToEdit}
        saveLoading={updateStatus.fetching}
        deleteLoading={deleteStatus.fetching}
        onSubmit={isEditMode ? onUpdate : onCreate}
        onDelete={() => setOpenConfirmDialog(true)}
        error={updateStatus.error}
      />
      {Boolean(ownerToEdit) && (
        <ConfirmationDialog
          open={openConfirmDialog}
          title="Eliminar Propietario"
          description={`Está seguro que desea eliminar el vehículo de placa ${ownerToEdit?.plate}?`}
          handleClose={onDelete}
        />
      )}
    </div>
  );
};

export default OwnerForm
