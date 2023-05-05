import TaskCard, { State } from './TaskCard.tsx';

const tasks = [
	["Task 1", State.InProgress, "Vestibulum etiam duis, bibendum ullamcorper, tortor nisi mauris ultrices tincidunt. Posuere dictum sem, luctus nunc, eu donec et rhoncus sociosqu tortor. Potenti fringilla sit, aliquet pulvinar, molestie nulla pharetra cursus enim etiam. Class hendrerit scelerisque consequat, iaculis ultrices ante viverra sagittis. Neque porttitor nulla, elit facilisis, ad sollicitudin senectus imperdiet lobortis torquent. Vel inceptos eu nulla, risus quam ipsum, leo class viverra vivamus ut netus. Lectus primis felis sodales, lacus aenean faucibus inceptos vestibulum. Phasellus volutpat maecenas dolor, tristique nunc rutrum, lorem odio mattis justo congue curabitur. Torquent imperdiet aenean ante, vestibulum mi eu, ligula id maecenas nam libero fringilla urna. Pretium curabitur posuere, malesuada porta, aptent porttitor laoreet volutpat gravida torquent commodo."],
	["Task 2", State.Completed, "Vestibulum etiam duis, bibendum ullamcorper, tortor nisi mauris ultrices tincidunt. Posuere dictum sem, luctus nunc, eu donec et rhoncus sociosqu tortor. Potenti fringilla sit, aliquet pulvinar, molestie nulla pharetra cursus enim etiam. Class hendrerit scelerisque consequat, iaculis ultrices ante viverra sagittis. Neque porttitor nulla, elit facilisis, ad sollicitudin senectus imperdiet lobortis torquent. Vel inceptos eu nulla, risus quam ipsum, leo class viverra vivamus ut netus. Lectus primis felis sodales, lacus aenean faucibus inceptos vestibulum. Phasellus volutpat maecenas dolor, tristique nunc rutrum, lorem odio mattis justo congue curabitur. Torquent imperdiet aenean ante, vestibulum mi eu, ligula id maecenas nam libero fringilla urna. Pretium curabitur posuere, malesuada porta, aptent porttitor laoreet volutpat gravida torquent commodo."],
	["Task 3", State.Open, "Vestibulum etiam duis, bibendum ullamcorper, tortor nisi mauris ultrices tincidunt. Posuere dictum sem, luctus nunc, eu donec et rhoncus sociosqu tortor. Potenti fringilla sit, aliquet pulvinar, molestie nulla pharetra cursus enim etiam. Class hendrerit scelerisque consequat, iaculis ultrices ante viverra sagittis. Neque porttitor nulla, elit facilisis, ad sollicitudin senectus imperdiet lobortis torquent. Vel inceptos eu nulla, risus quam ipsum, leo class viverra vivamus ut netus. Lectus primis felis sodales, lacus aenean faucibus inceptos vestibulum. Phasellus volutpat maecenas dolor, tristique nunc rutrum, lorem odio mattis justo congue curabitur. Torquent imperdiet aenean ante, vestibulum mi eu, ligula id maecenas nam libero fringilla urna. Pretium curabitur posuere, malesuada porta, aptent porttitor laoreet volutpat gravida torquent commodo."],
	["Task 4", State.Canceled, "Vestibulum etiam duis, bibendum ullamcorper, tortor nisi mauris ultrices tincidunt. Posuere dictum sem, luctus nunc, eu donec et rhoncus sociosqu tortor. Potenti fringilla sit, aliquet pulvinar, molestie nulla pharetra cursus enim etiam. Class hendrerit scelerisque consequat, iaculis ultrices ante viverra sagittis. Neque porttitor nulla, elit facilisis, ad sollicitudin senectus imperdiet lobortis torquent. Vel inceptos eu nulla, risus quam ipsum, leo class viverra vivamus ut netus. Lectus primis felis sodales, lacus aenean faucibus inceptos vestibulum. Phasellus volutpat maecenas dolor, tristique nunc rutrum, lorem odio mattis justo congue curabitur. Torquent imperdiet aenean ante, vestibulum mi eu, ligula id maecenas nam libero fringilla urna. Pretium curabitur posuere, malesuada porta, aptent porttitor laoreet volutpat gravida torquent commodo."],
]; //placeholder data until backend is implemented


function TaskList() {
  return (
    <ul className="w-1/2">
    	{tasks.map((task) => ( <li><TaskCard title={task[0]} description={task[2]} state={task[1]} /></li> ))}
    </ul>
  );
}

export default TaskList;