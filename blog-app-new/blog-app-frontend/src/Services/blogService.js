const getBlogs =async ()=>{
    try{
        const res = await fetch( "https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs" );
        const data = await res.json();
        return data;
        if (res.status !=200){
            throw Error(res.statusText); 
        }
    }
    catch{

    }
   

}
const blogService = ()=>{
    getBlogs
}
export default blogService
