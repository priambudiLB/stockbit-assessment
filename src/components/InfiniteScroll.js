import React, { useEffect, useState, useRef, Fragment  } from 'react';

const InfiniteScroll = (props) => {
    const {
        children,
        loadMore
    } = props;
    const [page, setPage] = useState(1);
    const [firstLoad, setFirstLoad] = useState(true);
    const loader = useRef(null);

    useEffect(() => {
         var options = {
            root: null,
            rootMargin: "10px",
            threshold: 1.0
         };
         const observer = new IntersectionObserver(handleObserver, options);
         if (loader.current) observer.observe(loader.current)
    }, []);

    useEffect(() => {
        if (firstLoad) setFirstLoad(false)
        else loadMore(page)
    }, [firstLoad, loadMore, page])

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) setPage((page) => page + 1)
    }

    return <Fragment>
            {children}
            <div className="loading" ref={loader}>
                <h2>Load More</h2>
           </div>
    </Fragment>
}

export default InfiniteScroll;