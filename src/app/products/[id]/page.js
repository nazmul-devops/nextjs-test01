
const DynamicProductsPage = ({ params, searchParams }) => {
    // console.log({ params });
    return (
        <div>
            <h1>Dynamic Products page: {params.id}</h1>
            <h1>User searched by category: {searchParams.category}</h1>
            <h1>Price: {searchParams.price} BDT</h1>
        </div>
    );
};

export default DynamicProductsPage;