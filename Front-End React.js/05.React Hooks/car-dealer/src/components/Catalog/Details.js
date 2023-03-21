import { useEffect, useState } from "react";
import { useParams } from "react-router"

import * as gameService from '../../services/gameService'
export const Details = () => {
    const { gameId } = useParams();
    const [username, setUsername] = useState('')
    const [game, setGame] = useState({})
    const [comment, setComment] = useState('')

    useEffect(() => {
        gameService.getOne(gameId)
            .then(result => {
                setGame(result)
            })
    }, [gameId])


    const onCommentSubmit = async (e) => {
        e.preventDefault();
        const result = await gameService.addComment(gameId, {
            username,
            comment
        })
        setComment('')
        setUsername('')
        setGame(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
    }


    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt='super-mario-pic' />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        {game.comments && Object.values(game.comments).map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.username} : {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {/* {(game.comments === null)(
                        <p className="no-comment">No comments.</p>
                    )} */}
                    {/* <!-- Display paragraph: If there are no games in the database --> */}

                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="/" className="button">Edit</a>
                    <a href="/" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onCommentSubmit}>
                    <input type='text' name='username' placeholder="Peter" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <textarea name="comment" placeholder="Comment......" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}