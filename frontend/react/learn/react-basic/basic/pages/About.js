import { useSearchParams, useParams } from 'react-router-dom'
function About() {
    let [params] = useSearchParams()
    let params_ = useParams()
    let id = params.get('id')
    let _id = params_.id
    return (
        <>
            <div>This is About</div>
            <p> 我是路由传递过来的{id}</p>
            <p> 我是路由传递过来的{_id}</p>
        </>
    )
}
export default About
