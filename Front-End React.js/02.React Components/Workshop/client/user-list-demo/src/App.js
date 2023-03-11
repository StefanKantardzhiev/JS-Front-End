import { useEffect, useState } from 'react';

import * as userService from './services/userService';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Search } from "./components/Search";
import './App.css';
import { UserList } from "./components/UserList";
import { UserCreate } from './components/UserCreate';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(err => {
                console.log('Error' + err);
            });
    }, []);


    const onUserCreateSubmit = async (e) => {
        // 1 stop  form submit
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // take form data from DOM
        const data = Object.fromEntries(formData)

        //send AJAX request to server
        const createdUser = await userService.create(data)
        setUsers(state => [...state, createdUser])
        //if success add new user

    }

    const onUserDelete = async (userId) => {
        await userService.remove(userId)
    }

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList users={users} onUserCreateSubmit={onUserCreateSubmit}
                        onUserDelete={onUserDelete} />


                </section>
            </main>

            <Footer />
        </>
    );
}

export default App;
