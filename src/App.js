import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    // const [feedback, setFeedback] = useState(FeedbackData)

    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4()
    //     console.log(newFeedback)
    //     setFeedback([newFeedback, ...feedback])
    // }

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route path='/'
                            element={<>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                                {/* <FeedbackList hadleDelete=
                                {deleteFeedback} /> */}
                            </>
                            }
                        ></Route>
                        <Route path='/about' element={<AboutPage />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router >
        </FeedbackProvider>
    )
}

export default App




// export default function App() {
//     return <h1>Hello from the App component</h1>
// }

// export default function App(){
//     return React.createElement(
//         'div',
//         {className:'container'},
//         React.createElement('h1',{},'My App2')
//     )
// }

// export default function App() {
//     const title = 'Blog Post'
//     const body = 'This is my blog post Body-'
//     const comments = [
//         { id: 1, text: 'comment one' },
//         { id: 2, text: 'comment two' },
//         { id: 3, text: 'comment there' }]

//     const loading = false;
//     const showComments = true;
//     if (loading) return <h1>Loading...</h1>
//     return (
//         <div className="container">
//             <h1>{title.toUpperCase()}</h1>
//             <p>{body}</p>
//             {showComments && <div className="comments">
//                 <h3>Comment ({comments.length}) </h3>
//                 <ul>
//                     {comments.map((comment, i) =>
//                         <li key={i}>{comment.text}</li>
//                     )}
//                 </ul>
//             </div>}
//         </div>
//     )
// }
