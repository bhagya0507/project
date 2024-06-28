import { Fragment } from "react"
function SubnavBar({ category }) {
    return (
        <ul className="subnav" >
            {category.map((c) => {
                return <a href=""><li>{c}</li></a>
            })}
        </ul>
    )
}
export default SubnavBar    