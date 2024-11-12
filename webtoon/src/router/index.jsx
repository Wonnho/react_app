import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../Rootlayout";
import Webtoon from "../pages/Webtoon";
import Novel from "../pages/Novel";
import WebtoonDetail from "../pages/WebtoonDetail";
import NovelDetail from "../pages/NovelDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/webtoon",
        element: <Webtoon />,
      },
      {
        path: "/webtoon/:day",
        element: <WebtoonDetail />,
      },
      {
        path: "/novel",
        element: <Novel />,
      },
      {
        path: "/novel/:genre",
        element: <NovelDetail />,
      },
    ],
  },
]);

export default router;
