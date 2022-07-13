import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data, isPending, Error} = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {Error && <div> {Error}</div>}
      {data  && <BlogList blogs={data }/>}
    </div>
  );
}
 
export default Home;