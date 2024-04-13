import Layout from "@/Components/layout";
import Home from "@/Components/PageFeeds/Home";
import "../app/globals.css";
import Cookies from "@/Components/Cookies";

export default function HomePage() {
  return (
    <Layout>
      <Home />
      <div className="fixed bottom-[30px] right-[30px]">
        <Cookies />
      </div>
    </Layout>
  );
}
