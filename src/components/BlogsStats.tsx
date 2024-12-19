import { Card } from "antd";

const BlogsStats = () => {
  return (
    <Card className="flex flex-col text-2xl ml-28 ">
      <h1>Blog Page Info</h1>
      <div>
        <p>Blogs Page has x Blogs</p>
        <p>Blogs Page has x Users</p>
      </div>
    </Card>
  );
};

export default BlogsStats;
