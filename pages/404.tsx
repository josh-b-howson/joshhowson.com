import Link from "next/link";
import { Layout } from "../components";

const Error404 = () => {
  return <Layout
    title="😢 Page not found">
    <div className="error404">
      <div
        className="😢">😢 404</div>
      <p>This is so sad. Here, this might help:</p>
      <Link href="/"><a>🏡 Go home</a></Link>
    </div>
    <style jsx>{`
      .error404 {display:flex; flex-flow:column nowrap; align-items:center}
      .😢 {font-size:6rem}
    `}</style>
  </Layout>
}

export default Error404;