import Button from "./Button";

const BlogTile=({date,title,intro}) =>{
    return (
        <div className="w-full md:w-[45%]">
        <p className="text-gray-600">{date}</p>
        <h3 className="text-black text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-3">{intro}</p>
        
        <Button 
        color="blue"
        text="Read fullstory"
        />

</div> 
    );
};

export default BlogTile;