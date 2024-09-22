const Thing= ( {key,title, Description , count}) => {
    return (
        <div className='thing'>

        <div >
            <h1 >{title}</h1>
            <p>{Description}</p>
          </div>

        </div>
    );
}

export default Thing;
