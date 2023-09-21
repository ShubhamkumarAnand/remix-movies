import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Movie Application" },
    { name: "description", content: "A web application which show the latest movie" },
  ];
};

export default function Index() {
  return (
    <div>

    </div>
  );
}
