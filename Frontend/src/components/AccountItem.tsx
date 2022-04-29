import React from 'react'

interface AccountItemProps {
    title: string;
    amount: string;
    description: string;
}

const AccountItem: React.FC<AccountItemProps> = ({title, amount, description}) => {
  return (
    <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
  )
}

export default AccountItem