import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className="money plus">+₹ 0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money-mius">-₹ 0.00</p>
            </div>
        </div>
    )
}
