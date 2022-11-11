import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import withRouter from './withRouter';
import { useNavigate } from 'react-router-dom';

const EditExpensePage = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          navigate('/');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(startRemoveExpense({ id: props.expense.id }));
          navigate('/');
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, { params: { id } = {} }) => ({
  expense: state.expenses.find((expense) => expense.id === id),
});

export default compose(
  withRouter,
  connect(mapStateToProps)
)(EditExpensePage);
