import {
  CREATE_DATA,
  UPDATE_DATA,
  DELETE_DATA,
} from './types';

const createData = data => ({
  type: CREATE_DATA,
  payload: data,
});

const update = (id, data) => ({
  type: UPDATE_DATA,
  payload: { id, data },
});

const deleteData = id => ({
  type: DELETE_DATA,
  payload: id,
});

export {
  createData,
  getData,
  update,
  deleteData,
};
