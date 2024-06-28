function InnerSubCategory({innercategory}) {
    console.log(innercategory);
    let i=1;
    return (
        <ul className="innersubnav">
            {innercategory.map((c) => {
                return <a href="">
                    <div id="sublist"><li>{c}</li></div>
                </a>
            })}
        </ul>
    )
}
export default InnerSubCategory

