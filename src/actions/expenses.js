import { v1 as uuid } from 'uuid';
import db, { push, ref, get, child } from '../firebase/firebase';

// Add_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    push(ref(db, 'expenses'), expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }))
      });
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return get(ref(db, 'expenses'), 'value')
      .then((snapshot) => {
        console.log(".then ~ snapshot", snapshot)
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
