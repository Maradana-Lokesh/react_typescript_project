import { useGetUsersQuery } from "../features/UserSlice";


const Read = () => {
  const { data, error, isLoading, isFetching, isSuccess } =useGetUsersQuery(`id`);
    
    console.log("isLoading",isLoading);
    console.log("isFetching",isFetching);
    console.log("isSuccess",isSuccess);
    console.log("error",error);
    console.log(data);
    
    

  return (
   <div>
    <h2>Names</h2>
    <h4>{data?.name}</h4>
    {/* {data?.map((ele)=><h3>{ele?.name}</h3>)} */}
    {/* {isLoading && <span>Loading...</span>}
    {isFetching && <span>Fetching data...</span>}
    {error && <span>Something went wrong</span>}
    <div>
        {isSuccess && data?.map((ele)=>(
            <div key={ele?.id}>
                <h4>{ele?.name}</h4>
            </div>
        ))}
    </div> */}
   </div>
  );
};

export default Read;