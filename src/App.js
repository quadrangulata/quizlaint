import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import Layout from './components/Layout/Layout';
import NotFoundScreen from './screens/NotFoundScreen';
import DetailCourseScreen from './screens/DetailCourseScreen';
import LearnScreen from './screens/LearnScreen';
import ExamScreen from './screens/ExamScreen';
import LearnPmgScreen from './screens/LearnPmgScreen';
import ExamScreenPmg from './screens/ExamPmgScreen';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route path={'/'} element={<HomeScreen title={'Home | Quizlaint'}/>} />
        <Route path={'/create'} element={<CreateScreen title={'Create course | Quizlaint'}/>} />
        <Route path={'/course/:id'} element={<DetailCourseScreen title={'Detail course | Quizlaint'}/>} />
        <Route path={'/learn/:id'} element={<LearnScreen title={'Learn course | Quizlaint'}/>} />
        <Route path={'/learn/pmg/:id'} element={<LearnPmgScreen title={'Learn PMG course | Quizlaint'}/>} />
        <Route path={'/course/:id/exam'} element={<ExamScreen title={'Exam Pmg Screen | Quizlaint'}/>} />
        <Route path={'/course/pmg/:id/exam'} element={<ExamScreenPmg title={'Exam Pmg Screen | Quizlaint'}/>} />
      </Route>
      <Route path={'*'} element={<NotFoundScreen title={'Not found | Quizlaint'}/>} />
    </Routes>
  );
}

export default App;
