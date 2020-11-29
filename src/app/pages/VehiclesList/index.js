import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles} from '@material-ui/core/styles';
import useSetState from 'app/hooks/useSetState';
import React, {useEffect, useState} from 'react';
import {fetchVehicles, deleteVehicle} from 'services/vehicles';

import {COLUMNS} from './constants';
import {formatVehicles} from './utils';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  }
});

function VehiclesList() {
  const [vehicles, setVehicles] = useSetState();
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setVehicles({
      fetching: true,
    });
    fetchVehicles()
      .then((response) => {
        setVehicles({
          data: response.data,
          loaded: true,
          fetching: false,
          error: null,
        });
      })
      .catch((error) => {
        setVehicles({
          data: null,
          loaded: true,
          fetching: false,
          error,
        });
      });
  }, []);

  const classes = useStyles();
  const rows = formatVehicles(vehicles.data);

  const handleDeleteVehicle = (id) => {
    setDeleting(true)
    deleteVehicle(id).then((response) => {
      setDeleting(false);
      
      if (response.ok) {
        const toDeleteIndex = vehicles?.findIndex(vehicle => vehicle._id === id);
        setVehicles({
          data: vehicles.splice(toDeleteIndex, 1)
        })
      }
    }).catch(() => {
      setDeleting(false);
    })
  }

  if (vehicles.fetching) {
    return <h1>Loading Vehicles...</h1>;
  }

  if (vehicles.loaded && vehicles.data) {
    return (
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
                      <Button variant="contained" color="primary">Editar</Button>
                      <Button variant="contained" color="secondary" onClick={handleDeleteVehicle(row.id)}>
                        {deleting ? 'Borrando' : 'Eliminar'}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }

  return <h1>Ooops! Something was wrong! :c</h1>;
}

export default VehiclesList;