// Task: 1. Block scoped variables
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;// task is not defined
    const task2 = false;// task2 is not defined
  }

  return [task, task2];
}