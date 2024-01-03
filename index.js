body {
    margin: 0;
    padding: 0 75px;
    background-color:darkslategray;

}

p {
    margin: 0;
    padding: 0;
}

.container {
    display: grid;
    height: 99vh;
    width: 100%;
    grid-template-rows: 1.5fr 0.5fr 2.5fr 0.5fr;
    grid-template-columns: 1fr 1fr;
}

#title {
    grid-column: span 2;
    font-size: 8.5rem;
    font-family: 'Lobster', sans-serif;
    color:darkseagreen;
    padding-bottom: 0.4em;
}

.player1 > p, .player2 > p {
    font-size: 3rem;
    font-weight: 600;
    font-family: 'Signika', sans-serif;
    color:darkkhaki;
    padding-bottom: 25px;
}

.player1{
    padding-left: 5em;
}

.player2{
    padding-right: 5em;
}

#footer {
    grid-column: span 2;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1.3rem;
    text-align: center;
    color: aliceblue;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;   
}

#by{
    font-size: 0.9rem;
    color: lemonchiffon;
}

@media (min-width:319px) and (max-width: 769px) {
    body{
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .container {
        width: fit-content;
        grid-template-rows: 0.5fr 0.5fr 1fr 0.3fr;
        grid-template-columns: 1fr 1fr;
    }

    #title {
        grid-column: span 2;
        text-align: center;
        font-size: 3.3rem;
        padding-bottom: 0.4em;
    }

    .player1 > p, .player2 > p {
        font-size: 2rem;
        padding-bottom: 0;
    }

    .player1,.player2{
        padding: 0;
    }

    .player1 > img, .player2 > img {
        width: 75%;
    }
}
