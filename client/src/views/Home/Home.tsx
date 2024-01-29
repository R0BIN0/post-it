import { IColors } from "../../types/IColors";
import NoTask from "../../components/NoTask/NoTask";
import TaskNav from "../../components/TaskNav/TaskNav";
import TasksContainer from "../../components/TasksContainer/TasksContainer";
import Banner from "../../components/Banner/Banner";

const tasks = [
  {
    title: "Title",
    description: "A description",
    color: IColors.BLACK,
  },
];

const Home = () => {
  return (
    <>
      {tasks.length ? (
        <>
          <TaskNav />
          <Banner />
          <TasksContainer />
        </>
      ) : (
        <NoTask />
      )}
    </>
  );
};

export default Home;
