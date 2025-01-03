import BlogTopics from "./components/BlogPerview";
import Main from "./components/Hero";

export default function Home(){
    return(
        <div>
            <Main />
            <div id="blog-topic">
            <BlogTopics />
            </div>
          
        </div>
    )
}