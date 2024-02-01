import { useEffect, useState } from "react";
import { deleteReview, reviewList } from "../service/review.service";
import CreateReview from "./CreateReview";
import { toast } from "react-toastify";

function ReviewList() {
    const [list, setList] = useState([])
    const [count, setCount] = useState(0)
    const [searchText, setSearchText] = useState(null)
    const [query, setQuery] = useState({
        page:1,
        searchText:"",
        sorting:-1,
        sortingBy:""
    })

    const [changeEvent, setChangeEvent] = useState("LIST")
    useEffect(() => {
        (async () => {
            const response = await reviewList('api/review')
            if(!response.data) return toast.error("list not found")

            setList(response.data.rows)
            setCount(response.data, count)
        })()
    }, [changeEvent,query])

    const deleteReviewHandler = async (id) => {
        await deleteReview(`api/review/${id}`)
        setChangeEvent('DELETE')
    }
    const editReviewHandler = async (id) => {
        const editData = list.find(each => each.id == id)
        await deleteReview(`api/review/${id}`)
        setChangeEvent('DELETE')
    }
    const searchTextHanler = (event) => {
        const { name, value } = event.target;
        setQuery((prevData) => ({ ...prevData, [name]: value }));
    }
    return (
        <div className="App">
            <CreateReview></CreateReview>
            <input placeholder="search here" name="searchText" value={searchText} onChange={searchTextHanler} ></input>
            <table>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Date & time</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {list.map(each => {
                    return (
                        <tr key={each.id}>
                            <td>{each.id}</td>
                            <td>{each.title}</td>
                            <td>{each.content}</td>
                            <td>{each.createdAt}</td>
                            <td><button>Edit</button></td>
                            <td><button onClick={() => deleteReviewHandler(each.id)}>Delete</button></td>
                        </tr>)
                })}
            </table>
        </div>
    );
}

export default ReviewList;
