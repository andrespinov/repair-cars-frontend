export const formatVehicles = (data) => {
  if (data) {
    return data.map(({_id: id, model, color, plate, brand, type}) => ({
      id,
      brand,
      model,
      plate,
      color,
      type,
    }));
  }

  return data;
};
