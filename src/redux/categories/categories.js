// Setting Actions and Reducer for Categories
const CHECK_STATUS = 'CHECKSTATUS';

const initialbookStatus = [];

// Setting Reducer for Status
const bookstatusReducer = (state = initialbookStatus, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Status Updating, please come back later';

    default:
      return state;
  }
};

// Setting Action Creator
export const getBookStatus = () => (
  {
    type: CHECK_STATUS,
  }
);

export default bookstatusReducer;
