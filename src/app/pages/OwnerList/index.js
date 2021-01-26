import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles} from '@material-ui/core/styles';
import { useRequest, useLazyRequest } from 'app/hooks/useRequest';
import {PATHS} from 'navigation/constants';
import React from 'react';
import {useHistory} from 'react-router-dom';
import OwnerService from 'services/owners';
// import {deleteVehicle} from 'services/vehicles';
import styled from 'styled-components';

import {COLUMNS} from './constants';

const useStyles = makeStyles({
  root: {
    width: '1000px',
  },
  container: {
    maxHeight: 440,
  },
});

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function OwnerList() {
  const history = useHistory();
  const classes = useStyles();
  
  const [{ data, isFetching, isSuccess }, , setState] = useRequest({ service: OwnerService.fetchOwners })
  
  const [, removeOwner] = useLazyRequest({
    service: OwnerService.removeOwner,
    onSuccess: (_response, ownerId) => {
      const nextOwners = data.filter(owner => owner.id !== ownerId)
      setState(nextOwners)
      setState()
    }
  })

  const handleEditVehicle = (id) => () => {
    history.push(`${PATHS.OWNER_FORM}/${id}`);
  };

  const handleDeleteOwer = (id) => () => {
    removeOwner(id)
  }

  if (isFetching) {
    return (
      <Container>
        <h1>Loading Owners...</h1>
      </Container>
    );
  }

  if (isSuccess) {
    return (
      <Container>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(PATHS.OWNER_FORM)}
        >
          Crear
        </Button>
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {COLUMNS.map(({id, label, ...columnProps}) => (
                    <TableCell key={id} {...columnProps}>
                      {label}
                    </TableCell>
                  ))}
                  <TableCell key="actions">Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => {
                  return (
                    <TableRow hover key={row.id}>
                      {COLUMNS.map((column) => {
                        const value = row[column.id];
                        return <TableCell key={column.id}>{value}</TableCell>;
                      })}
                      <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleEditVehicle(row.id)}
                        >
                          Editar
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={handleDeleteOwer(row.id)}
                        >
                          Eliminar
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    );
  }

  return <h1>Ooops! Something was wrong! :c</h1>;
}

export default OwnerList;
