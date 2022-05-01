import React from 'react'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getUserName, editUserName } from '../redux/features/userSlice';
import { Navigate } from 'react-router-dom';
import AccountItem from '../components/AccountItem'


export default function Profile() {

  const auth = useAppSelector((state) => state.auth);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
  const [error, setError] = useState(false)

	useEffect(() => {
		dispatch(getUserName());
	}, [dispatch]);

  const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		if (firstName.length >= 1 && lastName.length >= 1) {
      setError(false)
			dispatch(editUserName({ firstName, lastName }));
      setFirstName('');
      setLastName('');
			setIsEditing(false);
		} else {
      setError(true)
    }
	};

  if (!auth.isSuccess) return <Navigate to="/login" />;

  const items = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance'
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance'
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance'
    },
  ];

  return (
    <main className="main bg-dark">
      	{isEditing ? (
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
            <div className="header-error">
              {error ? <span>Please fill out both boxes with at least 1 letter</span> : null}
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
			) : (
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
			)}
      <h2 className="sr-only">Accounts</h2>
      {items.map((item, index)=> (
        <AccountItem 
        key={index}
        title={item.title}
        amount={item.amount}
        description={item.description}
        />
      ))}
    </main>
  )
}