import Header from "./components/Header"
import Main from "./components/Main"
import data from "./data"
export default function App() {
    const entryElement = data.map((entry) => {
        return (
            <Main 
                key={entry.id}
                {...entry}
            />
        )
    })

    return (
        <>
            <Header />
            <main className="container">
                {entryElement}
            </main>
        </>
    )
}