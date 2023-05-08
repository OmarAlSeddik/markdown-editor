import { type NextPage } from "next";
import { useCollection } from "react-firebase-hooks/firestore";
import Document from "~/components/Document";
import { collection, db } from "~/firebase";

const Home: NextPage = () => {
  const [value, loading, error] = useCollection(collection(db, "users"));

  console.log(value?.docs?.map((doc) => doc.data()));

  return <Document />;
};

export default Home;
