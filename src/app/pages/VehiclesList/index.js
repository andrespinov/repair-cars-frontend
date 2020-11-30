import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles} from '@material-ui/core/styles';
import useVehicles from 'app/hooks/useVehicles';
import {PATHS} from 'navigation/constants';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { deleteVehicle} from 'services/vehicles';
import styled from 'styled-components'

import {COLUMNS} from './constants';
import {formatVehicles} from './utils';

const useStyles = makeStyles({
  root: {
    width: '1000px',
  },
  container: {
    maxHeight: 440,
  }
});

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`

function VehiclesList() {
  const history = useHistory();
  const [vehicles, setVehicles]= useVehicles();

  const classes = useStyles();
  const rows = formatVehicles(vehicles.data);

  const handleDeleteVehicle = (id) => () => {
    deleteVehicle(id)
      .then((response) => {
        if (response.ok) {
          const vehiclesCopy = [...vehicles.data];
          const toDeleteIndex = vehicles.data?.findIndex(
            (vehicle) => vehicle._id === id,
          );
          
          vehiclesCopy.splice(toDeleteIndex, 1)

          setVehicles({
            data: vehiclesCopy,
          });
        }
      })
  };

  const handleEditVehicle = (id) => () => {
    history.push(`${PATHS.VEHICLE_FORM}/${id}`)
  }

  if (vehicles.fetching) {
    return (
      <Container>
        <h1>Loading Vehicles...</h1>
      </Container>
    );
  }

  if (vehicles.loaded && vehicles.data) {
    return (
      <Container>
        <Button variant="contained" color="primary" onClick={() => history.replace('/formulario-vehiculo')}>
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
                  <TableCell key="actions">
                    Acciones
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  return (
                    <TableRow hover key={row.id}>
                      {COLUMNS.map((column) => {
                        const value = row[column.id];
                        return <TableCell key={column.id}>{value}</TableCell>;
                      })}
                      <TableCell>
                        <Button variant="contained" color="primary" onClick={handleEditVehicle(row.id)}>
                          Editar
                        </Button>
                        <Button variant="contained" color="secondary" onClick={handleDeleteVehicle(row.id)}>
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

export default VehiclesList;