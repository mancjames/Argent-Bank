import React from 'react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getUserName, editUserName } from '../redux/features/userSlice';
import { Navigate } from 'react-router-dom';


export default function Profile() {

  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	useEffect(() => {
		dispatch(getUserName());
	}, [dispatch]);

  const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (firstName && lastName !== '') {
			dispatch(editUserName({ firstName, lastName }));
			setIsEditing(false);
		}
	};

  if (!auth.isSuccess) return <Navigate to="/login" />;

  return (
    <main className="main bg-dark">
      	{!isEditing ? (
				<div className='header'>
					<h1>
						Welcome back
						<br />
						{user.firstName} {user.lastName}!
					</h1>
					<button
						className='edit-button'
						onClick={() => setIsEditing(true)}
					>
						Edit Name
					</button>
				</div>
			) : (
				<div className='header'>
					<h1>Welcome back</h1>
					<form onSubmit={handleSubmit}>
						<div className='header-input'>
							<input
								id='firstNameInput'
								type='text'
								placeholder={user.firstName}
								value={firstName}
								onChange={(e) => {setFirstName(e.currentTarget.value)}}
							/>
							<input
								id='lastNameInput'
								type='text'
								placeholder={user.lastName}
								value={lastName}
								onChange={(e) => {setLastName(e.currentTarget.value)}}
							/>
						</div>
						<div className='header-buttons'>
							<button className='edit-button' type='submit'>
								Save
							</button>
							<button
								className='edit-button'
								onClick={() => setIsEditing(false)}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}