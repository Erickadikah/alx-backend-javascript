export default function quadrial(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());// appending the error to the queue
  } catch (error) {
    queue.push(String(error));
  } finally {
    queue.push('Guardrial was processed');
  }
  return queue;
}
